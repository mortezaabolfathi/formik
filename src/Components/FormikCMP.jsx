import React from "react";
import { Formik, useFormik } from "formik";




const FormikCMP = () => {

const formik=useFormik({
  initialValues : {
    name:"",
    password:""
  },
  onSubmit:(value)=>{
    console.log(value)
  },
  validate:(value)=>{
    let errors={}
      if(!value.name){
        errors.name="Name is not valid"
      }

      if(!value.password){
        errors.password="Password is not valid"
      }

    return errors;
  }
})

// console.log(formik.errors)
// console.log(formik.values)


  return (
    <div className="w-full max-w-xs">
      <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name && <div className="mt-1 text-red-500"> {formik.errors.name} </div>}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
           {formik.errors.password && formik.touched.password&& <div className="mt-1 text-red-500"> {formik.errors.password} </div>}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;designed by Morteza Abolfathi.
      </p>
    </div>
  );
};

export default FormikCMP;
