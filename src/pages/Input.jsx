import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup"


function InputData() {
    async function inputForm() {
    // e.preventDefault()
    const name = formik.values.name
    const email = formik.values.email
    const password = formik.values.password
    
    const data = new URLSearchParams()
    data.append('username', name)
    data.append('email', email)
    data.append('password', password)
    const response = await fetch('http://localhost:8888/users/', {
        method: 'POST',
        body: data
    })
    const dataResponse = await response.json()
    if (dataResponse.success) {
        window.alert(dataResponse.message)
    } else {
        window.alert(dataResponse.message)
    }    
    // e.target.reset()
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        onSubmit: inputForm,
        validationSchema: yup.object().shape({
            name: yup.string().required('Please Enter your name').min(3).max(10),
            email: yup.string().required('Please Enter your email').email(),
            password: yup.string().required('Please Enter your password').min(8)
        })
    })

    const handleForm = (event) => {
        const {target} = event
        formik.setFieldValue(target.name, target.value)
    }

    return (
        <div className="flex items-center flex-col gap-4 mt-10">
            <div className="flex justify-center">
                <Link to="/data">
                <button className="flex bg-yellow-500 w-[400px] justify-center text-white font-semibold text-xl p-4 rounded-lg">Show Data</button>
                </Link>
            </div>
            <form onSubmit={formik.handleSubmit} className="flex flex-col w-[400px] gap-4 text-white rounded-lg items-center px-14 py-6 bg-green-400">
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="name" className="text-xl">Name</label>
                    <input type="text" id="name" name="name" onChange={handleForm} className="border pl-2 h-[35px] rounded-lg text-black"/>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="email" className="text-xl">Email</label>
                    <input type="text" id="email" name="email" onChange={handleForm} className="border pl-2 h-[35px] rounded-lg text-black"/>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="password" className="text-xl">Password</label>
                    <input type="password" id="password" name="password" onChange={handleForm} className="border pl-2 h-[35px] rounded-lg text-black"/>
                </div>
                <div className="flex flex-col w-full px-10 gap-2">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 py-2 rounded-lg">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default InputData