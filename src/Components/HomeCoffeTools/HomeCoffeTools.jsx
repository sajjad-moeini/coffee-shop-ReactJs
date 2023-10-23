import React from 'react'
import './HomeCoffeTools.css'
import store from '../../Store'
export default function HomeCoffeTools() {
  return (
    <>
    <div className="row my-5">
       {store.coffeeTools.map((tool,index)=>(
     <div className="col-12 col-sm-6 col-md-3 d-flex-centering flex-column mt-5" key={index}>
     <img src={tool.img} className='img-fluid' alt="" />
     <div className="h4 my-3">
     {tool.title}
     </div>
     <p className='text-center w-75 mx-auto text-secondary'>
     Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.
     </p>
</div>
       ))}
  
    </div>
    </>
  )
}
