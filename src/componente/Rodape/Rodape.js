import './Rodape.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'


//COMPONENTE 
export const Rodape = () =>{
    

return(
        
        <footer className='rodape'>
                <div className='iconeF'>
                        <a href='https://pt-br.facebook.com/AluraCursosOnline/'>
                                <FaFacebook size={50}/>
                        </a>
                </div>
                <div className='iconeT'>
                        <a href='https://twitter.com/AluraOnline'>
                                <FaTwitter size={50}/>
                        </a>
                </div>
                <div className='iconeI'>
                        <a href='https://www.instagram.com/aluraonline/'>
                                <FaInstagram size={50}/>
                        </a>
                </div>
   
        </footer>
)

}

export default Rodape
