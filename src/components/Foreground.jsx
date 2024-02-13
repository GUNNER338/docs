import React, { useRef } from 'react'
import Card from './Card'
const Foreground = () => {
  const ref=useRef(null)
  const data=
  [
    {
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi provident veritatis laborum ut explicabo incidunt.",
    filesize:"2gb",
    close: true,
    tag:{isOpen:true, tagTitle: "Download Now", tagColor:"green"},
  },
    {
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi provident veritatis laborum ut explicabo incidunt.",
    filesize:"2.5mb",
    close: false,
    tag:{isOpen:false, tagTitle: "Download Now", tagColor:"green"},
  },
    {
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi provident veritatis laborum ut explicabo incidunt.",
    filesize:"2gb",
    close: true,
    tag:{isOpen:true, tagTitle: "Download Now", tagColor:"green"},
  }
]
  return (
    <div ref={ref} className='fixed top-0 left-0 w-full h-full flex gap-5 z-[3]'>
      {data.map((item,index)=>(
        <Card data={item} reference={ref}/>
      ))}
    </div>
  )
}


export default Foreground