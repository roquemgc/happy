import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import jwtConfig from '../config/jwtConfig'
import * as Yup from 'yup'

import User from '../models/User'

export default {

  async login(request: Request, response: Response) {
    //Check if username and password are set
    let { email, password } = request.body;
    if (!(email && password)) {
      response.status(400).send();
    }

    //Get user from database
    const userRepository = getRepository(User);
    let user = new User();
    try {
      user = await userRepository.findOneOrFail({ where: { email } });
    } catch (error) {
      response.status(401).send('Email does not exist');
    }

    //Check if encrypted password match
    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
      response.status(401).send('Incorrect password');
      return;
    }

    //Sing JWT, valid for 1 hour
    const token = jwt.sign(
      { userId: user.id, username: user.email },
      jwtConfig.jwtSecret,
      { expiresIn: "1h" }
    );

    //Send the jwt in the response
    response.send(token);
  },

  async changePassword(req: Request, response: Response) {
    //Get ID from JWT
    const id = response.locals.jwtPayload.userId;

    //Get parameters from the body
    const { oldPassword, newPassword } = req.body;
    if (!(oldPassword && newPassword)) {
      response.status(400).send();
    }

    //Get user from the database
    const userRepository = getRepository(User);
    let user = new User();
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (id) {
      response.status(401).send();
    }

    //Check if old password matchs
    if (!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
      response.status(401).send();
      return;
    }

    user.password = newPassword;

    //Hash the new password and save
    user.hashPassword();
    userRepository.save(user);

    response.status(204).send();
  }
}