import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../../Dashboard/Dashboard.css'
import icon2 from '../../../assets/icons/descargar.png'

function Nav2() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home" style={{
            "fontFamily":"sans-serif",
            "fontSize":"20px",
            "fontWeight":"bold"
        }}>Mis desembolsos</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <button className='btn-download'><img src={icon2}
              width="32"
              height="32"
            />Descargar</button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav2;