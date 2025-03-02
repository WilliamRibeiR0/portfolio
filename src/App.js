import "./App.css";
import Animation from "./components/Animation";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Projetos from "./components/Projetos";
import Footer from "./components/Footer";
import Skils from "./components/Skils"


function App() {
    return (
        <div>
            <Animation />
            <Header />
            <Inicio />
            <Skils />
            <Projetos />
            <Footer />
        </div>
    );
}

export default App;
