import './Rodape.css'

//COMPONENTE 
export const Rodape = () =>{
    
    return (
            <div className='rodape'>
                <div className='iconeF'>
                        <a href='https://pt-br.facebook.com/AluraCursosOnline/'>
                                 <img src={process.env.PUBLIC_URL + "/imagens/fb.png"}></img> 
                        </a>
                </div>
                <div className='iconeT'>
                        <img src="/imagens/tw.png" alt="logo twitter" />  
                </div>
                <div className='iconeI'>
                        <img  src="/imagens/ig.png"  alt="logo instagram" />  
                </div>
            </div>
            
        
    )

}

export default Rodape
