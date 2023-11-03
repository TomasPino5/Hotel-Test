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
import Pay from "./components/bookings/pay/Pay"

function App() {

  const { pathname } = useLocation()

  return (
    <>
      {pathname !== "*" && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actividades" element={<Activities />} />
        <Route path="/habitaciones" element={<Rooms />} />
        <Route path="/ubicacion" element={<Location />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/reservas" element={<Bookings />} />
        <Route path="/reservas/pagar" element={<Pay />}/>
        <Route path="*" element={<Error />} />
      </Routes>
      {pathname !== "*" && <Footer />}
    </>
  )
}

export default App
