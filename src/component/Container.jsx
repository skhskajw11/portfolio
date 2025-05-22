import About from "./About"
import Archiving from "./Archiving"
import Projects from "./Projects"
import Send from "./Send"
import Skill from "./Skill"

const Container = () => {
    return (
        <div className="div-container">
                <About />
                <Skill />
                <Projects />
                <Archiving />
                <Send />
        </div>
    )
}

export default Container