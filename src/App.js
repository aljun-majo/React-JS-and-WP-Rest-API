import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import axios from 'axios';
import Carousel from './Components/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


const Home = ({carouselITems}) => (    
  <div>
    <Carousel sliders={carouselITems} />
    <Container className='text-center border border-primary bg-primary text-white my-5 py-5'>
      <h2>Home Page.</h2>
    </Container>
  </div>
)

const About = () => (
  <Container className='mt-5'>
    <div className='text-center'>
      <h2>About Page.</h2>
    </div>
  </Container>
)

const Portfolio = () => (
  <Container className='mt-5'>
    <div className='text-center'>
      <h2>Portfolio Page.</h2>
    </div>
  </Container>
)
const Blog = () => (
  <Container className='mt-5'>
    <div className='text-center'>
      <h2>Blog Page.</h2>
    </div>
  </Container>
)
const PageNotFound = ({location}) => (
     <div className="text-center mt-5">
           <h3>Oops! That page <code>{location.pathname}</code> can’t be found.</h3>
           <p>It looks like nothing was found at this Page or URL.</p>
         </div>
 )


class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false, 
      carousel: []
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {

  const wp_api_carousel = ( 'https://thegoodartisan.com/wp-json/home/carousel/' );

    return axios.get(wp_api_carousel)
      .then(response => {
         const carousel = response.data;
         this.setState({ carousel });
         console.log('carousel', carousel);
      });  

  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar color="light" light expand="md">
            <Container>
              <NavbarBrand href="/">TheGoodArtisan</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/home">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/About">About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/portfolio">Portfolio</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/blog">Blog</NavLink>
                  </NavItem>                
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Option 1
                      </DropdownItem>
                      <DropdownItem>
                        Option 2
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>

            <Switch>

              <Route exact path="/" render={() => <Home carouselITems={this.state.carousel} />} />
              <Route exact path="/home" render={() => <Home carouselITems={this.state.carousel} />} />
              <Route exact path="/about"  component={About} />
              <Route exact path="/portfolio"  component={Portfolio} />
              <Route exact path="/blog"  component={Blog} />
          
              <Route exact render={(props) => <PageNotFound {...props} />} />
           
            </Switch>        

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
