import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { alertService } from '../services/alert.service';
import { userService } from '../services/user.service';


function AddEdit() {
    const match = useLocation();
    const history = match.pathname;
    const id = match.params;
    const isAddMode = !id;

    // form validation rules 
    const validationSchema = Yup.object().shape({
        full_name: Yup.string()
            .required('Full Name is required'),
        username: Yup.string()
            .required('User Name is required'),
        password: Yup.string()
            .transform(x => x === '' ? undefined : x)
            .concat(isAddMode ? Yup.string().required('Password is required') : null)
            .min(6, 'Password must be at least 6 characters'),
        phone_number: Yup.number()
            .required('Number is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        avatar: Yup.string()
            .required('Avatar is required'),
    });

    // functions to build form returned by useForm() hook
    const { register, handleSubmit, reset, setValue, errors, formState } = useForm({
        resolver: yupResolver(validationSchema)
    });

    function onSubmit(data) {
        return isAddMode
            ? createUser(data)
            : updateUser(id, data);
    }

    function createUser(data) {
        return userService.create(data)
            .then(() => {
                alertService.success('User added', { keepAfterRouteChange: true });
                history.push('.');
            })
            .catch(alertService.error);
    }

    function updateUser(id, data) {
        return userService.update(id, data)
            .then(() => {
                alertService.success('User updated', { keepAfterRouteChange: true });
                history.push('..');
            })
            .catch(alertService.error);
    }

    useEffect(() => {
        if (!isAddMode) {
            // get user and set form fields
            userService.getById(id).then(user => {
                const fields = ['title', 'full_name', 'username', 'email', 'avatar', 'role'];
                fields.forEach(field => setValue(field, user[field]));
            });
        }
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
            <h1>{isAddMode ? 'Add User' : 'Edit User'}</h1>
            <div className="form-row">
                <div className="form-group col">
                    <label>Title</label>
                    <select name="title" ref={register} className={`form-control ${errors.title ? 'is-invalid' : ''}`}>
                        <option value=""></option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Ms">Ms</option>
                    </select>
                    <div className="invalid-feedback">{errors.title?.message}</div>
                </div>
                <div className="form-group col-5">
                    <label>Full Name</label>
                    <input name="full_name" type="text" ref={register} className={`form-control ${errors.full_name ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.full_name?.message}</div>
                </div>
                <div className="form-group col-5">
                    <label>Username</label>
                    <input name="username" type="text" ref={register} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.username?.message}</div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-7">
                    <label>Email</label>
                    <input name="email" type="text" ref={register} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.email?.message}</div>
                </div>
                <div className="form-group col-7">
                    <label>Avatar</label>
                    <input name="avatar" type="text" ref={register} className={`form-control ${errors.avatar ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.avatar?.message}</div>
                </div>
                {/* <div className="form-group col">
                    <label>Role</label>
                    <select name="role" ref={register} className={`form-control ${errors.user_type ? 'is-invalid' : ''}`}>
                        <option value=""></option>
                        <option value="1">User</option>
                        <option value="2">Admin</option>
                    </select>
                    <div className="invalid-feedback">{errors.user_type?.message}</div>
                </div> */}
            </div>
            {!isAddMode &&
                <div>
                    <h3 className="pt-3">Change Password</h3>
                    <p>Leave blank to keep the same password</p>
                </div>
            }
            <div className="form-row">
                <div className="form-group col">
                    <label>Password</label>
                    <input name="password" type="password" ref={register} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
                <div className="form-group col">
                    <label>Phone Number</label>
                    <input name="phone_number" type="text" ref={register} className={`form-control ${errors.phone_number ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.phone_number?.message}</div>
                </div>
            </div>
            <div className="form-group">
                <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Save
                </button>
                <Link to={isAddMode ? '.' : '..'} className="btn btn-link">Cancel</Link>
            </div>
        </form>
    );
}

export { AddEdit };