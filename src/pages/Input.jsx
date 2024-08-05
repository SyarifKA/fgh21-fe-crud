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
    data.append('name', name)
    data.append('email', email)
    data.append('password', password)
    const response = await fetch('http://localhost:8888/users', {
        method: 'POST',
        body: data
    })
    const dataResponse = await response.json()
    if (dataResponse.success) {
        window.alert(dataResponse.message)
    } else {
        window.alert(dataResponse.message)
    }    
    // email.target.reset()
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
        <div className="flex items-center flex-col gap-8 mt-10">
            <div className="flex justify-center w-[500px]">
                <Link to="/data">
                <button className="flex bg-yellow-500 w-full p-4 rounded-lg">Show Data</button>
                </Link>
            </div>
            <form onSubmit={formik.handleSubmit} className="flex flex-col w-[500px] gap-4 w-1/3 text-white rounded-lg items-center py-6 bg-green-400">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Nama</label>
                    <input type="text" id="name" name="name" onChange={handleForm} className="border text-black"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" onChange={handleForm} className="border text-black"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={handleForm} className="border text-black"/>
                </div>
                <div className="flex flex-col gap-2">
                    <button type="submit" className="bg-blue-500 px-4 py-2 rounded-lg">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default InputData