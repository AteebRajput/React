  // import { useState  , useEffect, useRef} from "react";
  // import ComponentA from "./usecontext/componentA";
  // import React from "react";
  import { useReducer, useState } from "react";
  import "./App.css";
  import Todo from "./UseREduce/reduce";

  // ========================================================
  //                    Use State Hook
  // ========================================================

  const App = () => {

    // You can also send value in useState for complex computation
    // const [count, setCount] = useState(() =>{
    //   // Complex computation
    //   return 10
    // })
    const [count, setCount] = useState(5)

    const increment = () =>{
      setCount(count + 1) // This method updates from orginal value for suppose inital value is 4 if you call setcount multiple times it starts from initial state which is 4
      //setCount(count + 1) // This method updates from orginal value for suppose inital value is 4 if you call setcount multiple times it starts from initial state which is 4

      // setCount(prevCount => prevCount +1)// Now this method will add in previous value calling it multiple times add 2 times
      // setCount(prevCount => prevCount +1)

    }
    const decrement =() =>{
      setCount(count - 1)
    }
    return(
      <div className='app'>
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
      </div>

    )
  }

  // export default App

  // ====================================================================================
  //                                Use Effect Hook
  // ====================================================================================

  const App = () => {
    const [resourceType, setResourceType] = useState("posts");
    const [data, setData] = useState([]);

    // UseEffect takes two parameter
    // 1. Function to be executed => Functionality to be executed when a value of particular variable is changed
    // 2. Dependency array => its an array of variables on which useEffect is set

    useEffect(() => {
      console.log("Item is mounted");
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setData(json))

    },[resourceType])

    return (
      <>
        <div className="app">
          <button onClick={() => setResourceType("posts")}>Posts</button>
          <button onClick={() => setResourceType("users")}>Users</button>
          <button onClick={() => setResourceType("comments")}>Comments</button>
        </div>

        <h2>{resourceType}</h2>
        <pre>{data.map(item => {
          return JSON.stringify(item)
        })}</pre>
      </>
    );
  };

  // export default App;

  // ===============================================================================================
  //                                  UseMemo Hook
  // ===============================================================================================

  // Use cases for USeMemo
  // 1. When we want to memoize a value
  // 2. When we want to memoize a function
  // 3. When we want to memoize a value that is dependent on other values

  export default function App() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const doubleNumber = useMemo(() => {
      return slowFunction(number);
    }, [number]);

    const themeStyle = useMemo(() => {
      return {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black',
      };
    }, [dark]);

    return (
      <>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <button onClick={() => setDark(prevDark => !prevDark)}>Switch Theme</button>
        <div style={themeStyle}>{doubleNumber}</div>
      </>
    );
  }

  function slowFunction(num) {
    for (let index = 0; index < 1000000000; index++) {
      // Simulating slow calculation
    }
    return num * 2;
  }

  // ==================================================================
  //                  UseRef Hook
  // ==================================================================

  It stores a value that doesn’t change when the component re-renders.
  It can be used to reference DOM elements, like an input field, without causing a re-render when the value inside changes

  function MyComponent() {
    const inputRef = useRef(null); // Creates a reference to store the input element

    const focusInput = () => {
      inputRef.current.focus(); // Focus the input field using the reference
    };

    return (
      <div>
        <input ref={inputRef} type="text" /> {/* inputRef is attached to this input */}
        <button onClick={focusInput}>Focus Input</button>
      </div>
    );
  }

  // export default MyComponent;

  export default function App () {
    const [name, setName] = useState('')
    const renderCount  = useRef(0)

    useEffect( () => {

      renderCount.current ++
    } )

    return (
      <>
      <div>
        <input type="text" value={name} onChange={ e => setName(e.target.value)}/>
        <p>My name is{name}</p>
        <p>Render count: {renderCount.current}</p>
      </div>
      </>

    )
  }

  // =====================================================================================
  //                        UseContext Hook
  // =====================================================================================

  // Usecontext Hook allows to share value betweeen multiple layer of component
  // without passing props down explicitly to each of them

  function App() {
    return <ComponentA />;
  }

  export default App;

  // =======================================================================================
  //                             UseReducer Hook
  // =======================================================================================

  const ACTIONS = {
    INCREMENT:'increment',
    DECREMENT:'decrement',
  }

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return { count: state.count + 1 };

      case ACTIONS.DECREMENT:
        return { count: state.count - 1 };

      default:
        return state;
    }
  }

  export default function App() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    function decrement() {
      dispatch({ type: ACTIONS.INCREMENT });
    }

    function increment() {
      dispatch({ type: ACTIONS.DECREMENT});
    }

    return (
      <>
        <div>
          <button onClick={increment}><h1>+</h1></button>
          <p>Count: {state.count}</p>
          <button onClick={decrement}><h1>-</h1></button>
        </div>
      </>
    );
  }


// ====================== Another Example for UseReducer =========================


// Action Types
export const ACTIONS = {
  ADD_TODO: 'add',
  TOGGLE_TODO: 'toggle',
  DELETE:"delete"
};

// Reducer function
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, addTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) =>{
        if (todo.id === action.payload.id) {
          return {...todo, completed : !todo.completed}
        }
        return todo;

      }
      );
      case ACTIONS.DELETE:
        return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

// Helper function to create a new todo
function addTodo(name) {
  return {
    id: Date.now(),
    name: name,
    completed: false,
  };
}

// App component
export default function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
        ))}
      </div>
    </>
  );
}
