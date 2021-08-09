import {
    ADD_EXPENSE,
    SET_EXPENSES,
    DELETE_EXPENSES,
    UPDATE_EXPENSES
} from "../actions/expenses";
import { expenses } from '../../data/expense'
const initialState = {
    expenses: expenses
};


export default function expenseReducer(state = initialState, action) {
    switch (action.type) {
        case SET_EXPENSES:
            return {expenses:action.expenses}
        case ADD_EXPENSE:
            return { ...state, expenses: state.expenses.concat(action.expense) }
        case DELETE_EXPENSES:
            return { ...state, expenses: state.expenses.filter(exp => exp.id !== action.id) }
        case UPDATE_EXPENSES:
            const currentIndex = state.expenses.findIndex(exp => exp.id === action.expense.id);
            const updatedExp = [...state.expenses ];
            updatedExp[currentIndex] = action.expense;
            return { ...state, expenses: updatedExp}
        default: return state
    }


}