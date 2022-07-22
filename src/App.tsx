

import { AppStyleBox } from './AppStyle';
import BodySiteGames from './Pages/SiteOtherBestGames';
import HeaderBox from './HeaderBox/HeaderBox'

import { HashRouter as Router, Route, Link, Switch, BrowserRouter } from 'react-router-dom'

import SiteHome from './SiteHome/SiteHome';
import SiteBestGames from './Pages/SiteBestGames';
import GlobalStyle from './globalStyles';

import SiteFooter from './SiteHome/SiteFooter';






export function App() {
  return (
   
    <Router>
       <GlobalStyle />
      <AppStyleBox>
        <HeaderBox />
        <div>
          <nav>
            <Link to="/"></Link>
            <Link to="/BodySiteGames"></Link>
            <Link to="/SiteBestGames"></Link>
          </nav>
          <BrowserRouter>
            <Switch>
               <Route exact path="/" component={SiteHome} /> 
              <Route exact path="/BodySiteGames" component={BodySiteGames} />
              <Route exact path="/SiteBestGames" component={SiteBestGames} />
            </Switch>
          </BrowserRouter>
        </div>
        <SiteFooter/>
      </AppStyleBox>
     
    </Router>
    

  );
}

export default App;
