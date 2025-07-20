import React, { useState } from "react";

function AddGoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    savedAmount: 0,
    category: "",
    deadline: "",
    createdAt: new Date().toISOString().split("T")[0],
  });

  function handleSubmit(e) {
    e.preventDefault();
    onAddGoal({ ...formData, id: crypto.randomUUID() });
    setFormData({ ...formData, name: "", targetAmount: "", category: "", deadline: "" });
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Goal</h2>
      <input name="name" placeholder="Goal name" onChange={handleChange} value={formData.name} />
      <input name="targetAmount" placeholder="Target Amount" onChange={handleChange} value={formData.targetAmount} />
      <input name="category" placeholder="Category" onChange={handleChange} value={formData.category} />
      <input type="date" name="deadline" onChange={handleChange} value={formData.deadline} />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default AddGoalForm;
