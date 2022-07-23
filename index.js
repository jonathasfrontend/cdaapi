const express = require('express');
const cors = require('cors');
const app = express();
const projetos = require('./projetos.json');
const iniciosobre = require('./iniciosobre.json');
const conteconosco = require('./conteprs.json');

app.use(express.json());
app.use(cors());

app.get("/apicasadeadoracaoiniciosobre", function(req, res) {
  res.json(iniciosobre);
});
app.get("/projetos", function(req, res) {
  res.json(projetos);
})
app.get("/conteconosco", function(req, res) {
  res.json(conteconosco);
})

app.listen(process.env.PORT || 3000, function(){
    console.log("APi rodando...");
})