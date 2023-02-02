import './App.css';
import ButtonNavigation from "./ButtonNavigation/ButtonNavigation";

function App() {
  return (
      <div className="App">

        <header className={"ContainerHeader"}>

          <div className={"Header"}>
            <div className={"Logo"}/>
            <div>
              <div className={"Navigation"}>
                <ButtonNavigation text={"Главная"}/>
                <ButtonNavigation text={"Каталог"}/>
                <ButtonNavigation text={"О нас"}/>
                <ButtonNavigation text={"Где купить"}/>
                <ButtonNavigation text={"Контакты"}/>
                <ButtonNavigation text={"Партнерам"}/>
              </div>
              <div className={"Bucket"}/>
            </div>
          </div>


        </header>

      </div>
  );
}

export default App;
