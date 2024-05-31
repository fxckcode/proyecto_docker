import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/usuarios")
        if (response.status == 200) {
          setUsers(response.data)
          console.log(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getUsers()
  }, [])
  return (
    <div className='w-full flex justify-center flex-col gap-10 items-center'>
      <h1 className='text-4xl font-bold text-center mt-10'>Usuarios</h1>
      <div className="relative overflow-x-auto w-[40%]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">
                    {user.id}
                  </td>
                  <td className="px-6 py-4">
                    {user.nombre}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default App
