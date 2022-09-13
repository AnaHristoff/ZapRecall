import Logo from './Logo';
import play from '../assets/img/play.png';
import '../assets/css/style.css';

export default function InitialPage({ initialPage, setInitialPage, setBackgroundPage, logoClass, setLogoClass }) {
    

    function start(){
        setInitialPage("hidden");
        setLogoClass("logo");
        setBackgroundPage("background-page");
    }

    return (
        <div className={initialPage}>
            <Logo logoClass={logoClass}/>
            <button className="start-button" onClick={start}>
                <p>Start to practice</p>
                <img src={play} alt="play"/>
                <img src={play} alt="play"/>
            </button>
        </div>
    );
}