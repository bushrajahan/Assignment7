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
      <p>{items.length}</p>
      {
        items.map(item =>
          <Card item ={item}></Card>
          )
      }
      
    </div>
  );
};

export default Cards;