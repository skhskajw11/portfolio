import '../styles/tailwindcss.css'

const Projects = () => {

    return (
        <>
            <p className="text">PROJECTS</p>
            <div className="project-container">
                <div className="project-box bg-blue-100 p-6"> 
                <h2 className="text-2xl font-bold text-gray-800 mb-4">RESTful API, React 기반 통합예매무비굿즈몰 개발 프로젝트</h2>
                    <div className="space-y-3">
                        <p className="text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2">⦁</span>
                        기존 통합에매무비굿즈몰 마이그레이션 ver.
                        </p>
                        <p className="text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2">⦁</span>
                        로그인 유무에 따른 어드민 페이지 구현
                        </p>
                        <p className="text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2">⦁</span>
                        nseMemo 및 Redis를 이용한 최적화
                        </p>
                        <p className="text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2">⦁</span>
                        mui 프레임워크를 이용해 어드민 페이지의 수치화 및 그래프 구현
                        </p>
                        <p className="text-gray-700 font-medium">
                        <span className="font-bold">사용 기술: </span>
                        React, Java, Mysql, jQuery, MVC, Jpa, Bootstrap, mui
                        </p>
                        <p>
                        <a
                            href="https://github.com/MasterRuma/MovieMall"
                            className="text-blue-600 hover:text-blue-800 font-medium underline transition-colors duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub 링크
                        </a>
                        </p>
                    </div>
                </div>

                <div className="project-box bg-blue-100 p-6"> 
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Spring MVC기반 통합예매무비굿즈몰 개발 프로젝트</h2>
                    <div className="space-y-3">
                        <p className="text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2">⦁</span>
                        영화 예매 및 굿즈 구매가 동시에 가능한 통합 홈페이지 개발
                        </p>
                        <p className="text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2">⦁</span>
                        각종 DB를 이용해 영화 품 상품을 뿌려줌
                        </p>
                        <p className="text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2">⦁</span>
                        다크 모드 지원
                        </p>
                        <p className="text-gray-700 font-medium">
                        <span className="font-bold">사용 기술: </span>
                        markup language, Mysql, jQuery, MVC, Bootstrap
                        </p>
                        <p>
                        <a
                            href="https://github.com/MasterRuma/MovieCR"
                            className="text-blue-600 hover:text-blue-800 font-medium underline transition-colors duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub 링크
                        </a>
                        </p>
                    </div>
                </div>

                

                <div className="project-box bg-blue-100 p-6"> 
                <h2 className="text-2xl font-bold text-gray-800 mb-4">포트폴리오 프로젝트</h2>
                    <div className="space-y-3">
                        <p className="text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2">⦁</span>
                        남들과의 차별성을 주기 위한 나만의 포트폴리오 웹사이트 개발
                        </p>
                        <p className="text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2">⦁</span>
                        한 눈에 보기 쉽게 가독성 중시
                        </p>
                        <p className="text-gray-700 font-medium">
                        <span className="font-bold">사용 기술: </span>
                        React, JavaScript, Tailwind CSS
                        </p>
                        <p>
                        <a
                            href="https://github.com/skhskajw11/portfolio"
                            className="text-blue-600 hover:text-blue-800 font-medium underline transition-colors duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub 링크
                        </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects