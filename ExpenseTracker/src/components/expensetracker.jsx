import React, { useEffect, useState } from 'react'

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [expenseamt, setExpenseamt] = useState("");
  const [category, setCategory] = useState("");
  
  // useEffect(() => {
  //   const storedexpenses = localStorage.getItem('expenses');
  //   if (storedexpenses) {
  //     setExpenses(JSON.parse(storedexpenses)); 
  //   }
  // }, []);

  // useEffect(()=>{
  //   localStorage.setItem("expenses", JSON.stringify(expenses));
  // },[expenses])

  const addExpense = () => {
    if (!category || !expenseamt) return;
    const newexpense = {
      id: Date.now(),
      expenseamt:Number(expenseamt),
      category,
    };
    setExpenses([...expenses, newexpense]);
    setExpenseamt("")
    setCategory("")
  }

  const delExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  }
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
      <h1 className="text-2xl font-bold text-center mb-4">💸 Expense Tracker</h1>

      <div className="flex flex-col gap-3 mb-4">
        <input
          type="number"
          placeholder="Enter amount"
          value={expenseamt}
          onChange={(e) => setExpenseamt(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Enter category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addExpense}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add Expense
        </button>
      </div>

      <ul className="space-y-3">
        {expenses.map((expense) => (
          <li
            key={expense.id}
            className="flex justify-between items-center bg-gray-50 p-3 rounded-md border border-gray-200"
          >
            <span>
              ₹ {expense.expenseamt} — <span className="font-medium">{expense.category}</span>
            </span>
            <button
              onClick={() => delExpense(expense.id)}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  </section>
  )
}

export default ExpenseTracker;