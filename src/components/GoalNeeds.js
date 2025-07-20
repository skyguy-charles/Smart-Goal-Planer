import React from "react";
import GoalItem from "./Goals";
function GoalNeeds({ goals, onUpdateGoal, onDeleteGoal }) {
  return (
    <div>
      <h2>Goals</h2>
      {goals.map((goal) => (
    <GoalItem key={goal.id} goal={goal} onUpdateGoal={onUpdateGoal} onDeleteGoal={onDeleteGoal} />
      ))}
    </div>
  );
}

export default GoalNeeds;
