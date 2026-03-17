import React, { useContext } from 'react'
import IMG from "../../../public/assets/cutecat.jpg"
import { GlobalContext } from './ContextApi'

const Story = () => {

    const client = useContext(GlobalContext)
    
    return (
        <div className='w-[100%] h-full flex items-center gap-3 overflow-y-hidden overflow-x-auto no-scrollbar p-1'>
            {
                client.map((user, index) => {
                    return (
                        <div  key={index} className='h-auto w-auto flex flex-col items-center justify-center flex-shrink-0 p-0.5'>
                            <div  className='p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 h-[85px] w-[85px] hover:cursor-pointer'>
                                <div className=' h-full w-full rounded-full bg-white p-[2px]  flex items-center justify-center'>
                                    <img src={user.image} alt="" className='rounded-full object-cover overflow-hidden h-full w-full' />
                                </div>
                            </div>
                            <p className='text-sm font-mono'>{user.username}</p>
                        </div>

                    )
                })
            }

        </div>
    )
}

export default Story