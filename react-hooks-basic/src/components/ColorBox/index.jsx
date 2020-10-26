import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss';

ColorBox.propTypes = {};

// hàm random color
function getRandomColor() {
  const COLOR_LIST = ['deeppink', 'green', 'yellow', 'red', 'blue'];
  const randomIndex = Math.trunc(Math.random() * 5); // Math.trunc lấy số nguyên
  return COLOR_LIST[randomIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem('box-color') || 'deeppink'; // lấy từ locoStorage
    return initColor;
  });

  function handBoxCLick() {
    // get random color --> set color
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem('box-color', newColor); //đẩy lên locoStorage
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handBoxCLick}
    >
      <p>Color Box</p>
    </div>
  );
}

export default ColorBox;
