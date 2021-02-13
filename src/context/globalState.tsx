import React, {createContext,useReducer} from 'react';
import {  providerType, statetype, transactiontype } from '../types/AppTypes';
import Reducer from './reducer';

const initialState: statetype = {
    transaction: [],
};

const GlobalContext = createContext(initialState);
const funcContext = createContext<{
    addTransaction: (obj:transactiontype) => void;
    delTransaction: (obj:number) => void 
}>({
    addTransaction: (obj: transactiontype) => null , 
    delTransaction: (obj: number) => null 
});



const GlobalProvider: React.FC<providerType> = ({children}) => {
    const [state,dispatch] = useReducer(Reducer,initialState);

    function addTransaction(obj: transactiontype) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: {
                id: obj.id,
                description: obj.description,
                amount: obj.amount,
                type: obj.type
            }
        })
    }
    
    function delTransaction(obj: number) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            id: obj
        });
    }


    return(
        <GlobalContext.Provider value={{transaction:state.transaction,}}>
            <funcContext.Provider value={{addTransaction,delTransaction}}>
            {children}
            </funcContext.Provider>
        </GlobalContext.Provider>
    )

}

export {GlobalContext,funcContext};
export default GlobalProvider;
