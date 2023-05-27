"use strict";

const { init } = require('../../main/js/Configurable');

describe('Config Service', () => {
   let originalProcessEnv;

   beforeEach(() => {
      // Save the original process.env values
      originalProcessEnv = { ...process.env };

      // Reset the config object
      jest.resetModules();
   });

   afterEach(() => {
      // Restore the original process.env values
      process.env = originalProcessEnv;
   });

   describe('init', () => {
      test('should load default configuration from application.json', () => {
         const mockConfigDefault = { key1: 'value1', key2: 'value2' };
         jest.mock('../../main/resources/application.json', () => mockConfigDefault);

         const config = init();

         expect(config).toMatchObject(mockConfigDefault);
      });

      test('should override default configuration with environment-specific configuration', () => {
         const mockConfigDefault = { key1: 'value1', key2: 'value2' };
         const mockConfigEnv = { key2: 'value2-updated', key3: 'value3' };
         jest.mock('../../main/resources/application.json', () => mockConfigDefault);
         jest.mock('../../main/resources/application-dev.json', () => mockConfigEnv);
         process.env.NODE_ENV = 'dev';

         const config = init();

         expect(config).toMatchObject({ key1: 'value1', key2: 'value2-updated', key3: 'value3' });
      });

      test('should merge configuration with process.env variables', () => {
         const mockConfigDefault = { key1: 'value1', key2: 'value2' };
         const mockConfigEnv = { key2: 'value2-updated', key3: 'value3' };
         jest.mock('../../main/resources/application.json', () => mockConfigDefault);
         jest.mock('../../main/resources/application-dev.json', () => mockConfigEnv);
         process.env.NODE_ENV = 'dev';
         process.env.KEY1 = 'value1-updated';
         process.env.key1 = 'value1-updated';
         process.env.KEY4 = 'value4';

         const config = init();

         expect(config).toMatchObject({ key1: 'value1-updated', key2: 'value2-updated', key3: 'value3', KEY1: 'value1-updated', KEY4: 'value4' });
      });
   });
});
