import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div>this is a dashboard component</div>
  )
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <Routes/> */}
//         <h1>hello world</h1>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/">
          <DashboardPage/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
