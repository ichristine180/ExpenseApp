
export const LIST_EXPENSES = 'LIST_EXPENSES';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export function listExpense() {
    return { type: LIST_EXPENSES }
}

export function addExpenses(newExpense) {
    return { type: ADD_EXPENSE, expense: newExpense }
}