/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import Selected from './Selected/Selected';

const Partial = ({credits,selectedCards}) => {
  // console.log(selectedCards.length);
  
  
  return (
  

  
  <div className="card bg-base-100 shadow-xl text-primary-content">
  
      
      <div className="card-body">
        <h3 className='text-blue-400'>Credit Hour Remaining {credits} hr</h3>
       {
        selectedCards.map(item=>
            <Selected key={item.id} item={item}></Selected>

        )
       }
       
       <h2 className='card-title'>Total Price : 48000 USD</h2>
      
      
  
</div>
    </div>
  );
};

export default Partial;