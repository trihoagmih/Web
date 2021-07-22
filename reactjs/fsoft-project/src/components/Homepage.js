import React from 'react'

const Homepage = () => {
    return (
        <div className="homepage">
            <nav className="nav">
                <div className="user">
                    <a href="/" className="user-link">Minh Tri</a>
                </div>
                <div className="logout">
                    <a href className="logout-link">Logout</a>
                </div>
            </nav>
            <div className="banner-msg">
                The patient has been deleted.
            </div>
            <div className="pop-up">
                <div className="pop-up-overlay" />
                <div className="pop-up-box">
                    <div className="pop-up-msg">
                        Are you sure you want to delete this patient?
                    </div>
                    <div className="pop-up-btn">
                        <button className="btn btn-ok">OK</button>
                        <button className="btn btn-cancel">Cancel</button>
                    </div>
                </div>
            </div>
            <table className="table">
                <thead className="table-header">
                    <tr>
                        <th className="table-title" colSpan={5}>List Patients</th>
                        <th className="table-btn">
                            <button className="btn btn-add">
                                Add Patients
                            </button>
                        </th>
                    </tr>
                    <tr className="row">
                        <th className="row-header">ID</th>
                        <th className="row-header">Title</th>
                        <th className="row-header">First Name</th>
                        <th className="row-header">Last Name</th>
                        <th className="row-header">Email</th>
                        <th className="row-header"/>
                    </tr>
                </thead>
                <tbody className="table-body">
                    <tr className="row">
                        <td className="row-content">1</td>
                        <td className="row-content">ms</td>
                        <td className="row-content">Hoa</td>
                        <td className="row-content">Phan</td>
                        <td className="row-content">hoaphan.pt36@gmail.com</td>
                        <td className="row-content">
                            <button className="btn btn-del">Delete</button>
                            <button className="btn btn-upd">Update</button>
                        </td>
                    </tr>
                    <tr className="row">
                        <td className="row-content">2</td>
                        <td className="row-content">mr</td>
                        <td className="row-content">Hoa</td>
                        <td className="row-content">Phan</td>
                        <td className="row-content">hoaphan.pt36@gmail.com</td>
                        <td className="row-content">
                            <button className="btn btn-del">Delete</button>
                            <button className="btn btn-upd">Update</button>
                        </td>
                    </tr>
                    <tr className="row">
                        <td className="row-content">3</td>
                        <td className="row-content">ms</td>
                        <td className="row-content">Hoa</td>
                        <td className="row-content">Phan</td>
                        <td className="row-content">hoaphan.pt36@gmail.com</td>
                        <td className="row-content">
                            <button className="btn btn-del">Delete</button>
                            <button className="btn btn-upd">Update</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <footer className="paging">
                <div className="paging-btn disabled">
                    <a href className="paging-btn-link">First</a>
                </div>
                <div className="paging-btn disabled">
                    <a href className="paging-btn-link">Previous</a>
                </div>
                <div className="paging-btn enabled chosen">
                    <a href className="paging-btn-link">1</a>
                </div>
                <div className="paging-btn enabled">
                    <a href className="paging-btn-link">2</a>
                </div>
                <div className="paging-btn enabled">
                    <a href className="paging-btn-link">3</a>
                </div>
                <div className="paging-btn enabled">
                    <a href className="paging-btn-link">4</a>
                </div>
                <div className="paging-btn enabled">
                    <a href className="paging-btn-link">5</a>
                </div>
                <div className="paging-btn enabled">
                    <a href className="paging-btn-link">Next</a>
                </div>
                <div className="paging-btn enabled">
                    <a href className="paging-btn-link">Last</a>
                </div>
            </footer>
        </div>
    )
}

export default Homepage
