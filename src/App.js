// import logo from './logo.svg';
import './App.css';
import Title from './components/Title/Title';
import POPOSList from './components/POPOSList/POPOSList';
import Footer from './components/Footer/Footer';
import { HashRouter as Router, Route } from 'react-router-dom';
import About from './components/About/About';
import POPOSDetails from './components/POPOSDetails/POPOSDetails';
import API from './components/API/API'

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path="/" component={POPOSList}/>
        <Route path="/details/:id" component={POPOSDetails} />
        <Route path="/about" component={About} />
        <Footer />
        {/* <API /> */}
      </div>
    </Router>
  );
}

export default App;
