import './CampoTexto.css'


const CampoTexto = (props) => {
    //PROPS = Armazena as propriedades que esse componente recebeu(campo texto)
    //COMPONENTE Campo_Texto

    const placeholderModificador = `${props.placeholder}...`
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input placeholder= {placeholderModificador} />
        </div>
    )
}
export default CampoTexto