import {KeyboardArrowDown, Notifications, Search } from '@mui/icons-material'
import './navbar.scss'
import { useState } from 'react'

const Navbar = () => {

  const[isScrolled,setIsScrolled] = useState(false);

  window.onscroll = () =>{
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return() =>(window.onscroll = null)
  };
  console.log(isScrolled);
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className='container'>
        <div className='left'>
            <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-500x281.png" alt="" />

            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
            
        </div>
        <div className='right'>
            <Search className='icon'/>
            <span>KID</span>
            <Notifications className='icon'/>
            <img src="https://media.istockphoto.com/id/1155234248/photo/fitness-instructor-standing-at-a-fitness-centre-and-smiling-at-the-camera.jpg?s=1024x1024&w=is&k=20&c=GN53W27dvEeBP1pqgyhtphoBrqu9j68ctjS_L6SqMdw=" alt="" />

            <div className="profile">

            <KeyboardArrowDown className='icon'/>
            <div className="options">
               
                <span>Settings</span>
                <span>Logout</span>
            </div>
            </div>

            
        </div>
      </div>
    </div>
  )
}

export default Navbar;
