import {Link} from "react-router-dom"
const Navbar=() =>{
  return(
<nav className="bg-blue-600 text-white p-4 flex gap-4">
  <Link to="/home" className="hover:text-yellow-500"> Home</Link>
  <Link to="/about" className="hover:text-yellow-500">About</Link>
  <Link to ="/contact" className="hover:text-yellow-500">Contact</Link>
  <Link to ="/clock" className="hover:text-yellow-500">Clock</Link>
</nav>
  );
}
export default Navbar