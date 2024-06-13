import './Header.css'


function Header() {

    return (
        <>
            <div className='header-menu'>
                <div className='logo'> <img src="logo" alt="" /></div>
                <ul className="menu">
                    <li className='listaMenu'>Home</li>
                    <li className='listaMenu'>Servicios</li>
                    <li className='listaMenu'>Quienes Somos</li>
                    <li className='listaMenu'>Contáctanos</li>
                </ul>

            </div>
        </>
    )
}


export default Header