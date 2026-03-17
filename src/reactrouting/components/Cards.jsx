import React, { useContext } from 'react'
import { GlobalContext } from './ContextApi'
import { FaHeart, FaLocationArrow } from 'react-icons/fa'
import { LuMessageCircle } from 'react-icons/lu'
import { CiSaveUp2 } from 'react-icons/ci'

const Cards = () => {

    const posts = useContext(GlobalContext)
    return (
        <div className=" h-auto w-full  flex flex-col gap-5 p-3 items-center">
            {
                posts.map((ele, index) => {
                    return (
                        <div key={index} className=' h-auto w-[550px]  p-2 flex flex-col gap-1.5 overflow-hidden'>

                            <div className=' h-auto w-full  flex gap-2 flex items-center gap-3'>
                                
                                <div className='h-[40px] w-[40px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex justify-center items-center'>
                                    <div className='h-[80%] w-[80%] bg-white rounded-full flex justify-center items-center'>
                                        <img className=' h-full w-full p-0.5 rounded-full ' src={ele.image} alt="" />
                                    </div>
                                </div>

                                 <p className='font-semibold w-[80%] flex justify-between'>{ele.username}<span className='font-extrabold pr-3'>...</span></p>
                            </div>

                            <div className=' h-[600px] w-[90%] '>
                                <img src={ele.post} alt=""className='h-full w-full object-cover rounded-[10px] ' />
                            </div>

                            <div className='h-auto w-full flex gap-5 pl-2 font-semibold justify-between'>
                                <div className='h-auto w-[70%] flex gap-5 pl-2 font-semibold'>
                                <span className=' h-auto w-auto'><FaHeart fill='red' size={25} />{ele.likes}</span>
                                <span  className=' h-auto w-auto'><LuMessageCircle  size={25} />{ele.comments}</span>
                                <span  className=' h-auto w-auto'><FaLocationArrow size={25} /></span>
                                </div>

                                <div className=' w-[30%] flex justify-center'><CiSaveUp2 size={30} /></div>
                            </div>
                            <p className='pl-2'>{ele.username}...{ele.text}</p>
                        </div>
                    )
                })
            }
        </div >

    )
}

export default Cards