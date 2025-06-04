import '../styles/style.css';
import '../styles/tailwindcss.css'
import About from "./About.jsx"
import Archiving from "./Archiving.jsx"
import Projects from "./Projects.jsx"
import Skill from "./Skill.jsx"


const Container = () => {
    return (
        <div className="div-container">
            <section id="about" className="section">
                <About />
            </section>
            <section id="skill" className="section">
                <Skill />
            </section>
            <section id="projects" className="section">
                <Projects />
            </section>
            <section id="archiving" className="section">
                <Archiving />
            </section>
        </div>
    )
}

export default Container