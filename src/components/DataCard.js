import React from 'react'

const DataCard = (props) => {
    console.log(props.user)
    return (
//         <figure class="p-2 lg:w-1/3 md:w-1/2 w-full">
//   <img class="w-32 h-32 md:w-48 md:h-auto md:rounded-full rounded-full mx-auto" src={props.user.picture.large} alt="" width="384" height="512" />
//   <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
//     <blockquote>
//       <p class="text-lg font-semibold">
//         “Tailwind CSS is the only framework that I've seen scale
//         on large teams. It’s easy to customize, adapts to any design,
//         and the build size is tiny.”
//       </p>
//     </blockquote>
//     <figcaption class="font-medium">
//       <div class="text-cyan-600">
//         {props.user.name.title} {props.user.name.first} {props.user.name.last}
//       </div>
      
//       <div class="text-gray-500">
//         Staff Engineer, {props.user.location.country} , {props.user.location.city}
//       </div>
//       <div class="text-gray-500">
//         {props.user.email} | {props.user.location.city} | {props.user.phone}
//       </div>
//     </figcaption>
//   </div>
// </figure>
<div class="p-2 lg:w-1/3 md:w-1/2 w-full">

        <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div class=" flex space-x-4">
                <div class="rounded-full  h-12 w-12"><img class="w-20 h-20 md:w-48 md:h-auto md: rounded-full mx-auto" src={props.user.picture.large} alt="" width="384" height="512" /></div>
                <div class="flex-1 space-y-4 py-1">
                <div class="h-4 text-white rounded w-3/4">{props.user.name.title} {props.user.name.first} {props.user.name.last} </div>
                <div class="space-y-2">
                    <div class="h-4  rounded">{props.user.gender} , {props.user.location.country} , {props.user.location.city}</div>
                    <div class="h-10  rounded w-5/6">{props.user.email} | {props.user.phone}</div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default DataCard
