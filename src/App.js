import "./App.css";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Projetos from "./components/Projetos";

function App() {
    return (
        <div>
            <Wrapper />
            <Header />
            <Inicio />
            <Projetos/>
        </div>
    );
}

export default App;
