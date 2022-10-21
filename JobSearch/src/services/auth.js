'use strict'

const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../config/environment/environment')
const {
    ok,
    created,
    notFound,
    DUPLICATE_KEY_ERRROR
} = require('../helpers/sendStatus')
const User = require('./users')
const bcrypt = require('bcrypt')

class Auth {
    async login(data) {
        try {            
            const { email, password } = data
            const userServ = new User()
            const user = await userServ.getByEmail(email)
            console.log(user)
            if (user && await this.#compare(password, user.password)) {
                return this.#getUserData(user)
            }
            return {
                error: true,
                message: 'Invalid credentials'
            }

        } catch (error) {
            const message = 'Error al crear el usuario'

            return {
                error: true,
                message
            }
        }
    }

    async signuUp(data) {
        try {
            if (data.password) {
                data.password = await this.#encrypt(data.password)
            }
            const userServ = new User()
            const user = await userServ.create(data)

            if (user.error) {
                return user
            }

            return this.#getUserData(user)

        } catch (error) {
            const message = 'Error al crear el usuario'

            return {
                error: true,
                message
            }
        }
    }

    #getUserData(user) {
        const userData = {
            id: user._id,
            email: user.email,
            name: user.name,
            role: user.role,
            date: user.date
        }
        const token = this.#createToken(userData)
        return {
            message: 'Login success',
            data: userData,
            token
        }
    }

    #createToken(payload) {
        //ecrypt los datos del usuario y generar un token

        if (!payload) {
            throw new Error('No hay datos para generar el token')
        }

        const token = jwt.sign(payload, SECRET_KEY, {
            expiresIn: '7d'
        })
        return token
    }

    async #encrypt(string) {
        // return bcrypt.hash(password, 10);
        try {
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(string, salt)
            return hash
        } catch (error) {
            console.log(error)
        }
    }

    async #compare(password, hash) {
        return bcrypt.compare(password, hash)
    }
}

module.exports = Auth
