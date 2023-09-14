import './Nav.css'

const Nav = () => {
    return (
        <>
            <nav className='container'>
                <div className='title-description'>
                    <div className='title'>
                        <p>HENDOKU YAKU</p>
                    </div>
                    <div className='description'>
                        <p>Hostel Mendoza</p>
                    </div>
                </div>
                <div className='lista-container'>
                    <ul className='ul'>
                        <li className='li'>Inicio</li>
                        <li className='li'>Actividades</li>
                        <li className='li'>Habitaciones</li>
                        <li className='li'>Ubicacion</li>
                        <li className='li'>Contacto</li>
                        <li className='li'>Reservas</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav;