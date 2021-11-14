 import style from './Footer.module.css';
 import {Link} from 'react-router-dom';
 
 export default function Footer() {
    return (
        <>
        <div className={style.footer}>
            <p>Instructions:</p>
            <p>1) Pick a Continent</p>
            <p>2) Pick a Country</p>
            <p>3) Hit Show me!</p>
        </div> 
        <Link to="/">
        <div>HOME</div>
        </Link>
        </>
    )
}