const express = require("express");
const PORT = 3000;

const application = express();

application.get("/", function(request, response){
    response.send("<h1>Server is running!</h1>");
});

application.listen(PORT);