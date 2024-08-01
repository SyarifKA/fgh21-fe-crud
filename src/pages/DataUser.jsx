import React from "react";
import { IoTrashSharp } from "react-icons/io5";
import { TiEdit } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useEffect, useState} from 'react'


function TableData() {
    const [dataUser, setDataUser] = useState([])

    async function deleteItem(id) {
        await fetch(`http://localhost:8888/users/${id}`, {
          method: 'DELETE',
        });
        getData();
      }
      
    async function getData() {
        const endPoint = 'http://localhost:8888/users'
        const response = await fetch(endPoint);
        const data = await response.json()
        const listData = data.results
        setDataUser(listData)
    }
    useEffect(() => {
        getData()
    },[])
    return (
        <div className="flex gap-6 items-center flex-col mt-10">
            <div>
                <Link to="/">
                <button className="bg-green-300 p-4 rounded-lg">Back to input</button>
                </Link>
            </div>
            <table className="w-[500px]">
                <thead>
                    <tr className="border">
                        <th className="border border-black">ID</th>
                        <th className="border border-black">NAME</th>
                        <th className="border border-black">EMAIL</th>
                        <th className="border border-black">OPTION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td className="border border-black">1</td>
                        <td className="border border-black">syarif</td>
                        <td className="border border-black">syarif@mail.com</td>
                        <td className="border border-black">
                            <button className="p-2"><TiEdit /></button>
                            <button className="p-2"><IoTrashSharp /></button>
                        </td>
                    </tr>
                    {dataUser.map((item) => {
                        return (
                        <tr key={item.id} className="text-center">
                            <td className="border border-black">{item.id}</td>
                            <td className="border border-black">{item.name}</td>
                            <td className="border border-black">{item.email}</td>
                            <td className="border border-black">
                                <button className="p-2"><TiEdit /></button>
                                <button onClick={() => deleteItem(item.id)} className="p-2"><IoTrashSharp /></button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TableData