const router = require("express").Router();

const req = require("express/lib/request");
const res = require("express/lib/response");
const mysql = require("mysql2");

const db = mysql.createConnection({
    host:"localhost" ,
    user:"root" ,
    password:"Pa$$w0rd" ,
    database: "test"
})

// const connection = mysql.createConnection({
//     host: "localhost",
//     port: "3306",
//     database: "test",
//     user: "root",
//     password: "Pa$$w0rd"
// });

router.get("/", function(request, response){
    db.connect(function(err){
        if(err){
            console.log("DB Danger!")
        }else{
            console.log("DB Succesful")
        }
    })
    response.send("<h1>API page</h1>")
})

router.get("/user/get/:id", function(req, res){
    db.connect(function(err) {
        if (err){
            res.send("ups...");
        } else {
            console.log('Connection success');
            res.send(`<h1>${req.params.id}</h1>`);
        }
    });
});

router.post("/user/add", function (req, res){
    const query = `
        insert into users(name,email,pwd) values ("${req.body.name}","${req.body.email}","${req.body.pwd}");
    `;
    db.query(query, function(err, result){
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            console.log("done");
            res.send("OK");
        }
    });
    db.end();
});


module.exports = router;
