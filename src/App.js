import logo from './logo.svg';
import './App.css';

function App() {
  const title='Welcome to the new blog';
  const link="http://www.google.com"

  return(
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>{Math.random()*20}</p>
        <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;
