import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import { Link } from 'react-router-dom'
function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <div className='mt-28 items-center justify-center text-center '>
        <h1 className='text-2xl  md:text-4xl'>
          We are delighted to have you{" "}
          <span className='text-pink-500'>Here ! :) 

          </span>
        </h1>
        <p className='mt-12'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Autem quos dolore odit in ipsum inventore sunt optio quas beatae. 
          Quo culpa tenetur est. Excepturi eveniet ab placeat autem repellat cupiditate!
        </p>
        <Link to="/">
        <button className='bg-pink-500 text-white px-4 py-2 mt-5 rounded-md hover:bg-pink-800 duration-300'>
          Back
        </button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
        {
          list.map((item)=>(
            <Cards key = {item.id} item ={item}/>
          ))
        }
      </div>
    </div></>
  )
}

export default Course
