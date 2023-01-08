import React from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"

const Assignment = ()=>{
    const navigate = useNavigate()
    const {name} = useSelector(state=> state.user)

    const assignment = async(values)=>{
        values.senderName = name
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };

        const response = await fetch('http://localhost:4000/assignment', requestOptions);
        const data = await response.json()

        if(data){
            alert(data.msg)
            navigate('/')
        }
    }
    
	const AssignmentSchema = Yup.object().shape({
		assignmentName: Yup.string().required('Required'),
		deadline: Yup.string().required('Required'),
        faculty: Yup.string().required('Required'),
        semester: Yup.number().required('Required'),
		
	});

    return(
        <section className='form_section'>
            <div className='container'>
                <div className='form'>
                    <h1>Add a Assignment</h1>

                    <Formik
                        initialValues={{
                            assignmentName: '',
                            deadline: '',
                            faculty: '',
                            semester: '',
                           
                        }}
                        validationSchema={AssignmentSchema}
                        onSubmit={values=>{
                            assignment(values)
                        }}
                    >

                        {({ errors, touched, values, handleChange, handleBlur, handleSubmit }) => (
                            <Form  onSubmit={handleSubmit}>
                               
                                

                                

                              <Field name="assignmentName" placeholder=" assignmentName" value={values.assignmentName} onChange={handleChange} onBlur={handleBlur} />
                                {errors.assignmentName && touched.assignmentName ? (<div className="error">{errors.assignmentName}</div>) : null}

                                <Field name="deadline" placeholder=" deadline" value={values.deadline} onChange={handleChange} onBlur={handleBlur} />
                                {errors.deadline && touched.deadline ? (<div className="error">{errors.deadline}</div>) : null}


                              

                                <select name="faculty" value={values.facultyy} onChange={handleChange} onBlur={handleBlur}>
                                    <option value="" disabled="disabled" label="faculty"></option>
                                    <option label="EM">EM</option>
                                    <option label="EI">EI</option>
                                    
                                </select>
                                
                                {errors.faculty && touched.faculty ? (<div className="error">{errors.faculty}</div>) : null}
                                <select name="semester" value={values.semester} onChange={handleChange} onBlur={handleBlur}>
                                    <option value="" disabled="disabled" label="semester"></option>
                                    <option label="1">1</option>
                                    <option label="2">2</option>
                                    
                                </select>
                                
                                {errors.semester && touched.semester ? (<div className="error">{errors.semester}</div>) : null}

                                <button type="submit">Add</button>
                            </Form>
                        )} 
                    </Formik>
                </div>
            </div>
        </section>
    )
}
export default Assignment