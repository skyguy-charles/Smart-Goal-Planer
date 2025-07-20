import React, { useState } from "react";
function DepositForm({ goals, onUpdateGoal }) {
  const [selectedId, setSelectedId] = useState("");
  const [amount, setAmount] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const goal = goals.find((g) => g.id === selectedId);
    if (goal) {
      const updated = {
        savedAmount: Number(goal.savedAmount) + Number(amount),
      };
      onUpdateGoal(selectedId, updated);
      setAmount("");
    }
  }
  return ( 

    <form onSubmit={handleSubmit}>
      <h2>Make a Deposit</h2>
      <select onChange={(e) => setSelectedId(e.target.value)} value={selectedId}>
        <option value="">Select Goal</option>
        {goals.map((goal) => (
          <option key={goal.id} value={goal.id}>{goal.name}</option>
          
        ))},
      </select>
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button type="submit">Deposit</button>
    </form>
  );
}
export default DepositForm;
