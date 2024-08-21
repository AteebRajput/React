import PropTypes from 'prop-types';
import { ACTIONS } from '../App.jsx';

export default function Todo({ todo, dispatch }) {
  return (
    <div>
      <h2 style={{ color: todo.completed ? 'grey' : 'black' }}>{todo.name}</h2>
      <button onClick={() => {
        dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } });
      }}>
        Toggle
      </button>
      <button onClick={() => {
        
        
        dispatch({ type: ACTIONS.DELETE, payload: { id: todo.id } });
      }}>
        Delete
      </button>
    </div>
  );
}

// Defining prop types
Todo.propTypes = {
  todo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};
