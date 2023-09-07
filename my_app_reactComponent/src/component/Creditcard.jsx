export function Creditcard(props){

    const hideNumber = (number) => {

        const hiddenDigits = ".".repeat(number.length - 4) + number.slice(-4);
        return hiddenDigits;

      };



    return (

        < div className="RowsCenter">

        <div className={props.cssClass}>


        <h1 className="type">   {props.type}    </h1> 

        {/* <img src={visasImg}  /> */}

             <div className="container">
            
                <h2 className="Number"> {hideNumber(props.number)}   </h2>

                <div className="center">
                    
                    <section className="alineado">

                        <span className="expire"> {props.expire}     </span> 

                        <section className="aligElement">

                        <span className="expirationMonth">  {props.expirationMonth <10 ? '0'+ props.expirationMonth : props.expirationMonth}/ </span>
                        <span className="expirationYears"> {props.expirationYears} </span>

                        </section>
                        <span className="bank"> {props.bank} </span>
                        <span className="cssClass"> </span>

                    </section>

                    <section className="alinear">
                        <span className="owner"> {props.owner} </span>
                    </section>

                    <i class="fa-thin fa-star"></i>

                 </div>
        
            </div>

        </div>


        </div>

        // <span>{bank} </p>


    )

    }


