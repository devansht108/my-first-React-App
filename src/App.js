import logo from './logo.svg';
import './App.css';

function App() {
  const title='Welcome to the new blog';

  return(
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>{Math.random()*20}</p>
      </div>
    </div>
  );
}

export default App;
