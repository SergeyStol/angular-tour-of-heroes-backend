"use strict";

const heroesController = require("./HeroesController");
const heroesService = require("./HeroesService");
// const heroesRepository = require("./HeroesRepository");
const heroesInMemoryRepository = require("./HeroesInMemoryRepository");
const configurable = require("./Configurable");

const config = configurable.init();
heroesInMemoryRepository.init();
heroesService.init(heroesInMemoryRepository);
heroesController.init(heroesService, config);
