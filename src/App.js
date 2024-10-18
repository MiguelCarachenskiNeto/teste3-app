// function App() {
//   return (
//     <div>
//       <h1>Teste</h1>
//     </div>
//   );
// }

// export default App;

import Nome from "./components/nome.js"

function App(){
  return(
    <div>
      <h1>Componente App</h1>
      <Nome pessoa ="Miguel"/>
      <br/>
      <Nome pessoa ="Carachenski"/>
    </div>
  );
}

export default App;
