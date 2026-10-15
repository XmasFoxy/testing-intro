const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("запрос 'Наушники' возвращает товар [1]", () => {
    expect(searchProducts(products, 'Наушники').map(({ id }) => id)).toEqual([1]);
  });

  test("запрос 'Чистый код' возвращает товар [6]", () => {
    expect(searchProducts(products, 'Чистый код').map(({ id }) => id)).toEqual([6]);
  });

  test("запрос 'Настольная лампа' возвращает товар [4]", () => {
    expect(searchProducts(products, 'Настольная лампа').map(({ id }) => id)).toEqual([4]);
  });

  test("поиск 'javascript' не зависит от регистра", () => {
    expect(searchProducts(products, 'javascript').map(({ id }) => id)).toEqual([3]);
  });

  test("поиск 'ЧЕХОЛ' не зависит от регистра", () => {
    expect(searchProducts(products, 'ЧЕХОЛ').map(({ id }) => id)).toEqual([5]);
  });

  test("поиск 'наушники' не зависит от регистра", () => {
    expect(searchProducts(products, 'наушники').map(({ id }) => id)).toEqual([1]);
  });

  test('пустой запрос возвращает все товары', () => {
    expect(searchProducts(products, '').map(({ id }) => id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('запрос из пробелов возвращает все товары', () => {
    expect(searchProducts(products, '   ').map(({ id }) => id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('запрос из табуляции и перевода строки возвращает все товары', () => {
    expect(searchProducts(products, '\t\n').map(({ id }) => id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
