import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'


function BaseApp({ title, navBar, children }) {
    const history = useHistory()

    return (
        <div>
            <div>
                <div>
                    <nav className='navbar'>
                        <div className='navBar'>{navBar}</div>
                        <div className='nav-btn'>
                            <Button variant="light" onClick={() => history.push("/")}>Dashboard</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button variant="light" onClick={() => history.push("/add/user")}>Add Users</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                    </nav>
                </div>

                <div className='title'>
                    <div className={title}>{title}</div>
                </div>

                <div className='children'>
                    {children}
                </div>

                <footer >
                    <p>Copyright © Your Website 2023</p>
                </footer>
            </div>
        </div>
    )
}

export default BaseApp