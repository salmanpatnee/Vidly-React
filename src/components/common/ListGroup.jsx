import React from 'react';

const ListGroup = ({ items, text, value, selectedItem, onItemSelect }) => {
    return (
        <ul className="list-group">
            {items.map(item => (
                <li
                    onClick={() => onItemSelect(item)}
                    className={selectedItem === item ? 'list-group-item active' : 'list-group-item'}
                    key={item[value]}>
                    {item[text]}
                </li>
            ))}
        </ul>
    );
}

ListGroup.defaultProps = {
    text: "name",
    value: "_id"
};

export default ListGroup;