import { Container, Col, Row } from 'react-bootstrap';

const About = () => {
    return(
        <div class="container" id='about'>
            <Container className='mb-3'>
                <Row>
                    <Col>
                        <h2>About Me</h2>
                    </Col>
                </Row>
            </Container>
            <br/>

            <div>
            <Row className='justify-content-center'>
                <Col className='fs-5.5'>
                <p>
                    Saya mempunyai pengalaman magang sebagai Divisi 3D Animator selama 3 bulan 
                    di perusahaan PT.GIT SOLUTION.
                </p>
                </Col>

                <Col className='fs-5.5'>
                <p>
                Juara 3 sebagai kompetisi Lomba Desain 3D Environment 
                GDC Universitas Multimedia Nusantara.
                    
                </p>
                </Col>
            </Row>
            </div>
            
        </div>
    )
}

export default About;