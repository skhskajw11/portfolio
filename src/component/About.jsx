import icon1 from '../imgs/icons1.png';
import icon2 from '../imgs/icons2.png';
import icon3 from '../imgs/icons3.png';
import icon4 from '../imgs/icons4.png';
import icon5 from '../imgs/icons5.png';

const About = () => {
    return (
<div className="about-container">
            <p>ABOUT ME</p>
            <div className="w-full flex flex-wrap justify-center gap-4">
                <div className="icon-wrapper">
                    <img src={icon1} alt="icon1" className="icon" />
                    <span>이름</span>
                    <span>홍민기</span>
                </div>
                <div className="icon-wrapper">
                    <img src={icon2} alt="icon2" className="icon" />
                    <span>생일</span>
                    <span>2001. 2. 22</span>
                </div>
                <div className="icon-wrapper">
                    <img src={icon3} alt="icon3" className="icon" />
                    <span>장소</span>
                    <span>성남시 중원구</span>
                </div>
                <div className="icon-wrapper">
                    <img src={icon4} alt="icon4" className="icon" />
                    <span>email</span>
                    <span>skhskajw11@naver.com</span>
                </div>
                <div className="icon-wrapper">
                    <img src={icon5} alt="icon5" className="icon" />
                    <span>학력</span>
                    <p>대림대학교 전문학사<br/>
                    - 융합소프트웨어과<br/>
                    <br/>
                    성일정보고등학교<br/>
                    - 디지털 정보과</p>
                </div>
                <div className="icon-wrapper">
                    <img src={icon5} alt="icon6" className="icon" />
                    <span>자격증</span>
                    <p>⦁ 정보처리산업기사<br/>
                    ⦁ 정보처리 기능사<br/>
                    ⦁ 웹디자인 기능사<br/>
                    ⦁ ITQ 한글(A등급)<br/>
                    ⦁ ITQ 파워포인트(A등급)</p>
                </div>
            </div>
        </div>
    );
};
export default About