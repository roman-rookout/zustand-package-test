import React from 'react';
import ReactDOM from 'react-dom';
export {default as useTestStore} from './store';
export * from './TestComponent'

console.log("React version from inside:", React.version);
console.log("ReactDOM version from inside:", ReactDOM.version);

export const testFromInside = () => {
    return 'testFromInside';
}