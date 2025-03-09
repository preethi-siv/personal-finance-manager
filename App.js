import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Navbar from './components/Navbar';
import axios from 'axios';

function App() {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        fetchExpenses();
    }, []);

    const fetchExpenses = async () => {
        const res = await axios.get('http://localhost:5000/api/expenses');
        setExpenses(res.data);
    };

    return (
        <div className="App">
            <Navbar />
            <ExpenseForm refreshExpenses={fetchExpenses} />
            <ExpenseList expenses={expenses} refreshExpenses={fetchExpenses} />
        </div>
    );
}

export default App;
