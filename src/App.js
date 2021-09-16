import React from 'react';
//import './App.css';
import { Route, Switch } from "react-router-dom"
import Header from './Componentes/Canais/Canais';
import RecordApp from './Record/RecordHeader';
import BalancoApp from './Record/BalancoGeral/Balancogeral';
import CapitalApp from './Record/BalancoGeral/Capital/Capital';
import CulturaApp from './Componentes/Cultura/Cultura';
import BandApp from './Componentes/Band/Band';
import GloboApp from './Componentes/Globo/Globo';
import SbtApp from './Componentes/Sbt/Sbt';
import Corpo from './Componentes/Corpo/Corpo';

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/" render={() => <Header />}></Route>

          <Route exact path="/record" render={() => <RecordApp />}></Route>

          <Route exact path="/record/balancogeral" render={() => <BalancoApp />}></Route>

          <Route exact path="/record/balancogeral/capital" render={() => <CapitalApp />}></Route>

          <Route exact path="/cultura" render={() => <CulturaApp />}></Route>

          <Route exact path="/band" render={() => <BandApp />}></Route>

          <Route exact path="/globo" render={() => <GloboApp />
          }></Route>

          <Route exact path="/sbt" render={() => <SbtApp />
          }></Route>

        </Switch>

      </main>
      <main>
        <div>
          <Corpo
            nomecanal={"Trabalho de Desenvolvimento Web. Projeto de Rotas. Aluno Vinicius Roberto Polo"}
            color={"rgb(100,100,100)"}
          ></Corpo>
        </div>
      </main >
    </div >
  );
}

export default App;
