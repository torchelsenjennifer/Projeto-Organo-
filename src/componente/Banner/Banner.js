import './Banner.css'
// import logo from '../../Imagens/banner.png'
//COMPONENTE 
export const Banner = () =>{
    return (
        <header className="banner">
            <img src={process.env.PUBLIC_URL + "/imagens/banner.png"} alt='logo' />
        </header>
    )

}

export default Banner