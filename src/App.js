import { useState } from "react";
import Ingredient from "./components/Ingredient";
import NutritionResult from "./components/NutritionResult";
import History from "./components/History";

function App() {
  const [total, setTotal] = useState(null)
  return (
    <div className="container">
      <h1 style={{marginBottom: 40}}>Quick Nutrition Check</h1>
      <h3>Enter ingredient and measurement (U.S. system, e.g., 8 oz beef)</h3>
      <p>Input your ingredient(s):</p>

      <Ingredient data={(info) => setTotal(info)} />
      <hr />
      <NutritionResult data={total} />
      <hr />
      <History />

    </div>
  );
}

export default App;
