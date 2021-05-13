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

app.get("/", () =>{

    
})


app.listen(45678,() => {
    console.log("API RODANDO!")
});