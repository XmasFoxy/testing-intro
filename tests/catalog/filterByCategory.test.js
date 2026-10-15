const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test("категория 'all' возвращает все товары", () => {
    expect(filterByCategory(products, 'all').map(({ id }) => id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('категория undefined возвращает все товары', () => {
    expect(filterByCategory(products, undefined).map(({ id }) => id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('пустая категория возвращает все товары', () => {
    expect(filterByCategory(products, '').map(({ id }) => id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("категория 'electronics' возвращает товары [1, 2]", () => {
    expect(filterByCategory(products, 'electronics').map(({ id }) => id)).toEqual([1, 2]);
  });

  test("категория 'books' возвращает товары [3, 6]", () => {
    expect(filterByCategory(products, 'books').map(({ id }) => id)).toEqual([3, 6]);
  });

  test("категория 'home' возвращает товары [4, 5]", () => {
    expect(filterByCategory(products, 'home').map(({ id }) => id)).toEqual([4, 5]);
  });

  test("несуществующая категория 'clothes' возвращает пустой массив", () => {
    expect(filterByCategory(products, 'clothes').map(({ id }) => id)).toEqual([]);
  });

  test("несуществующая категория 'toys' возвращает пустой массив", () => {
    expect(filterByCategory(products, 'toys').map(({ id }) => id)).toEqual([]);
  });

  test("несуществующая категория 'sports' возвращает пустой массив", () => {
    expect(filterByCategory(products, 'sports').map(({ id }) => id)).toEqual([]);
  });
});
