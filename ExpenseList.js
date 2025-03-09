import React from 'react';
import axios from 'axios';

function ExpenseList({ expenses, refreshExpenses }) {
    const deleteExpense = async (id) => {
        await axios.delete(`http://localhost:5000/api/expenses/${id}`);
        refreshExpenses();
    };

    return (
        <ul>
            {expenses.map(exp => (
                <li key={exp._id}>
                    {exp.title} - ${exp.amount} [{exp.category}]
                    <button onClick={() => deleteExpense(exp._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default ExpenseList;
