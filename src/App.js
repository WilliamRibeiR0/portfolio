import "./App.css";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";

function App() {
    return (
        <div>
            <Wrapper />
            <Header />
            <Inicio />
            <Sobre />
            <Projetos />
        </div>
    );
}

export default App;
