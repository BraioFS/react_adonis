import { Routes, Route } from "react-router-dom";
/* Page principal */
import Home from './home';
// import Back from './back';
// import Front from './front';
// import Erro from './erro';
// import Mobile from './mobile';
// import Banco from './banco';
// import Design from './design';
// /* front */
// import TypeScript from './front/typescript';
// import Html from './front/html';
// import JavaScript from './front/javascript';
// import Angular from './front/angular';
// import React from './front/react';
// import Bootstrap from './front/bootstrap';
// /* Back */
// import Postman from './back/postman';
// import Spring from './back/spring';
// import Swagger from './back/swagger';
// import Java from './back/java';
// import Python from './back/python';
// import CSharp from './back/csharp';
// /* Mobile */
// import Android from './mobile/android';
// import Flutter from './mobile/flutter';
// import Ionic from './mobile/ionic';
// import ReactNative from './mobile/reactNative';
// import Xamarin from './mobile/xamarin';
// import Xcode from './mobile/xcode';
// /* Banco */
// import Heid from './banco/heid';
// import Oracle from './banco/oracle';
// import Pgadmin from './banco/pgadmin';
// import Mysql from './banco/mysql';
// import Sqlite from './banco/sqlite';
// import Mongodb from './banco/mongodb';
// /* Design */
// import Figma from './design/figma';
// import Canva from './design/canva';
// import Illustrator from './design/illustrator';
// import Invision from './design/invision';
// import Sketch from './design/sketch';
// import Adobephotoshop from './design/adobephotohop';
// /* Login */
// import Login from './login'
// import AutoCadastro from "./autoCadastro";
// /* Histórico */
// import Historico from './components/historico';
// import Private from './private'

export default function RoutesAPP(){
    return(
        <Routes>
            {/* tela login */}
            {/* <Route path="/login" element={<Login/>}/> 
            <Route path="/auto-cadastro" element={<AutoCadastro/>}/> */}

            {/* Rotas principais */}
            <Route path="/" element={<Home/>}/>
            {/* <Route path="*" element={<Erro/>}/>
            <Route path="/back" element={<Back/>}/>
            <Route path="/front" element={<Front/>}/>   
            <Route path="/mobile" element={<Mobile/>}/>   
            <Route path="/banco" element={<Banco/>}/>   
            <Route path="/design" element={<Design/>}/>    */}

            {/* Rotas Front */}
            {/* <Route path="/typeScript" element={<TypeScript/>}/>
            <Route path="/html" element={<Html/>}/>
            <Route path="/javaScript" element={<JavaScript/>}/>
            <Route path="/angular" element={<Angular/>}/>   
            <Route path="/react" element={<React/>}/>   
            <Route path="/bootstrap" element={<Bootstrap/>}/> */}

            {/* Rotas Back */}
            {/* <Route path="/postman" element={<Postman/>}/>
            <Route path="/spring" element={<Spring/>}/>
            <Route path="/swagger" element={<Swagger/>}/>
            <Route path="/java" element={<Java/>}/>   
            <Route path="/python" element={<Python/>}/>   
            <Route path="/csharp" element={<CSharp/>}/> */}

            {/* Rotas Mobile */}
            {/* <Route path="/android" element={<Android/>}/>
            <Route path="/flutter" element={<Flutter/>}/>
            <Route path="/Ionic" element={<Ionic/>}/>
            <Route path="/reactNative" element={<ReactNative/>}/>   
            <Route path="/xamarin" element={<Xamarin/>}/>   
            <Route path="/xcode" element={<Xcode/>}/> */}

            {/* Rotas Banco */}
            {/* <Route path="/heid" element={<Heid/>}/>
            <Route path="/oracle" element={<Oracle/>}/>
            <Route path="/pgadmin" element={<Pgadmin/>}/>
            <Route path="/mysql" element={<Mysql/>}/>   
            <Route path="/sqlite" element={<Sqlite/>}/>   
            <Route path="/mongodb" element={<Mongodb/>}/> */}
            
            {/* Rotas Design */}
            {/* <Route path="/figma" element={<Figma/>}/>
            <Route path="/canva" element={<Canva/>}/>
            <Route path="/illustrator" element={<Illustrator/>}/>
            <Route path="/invision" element={<Invision/>}/>   
            <Route path="/sketch" element={<Sketch/>}/>   
            <Route path="/adobephotoshop" element={<Adobephotoshop/>}/> */}

            {/* Private */}
            {/* <Route path="/historico" element={<Private><Historico/></Private>}/> */}
        </Routes>
    );
}