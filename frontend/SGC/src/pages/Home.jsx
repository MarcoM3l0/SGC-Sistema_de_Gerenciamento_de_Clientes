import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from '../components/modal.jsx'

import './Home.css'

const Home = () =>{
    const [listaCliente, setListaCliente] = useState([])
    const [listaFiltrada, setListaFiltrada] = useState([])

    const [abriModal, setAbriModal] = useState(false)
    const [ menorDistancia, setMenorDistancia ] = useState([])
    

    useEffect(() => {

        let config = {
        method: 'get',
        url: `http://localhost:3000`,
        headers: { }
        };

        axios.request(config)
        .then((response) => {
            setListaCliente(response.data.clientes);
        })
        .catch((error) => {
        console.log(error);
        });

        config = {
            method: 'get',
            url: `http://localhost:3000/api/rota`,
            headers: { }
            };

        axios.request(config)
        .then((response) => {
            setMenorDistancia(response.data);
        })
        .catch((error) => {
        console.log(error);
        });

    }, [])

    const handleInputChange = (event) => {

        const searchTerm = event.target.value.toLowerCase()
        const filteredClients = listaCliente.filter((cliente) =>
          cliente.nome.nome.toLowerCase().includes(searchTerm) ||
          cliente.nome.email.toLowerCase().includes(searchTerm) ||
          cliente.nome.telefone.toLowerCase().includes(searchTerm) ||
          cliente.nome.coordenadas.toLowerCase().includes(searchTerm)
        )
        setListaFiltrada(filteredClients);

    }

    return(
        <div className='container'>
            <div className='titulo'>
                <h1>Sistema de Gerenciamento de Clientes</h1>
            </div>

            <div  className="clientes">
                <h2 className='label-lista'>Lista de Clientes</h2>
                {listaFiltrada.length == 0 ? 

                    listaCliente.map(clientes => (
                        <div className="cliente-info">
                            Nome: {clientes.nome.nome}<br /> 
                            Email: {clientes.nome.email}<br />
                            Telefone: {clientes.nome.telefone}<br />
                            Localização: {clientes.nome.coordenadas}<br />
                        </div>
                    )) 
                :
                    listaFiltrada.map(clientes => (
                        <div className="cliente-info">
                            Nome: {clientes.nome.nome}<br /> 
                            Email: {clientes.nome.email}<br />
                            Telefone: {clientes.nome.telefone}<br />
                            Localização: {clientes.nome.coordenadas}<br />
                        </div>
                    ))
                }
            </div>
            <div className="filter">
               <input type="text" placeholder="Filtrar" onChange={handleInputChange}/>
            </div>
            <div>
                <Link className="btn-cadastrar-cliente" to="/cadastrar-cliente">Cadastrar cliente</Link>
                <button className='btn-calcular-rota' onClick={() => setAbriModal(!abriModal)}>Calcular Rota</button>
            </div>
            <Modal isOpen={abriModal} setModalAbrir={() => setAbriModal(!abriModal)} menorDistancia={menorDistancia}/> 
            <div>
                <p>by @marco_m3l0</p>
            </div>
        </div>
    )
}

export default Home
