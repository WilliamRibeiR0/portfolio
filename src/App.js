import "./App.css";
import Animation from "./components/Animation";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";
import Habilidades from "./components/Habilidades";



function App() {
    return (
        <div>
            <Animation />
            <Header />
            <Inicio />
            <Sobre />
            
            <Projetos />
            <Footer />
        </div>
    );
}

export default App;
