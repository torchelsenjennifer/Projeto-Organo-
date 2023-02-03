import './Rodape.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'


//COMPONENTE 
export const Rodape = () =>{
    

return(
        
        <footer className='rodape' >
                <div className='icone'>
                        <div className='listaIcones'>
                        <a href='https://www.facebook.com/jennifer.torchelsen.5/'>
                                <FaFacebook size={30}/>
                        </a>
                        <a href='https://www.linkedin.com/in/jennifer-schwanz-torchelsen/'>
                                <FaLinkedin size={30} />
                        </a>
                        <a href='https://www.instagram.com/jennifer_torchelsen/'>
                                <FaInstagram size={30}/>
                        </a>
                        </div>
                </div>
                <div className='logo'>
                        <img src={process.env.PUBLIC_URL + "/imagens/logo.png"}></img>
                </div>
                <div className='assinatura'>
                        <h4>
                                Desenvolvido por Jennifer Torchelsen.
                        </h4>
                </div>

                
                     
   
        </footer>
)

}

export default Rodape
