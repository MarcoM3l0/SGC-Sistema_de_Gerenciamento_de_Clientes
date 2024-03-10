import React, {useState ,useEffect} from "react"; 
import InputMask from 'react-input-mask';
import { Link } from "react-router-dom";
import axios from 'axios'

import { maskTelefone } from '../components/masks';  

import './CadastraCliente.css'

const CadastraCliente = () => {

    async function handleSubmit(e){
        e.preventDefault()
        
        const nome = e.target.nome.value
        const email = e.target.email.value
        const telefone = e.target.telefone.value
        const coordenadas = e.target.coordenadas.value

        let data = JSON.stringify({
            "nome": nome,
            "email": email,
            "telefone": telefone,
            "coordenadas": coordenadas
        });

        const config = {headers: { 
            'Content-Type': 'application/json'
          }}
        
        await axios.post('http://localhost:3000/api/clientes', data, config)

        e.target.nome.value = ''
        e.target.email.value = ''
        e.target.telefone.value = ''
        e.target.coordenadas.value = ''
    }

    return(
        <div className='container'>
            <div className='titulo'>
                <h1>Cadastro de Clientes</h1>
                <div className="">
                    <form className="form" onSubmit={async (e) => { await handleSubmit(e)}}>
                        <p type="Nome:"><input className="filter-input" placeholder="Nome do cliente" name="nome" ></input></p>
                        <p type="Email:"><input className="filter-input" placeholder="Email utilizado pelo cliente"  name="email"></input></p>
                        <p type="Telefone:"><InputMask className="filter-input" mask={maskTelefone} placeholder="Telefone do cliente"  name="telefone"/></p>
                        <p type="Localização:"><InputMask className="filter-input" placeholder="Casa do cliente (x,y)" name="coordenadas"/></p>
                        <button className="btn" type="submit">Cadastrar</button>
                        <Link className="btn" to="/">Voltar</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CadastraCliente