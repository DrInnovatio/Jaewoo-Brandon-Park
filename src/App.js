import React, {Component , Fragment} from 'react';
import Landing from './Components/Contents/landing ';
import SecondAbout from './Components/Contents/SecondAbout';
import ThirdPortfolio from './Components/Contents/ThirdPortfolio';
import FourthContact from './Components/Contents/FourthContact';
import { Header, Footer } from './Components/Layouts';
import FixedContainer from "./Components/Contents/landing ";




export default class  App extends Component {
  render() { 
    return ( <Fragment>
      <Landing></Landing>      
      <SecondAbout></SecondAbout>
      <ThirdPortfolio></ThirdPortfolio>
      <FourthContact></FourthContact>
      <Footer></Footer>
  </Fragment> );
  }
}





