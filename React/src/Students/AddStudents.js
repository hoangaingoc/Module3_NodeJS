import {Link, Outlet} from "react-router-dom";

export default function AddStudents(){
    return (
        <>
            <div className={'add'}><Link to={'/admin/students'}>Back to List</Link></div>
            <h1>Add Students</h1>
        </>
    )
}