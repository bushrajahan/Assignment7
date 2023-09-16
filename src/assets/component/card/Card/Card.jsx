/* eslint-disable react/no-unknown-property */
import PropTypes from 'prop-types';
import { FaDollarSign } from 'react-icons/fa'
import { FaBookOpen } from 'react-icons/fa';

const Card = ({item}) => {
  console.log(item)
  const {id,img,title,details,price,credit} = item;
  return (
    <div>
      
      <div className="card  bg-base-100 shadow-xl ">
  <figure><img src={img} alt="language" className="w-full h-64" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{details}</p>
     <div className="flex justify-between">
        <div >
          <p className='flex justify-center items-center gap-2'><FaDollarSign /> Price: {price}</p>
        </div>
        <div >
          <p className='flex justify-center items-center gap-2'> <FaBookOpen/>  credit: {credit}</p>
        </div>
        
     </div>
     
    <div>
    
    </div>
    <div className="card-actions ">
      <button className="btn  bg-blue-400 text-white w-full capitalize">Select</button>
    </div>
  </div>
</div>
    </div>
  );
};

Card.propTypes = {
  
};

export default Card;