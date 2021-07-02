import React from 'react';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import { connect } from 'react-redux';
import { changeSignal } from './redux/actionCreators';

class TrafficSignal extends React.Component {

  renderSignal = (signalColor) => {
    console.log(signalColor)
    if (signalColor === 'red') {
      return redSignal;
    }
    if (signalColor === 'green') {
      return greenSignal;
    }
    if (signalColor === 'yellow') {
      return yellowSignal;
    }
    return null;
  };

  render() {

    const { signalColor, changeSignals } = this.props;

    return (
      <div>
        <div className="button-container">
          <button type="button" onClick={ () => changeSignals('red') }>Red</button>
          <button type="button" onClick={ () => changeSignals('yellow') }>Yellow</button>
          <button type="button" onClick={ () => changeSignals('green') }>Green</button>
        </div>
        <img className="signal" src={this.renderSignal(signalColor)} alt="" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  signalColor: state.traffic.color,
});

const mapDispatchToProps = (dispatch) => ({
  changeSignals: (color) => dispatch(changeSignal(color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);