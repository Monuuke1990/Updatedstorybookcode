import React, {Fragment} from 'react';
//import '../styles.css'
//import Typography from "../component/Typography";
import { styled } from '@storybook/theming';
import { storiesOf } from '@storybook/react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../style01.css';
// import { Button } from 'demo-design';

// export default {
//     title: 'Palette',
//     //component: Typography

// };

//export const Headings = () => <Typography></Typography>;

storiesOf('ColorPalette', module).add('Web Colors', () => (
    <Fragment>
    <Container className="PdColorPalette" >
    <h4>Fill Colors</h4>
    <p>When choosing a color, take into account previous usages and how the user may interpret the color as part of the whole system.</p>
        <Row>
            <Col md="3">
                <div className="bgPalette colorPaletteRed"></div>
                <p className="PaletteTxt" >.fill-red<br/>
                #EE3322</p>
            </Col>
            <Col md="3">
                <div className="bgPalette colorPaletteRedLighter"></div>
                <p className="PaletteTxt " >.fill-red-lighter
                <br/>
                #feebe9</p>
            </Col>
            <Col md="3">
                <div className="bgPalette colorPaletteBlue"></div>
                <p className="PaletteTxt " >.fill-blue
                <br/>
                #0f65ef</p>
            </Col>
            <Col md="3">
                <div className="bgPalette colorPaletteYellow"></div>
                <p className="PaletteTxt" >.fill-yellow
               <br/>
               #FFEE00</p>
            </Col>
        </Row>
        <Row>
            <Col md="3">
                <div className="bgPalette colorPaletteYellowLight"></div>
                <p className="PaletteTxt " >.fill-yellow-lighter
                <br/>
                #fffab6</p>
            </Col>
            <Col md="3">
                <div className="bgPalette colorPaletteOrange"></div>
                <p className="PaletteTxt" >.fill-orange
                <br/>
                #F47F16</p>
            </Col>
            <Col md="3">
                <div className="bgPalette colorPaletteGreen"></div>
                <p className="PaletteTxt " >.fill-green
                <br/>
                #68af15</p>
            </Col>
            <Col md="3">
                <div className="bgPalette colorPaletteGreenLighter"></div>
                <p className="PaletteTxt" >.fill-green-lighter
                <br/>
                #e1efd0</p>
            </Col>
        </Row>
        <Row>
            <Col md="3">
                <div className="bgPalette colorPalettePink"></div>
                <p className="PaletteTxt " >.fill-pink
                <br/>
                #F43192</p>
            </Col>
            <Col md="3">
                <div className="bgPalette colorPaletteGrayLight"></div>
                <p className="PaletteTxt" >.fill-gray-lighter
                <br/>
                #F4F4F4</p>
            </Col>
            <Col md="3">
                <div className="bgPalette colorPaletteGray"></div>
                <p className="PaletteTxt " >.fill-gray
                <br/>
                #AAAAAA</p>
            </Col>
            <Col md="3">
                <div className="bgPalette colorPaletteGrayDark"></div>
                <p className="PaletteTxt" >.fill-gray-darker
                <br/>
                #222222 </p>
            </Col>
        </Row>
        <Row>
            <Col md="3">
                <div className="bgPalette colorPaletteWhite"></div>
                <p className="PaletteTxt " >.fill-white
                <br/>
                #ffffff</p>
            </Col>
            <Col md="3">
                <div className="bgPalette colorPaletteProOrange"></div>
                <p className="PaletteTxt" >.fill-promoted-yellow
                <br/>
                #F7AD19</p>
            </Col>
            <Col md="3">
                <div className="bgPalette colorPalettePurple"></div>
                <p className="PaletteTxt " >.fill-purple
                <br/>
                #6645DD</p>
            </Col>
            <Col md="3">
                <div className="bgPalette colorPaletteTeal"></div>
                <p className="PaletteTxt" >.fill-teal
                <br/>
                #0DCCB0</p>
            </Col>
        </Row>
    </Container>
</Fragment>
));

