const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  beforeEach(() => {
    getSavedCartItems();
  });

  test('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado;', () => {
    expect(localStorage.setItem).toHaveBeenCalled(); // Espera que tenha chamado o localStorage
  });

  test('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o "cartItems" como parâmetro.', () => {
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems'); // Espera que tenha chamado com os parâmetros corretos
  });
});
