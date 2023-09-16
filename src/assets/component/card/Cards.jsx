

import Card from "./Card/Card";

const Cards = ({items,handleCard}) => {
    //  console.log(items)

  return (
       
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-7">
        
      {
        items.map(item =>
    
          <Card key={item.id} item ={item} handleCard={handleCard}></Card>
          )
      }
      
    </div>
    </div>
  );
};

export default Cards;