"use strict";

let heroRepository;

function init(heroRepository_) {
   heroRepository = heroRepository_;
}

function getHeroes() {
   return heroRepository.getHeroes();
}

function getHero(id) {
   return heroRepository.getHero(Number(id));
}

function addHero(body) {
   if (!body)
      return undefined;
   return heroRepository.addHero(body);
}

function deleteHero(id) {
   return heroRepository.deleteHero(Number(id));
}

function searchHeroes(term) {
   return heroRepository.searchHeroes(term);
}

function updateHero(body) {
   if (!body)
      return undefined;
   return heroRepository.updateHero(body);
}

module.exports = {
   init,
   getHeroes,
   getHero,
   addHero,
   deleteHero,
   updateHero,
   searchHeroes,
}