storiesOf('ColorPalette', module).add('Social Colors', () => (
    <Fragment>
            <Container className="PdColorPalette" >
            <h4>Social Colors</h4>
            <p>As the title implies, these colors are for representing social networks only. Do not use these colors for anything else, please.</p>
                <Row>
                    <Col md="3">
                        <div className="bgPalette colorPaletteFacebook"></div>
                        <p className="PaletteTxt" >.fill-facebook<br/>
                        #3B5998</p>
                    </Col>
                    <Col md="3">
                        <div className="bgPalette colorPaletteTwitter"></div>
                        <p className="PaletteTxt " >.fill-twitter
                        <br/>
                        #55ACEE</p>
                    </Col>
                    <Col md="3">
                        <div className="bgPalette colorPaletteGoogle"></div>
                        <p className="PaletteTxt " >.fill-google
                        <br/>
                        #DD4B39</p>
                    </Col>
                    <Col md="3">
                        <div className="bgPalette colorPaletteLinkedIn"></div>
                        <p className="PaletteTxt" >.fill-linkedIn
                       <br/>
                       #0077B5</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="3">
                        <div className="bgPalette colorPalettePinterest"></div>
                        <p className="PaletteTxt " >.fill-pinterest
                        <br/>
                        #BD081C</p>
                    </Col>
                    <Col md="3">
                        <div className="bgPalette colorPaletteTumbler"></div>
                        <p className="PaletteTxt" >.fill-tumbler
                        <br/>
                        #36465D</p>
                    </Col>
                    <Col md="3">
                        <div className="bgPalette colorPaletteYoutube"></div>
                        <p className="PaletteTxt " >.fill-youtube
                        <br/>
                        #CD201F</p>
                    </Col>
                    <Col md="3">
                        <div className="bgPalette colorPaletteInstagram"></div>
                        <p className="PaletteTxt" >.fill-instagram
                        <br/>
                        #517FA4</p>
                    </Col>
                </Row>              
            </Container>
        </Fragment>
));

storiesOf('ColorPalette', module).add('Text Colors', () => (
    <Fragment>
    <Container className="PdColorPalette" >
    <h4>Text Colors</h4>
    <p>When choosing a text color, take into account the standard usage (green for success, for example) and make sure you're not subverting or misrepresenting what a piece of text means by using the wrong color.
    </p>
        <Row>
            <Col md="3">
                <div className="TextColor">
                    <p>.text-gray<br/>
                     #333</p>
                </div>
                <div className="TextColor">
                    <p>.text-gray--lighter<br/>
                     #666</p>
                </div>
                <div className="TextColor">
                    <p>.text-red<br/>
                     #666</p>
                </div>
                <div className="TextColor">
                    <p>.text-pink<br/>
                    #F43192</p>
                </div>
                <div className="TextColor">
                    <p>.text-orange<br/>
                    #F47F16</p>
                </div>
                <div className="TextColor">
                    <p>.text-promoted-orange<br/>
                     #F7AD19</p>
                </div>
                <div className="TextColor">
                    <p>.text-green<br/>
                    #68AF15</p>
                </div>
                <div className="TextColor">
                    <p>.text-blue<br/>
                    #0F65EF</p>
                </div>
                <div className="TextColor">
                    <p>.text-purple<br/>
                    #6645DD</p>
                </div>
            </Col>
            <Col md="9">
                <div className="TextDesc">
                    <p>This is the darkest gray and default text color.</p>
                </div>
                <div className="TextDesc">
                    <p>This is a little lighter gray.</p>
                </div>
                <div className="TextDesc">
                    <p>This is red text for both brand text/headlines and error </p>
                </div>
                <div className="TextDesc">
                    <p>This is pink text.</p>
                </div>
                <div className="TextDesc">
                    <p>This is orange text for warning messaging.</p>
                </div>
                <div className="TextDesc">
                    <p>This is orange text for ad unit disclosures. Don’t use for anything else!
                    </p>
                </div>
                <div className="TextDesc">
                    <p>This is green text for success messaging.
                    </p>
                </div>
                <div className="TextDesc">
                    <p>This is our standard link color. It's on links by default.
                    </p>
                </div>
                <div className="TextDesc">
                    <p>This is purple text.
                    </p>
                </div>
            </Col>
        </Row>
    </Container>
</Fragment>
));

