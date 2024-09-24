import React, { useState , useEffect } from 'react'

import { useLoaderData } from 'react-router-dom';

function Github() {
   const data=useLoaderData();
    // const[data , setdata]=useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/akshaykothule')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         setdata(data);

    //     })
    
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl p-4'>
      Github Follwers :{data.followers}
      <img  src={data.avatar_url} alt="git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader=async()=>{
    const response= await fetch('https://api.github.com/users/akshaykothule')
    return response.json();
}
