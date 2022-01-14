import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <Header/>
      <Technologies/>
    </div>)
};

const Technologies = () => {
  return (
    <div>
      <ul>
        <li>html</li>
        <li>css</li>
        <li>javascript</li>
        <li>react</li>
      </ul>
    </div>
  )
}

const Header = () => {
  return (<div>
    <h4><a href="#s">Home</a></h4>
    <h4><a href="#s">New Feeds</a></h4>
    <h4><a href="#s">Messages</a></h4>
  </div>)
};


export default App;
