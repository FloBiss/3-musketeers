const starWars = require('./index');
const starWarsNames = require('./starwars-names.json');

describe('starwars-names', () => {
  describe('all', () => {
    test('should be a fulfilled array', () => {
      expect(starWars.all).toHaveLength(starWarsNames.length)
    });
    test('should be an array of strings', () => {
      expect(typeof starWars.all).toEqual(Array());
    });

    test('should contain `Luke Skywalker`', () => {
      expect(starWars.all.includes("Luke Skywalker")).toBe(true)
    });

    test('should not contain `Ben Quadinaros`', () => {
      expect(starWars.all.includes("Ben Quadinaros")).toBe(false)
    });
  });

  describe('random', () => {
    test('should return a random item from the starWars.all', () => {
      expect(starWars.all).toEqual(expect.arrayContaining(starWars.random(1)))
    });

    test('should return an array of random items if passed a number', () => {
      expect(starWars.random(5)).toHaveLength(5)
    });
  });
});
