const Skill = () => {
    return (
        <div className="skill-container">
            <p className="text">SKILL</p>
            <div className="skill-box">
                <div className="category">
                    <h1>Language</h1>
                    <div className="skills-list">
                        <div className="language1 box "><span>JAVA</span></div>
                        <div className="language2 box"><span className="skill">JavaScript</span></div>
                        <div className="language3 box"><span>GO</span></div>
                    </div>
                </div>
                <div className="category">
                    <h1>Frontend</h1>
                    <div className="skills-list">
                        <div className="front1 box"><span>React (vite)</span></div>
                        <div className="front2 box"><span>Bootstrap</span></div>
                        <div className="front3 box"><span className="skill">Tailwind CSS</span></div>
                        <div className="front4 box"><span>jQuery</span></div>
                    </div>
                </div>
                <div className="category">
                    <h1>Backend</h1>
                    <div className="skills-list">
                        <div className="back1 box"><span>Spring</span></div>
                        <div className="back2 box"><span>RESTful API</span></div>
                        <div className="back3 box"><span>JPA</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skill