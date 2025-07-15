import { useState } from "react";
import Link from "../Link/Link";
import { RiMenuAddFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";


const NavBar = () => {
    
    const [open,setOpen]=useState(false)

    const routes = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Contact", path: "/contact" },
  { id: 4, name: "Services", path: "/services" },
  { id: 5, name: "Blog Post", path: "/blog/:id" }
];

    return (
        <nav className="text-black bg-green-600 p-6">
            <div onClick={ () => setOpen(!open) } className="md:hidden text-2xl">
              {
                open ===true  ? <IoClose></IoClose> : <RiMenuAddFill className=" "></RiMenuAddFill>
              }
              

            </div>
           <ul className={`md:flex duration-1000 absolute md:static
              ${open ? 'top-16' : '-top-60'}
            bg-sky-500 px-6 `}>
             {
                routes.map(route => <Link 
                    key={route.id}
                    route={route}
                    ></Link>)
            }
           </ul>
        </nav>
    );
};

export default NavBar;