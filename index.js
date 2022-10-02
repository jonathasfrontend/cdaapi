const express = require('express');
const cors = require('cors');
const app = express();
const projetos = require('./main/projetos.json');
const iniciosobre = require('./main/iniciosobre.json');
const conteconosco = require('./main/conteprs.json');
const linkscontato = require('./main/linkscontato.json');
const escoladefundamentos = require('./main/edf.json');
const edfmestres = require('./main/edfmestres.json');

app.use(express.json());
app.use(cors());

app.get("/inicioendsobre", function(req, res) {
  res.json(iniciosobre);
});
app.get("/projetos", function(req, res) {
  res.json(projetos);
})
app.get("/conteconosco", function(req, res) {
  res.json(conteconosco);
})
app.get("/linkscontato", function(req, res) {
  res.json(linkscontato);
})
app.get("/escoladefundamentos", function(req, res) {
  res.json(escoladefundamentos);
})
app.get("/edfmestres", function(req, res) {
  res.json(edfmestres);
})

app.listen(process.env.PORT || 3000, function(){
    console.log("APi rodando...");
})