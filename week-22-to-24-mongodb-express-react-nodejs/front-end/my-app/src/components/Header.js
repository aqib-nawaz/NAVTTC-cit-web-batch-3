import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button"

function Header() {
    return (
        <>
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand href="#home" className='text-white'>
                        Simple App
                    </Navbar.Brand>
                    <div>
                        <Button className='px-5 mx-5'>
                            Login
                        </Button>
                        <Button className='px-5 '>
                            Sign Up
                        </Button>
                    </div>
                </Container>
            </Navbar>
            <br />
        </>
    );
}

export default Header;