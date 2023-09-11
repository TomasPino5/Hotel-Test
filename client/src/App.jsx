import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import Activities from "./components/activities/Activities";
import Rooms from "./components/rooms/Rooms";
import Location from "./components/location/Location";
import Contact from "./components/contact/Contact";
import Bookings from "./components/bookings/Bookings";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Error from "./components/error/error";

function App() {

  const { pathname } = useLocation()

  return (
    <div>
      <Routes>
        {/* {pathname !== "*" && <Nav />} */}
        <Route path="/" element={<Home />} />
        <Route path="/actividades" element={<Activities />} />
        <Route path="/habitaciones" element={<Rooms />} />
        <Route path="/ubicación" element={<Location />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/reservas" element={<Bookings />} />
        {/* {pathname !== "*" && <Footer />} */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
