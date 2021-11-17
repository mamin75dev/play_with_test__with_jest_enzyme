import React from 'react';
import PropTypes from 'prop-types';

export const List = React.memo(({items}) => {
  if (!items.length) {
    return <span className="empty-message">No items in list</span>;
  }

  return (
    <ul className="list-items">
      {items.map(item => <li key={item} className="item">{item}</li>)}
    </ul>
  );
})

List.propTypes = {
  items: PropTypes.array
};

List.defaultProps = {
  items: []
};