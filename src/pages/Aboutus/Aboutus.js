import {Container, Row, Col} from 'react-bootstrap'

// Container gives you a marginal  space on all the sides of the border
const Aboutus =()=>{
    return(<>
        <h1> Aboutus Page</h1>
        <Container style={{color:'white'}} >

    {/* No scrolls are allowed from left to right or vice-versa in responsiveness*/}
        <Row>
            <Col xs={12} >2 of 3 (wider)</Col>
            <Col xs={12}>3 of 3</Col>
            <Col xs={12}>1 of 3</Col>
        </Row>
        <Row>
            <Col>1 of 3</Col>
            <Col xs={5}>2 of 3 (wider)</Col>
            <Col>3 of 3</Col>
        </Row>
        </Container>
        </>
    )
}

export default Aboutus