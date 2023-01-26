
    //PROPS = Armazena as propriedades que esse componente recebeu(campo texto)
    //COMPONENTE Campo_Texto

import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` 
    //Dúvida
    
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    //Dúvida

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto