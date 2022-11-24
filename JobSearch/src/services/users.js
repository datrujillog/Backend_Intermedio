"use strict";

const User = require("../models/users");
const { ok, created, notFound, DUPLICATE_KEY_ERRROR } = require("../helpers/sendStatus");

class Users {
    constructor (app) {
        this.app = app;

    }

    async getByEmail(email) {
        try {
 
            const user = await User.findOne({ email });
            return user;

        } catch (error) {
            // const message = `The email: \" ${error.keyValue.email}\ " is already in use`;
            const message = `ERROR ::: EL EMAIL: \" ${error.keyValue.email}\ " NO SE ENCONTRO`;
            return {
                error: true,
                message,
            };

        }

    }

    async getAll() {
        try {
            const users = await User.find();

            return users;
        } catch (error) {
            // this.ok(res, error);
            console.log(error);
        }
    }

    async create(data) {
        try {
            console.log('data ',data)           
            
            // crear la data en el modelo User
            const user =  new User(data);
            console.log('user 1 ', user)
            
            // guardar la data en la base de datos
            // await user.save();
            // n guarda en la base de datos arreglar este error 
            // return user;

            const userr = await User.create(data)
            console.log('user 2 ', user)
            return userr;



            // console.log('USER CREATE ',user)
            // return user;
        } catch (error) {
            if (error.code === DUPLICATE_KEY_ERRROR) {
                const message = `The email: \" ${error.keyValue.email}\ " is already in use`;

                return {
                    error: true,
                    message,
                };
            }
        }
    }

    async update(id, data) {
        try {
            const user = await User.findOneAndUpdate(id, data, { new: true });
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id) {
        try {
            const user = await User.findOneAndDelete({ id });
            return user;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Users;
