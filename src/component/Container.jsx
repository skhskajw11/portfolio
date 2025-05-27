import '../styles/style.css';
import '../styles/tailwindcss.css'
import About from "./About.jsx"
import Archiving from "./Archiving.jsx"
import Projects from "./Projects.jsx"
import Skill from "./Skill.jsx"


const Container = () => {
    return (
        <div className="div-container">
            <About />
            <Skill />
            <Projects />
            <Archiving />
        </div>
    )
}

export default Container