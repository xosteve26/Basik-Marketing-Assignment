import React, {useState, useEffect} from 'react'
import Skeleton from './Skeleton'
import axios from 'axios'

import DataCard from './DataCard'

const Layout = () =>  {
  const [users,SetUsers] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch('https://randomuser.me/api/?results=12')
            const data = await response.json()
            SetUsers(data.results)
        }
        fetchData()
    },[])

   
    return (
        <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Our Team</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">The Heart & Soul Of Our Basik Marketing Family That Breathe Life Into Our Company</p>
    </div>
    <div class="flex flex-wrap -m-2">
      {users.length == 0 &&
      <><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /></>}

     {users && users.map(user => <DataCard key={user.login.uuid} user={user} />)}
    </div>
  </div>
</section>
    )
}

export default Layout
