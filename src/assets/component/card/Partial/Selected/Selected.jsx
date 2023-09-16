

const Selected = ({item,p}) => {

//  console.log(item,p)
 const {title} =item;
  return (
    <div>
      <p className='text-slate-400'>{p} { title}</p>
    </div>
  );
};



export default Selected;