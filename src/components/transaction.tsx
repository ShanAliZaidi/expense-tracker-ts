import React, {useState,useContext} from 'react';
import { funcContext } from '../context/globalState';


const Transaction = () => {

    

    const [description,setDescription] = useState('');
    const [amount,setAmount] = useState(0);
    const [type,setType] = useState({selectedOption:'minus'});

    const {addTransaction}  = useContext(funcContext);

    const onSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();

        const aTransaction= {
            id: new Date().getTime(),
            description,
            amount,
            type 
        }
        addTransaction(aTransaction)
        
    }
    
    
   
    
    const onValueChange = (e:React.FormEvent<HTMLInputElement>) => {
        setType({
          selectedOption: e.currentTarget.value
        });
      }

    return (
        <div>
            <h2>Add New Transaction</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <h3>Transaction Type</h3>
                    <input  type="radio" 
                        id="plus" 
                        name="transactiontype" 
                        value="plus"
                        checked={type.selectedOption === "plus"}
                        onChange={onValueChange}
                    />
                    <label htmlFor="plus">Add</label>
                    <input  type="radio" 
                        id="minus" 
                        name="transactiontype" 
                        value="minus"
                        checked={type.selectedOption === "minus"}
                        onChange={onValueChange}
                    />
                    <label htmlFor="minus">Minus</label>
                </div>
                <div>
                <input  type="text"
                        placeholder="Description"
                        id="description"
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                ></input>
                <input  type="number" 
                        placeholder="Amount"
                        id="amount"
                        value={amount}
                        onChange={(e)=>setAmount(parseFloat(e.target.value))}
                ></input>
                </div>
                <input className="btn"  type="submit" value="Add Transaction"/>
                
            </form>
        </div>

    )
}

export default Transaction