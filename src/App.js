import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/App.css";

function App() {
  return (
    <div className="App">
        <Nav />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
