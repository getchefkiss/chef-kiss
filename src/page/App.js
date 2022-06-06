import packageJson from '../../package.json';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="version-string">(DEV) {packageJson.name}@{packageJson.version} - 6.6.22</p>
      </header>
    </div>
  );
}

export default App;
