import { useEffect, useState } from "react";

const Cards = () => {

  const [items,setItem] = useState([])
  useEffect(()=>{
      fetch('data.json')
      .then(res => res.json())
      .then(data => console.log(data))
  },[])
  return (
    <div>
      {
        items.map(item=>
          
        )
      }
    </div>
  );
};

export default Card;