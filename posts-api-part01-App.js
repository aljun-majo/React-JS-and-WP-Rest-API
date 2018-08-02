import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
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


const Home = () => (
  <Container className='mt-5'>
    <div className='text-center'>
      Home Page.
    </div>
  </Container>
)

const About = () => (
  <Container className='mt-5'>
    <div className='text-center'>
      About Page.
    </div>
  </Container>
)

const Portfolio = () => (
  <Container className='mt-5'>
    <div className='text-center'>
      Portfolio Page.
    </div>
  </Container>
)
const Blog = () => (
  <Container className='mt-5'>
    <div className='text-center'>
      Blog Page.
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
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
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

              <Route exact path="/" render={() => <div className='container mt-5'><p className='text-center'>Front-page Route.</p></div>} />
              <Route exact path="/home" component={Home} />
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
