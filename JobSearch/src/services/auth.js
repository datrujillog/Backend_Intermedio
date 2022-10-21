'use strict';

const Console = require("Console");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/environment/environment");


class Auth {

    login(data) {
        const token = jwt.sign(data, SECRET_KEY)

        return token;

    }
}

module.exports = Auth;