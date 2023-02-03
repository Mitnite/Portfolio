import './App.css';
import Header from "./Header/Header";
import Catalogue from "./Catalogue/Catalogue";

function App() {
  return (
      <div className="App">

        <header>

          <Header />

          <div className={"HeaderFooter"}>
            <p>АМИР - производитель бытовой электроники с вниманием к каждой детали </p>
          </div>

        </header>

        <Catalogue />

      </div>
  );
}

export default App;
