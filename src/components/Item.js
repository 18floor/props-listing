import React from "react";
import PropTypes from "prop-types";
import { decode } from 'html-entities';

const Item = ({ item }) => {

    const  {
        url,
        MainImage: { url_570xN },
        title,
        currency_code,
        price,
        quantity
    } = item;

    const titleValue = decode(title);

    let priceValue;
    if (currency_code === 'USD') {
        priceValue = `$${price}`;
    } else if (currency_code === 'EUR') {
        priceValue = `€${price}`;
    } else {
        priceValue = `${price} ${currency_code}`
    }

    let levelValue;
    if (quantity <= 10) {
        levelValue = `level-low`;
    } else if (quantity <= 20) {
        levelValue = `level-medium`;
    } else {
        levelValue = `level-high`;
    }

    return (
        <div className="item">
            <div className="item-image">
                <a href={url}>
                    <img src={url_570xN} alt={titleValue}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{titleValue}</p>
                <p className="item-price">{priceValue}</p>
                <p className={`item-quantity ${levelValue}`}>{quantity}</p>
            </div>
        </div>
    );
};

Item.propTypes = {
    item: PropTypes.object.isRequired
};
export default Item;
