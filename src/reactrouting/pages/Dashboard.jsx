import React, { useRef, useState } from 'react'
import { BsCameraReelsFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { CiLocationArrow1 } from 'react-icons/ci'
import { FaHome, FaPlusSquare, FaRegHeart, FaSearch } from 'react-icons/fa'
import { LuInstagram } from 'react-icons/lu'
import { MdExplore } from 'react-icons/md'
import { RxDashboard, RxHamburgerMenu } from 'react-icons/rx'
import Story from '../components/Story'
import Cards from '../components/Cards'
import Rightbar from '../components/Rightbar'
import { Link } from 'react-router'

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(true)
  const[theme,setTheme] = useState("light")

  const changeTheme =()=>{
    setTheme( theme === "light" ? "dark" : "light")
  }

  // const themeref = useRef(null)

  // const changeTheme=()=>{
  //   if(themeref.classList.contains("dark")){
  //   themeref.classList.remove("dark")
  //   themeref.classList.add("light")
  // }
  // else{
  //   themeref.classList.remove("light")
  //   themeref.classList.add("dark")
  // }
  // return themeref
  // }

  const leftbar = [
    {
      id: 1,
      name: "Home",
      icon: <FaHome size={25} />,
      path:"/home"
    },
    {
      id: 2,
      name: "Reels",
      icon: <BsCameraReelsFill size={25} />
    },
    {
      id: 3,
      name: "Messages",
      icon: <CiLocationArrow1 size={25} />
    },
    {
      id: 4,
      name: "Search",
      icon: <FaSearch size={25} />
    },
    {
      id: 5,
      name: "Explore",
      icon: <MdExplore size={25} />
    },
    {
      id: 6,
      name: "Create",
      icon: <FaPlusSquare size={25} />
    },
    {
      id: 7,
      name: "Likes",
      icon: <FaRegHeart size={20} />
    },
    {
      id: 8,
      name: "Profile",
      icon: <CgProfile size={25} />
    }
  ]
  return (
    <div className={` w-full h-auto p-3 flex gap-5 relative ${theme} ` }>

      <div
        className={`h-full w-[20%]  flex flex-col  rgap-5 fixed top-0 left-0 
         transition-all duration-300 ease-in-out overflow-hidden p-4 `}>
        <h1 className=' p-2 flex justify-start pl-5 rounded-xl'><LuInstagram size={25} className='hover:text-bold cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.03]' /></h1>
        <div className=' w-full h-[80%] flex  flex-col items-start'>
          <ul className=' w-full h-[85%] flex flex-col  items-start gap-4'>

            {
              leftbar.map((ele) => {
                return (
                  <li key={ele.id} className=' w-full group flex items-center gap-7 px-4 py-2 rounded-lg cursor-pointer text-[17px]
                 transition-all duration-100 ease-in-out 
                 hover:bg-gray-100 hover:scale-[1.03] hover:font-semibold'>
                    <span>{ele.path ? (<Link to={ele.path}>{ele.icon}</Link>) : (ele.icon)}</span>
                    <span className={`  whitespace-nowrap transition-all duration-300 ${collapsed ? "-translate-x-5 opacity-0 " : " translate-x-0 opacity-100"}`}>{ele.name}</span></li>

                )
              })
            }
            <div className=' h-[15%] w-full flex flex-col gap-5 items-start pl-4.5 mt-5 '>
              <h1 ><RxHamburgerMenu size={25} className='transition-all duration-200 ease-in-out cursor-pointer hover:scale-[1.03] hover:text-bolder hover:bg-gray-100 w-full' onClick={() => setCollapsed(!collapsed)} /></h1>
              <h1><RxDashboard onClick={changeTheme} size={25} className='transition-all duration-200 ease-in-out hover:scale-[1.03] cursor-pointer hover:text-bolder hover:bg-gray-100 w-full' /></h1>
            </div>
          </ul>

        </div>

      </div>

      <div className='flex h-auto w-[80%] ml-[20%] gap-25 '>
        <div className={` w-[50%] h-full gap-3 flex flex-col `}>
          <div className=' w-full h-[17%] flex justify-between items-center '>
            <Story />
          </div>

          <div className=' h-auto w-full bg-white flex items-center justify-center flex-col'>
            <Cards />
          </div>
        </div>

        <div className=' h-[60%] w-[30%] flex flex-col '>
          <Rightbar />
        </div>
      </div>
    </div>
  )
}

export default Dashboard