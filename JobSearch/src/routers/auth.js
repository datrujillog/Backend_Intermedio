const express = require("express");
const AuthService = require("../services/auth");
const { ok } = require("../helpers/sendStatus");


function auth(app) {

    const router = express.Router();
    const authSer = new AuthService();

    app.use("/api/V1/auth", router);



    router.post("/login", async (req, res) => {
        const { email, password } = req.body;
        const token = await authSer.login(email, password);
        res.status(ok).json(token);
    });
}

module.exports = auth;