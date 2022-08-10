import logoZapRecall from '../assets/img/logo.png';
import '../assets/css/style.css';

export default function Logo({ logoClass }){
    return (
        <div className={logoClass}>
            <img src={logoZapRecall} alt='logo ZapRecall'></img>
            <p>ZapRecall</p>
        </div>
    );
}