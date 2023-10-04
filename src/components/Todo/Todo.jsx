import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TodoList from './TodoList'
import { useDispatch, useSelector } from 'react-redux'
import { addtodo, editTodo } from '../../redux/ReduxRequest/Todo'
import {  useFormik } from 'formik'
import todoSchema from '../../Schema'
import UpdateTodo from './UpdateTodo'
import AddTodo from './AddTodo'

const Todo = () => {
  const [loading, setloading] = useState(false)
  const [editing, setediting] = useState(false)

  const dispatch = useDispatch();

  const onSubmit = (values, formikBag)=>{
    handleChangeaddTodo();

    formikBag.resetForm({values: {title: ''}})
  }
  const {values, handleChange, handleBlur,errors, touched, handleSubmit} = useFormik({
    initialValues:{
      title: ''
    }, 
    onSubmit,
    validationSchema: todoSchema
  })

  const handleChangeaddTodo = ()=>{
    setloading(true)
    dispatch(addtodo(values.title))
    setTimeout(() => {
      setloading(false)
    }, 500);
  }
  const {todos} = useSelector(state=> state.todo)

  const handleEdiTodo = (e) => {
    e.preventDefault();
    let index = values.index
    if (index) {
      console.log('todo not found');
      return  
    }
      setloading(true);
      dispatch(editTodo({ values: values.title, index }));
      setTimeout(() => {
        setloading(false);
        setediting(false);
      }, 1000);
  };
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
                    <u>BenTaskify</u>
                  </p>

                  <div className="pb-2">
                    <div className="card">
                      <div className="card-body">
                        <form onSubmit={editing ? handleEdiTodo : handleSubmit } className="d-flex flex-column flex-md-row  align-items-center">
                          <input onChange={handleChange} value={values.title} onBlur={handleBlur} name='title' type="text" className="form-control form-control-lg" id="exampleFormControlInput1"
                            placeholder="Add new..." />
                            <p className='text-danger'>{errors.title && touched.title ? '*Required' : ''}</p>
                          <Link to="#!" data-mdb-toggle="tooltip" title="Set due date"><i className="bi bi-calendar ms-1 me-1"></i></Link>
                          <div>
                            {editing ? <UpdateTodo loading={loading}/> : <AddTodo loading={loading}/>}
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />
                  <TodoList editing={editing} setediting={setediting} values={values}/>

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