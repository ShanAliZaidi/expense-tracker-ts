import React, { useContext } from 'react';

// Import Transaction Component


// Import the Global State
import { funcContext, GlobalContext } from '../context/globalState';


const History = () => {

    const { transaction } = useContext(GlobalContext);
    const {delTransaction} = useContext(funcContext);
    

    return (
        <div>
            <h3>
                Transaction History
            </h3>
            <ul className="list">
               {transaction.map((obj) => {
                   return(
                   <li key={obj.id}>
                       <span>{obj.description}</span>
                       <span>{obj.amount}</span>
                       <span>{obj.type.selectedOption}</span>
                       <button onClick={() => delTransaction(obj.id)}>X</button>                         
                   </li>

                   )
               })}
            </ul>
        </div>
    )
}

export default History;