import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TodoList = () => {
    const [loading, setloading] = useState(false)
    const [todoDatas, settodoDatas] = useState([{title:'second'}])
  return (
    <div>
              <ul className='text-black'>
             {
                todoDatas?.map((todo)=>(
                    <ul key={todo._id} className='list-group list-group-horizontal rounded-0 bg-transparent'>

            <li
                className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                <div className="form-check">
                  <input className="form-check-input me-0" type="checkbox" value="" id="flexCheckChecked1"
                    aria-label="..." checked={todo.checked} onChange={(event)=>handleChange(event,todo._id)} />
                </div>
              </li>
              
          <Link to={todo._id}>
          <li
                className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                <p className="lead fw-normal mb-0">{todo.title}</p>
              </li>
          </Link>
              <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                <div className="d-flex flex-row justify-content-end mb-1">
                  <Link to="#!" className="text-info" data-mdb-toggle="tooltip" title="Edit todo"><i
                      className="bi bi-pencil-square me-3"></i></Link>
                  <Link to="#!" className="text-danger" data-mdb-toggle="tooltip" onClick={(event)=>handleDelete(todo._id)} title="Delete todo"><i
                      className="bi bi-trash"></i></Link>
                </div>
                <div className="text-end text-muted">
                  <Link to="#!" className="text-muted" data-mdb-toggle="tooltip" title="Created date">
                    <p className="small mb-0"><i className="bi bi-info me-2"></i>{todo.createdAt}</p>
                  </Link>
                </div>
              </li>
                    </ul>
                ))
                
             }
             {loading ? 'loading' : ''}
        </ul>

    </div>
  )
}

export default TodoList