import {
    ADD_EXPENSE,
} from "../actions/expenses";
import { expenses } from '../../data/expense'
const initialState = {
    expenses: expenses
};


export default function expenseReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_EXPENSE:
            return { ...state, expenses: state.expenses.concat(action.expense) }

        default: return state
    }


}