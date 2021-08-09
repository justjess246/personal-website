import { NavigationBar } from "./components/ComponentsIndex";
import GlobalStyle from './GlobalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavigationBar />
    </Router>
  );
}

export default App;
