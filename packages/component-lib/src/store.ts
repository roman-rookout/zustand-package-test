import React, { useState } from "react";

// Debugging code to check useState
console.log('React version from3:', React.version);
console.log('useState from3:', useState);
console.log('setting react3');
(window as any).React3 = React;


const useStore = () => {
  // Step 2: Initialize state
  console.log('React version from inside:', React.version);
  console.log('useState from inside:', useState);
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