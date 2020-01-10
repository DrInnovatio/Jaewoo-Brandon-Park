import React, {Components, Fragment} from 'react';
import { Header, Footer } from './Layouts'
import { render } from '@testing-library/react';

render(){
  return ( <Fragment>
      <Header></Header>

      <Footer></Footer>

  </Fragment>
  );
}