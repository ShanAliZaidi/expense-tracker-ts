import {transactiontype,statetype} from './../types/AppTypes'

const Reducer =  (state:statetype, action: any) => {
    switch(action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transaction: [action.payload, ...state.transaction]
            }
        case 'DELETE_TRANSACTION':
                return{transaction: state.transaction.filter((item: transactiontype) => item.id !== action.id)}
        default:
            return state;
    };

}

export default Reducer;