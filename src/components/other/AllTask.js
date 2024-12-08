import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const[userData,setUserData]=useContext(AuthContext)
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded'>

        <h2 className='text-lg w-1/5 '>Employee Name</h2>
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h3 className='text-lg font-medium w-1/5'>New Task</h3>
        <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5'>Completed</h5>
        <h5 className='text-lg font-medium w-1/5'>Failed</h5>
      </div>
      <div className='='>
        {userData.map(function(elem,idx){

          return <div key={idx} className='mb-2 py-2 px-4 flex justify-between rounded'>
          <h2 className='w-1/5 text-lg font-medium'>{elem.firstName}</h2>
          <h3 className='w-1/5 text-lg font-medium text-blue-400'>{elem.taskNumbers.new}</h3>
          <h5 className='w-1/5 text-lg font-medium text-yellow-400'>{elem.taskNumbers.active}</h5>
          <h5 className='w-1/5 text-lg font-medium text-white'>{elem.taskNumbers.completed}</h5>
          <h5 className='w-1/5 text-lg font-medium text-red-600'>{elem.taskNumbers.failed}</h5>
          </div>
        })}
      </div>
      
    </div>
  )
}

export default AllTask
