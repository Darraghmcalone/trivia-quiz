import React, { useContext } from 'react';

//create the context. Context allows you to pass data through the whole app without passing down props.
export const FirebaseContext = React.createContext(null);

// Wrap a react hook around context so we can use it inside a component
export const useFirebase = () => useContext(FirebaseContext);