storiesOf('ColorPalette', module).add('Svg Colors', () => (
    <Fragment>
    <Container className="PdColorPalette" >
            <h4>SVG fill colors</h4>
            <p>Use these SVG color classes to apply a fill to svg elements. The options for SVG fills, intended for use with icons, reflect Solid's text colors and social branding colors.</p>
                <Row>
                    <Col md="6">
                        <div className="svgColors">
                            <div className="svgColor svgGrayColor"></div>
                                <div className="svgTxt">
                                    <p>svg-gray</p>
                                    <p>#333 <b>rgb(51,51,51)</b></p>
                                </div>
                        </div>
                        <div className="svgColors">
                            <div className="svgColor svgLtGrayColor"></div>
                                <div className="svgTxt">
                                    <p>svg-gray-lighter</p>
                                    <p><span>#666</span>&nbsp;<span><b>(rgb(102,102,102))</b></span></p>
                                </div>
                        </div>
                        <div className="svgColors">
                            <div className="svgColor svgLitGrayColor"></div>
                                <div className="svgTxt">
                                    <p>svg-gray-lightest</p>
                                    <p><span>#999</span>&nbsp;<span><b>(rgb(153,153,153))</b></span></p>
                                </div>
                        </div>
                        <div className="svgColors">
                            <div className="svgColor svgRedColor"></div>
                                <div className="svgTxt">
                                    <p>svg-red</p>
                                    <p>#e32 <b>(rgb(238,51,34))</b></p>
                                </div>
                        </div>
                        <div className="svgColors">
                            <div className="svgColor svgPinkColor"></div>
                                <div className="svgTxt">
                                    <p>svg-pink</p>
                                    <p>#F43192 <b>(rgb(244,49,146)) </b></p>
                                </div>
                        </div>
                        <div className="svgColors">
                            <div className="svgColor svgOrangeColor"></div>
                                <div className="svgTxt">
                                    <p>svg-orange</p>
                                    <p>#F49C1A <b>(rgb(244,127,22)) </b></p>
                                </div>
                        </div>
                        <div className="svgColors">
                            <div className="svgColor svgBlueColor"></div>
                                <div className="svgTxt">
                                    <p>svg-blue</p>
                                    <p>#07e <b>(rgb(15,101,239)) </b></p>
                                </div>
                        </div>
                        <div className="svgColors">
                            <div className="svgColor svgPurpleColor"></div>
                                <div className="svgTxt">
                                    <p>svg-purple</p>
                                    <p>#6645DD <b>(rgb(102,69,221)) </b></p>
                                </div>
                        </div>
                        <div className="svgColors">
                            <div className="svgColor svgGreenColor"></div>
                                <div className="svgTxt">
                                    <p>svg-green</p>
                                    <p>#6FB824 <b>(rgb(104,175,21)) </b></p>
                                </div>
                        </div>
                        <div className="svgColors">
                            <div className="svgColor svgTealColor"></div>
                                <div className="svgTxt">
                                    <p>svg-teal</p>
                                    <p>#0DCCB0<b>(rgb(13,204,176)) </b></p>
                                </div>
                        </div>
                        <div className="svgColors">
                            <div className="svgColor svgWhiteColor"></div>
                                <div className="svgTxt">
                                    <p>svg-white</p>
                                    <p>#ffffff <b>(rgb(255,255,255)) </b></p>
                                </div>
                        </div>
                    </Col>
                    <Col md="6">
                    <div className="svgColors">
                        <div className="svgLogo"><img src="../images/facebook.png"/></div>
                            <div className="svgTxt">
                                <p>svg-facebook</p>
                                <p>#3B5998</p>
                            </div>
                    </div>
                    <div className="svgColors">
                        <div className="svgLogo"><img src="../images/twitter.png"/></div>
                            <div className="svgTxt">
                                <p>svg-twitter</p>
                                <p>#55ACEE</p>
                            </div>
                    </div>
                    <div className="svgColors">
                        <div className="svgLogo"><img src="../images/google-plus.png"/></div>
                            <div className="svgTxt">
                                <p>svg-google-plus</p>
                                <p>#DD4B39</p>
                            </div>
                    </div>
                    <div className="svgColors">
                        <div className="svgLogo"><img src="../images/linkedin.png"/></div>
                            <div className="svgTxt">
                                <p>svg-linked-in</p>
                                <p>#0077B5 </p>
                            </div>
                    </div>
                    <div className="svgColors">
                        <div className="svgLogo"><img src="../images/pinterest.png"/></div>
                            <div className="svgTxt">
                                <p>svg-pinteresr</p>
                                <p>#BD081C </p>
                            </div>
                    </div>
                    <div className="svgColors">
                        <div className="svgLogo"><img src="../images/tumblr.png"/></div>
                            <div className="svgTxt">
                                <p>svg-tumblr</p>
                                <p>#36465D </p>
                            </div>
                    </div>
                    <div className="svgColors">
                        <div className="svgLogo"><img src="../images/you-tube.png"/></div>
                            <div className="svgTxt">
                                <p>svg-you-tube</p>
                                <p>#CD201F</p>
                            </div>
                    </div>
                    <div className="svgColors">
                        <div className="svgLogo"><img src="../images/instagram.png"/></div>
                            <div className="svgTxt">
                                <p>svg-instagram</p>
                                <p>#517FA4 </p>
                            </div>
                    </div>
                    
                </Col>
                </Row>
            </Container>
</Fragment>
));
