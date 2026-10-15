const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test("все товары по возрастанию ('asc')", () => {
    expect(sortProductsByPrice(products, 'asc').map(({ id }) => id)).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test('все товары по возрастанию без направления', () => {
    expect(sortProductsByPrice(products).map(({ id }) => id)).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test("товары [1, 3, 4] по возрастанию ('asc')", () => {
    const catalog = products.filter(({ id }) => [1, 3, 4].includes(id));
    expect(sortProductsByPrice(catalog, 'asc').map(({ id }) => id)).toEqual([3, 4, 1]);
  });

  test("все товары по убыванию ('desc')", () => {
    expect(sortProductsByPrice(products, 'desc').map(({ id }) => id)).toEqual([1, 2, 4, 5, 6, 3]);
  });

  test("товары [3, 1, 4] по убыванию ('desc')", () => {
    const catalog = products.filter(({ id }) => [3, 1, 4].includes(id));
    expect(sortProductsByPrice(catalog, 'desc').map(({ id }) => id)).toEqual([1, 4, 3]);
  });

  test("товары [5, 2, 6] по убыванию ('desc')", () => {
    const catalog = products.filter(({ id }) => [5, 2, 6].includes(id));
    expect(sortProductsByPrice(catalog, 'desc').map(({ id }) => id)).toEqual([2, 5, 6]);
  });

  test("сортировка по возрастанию не меняет исходный массив", () => {
    const catalog = products.filter(({ id }) => [1, 3, 4].includes(id));
    sortProductsByPrice(catalog, 'asc');
    expect(catalog.map(({ id }) => id)).toEqual([1, 3, 4]);
  });

  test("сортировка по убыванию не меняет исходный массив", () => {
    const catalog = products.filter(({ id }) => [1, 3, 4].includes(id));
    sortProductsByPrice(catalog, 'desc');
    expect(catalog.map(({ id }) => id)).toEqual([1, 3, 4]);
  });

  test('сортировка по умолчанию не меняет исходный массив', () => {
    sortProductsByPrice(products);
    expect(products.map(({ id }) => id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
