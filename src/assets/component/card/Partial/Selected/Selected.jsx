import React from 'react';
import PropTypes from 'prop-types';

const Selected = ({item,p}) => {

//  console.log(item)
 const {title} =item;
  return (
    <div>
      <p className='text-slate-400'>{p} { title}</p>
    </div>
  );
};

Selected.propTypes = {
  
};

export default Selected;