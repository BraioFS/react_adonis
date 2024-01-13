import { Routes, Route } from "react-router-dom";
/* Page principal */
import Home from "./home";
import Front from "./front";

/* Page front */
import Html from "./front/page-html";

export default function RoutesAPP() {
  return (
    <Routes>
      {/* Rotas principais */}
      <Route path="/" element={<Home />} />
      <Route path="/front-home" element={<Front />} />
      {/* <Route path="*" element={<Erro/>}/>
            <Route path="/back" element={<Back/>}/> 
            <Route path="/mobile" element={<Mobile/>}/>   
            <Route path="/banco" element={<Banco/>}/>   
            <Route path="/design" element={<Design/>}/>    */}

      {/* Rotas Front */}
      <Route path="/page-html" element={<Html />} />
      {/* <Route path="/typeScript" element={<TypeScript/>}/>
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
    </Routes>
  );
}
