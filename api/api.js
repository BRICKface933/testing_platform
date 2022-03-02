const router = require("express").Router();

router.get("/", function(request, response){
    response.send("<h1>API page</h1>")
})

module.exports = router;
