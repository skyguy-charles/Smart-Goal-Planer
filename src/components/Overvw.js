import React from "react";

function Overvw({ goals }) {
  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const completed = goals.filter((g) => g.savedAmount >= g.targetAmount).length;
  
  return (
    <div>
     <h2>Overvw</h2>
     <p>Total goals: {totalGoals}</p>
    <p>Total savings: ${totalSaved}</p>
  <p>completed goals: {completed}</p>
  </div>
  );
};
export default Overvw;
