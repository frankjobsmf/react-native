import { useState } from 'react';
import { VtAppContext } from './vtapp-context';

export const VtAppProvider = ({ children }) => {
  
    const [ user, setUser ] = useState({
        id: null,
        token: null,
        active: false
    });
  
    return (
        <VtAppContext.Provider value={{user, setUser}}>
            {children}
        </VtAppContext.Provider>
    )
}
