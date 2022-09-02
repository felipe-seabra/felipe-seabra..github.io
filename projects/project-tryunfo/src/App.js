import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './index.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    data: [],
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.isSaveButtonDisabled()); // verificando os inputs para habilitar o botão
  };

  isSaveButtonDisabled = () => {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const limitAttr = 90; // limite por atributo
    const limitAllAttr = 210; // limite de todos os atributos somados

    const verify = cardName.length !== 0 // verifica se está com os campos preenchidos
      && cardImage.length !== 0
      && cardDescription.length !== 0;

    const verifyAttr = (Number(cardAttr1) <= limitAttr && Number(cardAttr1) >= 0) // verifica se os atributos não passam de 90
      && (Number(cardAttr2) <= limitAttr && Number(cardAttr2) >= 0)
      && (Number(cardAttr3) <= limitAttr && Number(cardAttr3) >= 0);

    const verifyAllAttr = Number(cardAttr1) + Number(cardAttr2) // verifica se todos os atributos não passam de 210
                          + Number(cardAttr3) <= limitAllAttr;

    this.setState({ isSaveButtonDisabled: !(verify && verifyAttr && verifyAllAttr) }); // retornando true ou false
  };

  clear = () => { // voltar o status para o padrão
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
  };

  onSaveButtonClick = (objState) => { // monitoria de Hellen ajudou muito aqui
    const {
      cardTrunfo,
    } = this.state;

    this.setState((prevState) => ({
      data: [...prevState.data, objState],
    }));

    if (cardTrunfo) this.setState({ hasTrunfo: true }); // verifica se foi selecionado e deixa muda para true

    this.clear();
  };

  deleteCard = (card) => {
    const { cardName, cardTrunfo } = card;
    const { data } = this.state;
    if (cardTrunfo) this.setState({ hasTrunfo: false }); // se for o super trunfo, habilita novamente o botão
    const updateData = data.filter((cardRemove) => cardRemove.cardName !== cardName); // procura a carta pelo nome e remove
    this.setState({ data: updateData }); // atualiza o data
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      data,
    } = this.state;

    return (
      <main>
        <div className="content-form-preview">
          <p className="title-new-card">Adiciona nova carta</p>
          <Form
            { ...this.state } // passa todos os states
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            clear={ this.clear }
          />
        </div>
        <div className="container-card-preview">
          <p className="title-preview">Pré-visualização</p>
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <div>
          <p className="title-all-cards">Todas as cartas</p>
          <div className="container-card-save">
            {
              data.map((card, i) => (
                <div key={ i }>
                  <div className="card">
                    <Card
                      cardName={ card.cardName }
                      cardDescription={ card.cardDescription }
                      cardAttr1={ card.cardAttr1 }
                      cardAttr2={ card.cardAttr2 }
                      cardAttr3={ card.cardAttr3 }
                      cardImage={ card.cardImage }
                      cardRare={ card.cardRare }
                      cardTrunfo={ card.cardTrunfo }
                    />
                    <button
                      type="button"
                      data-testid="delete-button"
                      className="delete-button"
                      onClick={ () => this.deleteCard(card) }
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </main>
    );
  }
}

export default App;
