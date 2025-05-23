import About from "./About"
import Archiving from "./Archiving"
import Projects from "./Projects"
import Skill from "./Skill"

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