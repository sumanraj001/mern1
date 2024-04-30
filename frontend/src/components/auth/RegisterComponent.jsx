import React from 'react'

import { Link } from 'react-router-dom'

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import HeaderComponent from '../layouts/HeaderComponent'
import FooterComponent from '../layouts/FooterComponent'
import API from '../../config/API'




let registerSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    password_confirm: yup.string().required().oneOf([yup.ref('password')], 'Password confirm must be same as password'),
    gender: yup.string().required(),
});


export default function RegisterComponent() {

    const { setError, register, handleSubmit, formState: { errors } } =
        useForm({
            resolver: yupResolver(registerSchema)
        });


    const addUser = (data) => {
            let sendData = new FormData();
            sendData.append('name', data.name);
            sendData.append('email', data.email);
            sendData.append('password', data.password);
            sendData.append('gender', data.gender);
            sendData.append('image', data.image[0]);
            API.post('/user',sendData).then((res)=>{
                console.log(res.data);

            }).catch((err)=>{

                console.log(err);
        
        

        })


        }
    return (
        <div className='container'>
            <HeaderComponent />
            <div className='row mt-3 mb-3'>
                <div className='col-md-12'>
                    <h1>Register</h1>


                </div>

            </div>
            <div className='row mt-3 mb-3'>
                <div className='col-md-12'>
                    <h1>Contact</h1>

                </div>
            </div>

            <div className='row'>
                <div className='col-md-12'>
                    <form action="" onSubmit={handleSubmit(addUser)}>
                        <div className='form-group mb-2'>
                            <label htmlFor='name'>Name:{errors.name && <span className='text-danger' >{errors.name.message}</span>}</label>
                            <input type="text" {...register("name")} className='form-control' id='name' />

                        </div>

                        <div className="form-group mb-2">
                            <label htmlFor="email">Email:
                                {errors.email && <span className='text-danger' >{errors.email.message}</span>}
                            </label>
                            <input type="email" name="email"
                                {...register("email")}
                                className="form-control" id="email" />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="password">Password:
                                {errors.password && <span className='text-danger' >{errors.password.message}</span>}
                            </label>
                            <input type="password" name='password'
                                {...register("password")}
                                className="form-control" id="password" />
                        </div>

                         <div className="form-group mb-2">
                            <label htmlFor="password_confirm">Confirm Password:
                                {errors.password_confirm && <span className='text-danger' >{errors.password_confirm.message}</span>}

                            </label>
                            <input type="password"
                                name='password_confirm'
                                {...register('password_confirm')}
                                className="form-control" id="password_confirm" />
                        </div> 




                        <div className='form-group mb-2'>
                            <label htmlFor='gender'>Gender:{errors.gender && <span className='text-danger' >{errors.gender.message}</span>}</label>
                            <select className='form-control'  {...register("gender")} name='gender'>
                            <option value="">Select Option</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>



                            </select>

                        </div>

                        <div className='form-group mb-2'>
                            <label htmlFor='image'>Image:</label>
                            <input type="file"  {...register("image")}  className='form-control' id='file' name='image' />

                        </div>





                        <div className='form-group mt-3 '>
                            <button className='btn btn-primary'>Register</button>
                            <Link to='/login' className='btn btn-link float-end'>Login</Link>

                        </div>


                    </form>


                </div>

            </div>
            <FooterComponent />
        </div>
    )
}



