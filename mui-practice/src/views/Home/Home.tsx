import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import '../../App.css';

function Home() {
  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 id='name-header'>Noob-Andre</h1>
    </div>
  );
}

export default Home;