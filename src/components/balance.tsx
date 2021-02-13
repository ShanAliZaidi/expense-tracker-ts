import React,{useContext} from 'react';
import { GlobalContext } from '../context/globalState';


const Balance = () => {

    const  {transaction} = useContext(GlobalContext);


    
    const expense = transaction.filter((obj)=> {return (obj.type.selectedOption === "minus")}).map((obj) => {return (obj.amount)});
    const earning = transaction.filter((obj)=> {return (obj.type.selectedOption === "plus")}).map((obj) => {return (obj.amount)});
    const reducer = (acc:any, item:any) =>  acc + item;
    const newexpense = expense.reduce(reducer,0);
    const newearning = earning.reduce(reducer,0);
    
    
    const balance = newearning - newexpense
  

    
 
    return(
        <div className="money">
            <h2>Current Balance</h2>
            <h1>{balance}</h1>
        </div>

    )
}

export default Balance