import Messages from "./Messages";
import './App.css';

function randomName() {
  const adjectives = [];
  const nouns = [];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + noun;
}

function App() {
  return (
    <div><h1>blank slate</h1></div>
  );
}

export default App;
