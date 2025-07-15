import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    
    const [gymData,setGymData]=useState([])

    useEffect(() =>{
        fetch('Option.json')
        .then(res => res.json())
        .then(data =>setGymData(data))
    },[])
    return (
        <div className="m-12">

           <div className="grid grid-cols-3 gap-6">
             {
                gymData.map(price => <PriceOption
                key={price.id}
                price1={price}
                ></PriceOption>)
            }
           </div>
            
        </div>
    );
};

export default PriceOptions;