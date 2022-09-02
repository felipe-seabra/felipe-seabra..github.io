const getSavedCartItems = () => localStorage.getItem('cartItems'); // "Pega" o item no localStorage

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
