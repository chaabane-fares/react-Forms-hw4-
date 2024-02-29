import logoImg from '../../Assets/logo.png'
import './index.css'

export default function Header(){
    
    return(
        <div className='head'>
            <img src={logoImg} alt="logo" />
            <h3>ACORN PROPERTY INVEST</h3>
        </div>
    )
}