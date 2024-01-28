
import { Home } from "../Components/Home/Home"
import { SideBar } from "../Components/SideBar/SideBar"
import { NavBar } from "../Components/Navbar/NavBar"
import "bootstrap/dist/css/bootstrap.min.css";
export const HomePage = () => {
  return (
    <>
    <NavBar />
    <div>
      <div className="row">
        <div className="col-md-3">
          <SideBar />
        </div>
        <div className="col-md-9">
          <Home />
        </div>
      </div>
    </div>
  </>
  )
}
