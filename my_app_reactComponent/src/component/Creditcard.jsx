export function Creditcard(props){



    return (

        <>

        <div className={props.cssClass}>


        <h1 className="type">   {props.type}    </h1> 

             <div className="container">
            
                <h1 className="number"> {props.number}     </h1>

                <div className="center">
                    
                    <section className="alinear">

                    <h1 className="expire"> {props.expire}     </h1> 
                    <h1 className="expirationMont"> {props.expirationMonth <10 ? '0'+ props.expirationMonth : props.expirationMonth}    </h1>
                    <h1 className="expirationYears"> {props.expirationYears} </h1>
                    <h1 className="bank"> {props.bank} </h1>
                    <h1 className="cssClass"> </h1>

                    </section>

                        <h1 className="owner"> {props.owner} </h1>

                 </div>
        
            </div>

        </div>

        {/* <div className="CreditBoxTwo">

            <h1 className="type"> {props.type}  </span>
            <span className="number"> {props.number}  </span>

        </div> */}

        </>

        // <span>{bank} </p>


    )

    }


