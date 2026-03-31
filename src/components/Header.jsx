import { NavLink } from "react-router";

export default function Header() {
  return (
    <div>

      <h1 className="text-2xl font-bold">React</h1>
      <nav className="flex gap-5">

        <NavLink
          className={(e) => e.isActive ? "text-red-500" : "text-black"}
          to="/">Home</NavLink>
        <NavLink
          className={(e) => e.isActive ? "text-red-500" : "text-black"}
          to="/about">About</NavLink>

      </nav>

    </div>
  )
}