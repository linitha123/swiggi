import React, { useEffect, useState } from "react"
import Link  from "react-router-dom"
let Header = () => {
    const [loginBtn,setLoginBtn] = useState('Login')
    console.log('above useEffect')
    useEffect(()=>{
     console.log('Inside useEffect')
    },[loginBtn])
    console.log('below useEffect')
    return(
        <div className="header-container">
           <img className='image-logo' src='https://img.freepik.com/free-vector/illustration-organic-food_53876-9249.jpg?size=626&ext=jpg&ga=GA1.2.1316105049.1693383838&semt=ais' alt='logo'></img>
          <ul className="header-container-right">
                    <li>Home</li>
                 <Link to='/about'><li>About</li></Link>
                    <li>Contact</li>
                   <button onClick={()=>{
            setLoginBtn(loginBtn==="Login"?'Logout':'Login')
                   } }>{loginBtn}</button>
            </ul>
            
               
        </div>
    )
}

export default Header