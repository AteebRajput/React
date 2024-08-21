import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Counter = ({ appNo, incrementAmount, start }) => {

  // Use state
  const [counter, setCounter] = useState(start);

  // UseEffect for mounting/unmounting
  useEffect(() => {
      console.log(`Counter ${appNo} is mounted`);
      
      return () => {
          console.log(`Counter ${appNo} is unmounted`);
      };
  }, [appNo]);

  // UseEffect for updates
  useEffect(() => {
      console.log(`Counter ${appNo} is updated`);
  }, [counter, appNo]);

  // Increment function
  const increment = () => {
      console.log('Increment button clicked');
      setCounter(counter + incrementAmount);
  };

  // Decrement function
  const decrement = () => {
      console.log('Decrement button clicked');
      setCounter(counter - incrementAmount);
  };

  return (
    <div className="counter">
      <h2>Counter App {appNo}</h2>
      <h1>{counter}</h1> {/* Changed from {start} to {counter} */}
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

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
