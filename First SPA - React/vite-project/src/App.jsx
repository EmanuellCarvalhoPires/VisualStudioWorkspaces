import Student from "./assets/students";
import Header from "./header";



function App() {
  
  return(
    <>
      <Header/>
      <Student name="Emanuell" age={19} isStudent={true}/>
      <Student name="Patrick" age={26} isStudent={true}/>
      <Student name="Carlos" age={47} isStudent={true}/>

    </>
    
  );
}



export default App
