import React from 'react';

const Item = (props) => {
  const { description, type, itemImage } = props;



  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h4>
        {type}
      </h4>
      <div>
        {description}
      </div>
      <div>
        <img
        src={itemImage}
          alt="Clothing item"
          style={{ width: '170px',
          height: '170px',
          objectFit: 'cover'
          }}
        />
      </div>
    </div>
  )
};

export default Item;