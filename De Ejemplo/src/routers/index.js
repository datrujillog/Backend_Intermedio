const express = require("express");
const { ok, created } = require("../../sendStatus");
const router = express.Router();

const arr = [];



router.get("/get", (req, res) => {
   const o = res.send(arr);
    res.status(ok).json(o);
    
});

router.post("/post", (req, res) => {
    const body = req.body;
    arr.push(body);
    res.status(created)
    console.log("");
    console.log("Data POST=> ", arr);
    console.log("");
    console.log("");
    console.log("");
});

console.log("Data => ", arr);
module.exports = router;