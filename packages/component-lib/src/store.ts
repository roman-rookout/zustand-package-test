import { useState } from "react";

const useStore = () => {
    // Step 2: Initialize state
    const [state, setState] = useState({
      // Add your initial state properties here
      count: 0,
    });
  
    // Step 3: Create functions to update the state
    const increment = () => {
      setState(prevState => ({
        ...prevState,
        count: prevState.count + 1,
      }));
    };

    const decrement = () => {
        setState(prevState => ({
            ...prevState,
            count: prevState.count - 1,
        }));
        }
  

    // Step 4: Return the state and the functions
    return {
      state,
      increment,
      decrement
    };
  };
  
  export default useStore;