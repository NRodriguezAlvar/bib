import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Menu} from './Menu';
import Bib from './Bib';
import Maitre from './Maitre';
import BibMaitre from './BibMaitre';
import {Layout} from './compo/Layout';
import Navigation from './compo/NavigationBar';

class App extends Component {
  render(){
    return(
      <div className='App'>
		<React.Fragment>
        <Navigation></Navigation>
        <Layout>
          <Router>
            <Switch>
              <Route exact path='/' component={Menu} />
              <Route path='/bib' component={Bib} />
              <Route path='/maitre' component={Maitre} />
              <Route path='/bibmaitre' component={BibMaitre} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
	  </div>
    );
  }
}

export default App;
