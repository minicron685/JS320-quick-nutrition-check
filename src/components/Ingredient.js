import React, {useState, useEffect} from 'react';

//
//
//
//
// Require API key from Edamam (https://https://developer.edamam.com/)
const APP_ID = ""
const APP_KEY = ""
//
//
//
//


function Ingredient(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [items, setItems] = useState(null);
    const [total, setTotal] = useState(null);

    useEffect(() => {
        if (items === null) {
            return console.log ("null, please input")
        } else {
            fetch(`https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${items}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    console.log(result, "fetch");
                    setTotal(result);
                },
                (error) => {
                    setIsLoaded(false);
                    setError(error);
                }
            )
        }
    }, [items])

    useEffect(() => {
        props.data(total)
    }, [total])

    const addRecord = () => {  
        if (document.getElementById('foodid').value === "") {
            return console.log("add something")
        } else {
            setItems(document.getElementById('foodid').value);
        }
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <input id="foodid" className="form-control" type="text" placeholder="e.g. 8 oz beef and 1 cup rice" style={{marginBottom: 10}} />

                <button onClick={addRecord} className="btn btn-primary">Submit</button>
            </div>
        );
    }
}

export default Ingredient;
