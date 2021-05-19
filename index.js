const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var DB = {
    games: [

        {
            id: 23,
            title: "Call Of Duty BO: II",
            year: 2014,
            price: 40
        },
        {
            id: 65,
            title: "GOD OF WAR",
            year: 2010,
            price: 50
        },
        {
            id: 2,
            title: "LEAGUE OF LEGENDS",
            year: 2017,
            price: 15
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

app.delete("/game/:id", (req, res) =>{
    if(isNaN(req.params.id)){
        res.sendStatus(400);                //BAD REQUEST
    }else{
        var id = parseInt(req.params.id);
        var index = DB.games.findIndex(g => g.id == id)     // PROCURA O INDEX DO ELEMENTO

        if(index == -1){
            res.sendStatus(404)            //NOT FOUND
        }else{
            DB.games.splice(index,1)       // DELETA O ELEMENTO
            res.sendStatus(200)            // OK
        }
    }

})

app.put("/game/:id", (req, res)=> {

    if(isNaN(req.params.id)){
        res.sendStatus(400);                //BAD REQUEST
    }else{
        var id = parseInt(req.params.id);
        var game = DB.games.find(g => g.id == id)

        if(game != undefined){
            var {title, price, year} = req.body;
            if(title != undefined){
                game.title = title;
            }
            if(price != undefined){
                game.price = price;
            }
            if(year != undefined){
                game.year = year;
            }

            res.sendStatus(200)             //OK

        }else{
            res.sendStatus(404);            // NOT FOUND
        }
    }
})

app.listen(45678,() => {
    console.log("API RODANDO!")
});