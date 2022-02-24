const express = require("express");
const PORT = process.env.PORT || 4011;

const application = express();

application.get("/", function(request, response){
    response.send(`<h1>Server is running!</h1>
    <h2>Hello ${process.env.NAME || "Guest"}</h2>`
    );
});

application.listen(PORT);