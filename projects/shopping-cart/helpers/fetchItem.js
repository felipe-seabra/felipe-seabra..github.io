const fetchItem = async (QUERY) => { // função asincrona recebendo o parâmetro para complementar o endpoint
  // seu código aqui
  if (!QUERY) throw new Error('You must provide an url'); // Retorna um erro caso não QUERY não seja um elemento válido
  const endpoint = `https://api.mercadolibre.com/items/${QUERY}`; // complementa o endpoint para chamar a API com fetch abaixo
  const promise = await fetch(endpoint); // chama o fetch com o endpoint (esperando com await)
  const data = await promise.json(); // converte o retorno da promise para json no data (esperando com await)
  return data; // retorna o data convertido para json
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
