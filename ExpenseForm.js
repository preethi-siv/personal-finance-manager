import React, { useState } from 'react';
import axios from 'axios';

function ExpenseForm({ refreshExpenses }) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    const addExpense = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/expenses', { title, amount, category });
        refreshExpenses();
        setTitle('');
        setAmount('');
        setCategory('');
    };

    return (
        <form onSubmit={addExpense}>
            <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input placeholder="Amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <input placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
            <button type="submit">Add Expense</button>
        </form>
    );
}

export default ExpenseForm;
