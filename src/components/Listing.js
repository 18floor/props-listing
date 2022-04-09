import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import nextId from "react-id-generator";

const Listing = ({items}) => {
    return (
        <div className="item-list">
            {items.map((item) => (
                <Item key={nextId()} item={item}/>
            ))}
        </div>
    )
};

Listing.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
};

Listing.defaultProps = {
    items: []
};

export default Listing;