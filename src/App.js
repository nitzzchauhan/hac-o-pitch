
// import Smartcases from './Pages/SearchCases' ;
// import Details1 from './Pages/Details1' ;
// import Details2 from './Pages/Details2';
// import Details3 from './Pages/Details3';
import Alldetails from './Pages/Alldetails'
import Casestatus from './Pages/Casestatus';
import Dashboard from './Pages/Dashboard';
import Loginsignup from './Pages/Loginsignup';
import "./Pages/maindesign.css"




function App() {
  return (
    <>
      <div className='body1'>

        <Alldetails />
        <Casestatus />
        <Loginsignup />
        <Dashboard/>
      </div>











      {/* <Smartcases/> */}
      {/* <Details1/>
    <Details2/>
    <Details3/> */}
    </>
  );
}

export default App;
