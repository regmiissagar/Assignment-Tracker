import React from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import CountryData from '../../countries.json';
import { message } from 'antd';
import ShowhidePassword from '../../components/showhidePassword';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()

    const registerUser = async (values) => {
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };

        const response = await fetch('http://localhost:4000/register', requestOptions);
        const data = await response.json()

        if (data) {
            alert(data.msg)
            navigate('/')
        }
    }

    const passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

    const SignupSchema = Yup.object().shape({
        firstname: Yup.string().required('Required'),
        lastname: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
            .required('Required')
            .min(6)
            .matches(passwordRule, { message: 'Please create a stronger password' }),
    });

    return (
        <section className='form_section'>
            <div className='container'>
                <div className='form'>
                    <h1>Sign Up</h1>

                    <Formik
                        initialValues={{
                            firstname: '',
                            lastname: '',
                            email: '',

                            userRole: '',
                            faculty: '',
                            semester: '',
                            password: '',
                            confirmpassword: '', 
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={values => {
                            registerUser(values)
                        }}
                    >

{({ errors, touched, values, handleChange, handleBlur, handleSubmit }) => (
                            <Form  onSubmit={handleSubmit}>
                                <Field name="firstname" placeholder="Your first  Name" value={values.firstname} onChange={handleChange} onBlur={handleBlur} />
								{errors.firstname && touched.firstname ? (<div className="error">{errors.firstname}</div>) : null}

                                <Field name="lastname" placeholder="Your last Name" value={values.lastname} onChange={handleChange} onBlur={handleBlur} />
								{errors.lastname && touched.lastname ? (<div className="error">{errors.lastname}</div>) : null}

                                <Field name="email" placeholder="Your Email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                {errors.email && touched.email ? (<div className="error">{errors.email}</div>) : null}

                                

                                

                                

                                <select name="userRole" value={values.userRole} onChange={handleChange} onBlur={handleBlur}>
                                    <option value="" disabled="disabled" label="Select a Role"></option>
                                    <option value="user" label="user">user</option>
                                    <option value="admin" label="admin ">admin</option>
                                </select>
                                {errors.userRole && touched.userRole ? (<div className="error">{errors.userRole}</div>) : null}

                                <select name="semester" value={values.semester} onChange={handleChange} onBlur={handleBlur}>
                                    <option value="" disabled="disabled" label="Select Semester"></option>
                                    <option value="1" label="1">1</option>
                                    <option value="2" label="2">2</option>
                                </select>
                                {errors.semester && touched.semester ? (<div className="error">{errors.semester}</div>) : null}

                                <select name="faculty" value={values.faculty} onChange={handleChange} onBlur={handleBlur}>
                                    <option value="" disabled="disabled" label="Select a faculty"></option>
                                    <option value="EM" label="EM">EM</option>
                                    <option value="EI" label="EI">EI</option>
                                </select>
                                {errors.faculty && touched.faculty ? (<div className="error">{errors.faculty}</div>) : null}

                                <Field name="password" placeholder="Your password" value={values.password} onChange={handleChange} onBlur={handleBlur} component={ShowhidePassword}/>
                                {errors.password && touched.password ? (<div className="error">{errors.password}</div>) : null}

                                {/* <Field name="confirmpassword" placeholder="confirm your password" value={values.confirmpassword} onChange={handleChange} onBlur={handleBlur} component={ShowhidePassword}/>
                                {errors.confirmpassword && touched.confirmpassword ? (<div className="error">{errors.confirmpassword}</div>) : null} */}


                                
                              

                                <button type="submit">Signup</button>
                            </Form>
                        )} 
                    </Formik>
                    <p style={{ marginTop: '10px' }}>Already have an account? Please <Link to="/">Login</Link> to continue</p>
                </div>
            </div>
        </section>
    )
}
export default Register