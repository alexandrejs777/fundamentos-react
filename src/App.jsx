import './App.css'
import React from 'react'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
    <div className="App">

        <Card titulo="#05 - Condicional v2">
            <CondicionalComIf numero={18} />
        </Card>
        <Card titulo="#05 - Condicional v1">
            <Condicional numero={5} />
        </Card>
        <Card titulo="#04 - Repetição">
            <Repeticao />
        </Card>
        <Card titulo="#03 - Componente com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>{/*  */}
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 - Componente com Parâmetro">
            <ComParametro
                titulo="Esse é o título"
                subtitulo="Esse é o  subtítulo"
            />
        </Card>
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro />
        </Card>


    </div>
);