import { NavLink, Outlet } from "react-router";
import Header from "../../components/Header.jsx";

export default function Home() {
  return (
    <div>

      <Header />

      <h1>THis is home page</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, rem dicta? Amet magni iusto voluptatem doloremque voluptas repudiandae itaque, culpa adipisci eum inventore distinctio ad, assumenda magnam, autem consectetur possimus.</p>

      <nav>
        <NavLink to="/page1">Page 1</NavLink>
        <NavLink to="/page2">Page 2</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}