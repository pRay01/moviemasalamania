import Avatar from '@mui/material/Avatar'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AiOutlineLogout } from 'react-icons/ai'
import { BiDish } from 'react-icons/bi'
import {RiDashboardLine} from 'react-icons/ri'
import {FaHotel} from 'react-icons/fa'
import Dashboard from "../Dashboard"
const Section1 = () => {
  const [key, setKey] = useState(0)
  const dispatch = useDispatch()
  const router = useRouter()
  const { user, loading } = useSelector((state: any) => ({
    user: state.auth_reducer.user,
    loading: state.auth_reducer.loading,
  }))

  useEffect(() => {
    if (!user?.email) {
      router.push('/')
    }
  }, [user])
  function logout() {
    localStorage.clear()
    dispatch({ type: 'LOGOUTUSER' })
    router.push('/')
  }
  return (
    <div className="flex flex-wrap justify-center p-6 pt-16  lg:px-16">
      <div className="h-full w-full bg-brand_blue_light p-6 md:w-3/12">
        <div className=" flex justify-center">
          <Avatar
            sx={{ bgcolor: '#82cfad', width: 100, height: 100 }}
            alt={user?.name}
            src={user?.img}
          />
        </div>
        <div>
          <h5 className="pt-2 text-center text-white text-sm font-bold capitalize">
            {user?.name}
          </h5>
          <h5 className=" text-center text-gray-200 text-xs capitalize">{user?.email}</h5>
        </div>
        <hr className="mt-3" />
        <div className="mt-3 ">
          <button
            className="mb-2 text-white w-full flex  items-center rounded-none py-3 text-brand_gray hover:bg-blue-200 hover:text-brand_gray"
            onClick={() => setKey(0)}
          >
            <RiDashboardLine  /><div  className='px-2 '> Dashboard</div>
          </button>
        
          <button
            onClick={() => logout()}
            className="w-full text-white flex  items-center rounded-none py-3 text-brand_red hover:bg-blue-200 hover:text-brand_red"
          >
            <AiOutlineLogout /> <div className='px-2'> Log Out</div>
          </button>
        </div>
      </div>
      <div className="w-full md:w-9/12">
        {key === 0 && <Dashboard />}
      </div>
    </div>
  )
}

export default Section1
