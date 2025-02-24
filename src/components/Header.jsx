import React from 'react';

function Header({ img, headerText }) {
  return (
    <div id='header'>
      <img src={img} alt='Header Logo' />
      <h1>{headerText}</h1>
    </div>
  );
}

export default Header;
