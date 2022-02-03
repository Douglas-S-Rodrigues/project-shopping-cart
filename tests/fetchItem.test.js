require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
 it('testa se fecthItem é uma função', () => {
   expect(typeof fetchItem).toBe('function');
 })
 it('Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada', async () => {
  await fetchItem('MLB1615760527');
  expect(fetch).toHaveReturned();
 })
 it('Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async () => {
   const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
   await fetchItem('MLB1615760527');
   expect(fetch).toHaveBeenCalledWith(endpoint);
 })
 it('Testa se passar a função sem argumentos retorna o erro com a mensagem: You must provide an url', async () =>{
   const response = await fetchItem();
   expect(response).toEqual(new Error('You must provide an url'));
 })
  // fail('Teste vazio');
});
