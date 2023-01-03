import Button from "react-bootstrap/Button";
import BootstrapMenu from "./BootsrtapMenu";

const  BootstrapUI = () => {
    return (
        <>
       <BootstrapMenu/>
            <Button variant="primary">Primary</Button>{" "}
            <Button variant="secondary">Secondary</Button>{" "}
            <Button variant="success">Success</Button>{" "}
            <Button variant="warning">Warning</Button>{" "}
            <Button variant="danger">Danger</Button>{" "}
            <Button variant="info">Info</Button>{" "}
            <Button variant="light">Light</Button>{" "}
            <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
        </>
    );
};
export default BootstrapUI