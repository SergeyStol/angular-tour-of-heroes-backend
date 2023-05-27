"use strict";

const config = {};

function init() {
   let configDefault = {};
   try {
      configDefault = require("../resources/application.json");
   } catch (e) {
   }
   let configAbove = {};
   if (process.env.NODE_ENV) {
      try {
         configAbove = require(`../resources/application-${process.env.NODE_ENV}.json`);
      } catch (e) {
      }
   }
   for (const key in configDefault) {
      config[key] = configDefault[key];
   }

   for (const key in configAbove) {
      config[key] = configAbove[key];
   }

   for (const key in process.env) {
      config[key] = process.env[key];
   }

   return config;
}

module.exports = {
   init,
}