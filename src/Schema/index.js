import * as Yup from 'yup'

const todoSchema = Yup.object().shape({
    title: Yup.string().required('required')
})

export default todoSchema