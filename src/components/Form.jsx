import React from 'react'


const Form = () => {
  return (
    <section>
    <button id="button-blue">Try it free 7 days then $20/mo. thereafter</button>
    <div className="login">
        <form id="thisForm">
            <input type="text" placeholder="First Name" id="name" name="name" required/>
            <input type="text" placeholder="Last Name" id="Last Name" name="lastName" required/>
            <input type="email" placeholder="Email Address" id="Email Address" name="emailAddress" required/>
            <input type="password" placeholder="Password" id="Password" name="password" required/>
            <button id="button-green">CLAIM YOUR FREE TRIAL</button>
            <p>By clicking the button, you are agreeing to our Terms and Services</p>
        </form>
    </div>
  </section>
  )
}

export default Form