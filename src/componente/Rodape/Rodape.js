import './Rodape.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'


//COMPONENTE 
export const Rodape = () =>{
    
//     return (
//             <div className='rodape'>
//                 <div className='iconeF'>
//                         {/* <a href='https://pt-br.facebook.com/AluraCursosOnline/'>
//                                  <img src={process.env.PUBLIC_URL + "/imagens/fb.png"}></img> 
//                         </a> */}
//                         <img src={process.env.PUBLIC_URL + "/imagens/fb.png"} onClick={()=> window.open("https://pt-br.facebook.com/AluraCursosOnline/")}></img>
//                         <a href='https://pt-br.facebook.com/AluraCursosOnline/'>
//                                  <h3>{process.env.PUBLIC_URL + "/imagens/fb.png"}</h3> 
//                         </a>
//                 </div>

//                 <div className='iconeT'>
//                         <img src="/imagens/tw.png" alt="logo twitter" />  
//                 </div>
//                 <div className='iconeI'>
//                         <img  src="/imagens/ig.png"  alt="logo instagram" />  
//                 </div>
//             </div>
            
        
//     )

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
{/* 
                <div className='logo'>
                        <img src={process.env.PUBLIC_URL + "/imagens/logo.png"}></img>
                </div>

                
                <h3 className='assinatura'>Desenvolvido por alura.</h3> */}
               

              
                
        </footer>
)

}

export default Rodape
