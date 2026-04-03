import { Outlet } from "react-router";
import Header from "./Header.jsx";

export default function RootLayout() {
  return (
    <div>

      <Header />

      <main className="max-w-337.5 mx-auto my-10">

        <Outlet />

      </main>


    </div>
  )
}