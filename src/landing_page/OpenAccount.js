import React from 'react';

function OpenAccount() {
    return ( 
        <div className="container">
          <div className="row text-center p-5 mt-5">
              <h1 className="mt-4 mb-4">
                Open a Zerodha account
              </h1>
              <p className='text-muted'>
                Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
              </p>
              <button className='btn p-2 btn-primary fs-5 mt-4 mb-5' style={{width:"20%", margin:" 0 auto"}}>
                Sign up for free
              </button>
          </div>
       </div>
     );
}

export default OpenAccount;