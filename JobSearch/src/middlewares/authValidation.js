'use strict';

const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/environment/environment");
const { unauthorized } = require("../helpers/sendStatus");



function authValidation(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(unauthorized).json({
            message: "No estas autorizado para acceder a este recurso",
        });
    }
    // const token = authorization.split(" ")[1];
    const [, token] = authorization.split(" ");
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(unauthorized).json({
                message: "No estas autorizado para acceder a este recurso",
            });
        }
        req.user = decoded;
        next();
    });
}










module.exports = authValidation;