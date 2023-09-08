
import visasImg from '../assets/img/visaTransparent.png';

export function Creditcard(props){

    const hideNumber = (number) => {
        const hiddenDigits = ".".repeat(number.length - 4) + number.slice(-4);

        const formattedNumber = hiddenDigits.replace(/\d{4}(?!$)/g, "$& ");

        return formattedNumber;
      };



    return (

        < div className="RowsCenter">


        <div className={props.cssClass}>

        <img src= {visasImg}  className='img'/>
        {/* <h1 className="type">   {props.type}    </h1>  */}


             <div className="container">
            
                {/* <h2 className="Number"> {hideNumber(props.number).separatElemnet},{hideNumber(props.number).hiddenDigits} </h2> */}
                <h2 className="Number">{hideNumber(props.number)}</h2>

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

                    {/* <img src= alt="" /> */}
                    {/* <i class="fa-thin fa-star"></i> */}

                 </div>
        
            </div>

        </div>


        </div>

        // <span>{bank} </p>


    )

    }


