import "./App.css";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";
import Habilidades from "./components/Habilidades";



function App() {
    return (
        <div>
            <Wrapper />
            <Header />
            <Inicio />
            <Sobre />
            <Habilidades />
            <Projetos />
            <Footer/>
        </div>
    );
}

export default App;
