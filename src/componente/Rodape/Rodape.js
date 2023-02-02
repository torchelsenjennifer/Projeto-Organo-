import './Rodape.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'


//COMPONENTE 
export const Rodape = () =>{
    

return(
        
        <footer className='rodape' >
                <div className='icone'>
                        <div className='listaIcones'>
                        <a href='https://pt-br.facebook.com/AluraCursosOnline/'>
                                <FaFacebook size={30}/>
                        </a>
                        <a href='https://twitter.com/AluraOnline'>
                                <FaTwitter size={30} />
                        </a>
                        <a href='https://www.instagram.com/aluraonline/'>
                                <FaInstagram size={30}/>
                        </a>
                        </div>
                </div>
                <div className='logo'>
                        <img src={process.env.PUBLIC_URL + "/imagens/logo.png"}></img>
                </div>
                <div className='assinatura'>
                        <h4>
                                Desenvolvido pela Alura.
                        </h4>
                </div>

                
                     
   
        </footer>
)

}

export default Rodape
