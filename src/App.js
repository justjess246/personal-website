import { NavigationBar } from "./components/ComponentsIndex";
import GlobalStyle from './GlobalStyles';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Art from './pages/Art/Art';
import Contact from './pages/Contact/Contact';
import NoMatch from './pages/NoMatch/NoMatch';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom' 

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavigationBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route render={() => <Redirect to="/" />} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
