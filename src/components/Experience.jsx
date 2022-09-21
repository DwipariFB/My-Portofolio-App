import { Container, Col, Row, Card } from 'react-bootstrap';
import telkom from "../assets/telkom.jfif"
import git from "../assets/git.jfif"
import hacktiv from "../assets/hacktiv.jfif"

const Experience = () => {
    return(
        <div className='experience' id='experience'>
            <Container>
                <Row>
                    <Col className='text'>
                        <h2>My Experience</h2>
                    </Col>
                </Row>

                <br/>
                <Row>
                    <Col mb={4}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={telkom} />
                    <Card.Body>
                        <Card.Title>Wifi Fulfillment & Assurance di Unit Access Service Operation</Card.Title>
                        <Card.Text>
                        bertugas pokok berkoordisasi antara pihak Telkom from TEL-U 1 at Telkom Institute of Technology.
                    </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>

                    <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={git} />
                    <Card.Body>
                        <Card.Title>Divisi 3D Animator</Card.Title>
                        <Card.Text>
                        Merancang desain 3D sesuai dengan keinginan klien dan memberikan saran serta 
                        penjelasan kepada klien selama proses pembuatan desain 3D.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>
                    
                    <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={hacktiv} />
                    <Card.Body>
                        <Card.Title>React and React Native for Front End Developer</Card.Title>
                        <Card.Text>
                        Program studi independen bersertifikat Hacktiv8, pembuatan sebuah website menggunakan React, pengambilan data dari API
                    </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Experience;