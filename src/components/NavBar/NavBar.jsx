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
        <nav>
            <div onClick={ () => setOpen(!open) } className="md:hidden text-2xl">
              {
                open ===true  ? <IoClose></IoClose> : <RiMenuAddFill className=" "></RiMenuAddFill>
              }
              

            </div>
           <ul className="md:flex ">
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