import React from 'react'

const AddTodo = ({loading}) => {
    return (
        <div>
            <button disabled={loading} type="submit" className="btn btn-primary">{loading ? 'Loading...' : 'Add'}</button>
        </div>
    )
}

export default AddTodo