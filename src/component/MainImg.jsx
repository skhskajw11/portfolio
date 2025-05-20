import MainPhoto from '../imgs/MainPhoto2.jpg';

const MainImg = () => {
    return (
        <div className="container">
            <div className="image-wrapper">
                <img className="imgs" src={MainPhoto} alt="Main Photo"/>
                <div className='img-text'>
                    <p>기본을 가장 중요하게 생각하는 개발자</p>
                    <p>"홍민기" 입니다.</p>
                </div>
            </div>
        </div>
    )
}

export default MainImg