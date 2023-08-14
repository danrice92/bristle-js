import './App.scss';
import logo from './images/logo.svg';

function App() {
  return (
    <div id="app">
      <div className="public-container">
        <div className="row flex-column">
          <div className="col d-flex justify-content-center">
            <p>Launch your career with</p>
          </div>
          <div className="col d-flex justify-content-center">
            <img src={logo} className="img-fluid" alt="Bristle logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
