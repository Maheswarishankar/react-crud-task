import React from 'react'
import BaseApp from '../Core/BaseApp'
import { Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function StudentDetails({ user }) {
    const { id } = useParams()
    console.log(id)
    const person = user[id]
    return (
        <div>
            <BaseApp
                title="Students Details"
                navBar="Students Records">
                <div className='user-content'>
                    <div className=' table-responsive text-center' >
                        <Table striped bordered hover>
                            <thead className='thead text-white'>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Course</th>
                                    <th>SessionTimings</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{person.id}</td>
                                    <td>{person.name}</td>
                                    <td>{person.email}</td>
                                    <td>{person.course}</td>
                                    <td>{person.sessionTimings}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </BaseApp>
        </div>
    )
}

export default StudentDetails