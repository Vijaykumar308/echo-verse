import { useEffect, useState, useRef } from "react"
import { NavLink, useNavigate, useLocation } from "react-router-dom"
import { FaCogs, FaHome, FaPlusCircle, FaShareAlt, FaUserCircle } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { BiLogOut } from "react-icons/bi"
import axios from "axios"
import { setAuthUser } from "../redux/authSlice" // Adjust this import based on your actual file structure
import { toast } from "sonner"

function MSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const sidebarRef = useRef(null)

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev)
  }

  const handleLogout = async () => {
    try {
      const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL
      const res = await axios.get(`${backendBaseUrl}/logout`)

      if (res.data.success) {
        toast.success(res.data.message)
        dispatch(setAuthUser(null))
        navigate("/login")
      }
    } catch (error) {
      console.error(error)
      toast.error("Logout failed. Please try again.")
    }
  }

  useEffect(() => {
    // Close sidebar when navigating to a new page
    setSidebarOpen(false)
  }, [location])

  useEffect(() => {
    // Handle clicks outside the sidebar
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div>
      <header className="flex items-center justify-between p-4 border-b-blue-100 bg-white shadow-md">
        <div className="text-lg font-bold">Logo</div>
        <div onClick={toggleSidebar} className="text-3xl cursor-pointer lg:hidden">
          &#9776;
        </div>
      </header>

      <nav
        ref={sidebarRef}
        className={`z-10 fixed left-0 top-0 w-48 h-full bg-white shadow-lg transform ${
          !sidebarOpen ? "-translate-x-full" : ""
        } transition-transform duration-300 lg:translate-x-0`}
      >
        <div className="text-lg font-bold p-5">Logo</div>
        <ul className="space-y-3">
          <NavLink to="/" className="block" onClick={() => setSidebarOpen(false)}>
            <li className="flex text-lg px-6 py-2 rounded-sm items-center space-x-4 hover:text-blue-500 hover:bg-slate-300 cursor-pointer">
              <FaHome size={20} />
              <span>Stream</span>
            </li>
          </NavLink>

          <NavLink to="/create-post" className="block" onClick={() => setSidebarOpen(false)}>
            <li className="flex text-lg px-6 py-2 rounded-sm items-center space-x-4 hover:text-blue-500 hover:bg-slate-300 cursor-pointer">
              <FaPlusCircle size={16} />
              <span>Express</span>
            </li>
          </NavLink>

          <NavLink to="/share-post" className="block" onClick={() => setSidebarOpen(false)}>
            <li className="flex text-lg px-6 py-2 rounded-sm items-center space-x-4 hover:text-blue-500 hover:bg-slate-300 cursor-pointer">
              <FaShareAlt size={16} />
              <span>Echoes</span>
            </li>
          </NavLink>

          <NavLink to="/mypost" className="block" onClick={() => setSidebarOpen(false)}>
            <li className="flex text-lg px-6 py-2 rounded-sm items-center space-x-4 hover:text-blue-500 hover:bg-slate-300 cursor-pointer">
              <FaUserCircle size={18} />
              <span>Gallery</span>
            </li>
          </NavLink>

          <NavLink to="/profile/:id" className="block" onClick={() => setSidebarOpen(false)}>
            <li className="flex text-lg px-6 py-2 rounded-sm items-center space-x-4 hover:text-blue-500 hover:bg-slate-300 cursor-pointer">
              <FaUserCircle size={18} />
              <span>Profile</span>
            </li>
          </NavLink>

          <NavLink to="/settings" className="block" onClick={() => setSidebarOpen(false)}>
            <li className="flex text-lg px-6 py-2 rounded-sm items-center space-x-4 hover:text-blue-500 hover:bg-slate-300 cursor-pointer">
              <FaCogs size={20} />
              <span>Control</span>
            </li>
          </NavLink>
        </ul>

        <div className="absolute bottom-0 w-full">
          <button
            onClick={handleLogout}
            className="w-full flex text-lg px-6 py-2 rounded-sm items-center space-x-4 hover:text-blue-500 hover:bg-slate-300 cursor-pointer"
          >
            <BiLogOut size={22} />
            <span>Logout</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default MSidebar
