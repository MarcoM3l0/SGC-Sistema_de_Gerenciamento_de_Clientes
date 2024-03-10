import React from 'react'
import './modal.css'




const Modal = ({isOpen, setModalAbrir, menorDistancia}) => {
    
    const distanciaMenor = [];

    if(distanciaMenor.length > 0){
        distanciaMenor.length = 0
    }

    for (let i = 0; i < menorDistancia.length; i++) {
        distanciaMenor.push(menorDistancia[i].nome)
    }

    if(isOpen){
        return (
            <div className='BACKGROUND_STYLE'>
                <div className="MODAL_STYLE">
                    <h3>Rota de visitação</h3>
                    <div className="btn-fechar" onClick={setModalAbrir}>X</div> 
                    {distanciaMenor.map(nome=>(
                        <div>Cliente: {nome}</div>
                    ))}
                </div>
            </div>
        )
    }

    return null
}

export default Modal
