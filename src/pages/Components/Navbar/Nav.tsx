import React from 'react'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logoSmall from '../../../assets/dashboard/logoSufiSmall.svg'
import icon1 from '../../../assets/icons/logout.png'

const Nav = (): JSX.Element => {
  const navigate = useNavigate();   // Función para redirigir a las rutas definidas en App.tsx
  const toLogin = (): void => {
    /* Al ejecutar esta función, va a redirigir a la página principal (login) */
    navigate("/");
  }
  return (
    <Navbar bg="light" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className='mx-auto'>
            <img
              alt=""
              src={logoSmall}
              width="83"
              height="45"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <span >
            <a style={{"fontFamily":"sans-serif",
            "fontSize":"14px",
            "cursor":"pointer",
            "fontWeight":"bold",
            "marginRight":"-50px",
            }}
            onClick={toLogin}>
            Cerrar Sesión &nbsp;
            <img src={icon1}
              width="34"
              height="32"
            />
            </a>
          </span>
        </Container>
      </Navbar>
  )
}

export default Nav;