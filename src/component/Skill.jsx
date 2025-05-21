const Skill = () => {
    return (
        <div className="skill-container">
            <p>SKILL</p>
            <div className="skill-box">
                <div className="category">
                    <h2>Language</h2>
                    <div className="skills-list">
                        <span className="skill">JAVA</span  >
                        <span className="skill">JavaScript</span>
                        <span className="skill">GO</span>
                    </div>
                </div>
                <div className="category">
                    <h2>Frontend</h2>
                    <div className="skills-list">
                        <span className="skill">React (vite)</span>
                        <span className="skill">Bootstrap</span>
                        <span className="skill">Tailwind CSS</span>
                        <span className="skill">jQuery</span>
                    </div>
                </div>
                <div className="category">
                    <h2>Backend</h2>
                    <div className="skills-list">
                        <span className="skill">Spring</span>
                        <span className="skill">REST API</span>
                        <span className="skill">JPA</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skill