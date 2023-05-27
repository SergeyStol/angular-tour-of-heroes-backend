"use strict";

const express = require('express')

let heroService;
let config;
let app = express();

function init(heroService_, config_) {
   heroService = heroService_;
   config = config_;
   initHttpServer(config.host, config.port)
}

function initHttpServer(host = "localhost", port = 8080) {
   app.use(express.json()); // for parse json body to req.body
   app.listen(port, host, () => {
      console.log(`Server started on port ${port}`)
   })
}

app.get('/api/heroes', (req, res) => {
   if (!req.query?.name) {
      return res.send(JSON.stringify(heroService.getHeroes()));
   }
   return res.send(JSON.stringify(heroService.searchHeroes(req.query.name)));
});

app.get('/api/heroes/:id', (req, res) => {
   return res.send(JSON.stringify(heroService.getHero(req.params.id)));
});

app.post('/api/heroes', (req, res) => {
   return res.send(JSON.stringify(heroService.addHero(req.body)));
});

app.delete('/api/heroes/:id', (req, res) => {
   return res.send(JSON.stringify(heroService.deleteHero(req.params.id)));
});

app.put('/api/heroes', (req, res, next) => {
   return res.send(JSON.stringify(heroService.updateHero(req.body)));
});

module.exports = {
   init,
}