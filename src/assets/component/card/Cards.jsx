import { useEffect, useState } from "react";
import Card from "./Card/Card";

const Cards = () => {

  const [items,setItem] = useState([])
  useEffect(()=>{
      fetch('data.json')
      .then(res => res.json())
      .then(data => setItem(data))
  },[])
  return (
       
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-7">
      {
        items.map(item =>
    
          <Card key={item.id} item ={item}></Card>
          )
      }
      
    </div>
    </div>
  );
};

export default Cards;