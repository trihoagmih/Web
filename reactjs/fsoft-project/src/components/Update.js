import React from 'react'

const Update = () => {
    return (
        <div className="homepage">
            <nav className="nav">
                <div className="user">
                    <a href className="user-link">Minh Tri</a>
                </div>
                <div className="logout">
                    <a href className="logout-link">Logout</a>
                </div>
            </nav>
            <div className="directory">
                List patients<span className="sub-directory">/Update patient</span>
            </div>
            <div className="handle-form">
                <div className="handle-form-heading">Update Patient</div>
                <div className="handle-form-group">
                    <label htmlFor="title" className="handle-form-title">Title</label>
                    <input type="text" id="title" className="handle-form-control" />
                </div>
                <div className="handle-form-group">
                    <label htmlFor="fname" className="handle-form-title">First Name</label>
                    <input type="text" id="fname" className="handle-form-control" />
                    <div className="handle-form-msg">The field is required</div>
                </div>
                <div className="handle-form-group">
                    <label htmlFor="lname" className="handle-form-title">Last Name</label>
                    <input type="text" id="lname" className="handle-form-control" />
                    <div className="handle-form-msg">The field is required</div>
                </div>
                <div className="handle-form-group">
                    <label htmlFor="email" className="handle-form-title">Email</label>
                    <input type="email" id="email" className="handle-form-control" />
                    <div className="handle-form-msg">Please enter a valid email address</div>
                </div>
                <div className="handle-form-submit">
                    <button className="btn btn-save btn-l">Save</button>
                    <button className="btn btn-cancel">Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Update
