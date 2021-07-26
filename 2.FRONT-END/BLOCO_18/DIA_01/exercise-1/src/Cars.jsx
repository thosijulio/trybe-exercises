// src/Cars.jsx

import PropTypes from 'prop-types';
import React from 'react';
// import { connect } from 'react-redux';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import Context from './context';
// import { moveCar } from './redux/actionCreators';

class Cars extends React.Component {
  render() {
    return (
      <Context.Consumer>
        { (value) => (
            <div>
              <div>
                <img
                  className={value.redCar ? 'car-right' : 'car-left'}
                  src={carRed}
                  alt="red car"
                />
                <button
                  onClick={() => value.handleChange('redCar')}
                  type="button"
                >
                  Move
                </button>
              </div>
              <div>
                <img
                  className={value.blueCar ? 'car-right' : 'car-left'}
                  src={carBlue}
                  alt="blue car"
                />
                <button
                  onClick={() => value.handleChange('blueCar')}
                  type="button"
                >
                  Move
                </button>
              </div>
              <div>
                <img
                  className={value.yellowCar ? 'car-right' : 'car-left'}
                  src={carYellow}
                  alt="yellow car"
                />
                <button
                  onClick={() => value.handleChange('yellowCar')}
                  type="button"
                >
                  Move
                </button>
              </div>
            </div>
        )}
      </Context.Consumer>
    );
  }
}

Cars.propTypes = {
  moveCar: PropTypes.func.isRequired,
  blueCar: PropTypes.bool.isRequired,
  redCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
};

/* const mapStateToProps = (state) => ({
  redCar: state.cars.red,
  blueCar: state.cars.blue,
  yellowCar: state.cars.yellow});

const mapDispatchToProps = { moveCar };
*/

export default Cars;
