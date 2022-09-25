const express = require("express");
const { ok, created } = require("../../sendStatus");
const router = express.Router();

const arr = [];

router.get("/get", (req, res) => {
    const data = {
        ok,
        message: "Data GET",
        data: arr,
    };
    console.log(data);
    res.sendStatus(ok);
    
});

router.post("/post", (req, res) => {
    const body = req.body;
    arr.push(body);
    res.sendStatus(created);
    // res.status(created).json({ ok, message: "Data POST", data: arr });
    console.log("");
    console.log("Data POST=> ", arr);
    console.log("");
    console.log("");
    console.log("");
});

console.log("Data => ", arr);
module.exports = router;