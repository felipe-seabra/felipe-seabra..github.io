const itemsContainer = document.querySelector('.items');
const carContainer = document.querySelector('.cart__items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
  event.target.remove(); // ao clicar no elemento, ele é removido do carrinho
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const carregando = () => { // Adiciona o texto carregando
  const load = document.createElement('h1');
  load.className = 'loading'; // Adiciona a classe
  const texto = 'carregando...';
  load.innerText = texto;
  itemsContainer.appendChild(load);
};

const carregado = () => { // Remove o texto carregando
    document.querySelector('.loading').remove();
};

const searchItem = async (QUERY) => {
  carregando();
  const response = await fetchProducts(QUERY);
  carregado();
  const { results } = response;
  results.forEach((element) => {
    const { id, title, thumbnail } = element;
    const objetoMontado = { sku: id, name: title, image: thumbnail };
    itemsContainer.appendChild(createProductItemElement(objetoMontado));
  });
};

const appendCar = async (e) => { // Adiciona item ao carrinho - Requisito 4
  const parent = e.target.parentElement; // encontei aqui: 'https://stackoverflow.com/questions/29168719/can-you-target-an-elements-parent-element-using-event-target'
  const ident = getSkuFromProductItem(parent); // pega o id do produto para poder buscar
  const data = await fetchItem(ident); // busca por id
  const { id, title, price } = data;
  const ob = { // Constroi o objeto
    sku: id,
    name: title,
    salePrice: price,
  };
  const element = createCartItemElement(ob); // cria o elemento para adicionar
  carContainer.appendChild(element); // Adiciona o objeto
  saveCartItems(carContainer.innerHTML);
};

const eventButtons = async () => { // Adiciona os eventos nos botões de adicionar ao carrinho - Requisito 4
  const buttons = await document.querySelectorAll('.item__add'); // Pega os botões
  buttons.forEach((button) => button.addEventListener('click', appendCar)); // Cria os eventos
};

const clear = () => { 
  carContainer.innerHTML = '';
  localStorage.clear(); // Limpa o localStorage
};

const clearCar = () => { // adiciona o evento ao botão de limpar carrinho
  const buttonClear = document.querySelector('.empty-cart');
  buttonClear.style.cursor = 'pointer'; // adiciona o estilo de pointer ao botão para ficar mais bonito
  buttonClear.addEventListener('click', clear);
};

const getLocalStorageSaved = () => { // Busca o itens no local storage se tiver e os insere no carrinho
    carContainer.innerHTML = getSavedCartItems();
};

const totalPrices = () => { // Cria o elemento de subtotal
  const total = document.createElement('h3');
  total.className = 'subtotal';
  total.innerText = 'Subtotal: R$ ';
  const totalValue = document.createElement('span');
  totalValue.className = 'total-price';
  totalValue.innerText = '0.00';
  total.appendChild(totalValue);
  carContainer.insertAdjacentElement('afterend', total); // "https://developer.mozilla.org/pt-BR/docs/Web/API/Element/insertAdjacentHTML"
};

window.onload = async () => { 
  await searchItem('computador'); // Faz a busca do produto
  await eventButtons(); // adiciona o evento aos botões
  await getLocalStorageSaved(); // chama a função para pegar os itens no localStorage
  clearCar(); // adiciona o evento para limpar o carrinho
  totalPrices(); // chama a função para criar o elemento de subtotal
};
