import React from 'react'
import { useForm } from "react-hook-form";


const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <section>
      <button id="button-blue">Try it free 7 days then $20/mo. thereafter</button>
      <div className="login">
        <form id="thisForm" onSubmit={handleSubmit(onSubmit)}  >
          <input type="text" placeholder="First Name" id="name" name="name" {...register("name", { required: true })} />
          {errors.name && <p>Este campo no puede estar vacío</p>}
          <input type="text" placeholder="Last Name" id="Last Name" name="lastName" {...register("lastName", { required: true })} />
          {errors.lastName && <p>Este campo no puede estar vacío</p>}
          <input type="" placeholder="Email Address" id="Email Address" name="emailAddress" {...register("email", { required: true, pattern: new RegExp("[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$") })} />
          {errors.email?.type === 'required' && <p>Este campo no puede estar vacío</p>}
          {errors.email?.type === 'pattern' && <p>La dirección de correo electrónico no está formateada correctamente</p>}
          <input type="password" placeholder="Password" id="Password" name="password" {...register("password", { required: true })} />
          {errors.password && <p>Este campo no puede estar vacío</p>}
          <button id="button-green" type="submit">CLAIM YOUR FREE TRIAL</button>
          <p>By clicking the button, you are agreeing to our Terms and Services</p>
        </form>
      </div>
    </section>
  )
}

export default Form