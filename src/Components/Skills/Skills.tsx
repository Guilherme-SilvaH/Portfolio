import './Style.sass'
import { Container, Row, Col, Card, CardBody, CardTitle} from 'reactstrap'

import {SiJavascript, SiReact, SiSass, SiCss3,} from 'react-icons/si'
import {DiGit} from "react-icons/di"
import {FaHtml5} from 'react-icons/fa'
import { FaNode } from "react-icons/fa"
import { DiGithubBadge } from "react-icons/di";

export default function Skills () {
    return(
        <article>
          <h2>Habilidades</h2>
          <Container>
            <Row>
              <Col id='col-card'>
            {/* HTML */}
                <Card>
                    <i><FaHtml5/></i>
                        <CardBody>
                            <CardTitle tag="h5">
                                 HTML5
                            </CardTitle>
                        </CardBody>
                </Card>

            {/* CSS */}
                <Card>
                    <i><SiCss3/></i>
                        <CardBody>
                            <CardTitle tag="h5">
                                 CSS
                            </CardTitle>
                        </CardBody>
                </Card>

            {/* JAVASCRIPT */}
                <Card>
                     <i><SiJavascript/></i>
                        <CardBody>
                            <CardTitle tag="h5">
                                JAVASCRIPT
                            </CardTitle>
                        </CardBody>
                </Card>


            {/* NODE */}
                <Card>
                    <i><FaNode/></i>
                        <CardBody>
                            <CardTitle tag="h5">
                                NODE
                            </CardTitle>
                        </CardBody>
                </Card>

            {/* SASS */}
                <Card>
                    <i><SiSass/></i>
                        <CardBody>
                            <CardTitle tag="h5">
                                SASS
                            </CardTitle>
                        </CardBody>
                </Card>

            {/* SASS */}
                 <Card>
                    <i><SiReact/></i>
                        <CardBody>
                            <CardTitle tag="h5">
                              REACT
                            </CardTitle>
                        </CardBody>
                </Card>

               {/* GIT */}
               <Card>
                    <i><DiGit/></i>
                        <CardBody>
                            <CardTitle tag="h5">
                              GIT
                            </CardTitle>
                        </CardBody>
                </Card>

                <Card>
                    <i><DiGithubBadge/></i>
                        <CardBody>
                            <CardTitle tag="h5">
                              GITHUB
                            </CardTitle>
                        </CardBody>
                </Card>



              </Col>
            </Row>
          </Container>
        </article>
    )
}