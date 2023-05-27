"use strict";

const HEROES = [
   {id: 12, name: 'Dr. Nice'},
   {id: 13, name: 'Bombasto'},
   {id: 14, name: 'Celeritas'},
   {id: 15, name: 'Magneta'},
   {id: 16, name: 'RubberMan'},
   {id: 17, name: 'Dynama'},
   {id: 18, name: 'Dr. IQ'},
   {id: 19, name: 'Magma'},
   {id: 20, name: 'Tornado'}
];

let idIndex;

function fillIndexes() {
   idIndex = HEROES.reduce((acc, hero) => {
      acc.set(hero.id, hero);
      return acc;
   }, new Map());
}

function init() {
   fillIndexes();
}

function getHeroes() {
   return HEROES;
}

function getHero(id) {
   return idIndex?.size
      ? idIndex.get(id)
      : HEROES.find(hero => hero.id === id);
}

function addHero(hero) {
   if (!hero) {
      return undefined;
   }
   const newHero = {
      id: genId(),
      name: hero.name,
   }
   HEROES.push(newHero);
   idIndex.set(newHero.id, newHero);
   return getHero(newHero.id);
}

function deleteHero(id) {
   for (let i = HEROES.length - 1; i >= 0; i--) {
      if (HEROES[i]?.id === id) {
         const deletedHero = HEROES[i];
         HEROES.splice(i, 1);
         idIndex.delete(id);
         return deletedHero;
      }
   }
   return undefined;
}

function updateHero(newHero) {
   if (!newHero) {
      return undefined;
   }
   const oldHero = idIndex.get(newHero.id);
   if (oldHero) {
      oldHero.name = newHero.name;
      return oldHero;
   }
   newHero.id = genId();
   HEROES.push(newHero);
   idIndex.set(newHero.id, newHero);
   return newHero;
}

function searchHeroes(term) {
   return HEROES.filter(hero => hero.name.toLowerCase().includes(term.toLowerCase()));
}

function genId() {
   return HEROES.length ? Math.max(...HEROES.map(h => h.id)) + 1 : 11;
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