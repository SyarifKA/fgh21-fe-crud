import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function EditUser() {
    const [dataUser, setDataUser] = useState([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const id = useParams()

    const nav = useNavigate()

    async function getData() {
        const endPoint = 'http://localhost:8888/users/' + id.id
        const response = await fetch(endPoint);
        const data = await response.json()
        const listData = data.results
        // console.log(listData)
        setDataUser(listData)
        setName(listData.username)
        setEmail(listData.email)
        setPassword(listData.password)
    }
    
    useEffect(() => {
        getData()
    }, [])
    
    async function editItem(e) {
        e.preventDefault()
        const data = new URLSearchParams()
        data.append('username', name)
        data.append('email', email)
        data.append('password', password)
    
        await fetch(`http://localhost:8888/users/` + id.id, {
            method: 'PATCH',
            body: data,
        });
        nav("/data")
      }
      
    return (
        // <div className="flex items-center flex-col gap-8 mt-10">
        //     <div className="flex justify-center w-[500px]">
        //         <Link to="/data">
        //         <button className="flex bg-yellow-500 w-full p-4 rounded-lg">Show Data</button>
        //         </Link>
        //     </div>
        //     <form onSubmit={editItem} className="flex flex-col w-[500px] gap-4 w-1/3 text-white rounded-lg items-center py-6 bg-green-400">
        //         <div className="flex flex-col gap-2">
        //             <label htmlFor="name">Nama</label>
        //             <input type="text" id="name" defaultValue={dataUser.username} onChange={(e) => setName(e.target.value)} className="border text-black"/>
        //         </div>
        //         <div className="flex flex-col gap-2">
        //             <label htmlFor="email">Email</label>
        //             <input type="text" id="email" defaultValue={dataUser.email} onChange={(e) => setEmail(e.target.value)} className="border text-black"/>
        //         </div>
        //         <div className="flex flex-col gap-2">
        //             <label htmlFor="password">Password</label>
        //             <input type="text" id="password" defaultValue={dataUser.password} onChange={(e) => setPassword(e.target.value)} className="border text-black"/>
        //         </div>
        //         <div className="flex flex-col gap-2">
        //             <button type="submit" className="bg-blue-500 px-4 py-2 rounded-lg">Submit</button>
        //         </div>
        //     </form>
        // </div>
        <div className="flex items-center flex-col gap-4 mt-10">
        <div className="flex justify-center">
            <Link to="/data">
            <button className="flex bg-yellow-500 w-[400px] justify-center text-white font-semibold text-xl p-4 rounded-lg">Show Data</button>
            </Link>
        </div>
        <form onSubmit={editItem} className="flex flex-col w-[400px] gap-4 text-white rounded-lg items-center px-14 py-6 bg-green-400">
            <div className="flex flex-col w-full gap-2">
                <label htmlFor="name" className="text-xl">Name</label>
                <input type="text" id="name" name="name" defaultValue={dataUser.username} onChange={(e) => setName(e.target.value)} className="border pl-2 h-[35px] rounded-lg text-black"/>
            </div>
            <div className="flex flex-col w-full gap-2">
                <label htmlFor="email" className="text-xl">Email</label>
                <input type="text" id="email" name="email" defaultValue={dataUser.email} onChange={(e) => setEmail(e.target.value)} className="border pl-2 h-[35px] rounded-lg text-black"/>
            </div>
            <div className="flex flex-col w-full gap-2">
                <label htmlFor="password" className="text-xl">Password</label>
                <input type="password" id="password" name="password" defaultValue={dataUser.password} onChange={(e) => setPassword(e.target.value)} className="border pl-2 h-[35px] rounded-lg text-black"/>
            </div>
            <div className="flex flex-col w-full px-10 gap-2">
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 py-2 rounded-lg">Submit</button>
            </div>
        </form>
    </div>
    )
}

export default EditUser