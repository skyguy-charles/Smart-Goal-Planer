import React from "react";

function Goals({ goal, onUpdateGoal, onDeleteGoal }) {
  const percent = (goal.savedAmount / goal.targetAmount) * 100;
  const remaining = goal.targetAmount - goal.savedAmount;
  const deadline = new Date(goal.deadline);
  const daysLeft = Math.ceil((deadline - new Date()) / (1000 * 60 * 60 * 24));
  const isOverdue = daysLeft < 0 && goal.savedAmount < goal.targetAmount;
  const warning = daysLeft <= 30 && !isOverdue;

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{goal.name}</h3>
      <p>Category: {goal.category}</p>
      <p>Target: ${goal.targetAmount}</p>
      <p>Saved: ${goal.savedAmount}</p>
      <p>Remaining: ${remaining}</p>
      <progress value={goal.savedAmount} max={goal.targetAmount}></progress>
      <p>Deadline: {goal.deadline} ({isOverdue ? "Overdue" : `${daysLeft} days left`})</p>
      {warning && <p style={{ color: "red" }}>⚠️ Deadline approaching!</p>}
      {goal.savedAmount >= goal.targetAmount && <p style={{ color: "green" }}>✅ Goal Complete!</p>}
      <button onClick={() => onDeleteGoal(goal.id)}>Delete</button>
    </div>
  );
}

export default Goals;
