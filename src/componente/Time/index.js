import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const estilo = { backgroundColor: props.corDoFundoDois}
    const risco = { borderColor: props.corDoFundo }

    return (
        (props.colaboradores.length > 0) && <section className='time' style={estilo}>
              <h3 style={risco}>{props.nome}</h3>
        <div className='colaboradores'>
            {props.colaboradores.map(colaborador =><Colaborador 
            nome={colaborador.nome} 
            cargo={colaborador.cargo} 
            imagem={colaborador.imagem}
            /> 
            )}
        </div> 
        </section>
    )

}

export default Time