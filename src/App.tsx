import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Movies } from './components/Movies';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-content">
        <Switch>
          <Route path='/' exact component={ Home } />
          <Route path='/movies' component={ Movies } />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
