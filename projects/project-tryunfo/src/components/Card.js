import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
    } = this.props;
    return (
      <div className="card-preview">
        <div className="card-preview-inner">
          <div className="retangle-name">
            <p data-testid="name-card">{cardName}</p>
          </div>
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
          <p
            className="description"
            data-testid="description-card"
          >
            {cardDescription}
          </p>
          <ul>
            <li className="atributes" data-testid="attr1-card">
              &nbsp; Attr01 .......................
              <span>{cardAttr1}</span>
            </li>
            <li className="atributes" data-testid="attr2-card">
              &nbsp; Attr02 .......................
              <span>{cardAttr2}</span>
            </li>
            <li className="atributes" data-testid="attr3-card">
              &nbsp; Attr03 .......................
              <span>{cardAttr3}</span>
            </li>
          </ul>
          <p className="rareCard" data-testid="rare-card">{cardRare}</p>

          <div>
            {
              cardTrunfo === true && (
                <p className="trunfoCard" data-testid="trunfo-card">
                  Super Trunfo
                </p>
              )
            }
          </div>
        </div>
      </div>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
