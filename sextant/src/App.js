import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IPDisplay from './IPDisplay';

function App() {
  return (
    <div className="App">
       
      <header className="App-header">

      <Banner title="Sextant" />

      {/* <Exhibit title="Data Point 1">
        <p>This is the content for Data Point 1.</p>
      </Exhibit>

      <Exhibit title="Data Point 2">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Exhibit> */}


      <Exhibit title="User IP Addresses">
        <IPDisplay version="IPv4" />
        <IPDisplay version="IPv6" />
      </Exhibit>


        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;
