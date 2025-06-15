import logo from './logo.svg';
import Home from './Home';

function App() {
  const title = 'Welcome to the new blog';
  const link = "http://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>{Math.random() * 20}</p>
        <a href={link}>Google</a>

        {/* ✅ Add this line to render Home component */}
        <Home />
      </div>
    </div>
  );
}

export default App;
