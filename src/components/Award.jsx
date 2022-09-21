import { Container, Col, Row, Card } from 'react-bootstrap';
import award1 from "../assets/award1.PNG"
import award2 from "../assets/award2.PNG"

const Award = () => {
    return(
        <div id='award'>
            <>
            <Container className='mt-3'>
                <Row>
                    <Col>
                        <h2>My Award</h2>
                    </Col>
                </Row>
            </Container>
            <div className='d-flex justify-content-center align-items-center'>
            <Card className='mt-4 ' style={{ width: '50rem' }}>
                <Card.Body>
                <Card.Text>
                    Juara 3 Lomba Design 3D Environment GDC di UMN
                </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src={award1} />
            </Card>
            </div>

            <div className='d-flex justify-content-center align-items-center'>
            <Card className='mt-4 ' style={{ width: '50rem' }}>
                <Card.Body>
                <Card.Text>
                    Penghargaan magang Divisi 3D Animator PT GIT Solution.
                </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src={award2} />
            </Card>
            </div>
            </>
        </div>
    )
}

export default Award;