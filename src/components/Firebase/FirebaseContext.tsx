import * as React from 'react';

export const FirebaseContext = React.createContext<object | null>(null);
export const useFirebase = (): any | null => React.useContext(FirebaseContext);