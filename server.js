const express = require("express");
const app = express();

const PORT = process.env.PORT || 3500;


app.use("/api/parameters", require("./parameterService"));

app.get("/", (request, response, next) => response.json({ "message": "There is nothing for you kiddo!" }));

app.listen(PORT, () => console.log("Server Run on Port 3500!"))