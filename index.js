const express = require("express");
const PORT = process.env.PORT || 4011;

const application = express();

application.set("view engine", "hbs");
application.set("views", "./server/views");

application.use(express.json());
application.use(express.urlencoded({extended: true}));

application.use(express.static("./public"));
application.use("/api", require("./api/api.js"));
application.use("/", require("./server/router.js"));

application.get("/test", function(request, response){
    response.send(`<h1>Server is running!</h1>
    <h2>Hello ${process.env.NAME || "Guest"}</h2>`
    );
});

application.listen(PORT);