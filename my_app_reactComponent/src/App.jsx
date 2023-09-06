import './App.css'

import {Creditcard} from './component/Creditcard'

// const [count, setCount] = useState(0)

function App() {



  return (

    <>

     <Creditcard type = 'visa ' number = "0123456789016984" expire='Expire' expirationMonth ={9} expirationYears ={2021} bank = 'BPN' owner ='Maxcence Bouret' cssClass ='Credicard-Box'/>
     <Creditcard type = 'Ma' number = "0123456778904755" expire='Expire' expirationMonth ={3} expirationYears ={2021} bank = 'BPN' owner ='Maxce Bouret'  cssClass ='Credicard-Box' />


      {/* <Creditcard owner ='Maxcence Bouret'>  </Creditcard> */}

    </>

  )

}

export default App

{/* <Creditcard type={'visa'}> </Creditcard> */}

