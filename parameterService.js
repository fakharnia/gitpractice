const express = require("express");
const router = express.Router();

getParameters = async (request, response) => {

    response.status(200).json([{ id: 1, title: "First" }, { id: 2, title: "Second" }, { id: 1, title: "Third" }]);
}



router.get("/getparameters", getParameters);

module.exports = router;