import { Transition } from "react-transition-group";
import { useState } from "react";

const transitions = {
  entering: {
    display: "block",
  },
  entered: {
    opacity: 0.5,
    display: "block",
  },
  exiting: {
    opacity: 1,
    display: "block",
  },
  exited: {
    opacity: 0,
    display: "none",
  },
};

function App() {
  const [transitionState, setTransitionState] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setTransitionState((prev) => !prev)}>Click Me</button>
      <Transition in={transitionState} timeout={500}>
        {(state) => (
          <img
            src="https://cataas.com/cat"
            alt="Cat"
            style={{
              transition: "all .1s",
              opacity: 0,
              display: "none",
              ...transitions[state],
            }}
          />
        )}
      </Transition>
    </div>
  );
}

export default App;
