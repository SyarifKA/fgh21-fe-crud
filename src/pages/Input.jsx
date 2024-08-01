import React from "react";
import { Link } from "react-router-dom";

function InputData() {
    // const resetForm = React.useRef()
    async function inputData(e) {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    
    if (name == '' || email == '' || password == '') {
        window.alert("Data tidak lengkap")
        return
    } else {
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
    }
    e.target.reset()
    }
    return (
        <div className="flex items-center flex-col gap-8 mt-10">
            <div className="flex justify-center w-[500px]">
                <Link to="/data">
                <button className="flex bg-yellow-500 w-full p-4 rounded-lg">Show Data</button>
                </Link>
            </div>
            <form onSubmit={inputData} className="flex flex-col w-[500px] gap-4 w-1/3 text-white rounded-lg items-center py-6 bg-green-400">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Nama</label>
                    <input type="text" id="name" className="border text-black"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" className="border text-black"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" className="border text-black"/>
                </div>
                <div className="flex flex-col gap-2">
                    <button type="submit" className="bg-blue-500 px-4 py-2 rounded-lg">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default InputData