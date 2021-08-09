
export const LIST_EXPENSES = 'LIST_EXPENSES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const SET_EXPENSES = 'SET_EXPENSES';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';
export const UPDATE_EXPENSES = 'UPDATE_EXPENSES';
export const fectExpenses = () => {

    return async (dispatch, getState) => {
        const token = getState().auth.token;
        try {
            const response = await fetch(`https://myexepense-default-rtdb.firebaseio.com/expenses.json?auth=${token}`);

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const expenses = await response.json()
            const loadedExpenses = [];
            for (const key in expenses) {
                const expense = {
                    title: expenses[key].title,
                    amount: expenses[key].amount,
                    id: key,
                    date: expenses[key].date,
                    discription: expenses[key].discription
                }
                loadedExpenses.push(expense)
            }

            dispatch({ type: SET_EXPENSES, expenses: loadedExpenses })

        } catch (err) {
            throw err;
        }
    }
}

export function listExpense() {
    return { type: LIST_EXPENSES }
}

export function addExpenses(newExpense) {
    return async dispatch => {
        try {
            const response = await fetch('https://myexepense-default-rtdb.firebaseio.com/expenses.json', {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify(newExpense)
            });
            
            if (!response.ok) throw new Error('sorry! something went wrong!');
            const resData = await response.json();
            dispatch(
                {
                    type: ADD_EXPENSE,
                    expense: {
                        title: newExpense.title,
                        amount: newExpense.amount,
                        discription: newExpense.discription,
                        id: resData.name
                    }
                }
            )
        } catch (error) {
            throw error;
        }
    }
}

export function deleteExpense(expId) {
    return async dispatch => {
        try {
            const response = await fetch(`https://myexepense-default-rtdb.firebaseio.com/expenses/${expId}.json`, {
                method: 'DELETE'
            })
            if (!response.ok) throw new Error('sorry! Expense not deleted. something went wrong!')
            dispatch(
                { type: DELETE_EXPENSES, id: expId }
            )
        } catch (error) {
            throw error;
        }
    }
}

export function updateExpenses(expenses) {
    return async dispatch => {
        try {
            const response = await fetch(`https://myexepense-default-rtdb.firebaseio.com/expenses/${expenses.id}.json`, {
                method: 'PATCH',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify(expenses)
            })
            if (!response.ok) throw new Error('sorry! something went wrong!')
            dispatch(
                { type: UPDATE_EXPENSES, expense: expenses }
            )
        } catch (error) {
            throw error;
        }
    }
}