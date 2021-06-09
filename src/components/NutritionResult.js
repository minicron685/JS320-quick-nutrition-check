import React from 'react';

function NutritionResult(props) {
    console.log(props.data, "nr props")

    if (props.data === null) {
        
        return <p>Data will display when you input valid ingeredient(s).</p>

    } else {
        let carbs = props.data.totalNutrients.CHOCDF.quantity;
        let potassium = props.data.totalNutrients.K.quantity;
        let magnesium = props.data.totalNutrients.MG.quantity;
        let sodium = props.data.totalNutrients.NA.quantity;
        let saturatedFat = props.data.totalNutrients.FASAT.quantity;

        let date = Date()


        const save = () => {
            let localData = [{date, carbs, potassium, magnesium, sodium, saturatedFat}]

            let existingEntries = JSON.parse(localStorage.getItem("nutritionHistory"));
            
            Array.prototype.push.apply(localData, existingEntries);
            
            localStorage.setItem("nutritionHistory", JSON.stringify(localData))
        }
        
        return (
            <>
                <div className="card">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Saturated Fat: {saturatedFat}g</li>
                        <li className="list-group-item">Carbs: {carbs}g</li>
                        <li className="list-group-item">Potassium: {potassium}mg</li>
                        <li className="list-group-item">Magnesium: {magnesium}mg</li>
                        <li className="list-group-item">Sodium: {sodium}mg</li>
                    </ul>
                    
                </div>
                <button onClick={save} className="btn btn-secondary" style={{marginTop: 10}}>Save to history</button>
            </>

        )
    }
}

export default NutritionResult;

