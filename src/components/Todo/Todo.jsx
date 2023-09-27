import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Todo = () => {
  const [data, setdata] = useState()
  const [loading, setloading] = useState(false)
  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card" id="list1" style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}>
                <div className="card-body py-4 px-4 px-md-5">

                  <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                    <i className="bi bi-check-square me-1"></i>
                    <u>My Todo-s</u>
                  </p>

                  <div className="pb-2">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex flex-row align-items-center">
                          <input onChange={(e) => setdata(e.target.value)} type="text" className="form-control form-control-lg" id="exampleFormControlInput1"
                            placeholder="Add new..." />
                          <Link to="#!" data-mdb-toggle="tooltip" title="Set due date"><i className="bi bi-calendar ms-1 me-1"></i></Link>
                          <div>
                            <button disabled={loading}  type="button" className="btn btn-primary">{loading ? 'Loading...' : 'Add'}</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Todo