import React from 'react'
import '../Filter.css'
import {NavLink} from 'react-router-dom'
function Filter() {
    const [state,setState]=React.useState("Read")
    const filterBy=[
        {name:"Unread",path:"/unread"},{name:"Read",path:'/'},{name:"Favorites",path:"/favorites"}
        
    ]
  return (
   <nav className='Filter'> 

   <p>Filter By:</p>

    {
        filterBy.map((item)=><NavLink key={item.name} className={state===item.name?"nav":"nav1"} onClick={()=>setState((prev)=>prev===item.name?"":item.name)}  to={`${item.path}`} >{item.name}</NavLink>)
    }
        
   </nav>
  )
}

export default Filter