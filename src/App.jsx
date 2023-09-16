import { useEffect, useState } from "react";
import './App.css'
import Cards from './assets/component/card/Cards'
import Partial from './assets/component/card/Partial/Partial'
import { Toast } from "react-toastify/dist/components";

function App() {
  
  const [items,setItem] = useState([])
  const [selectedCards,setSelectedCards] = useState([]);
  const [credits,setCredit] = useState(20)
  useEffect(()=>{
      fetch('data.json')
      .then(res => res.json())
      .then(data => setItem(data))
  },[])

  const handleCard = (item) =>{
    // console.log(item)
    let  count =parseInt(item.credit.replace(/\D/g,'')); 
    const isExit = selectedCards.find(card => card.id === item.id )
    if(isExit){
       alert('hello world')
    }
    

    else {

          {
            selectedCards.forEach(card =>
              
                 count += parseInt(card.credit.replace(/\D/g,''))
              )
          }

          let remeaningCredit = 20 - count;

          if(remeaningCredit <=0){
            alert('credit hour is ends');
          }
          
          console.log(remeaningCredit)
            console.log(count)
            setCredit(remeaningCredit);
       const cards = [...selectedCards,item];
       setSelectedCards(cards)
    }
     
  
   
  }
  return (
    <>
    
      <h1 className='text-center text-bold'>Course Registation</h1>
       <div className='flex flex-col md:flex-row gap-2'>
         <div className='md:w-9/12'>
            <Cards items ={items} handleCard={handleCard}></Cards>
         </div>
         <div className=''>
        
            <Partial credits = {credits} selectedCards = {selectedCards}></Partial>        
       
   
    </div>
        
        </div>     
   
    </>
  )
}

export default App
