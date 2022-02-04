const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  it('Testa se ao executar saveCartItems com argumento <ol><li>Item<li><ol> o metodo locacalStorage,setItem é chamado', ()  => {
    saveCartItems('<ol><li>Item<li><ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  })
  it('testa se ao executar saveCartItems com argumento <ol><li>Item, o metodo locacalStorage.setItem é chamado com dois parametros um deles sendo o "cartItems" e segundo sedo o como o argumento passado', () => {
    saveCartItems('<ol><li>Item<li><ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item<li><ol>');
  });
  // fail('Teste vazio');
});
