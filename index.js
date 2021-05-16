const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var DB = {
    games: [

        {
            id: 23,
            title: "Call Of Duty BO: II",
            year: 2014,
        },
        {
            id: 65,
            title: "GOD OF WAR",
            year: 2010,
        },
        {
            id: 2,
            title: "LEAGUE OF LEGENDS",
            year: 2017,
        },
    ]
}

app.get("/games", (req, res) =>{
    res.statusCode = 200
    res.json(DB.games);
    
})

app.get("/game/:id",(req, res) =>{

    if(isNaN(req.params.id)){
        res.sendStatus(400);                //BAD REQUEST
    }else{
        var id = parseInt(req.params.id);
        var game = DB.games.find(g => g.id == id)

        if(game != undefined){
            res.statusCode = 200;           //REQ FEITA COM SUCESSO
            res.json(game)
        }else{
            res.sendStatus(404);            // NOT FOUND
        }
    }

})

app.post("/game",(req, res) =>{
    
    var {title, price, year} = req.body;

    DB.games.push({
        id: 2323,
        title,
        price,
        year
    });

    res.sendStatus(200);

})

app.listen(45678,() => {
    console.log("API RODANDO!")
});