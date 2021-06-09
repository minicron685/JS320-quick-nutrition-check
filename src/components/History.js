import React from 'react';

function History() {
    let existingEntries = JSON.parse(localStorage.getItem("nutritionHistory"));
    console.log(existingEntries);
    if (existingEntries == null) {
        return <p>No saved entry at this time.</p>
    }
    return (
        <div>
            <h4>Your saved history:</h4>
            {existingEntries.map((entry, index) => {
                return (
                    <li style={{display:"block"}} href="" key={index}>{index+1}. {entry.date} (Carb:{entry.carbs}g, Saturated Fat:{entry.saturatedFat}mg, Sugaer: {entry.sugar}mg, Sodium: {entry.sodium}mg)</li>
                )
            })}
        </div>
    )
    
}

export default History

