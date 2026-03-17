import React, { useContext } from 'react'
import Image from "../../../public/assets/cutecat.jpg"
import { GlobalContext } from './ContextApi'
import Footer from './Footer'

const Rightbar = () => {

    const users = useContext(GlobalContext)
    const user = users[0]

    const suggestions = [
        {
            username: "Alexa...qsp",
            profile: "https://tse1.mm.bing.net/th/id/OIP.8UA3jlqPKACclFgQvGsOxwHaHa?w=2000&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        {
            username: "Alexa...qsp",
            profile: "https://files.idyllic.app/files/static/4035133"
        },
        {
            username: "Alexa...qsp",
            profile: "https://tse3.mm.bing.net/th/id/OIP.xv555biASc4TqWjT4GN1FwHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3://tse1.mm.bing.net/th/id/OIP.8UA3jlqPKACclFgQvGsOxwHaHa?w=2000&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        {
            username: "Alexa...qsp",
            profile: "https://tse1.mm.bing.net/th/id/OIP.o2vCzQhZEBP6igAtv7V0CQHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3"
        },
        {
            username: "Alexa...qsp",
            profile: "https://tse2.mm.bing.net/th/id/OIP.TCiMOFpEhdl1fZteRMDXxQAAAA?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3"
        },

    ]

    return (
        <div className=' h-full w-full flex flex-col gap-3 items-center pt-5 '>
            <div className=' w-full flex gap-2 items-center justify-center'>
                <p className=' w-[72%] flex items-center justify-between p-1'>
                    <span className='flex items-center gap-2'>
                        <img className='h-[45px] w-[45px] rounded-full flex items-center' src={user.image} alt="" />
                        <span className=' font-semibold'>{user.username}</span>
                    </span>
                    <span className='text-blue-600 font-semibold text-xs hover:cursor-pointer'>Switch</span>
                </p>
            </div>

            <p className=' w-[72%] flex justify-between items-center '>
                <span className='text-sm font-semibold'>Suggested for you</span>
                <span className='text-sm font-semibold hover:cursor-pointer'>see All</span>
            </p>

            <div className=' w-full'>
                {
                    suggestions.map((e, index) => {
                        return (
                            <div key={index} className=' w-full flex gap-2 p-1'>


                                <p className=' w-full flex items-center justify-around'>
                                    <span className='flex items-center gap-2'>
                                        <img className='h-[45px] w-[45px] rounded-full flex items-center justify-center' src={e.profile} alt="" />
                                        <span className=' font-semibold'>{e.username}</span>
                                    </span>
                                    <span className='text-blue-600 font-semibold text-xs hover:cursor-pointer'>Follow</span>
                                </p>

                            </div>
                        )
                    })
                }
            </div>
            <div className='w-[90%] flex items-center justify-center '>
                <Footer/>
            </div>
        </div>
    )
}

export default Rightbar