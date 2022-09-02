const saveCartItems = (item) => {
  // seu código aqui
  localStorage.setItem('cartItems', item); // "Grava" o item no localStorage
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
