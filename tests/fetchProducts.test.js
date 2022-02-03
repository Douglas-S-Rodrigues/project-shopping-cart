require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('testa se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  });
  it('Testa se a função fetch foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveReturned();
  });
  it("A função deve retornar o endpoint 'https://api.mercadolibre.com/sites/MLB/search?q=computador", async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });
  it("Testa se a função com o argumento 'computador' retorna uma estrutura de dados igual ao objeto computadorSearch", async () => {
    const response = await fetchProducts('computador');
    expect(response).toEqual(computadorSearch);
  });
  it("testa se ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url", async () => {
    const response = await fetchProducts();
    expect(response).toEqual(new Error('You must provide an url'));
  })
  // fail('Teste vazio');
});
