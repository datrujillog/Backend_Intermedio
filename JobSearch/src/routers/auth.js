const express = require("express");
const AuthService = require("../services/auth");
const { ok,forbidden,badRequest } = require("../helpers/sendStatus");


function auth(app) {

    const router = express.Router();
    const authSer = new AuthService();

    app.use("/api/V1/auth", router);



    router.post("/login", async (req, res) => {
        const { email, password } = req.body;
        const result = await authSer.login({ email, password });
        res.status(result.error?badRequest:ok).json(result);
    });


    router.post("/signup", async (req, res) => {
        const { body: user } = req;
        const result = await authSer.signuUp(user);
        res.status(result.error?badRequest:ok).json(result);
    });
}

module.exports = auth;