import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div><Header></Header></div>
      <div className="App">
        <ul>
          <li>html</li>
          <li>css</li>
          <li>javascript</li>
          <li>react</li>
        </ul>
      </div>
    </div>)
};

      const Header = () => {
        return (<div>
          <h4><a href="#s">Home</a></h4>
          <h4><a href="#s">New Feeds</a></h4>
          <h4><a href="#s">Messages</a></h4>
        </div>)
      };


export default App;
