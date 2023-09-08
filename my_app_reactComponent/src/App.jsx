import './App.css'


import {Creditcard} from './component/Creditcard'
// const [count, setCount] = useState(0)
//una funcion q lamacena algo.

function App() {

  return (  

    <>
      {/* <visasImg/>  */}
     <Creditcard type = 'visa ' number = "0123  4567 8901  9654" expire='Expire' expirationMonth ={9} expirationYears ={2021} bank = 'BNP' owner ='Maxcence Bouret' cssClass ='Credicard-One'  />
     <Creditcard type = 'Master Card' number = "0123  4567 7890  9654" expire='Expire' expirationMonth ={3} expirationYears ={2021} bank = 'N26' owner ='Maxce Bouret'  cssClass ='Credicard-Box' visasImg = './assets/img/mastercard.png' />
     <Creditcard type = 'visa' number = "0123  4567 7890  9654" expire='Expire' expirationMonth ={3} expirationYears ={2021} bank = 'Name of Bank' owner ='Firts Name Last Name'  cssClass ='Credicard-Three' />

    </>
    )

}

export default App


