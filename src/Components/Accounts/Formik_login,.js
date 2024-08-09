import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    username: '',
    email: '',
    password: ''
};

const onSubmit = values => {
    console.log(values);
};

const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required')
});

function DemoFormik() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });

    console.log("visited fields", formik.touched);

    return (
        <div>
            <h2>Form Data</h2>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type='text'
                    placeholder="Enter the username"
                    id='username'
                    name='username'
                    {...formik.getFieldProps('username')}
                />
                {formik.touched.username && formik.errors.username ? (
                    <div style={{color: "red"}}>{formik.errors.username}</div>
                ) : null}
                <br />
                
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    id='email'
                    name='email'
                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div style={{color: "red"}}>{formik.errors.email}</div>
                ) : null}
                <br />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    id='password'
                    name='password'
                    {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div style={{color: "red"}}>{formik.errors.password}</div>
                ) : null}
                <br />
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default DemoFormik;
