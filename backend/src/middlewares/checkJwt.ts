import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import jwtConfig from "../config/jwtConfig";

export const checkJwt = (request: Request, response: Response, next: NextFunction) => {
  //Get the jwt token from the head
  const token = <string>request.headers["auth"];
  let jwtPayload;

  //Try to validate the token and get data
  try {
    jwtPayload = <any>jwt.verify(token, jwtConfig.jwtSecret);
    response.locals.jwtPayload = jwtPayload;
  } catch (error) {
    //If token is not valid, respond with 401 (unauthorized)
    response.status(401).send();
    return;
  }

  //The token is valid for 1 hour
  //We want to send a new token on every request
  const { userId, username } = jwtPayload;
  const newToken = jwt.sign({ userId, username }, jwtConfig.jwtSecret, {
    expiresIn: "1h"
  });
  response.setHeader("token", newToken);

  //Call the next middleware or controller
  next();
};
