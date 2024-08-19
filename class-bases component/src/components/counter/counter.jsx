import React from "react";
import PropTypes from "prop-types";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.start,  // Using the start prop to initialize count
        };
    }

    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + this.props.incrementAmount
        }));
    };

    decrement = () => {
        this.setState((prevState) => ({
            count: prevState.count - this.props.incrementAmount
        }));
    };

    render() {
        return (
            <div className="counter">
                <h2>Counter App {this.props.appNo}</h2>
                <h1>{this.state.count}</h1>
<div>
<button onClick={this.increment}>+</button>
<button onClick={this.decrement}>-</button>
</div>
            </div>
        );
    }
}

// PropTypes validation
Counter.propTypes = {
    appNo: PropTypes.string.isRequired,
    start: PropTypes.number.isRequired,
    incrementAmount: PropTypes.number.isRequired,
};

// Default props (if needed)
Counter.defaultProps = {
    start: 0,
    incrementAmount: 1,
};

export default Counter;
