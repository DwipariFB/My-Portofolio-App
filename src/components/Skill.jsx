import { Col, Container, Row, Card } from "react-bootstrap";
import tobirama from "../assets/tobirama.png"
import ui from "../assets/UI.jpg"
import laptop1 from "../assets/laptop1.jfif"
import laptop2 from "../assets/laptop2.jfif"
import laptop5 from "../assets/laptop5.jfif"
import laptop6 from "../assets/laptop6.png"
import multimedia from "../assets/multimedia.jfif"


const Skill = () => {
    return(
        <div className='experience' id='skill'>
            <Container>
                <Row>
                    <Col>
                        <h2>My Skill</h2>
                    </Col>
                </Row>

                <br/>

                <Row m={4}>
                <Col>
                <Card className="bg-dark text-white" style={{ width: '24rem' }}>
                    <Card.Img src={multimedia} alt="Card image" />
                    <Card.Body>
                        <Card.Title>3D Animator</Card.Title>
                        <Card.Text>
                        mempelajari Membuat Modeling 3D, UV Making, Painting, 
                        Sculpting serta cara membuat Animasi sederhana, 
                        membuat project dari client.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                </Col>

                <Col>
                <Card className="bg-dark text-white" style={{ width: '24rem' }}>
                    <Card.Img src={laptop5} alt="Card image" />
                    <Card.Body>
                        <Card.Title>Front-End Developer</Card.Title>
                        <Card.Text>
                        mempelajari Membuat website menggunakan React, pengambilan data dari API, 
                        membuat project dari client.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                </Col>

                <Col>
                <Card className="bg-dark text-white" style={{ width: '24rem' }}>
                    <Card.Img src={laptop6} alt="Card image" />
                    <Card.Body>
                        <Card.Title>UI/UX Design</Card.Title>
                        <Card.Text>
                        mempelajari Membuat mendesain tampilan secara menarik baik dari sisi bentuk, warna, juga tulisan. 
                        membuat project dari client.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                </Col>

                
                </Row>
            </Container>
        </div>
    )
}

export default Skill;