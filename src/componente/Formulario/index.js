
import CampoTexto from '../CampoTexto';
import './Formulario.css'

//componente formulario
function Formulario() {
    return (
        <section className='formulario'>
            <form>
                {/* passa o parametro para o componente */}
                <h2>Preencha os dados para criar o card da colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    );
}

export default Formulario