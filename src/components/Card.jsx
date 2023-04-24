import React from 'react'

import { AiFillStar } from 'react-icons/ai';


const Card = (props) => {

    let status 
    if(props.item.stat === true) {
        status = "SOLD OUT"
    }else{
     status = "ONLINE"
    }


    return (
        <div >
           
            <div className="content p-5 mt-5 w-[225px] ">
                <div className="relative ">
                <img className='w-[176px] ' src={props.item.img}/>    
<div className="badge absolute  top-[3%] left-[3%] ">  
 {
   status && <span className='py-1 px-2  bg-[#ffffff] rounded-[2px] text-[12px] uppercase'>{status}</span> 
}
 </div>
                </div>
                <div className="card-details mt-2">
                    <span className='flex items-center gap-2 text-[14px] text-[#918E9B]'> <AiFillStar color='#FE395C' />
                        <h3 className='text-black'>{props.item.rating}</h3>
                        ({props.item.reviewCount}) &bull; {props.item.country}
                    </span>
                    <p className='text-[14px] pt-1'>{props.item.title}</p>
                    <h3 className='font-bold'>{`From $${props.item.price}`}<span className='font-light'> / person</span></h3>
                </div>
            
</div>

        </div>
    )

}

export default Card
