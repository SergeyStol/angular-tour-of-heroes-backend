"use strict";

const {
   init,
   getHeroes,
   getHero,
   addHero,
   deleteHero,
   updateHero,
   searchHeroes
} = require('../../main/js/HeroesService');

describe('Hero Service', () => {
   let heroRepository;

   beforeEach(() => {
      // Create a mock heroRepository object
      heroRepository = {
         getHeroes: jest.fn(),
         getHero: jest.fn(),
         addHero: jest.fn(),
         deleteHero: jest.fn(),
         updateHero: jest.fn(),
         searchHeroes: jest.fn(),
      };

      // Initialize the heroService with the mock heroRepository
      init(heroRepository);
   });

   afterEach(() => {
      jest.clearAllMocks();
   });

   describe('getHeroes', () => {
      test('should call heroRepository.getHeroes and return the result', () => {
         const mockHeroes = [{id: 1, name: 'Superman'}, {id: 2, name: 'Batman'}];
         heroRepository.getHeroes.mockReturnValueOnce(mockHeroes);

         const result = getHeroes();

         expect(heroRepository.getHeroes).toHaveBeenCalled();
         expect(result).toEqual(mockHeroes);
      });
   });

   describe('getHero', () => {
      test('should call heroRepository.getHero with the correct id and return the result', () => {
         const mockHero = {id: 1, name: 'Superman'};
         heroRepository.getHero.mockReturnValueOnce(mockHero);

         const result = getHero(1);

         expect(heroRepository.getHero).toHaveBeenCalledWith(1);
         expect(result).toEqual(mockHero);
      });
   });

   describe('addHero', () => {
      test('should call heroRepository.addHero with the correct body and return the result', () => {
         const mockBody = {name: 'Superman'};
         const mockAddedHero = {id: 1, name: 'Superman'};
         heroRepository.addHero.mockReturnValueOnce(mockAddedHero);

         const result = addHero(mockBody);

         expect(heroRepository.addHero).toHaveBeenCalledWith(mockBody);
         expect(result).toEqual(mockAddedHero);
      });

      test('should return undefined if body is not provided', () => {
         const result = addHero();

         expect(heroRepository.addHero).not.toHaveBeenCalled();
         expect(result).toBeUndefined();
      });
   });

   describe('deleteHero', () => {
      test('should call heroRepository.deleteHero with the correct id and return the result', () => {
         const mockDeletedHero = {id: 1, name: 'Superman'};
         heroRepository.deleteHero.mockReturnValueOnce(mockDeletedHero);

         const result = deleteHero(1);

         expect(heroRepository.deleteHero).toHaveBeenCalledWith(1);
         expect(result).toEqual(mockDeletedHero);
      });
   });

   describe('updateHero', () => {
      test('should call heroRepository.updateHero with the correct body and return the result', () => {
         const mockBody = {id: 1, name: 'Superman'};
         const mockUpdatedHero = {id: 1, name: 'Superman', power: 'Flight'};
         heroRepository.updateHero.mockReturnValueOnce(mockUpdatedHero);

         const result = updateHero(mockBody);

         expect(heroRepository.updateHero).toHaveBeenCalledWith(mockBody);
         expect(result).toEqual(mockUpdatedHero);
      });

      test('should return undefined if body is not provided', () => {
         const result = updateHero();

         expect(heroRepository.updateHero).not.toHaveBeenCalled();
         expect(result).toBeUndefined();
      });
   });
   describe('searchHeroes', () => {
      test('should call heroRepository.searchHeroes with the correct term and return the result', () => {
         const mockTerm = 'Super';
         const mockResults = [{id: 1, name: 'Superman'}, {id: 2, name: 'Supergirl'}];
         heroRepository.searchHeroes.mockReturnValueOnce(mockResults);

         const result = searchHeroes(mockTerm);

         expect(heroRepository.searchHeroes).toHaveBeenCalledWith(mockTerm);
         expect(result).toEqual(mockResults);
      });
   });
});

