import { createContext, useReducer } from "react";

const DATA_EXPENSES = [
    {
        id: "e1",
        description: "A pair of shoes",
        amount: 59.99,
        date: new Date("2023-04-18"),
    },
    {
        id: "e2",
        description: "A pair of trousers",
        amount: 89.29,
        date: new Date("2023-05-11"),
    },
    {
        id: "e3",
        description: "Some bananas",
        amount: 5.99,
        date: new Date("2023-06-05"),
    },
    {
        id: "e4",
        description: "A book",
        amount: 14.99,
        date: new Date("2023-07-18"),
    },
    {
        id: "e5",
        description: "Another book",
        amount: 18.59,
        date: new Date("2023-7-18"),
    },
    {
        id: "e10",
        description: "A pair of shoes",
        amount: 59.99,
        date: new Date("2023-04-18"),
    },
    {
        id: "e11",
        description: "A pair of shoes",
        amount: 59.99,
        date: new Date("2023-04-18"),
    },
    {
        id: "e12",
        description: "A pair of trousers",
        amount: 89.29,
        date: new Date("2023-05-11"),
    },
    {
        id: "e13",
        description: "Some bananas",
        amount: 5.99,
        date: new Date("2023-06-05"),
    },
    {
        id: "e14",
        description: "A book",
        amount: 14.99,
        date: new Date("2023-07-18"),
    },
    {
        id: "e15",
        description: "Another book",
        amount: 18.59,
        date: new Date("2023-7-18"),
    },
];

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
    switch (action.type) {
        case "ADD":
            // const id = new Date().toString() + Math.random().toString();
            const id = Math.random().toString();
            return [{ ...action.payload, id: id }, ...state];
        case "DELETE":
            return state.filter((expense) => expense.id !== action.payload);
        case "UPDATE":
            const updatetableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
            );
            const updatetableExpense = state[updatetableExpenseIndex];
            const updateItem = {
                ...updatetableExpense,
                ...action.payload.data,
            };
            const updateedExpenses = [...state];
            updateedExpenses[updatetableExpenseIndex] = updateItem;
            return updateedExpenses;
        default:
            return state;
    }
}

function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(
        expensesReducer,
        DATA_EXPENSES
    );

    function addExpense(expenseDate) {
        dispatch({ type: "ADD", payload: expenseDate });
    }

    function deleteExpense(id) {
        dispatch({ type: "DELETE", payload: id });
    }

    function updateExpense(id, expenseDate) {
        dispatch({ type: "UPDATE", payload: { id: id, data: expenseDate } });
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };

    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    );
}

export default ExpensesContextProvider;
