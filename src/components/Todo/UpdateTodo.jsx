import React from 'react'

const UpdateTodo = ({ loading }) => {
    return (
        <div>
            <button disabled={loading} type="submit" className="btn btn-primary">{loading ? 'Loading...' : 'Save'}</button>
        </div>
    )
}

export default UpdateTodo