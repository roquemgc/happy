import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import userView from '../views/users_view'
import * as Yup from 'yup'

import User from '../models/User'

export default {

    async show(request: Request, response: Response) {
        const { id } = request.params;
        
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOneOrFail(id);

        return response.json(userView.render(user))
    },

    async create(request: Request, response: Response) {
        const {
          email,
          password,
        } = request.body;


        const data = {
          email,
          password,
        };

        const schema = Yup.object().shape({
          email: Yup.string().required('Email obrigatório'),
          password: Yup.number().required('Senha obrigatória'),
        })

        await schema.validate(data, {
            abortEarly: false
        });

        const usersRepository = getRepository(User);
        const user = usersRepository.create(data);

        await usersRepository.save(user);
        
        return response.status(201).json(user).json(userView.render(user));
    },

    async update(request: Request, response: Response) {
        
    },

    async delete(request: Request, response: Response) {
        const usersRepository = getRepository(User);

        const { id } = request.params
        usersRepository.delete(id);

        return response.status(202).json({});
    }
}