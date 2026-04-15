import { NavLink } from "react-router-dom";
import logo from "/assets/logo.png";

export default function Navbar() {
  const active = "bg-green-800 text-white px-4 py-2 rounded";
  const normal = "text-gray-600 px-4 py-2";

  return (
    <div className="flex justify-between items-center px-10 py-4 bg-white shadow">
      <div className="flex items-center gap-2">
        <img src={logo} className="w-6" />
        <h1 className="font-bold">KeenKeeper</h1>
      </div>

      <div className="flex gap-3">
        <NavLink to="/" className={({ isActive }) => isActive ? active : normal}>🏠 Home</NavLink>
        <NavLink to="/timeline" className={({ isActive }) => isActive ? active : normal}>🕒 Timeline</NavLink>
        <NavLink to="/stats" className={({ isActive }) => isActive ? active : normal}>📊 Stats</NavLink>
      </div>
    </div>
  );
}