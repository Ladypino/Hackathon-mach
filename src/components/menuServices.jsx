import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './style/menuServices.css';

const MenuServices = (props) => {
  return (
   
      <Nav className='justify-content-center px-5 mt-5 pt-5'>
            <NavItem>
          <NavLink href="/mach-services" className='links '>Todos</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/mach-services/education-discount" className='links '>Educación</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className='links '>Delivery</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className='links '>Salud</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className='links'>Transporte</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className='links '>Viajes</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/mach-services/telephony-discount" className='links'>Telefonia</NavLink>
        </NavItem>
      
      </Nav>
     

  );
}

export default MenuServices;

// import React from 'react';



// const MenuServices = () => {
//   return (
//     <div>
//         <ul>
//               <li><a href="/mach-service/education">Educación</a></li>
//               <li><a href="/mach-service/delivery">Delivery</a></li>
//               <li><a href="/mach-service/health">Salud</a></li>
//               <li><a href="/mach-service/transport">Transporte</a></li>
//               <li><a href="/mach-service/telephony">Telefonía</a></li>
//               <li><a href="/mach-service/travels">Viajes</a></li>
//         </ul>
//     </div>
//   )
// };
// export default MenuServices;