import { useEffect, useState } from "react";
import './App.css'
import Cards from './assets/component/card/Cards'
import Partial from './assets/component/card/Partial/Partial'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  const [items,setItem] = useState([])
  const [selectedCards,setSelectedCards] = useState([]);
  const [credits,setCredit] = useState(20)
  const [count,setCount] = useState(0)
  const [price,setPrice] =useState(0)
  useEffect(()=>{
      fetch('data.json')
      .then(res => res.json())
      .then(data => setItem(data))
  },[])

  const handleCard = (item) =>{
    // console.log(item)
    let price = item.price;
    let  count =parseInt(item.credit.replace(/\D/g,'')); 
    const isExit = selectedCards.find(card => card.id === item.id )
    if(isExit){
       return toast.warn("The data is already Exist", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000, // Time in milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    

    else {
   
         
          {
            selectedCards.forEach(card =>{
                 count += parseInt(card.credit.replace(/\D/g,''))
                   price +=card.price
            }
              )
          }
          // console.log(price)
          
           let remeaningCredit = 20 - count;
          if(remeaningCredit <0){
            return toast.warn("Oops !! Credit is Empty", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 5000, // Time in milliseconds
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          }

          // console.log(remeaningCredit)
            // console.log(count)
           setCount(count)
            setPrice(price)
            setCredit(remeaningCredit);
       const cards = [...selectedCards,item];
       setSelectedCards(cards)
    }
     
  
   
  }
  return (
    <>
    
      <h1 className='text-center text-bold'>Course Registation</h1>
       <div className='flex flex-col lg:flex-row gap-2'>
         <div className='md:w-9/12'>
            <Cards items ={items} handleCard={handleCard}></Cards>
         </div>
         <div className=''>
        
            <Partial price={price} count={count} credits = {credits} selectedCards = {selectedCards}></Partial>        
       
   
    </div>
        
        </div>     
   
    </>
  )
}

export default App
