import './Banner.css'
import logo from '../../Imagens/banner.png'
//COMPONENTE 
export const Banner = () =>{
    return (
        <header className="banner">
            <img src={logo} alt='logo' />
        </header>
    )

}

export default Banner