import React from "react";
import classnames from 'classnames';

function Button({value, type, doubleWidth, onClick, operation}) {
  const inputClassNames = classnames('grid-item', 
    {'calc-function' : type === "calc"},
    {'operation-function' : type === "operation"},
    {'numeric-function' : type === "numeric"},
    {'doubleWidthItem' : doubleWidth},
  );
  return (
    <input type="button" className={inputClassNames} value={value} onClick={() => onClick(operation ? operation : value)}/>
  );
}

export default Button;
