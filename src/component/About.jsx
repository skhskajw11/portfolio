import icon1 from '../imgs/icons1.png';
import icon2 from '../imgs/icons2.png';
import icon3 from '../imgs/icons3.png';
import icon4 from '../imgs/icons4.png';
import icon5 from '../imgs/icons5.png';

const About = () => {
    return (
        <div className="about-container">
            <p>ABOUT ME</p>
            <div className="w-full flex flex-wrap justify-center">
                <div className="w-1/3"><img src={icon1} alt="icon1" /></div>
                <div className="w-1/3"><img src={icon2} alt="icon2" /></div>
                <div className="w-1/3"><img src={icon3} alt="icon3" /></div>
                <div className="w-1/3"><img src={icon4} alt="icon4" /></div>
                <div className="w-1/3"><img src={icon5} alt="icon5" /></div>
            </div>
        </div>
    );
};
export default About