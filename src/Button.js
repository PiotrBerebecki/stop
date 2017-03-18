import React from 'react';

function Button(props) {
  return (
    <button
     className={`controls__btn controls__btn--${props.children}`}
     onClick={props.handleTimer}
    >
     {props.children.toUpperCase()}
   </button>
  );
}

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  handleTimer: React.PropTypes.func.isRequired
};

export default Button;
