import React from 'react';

function Display(props) {
  return (
    <section className="display">
      <div className="display__clock">
        <div className="display__wrapper">
          <p className="display__time" id="js-display">{props.elapsedTime}</p>
        </div>
      </div>
    </section>
  );
}

Display.propTypes = {
  elapsedTime: React.PropTypes.string.isRequired
};

export default Display;
