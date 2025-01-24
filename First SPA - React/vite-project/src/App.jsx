import Student from "./assets/students";
import Header from "./header";
import UserGreeting from "./UserGreeting";


function App() {
  
  return(
    <>
      <Header/>
      <Student name="Emanuell" age={19} isStudent={true}/>
      <Student name="Patrick" age={26} isStudent={true}/>
      <Student name="Carlos" age={47} isStudent={true}/>
      <UserGreeting/>  

    </>
    
  );
}



export default App
