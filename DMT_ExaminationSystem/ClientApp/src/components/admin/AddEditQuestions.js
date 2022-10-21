import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { alertService } from "../../services/alert.service";
import { userService } from "../../services/user.service";


function AddEditQuestions() {
    const match = useLocation();
    const history = match.pathname;
    const id = useParams();
    const isAddMode = !id;

    // form validation rules 
    const validationSchema = Yup.object().shape({
        full_name: Yup.string()
            .required("Full Name is required"),
        username: Yup.string()
            .required("User Name is required"),
        password: Yup.string()
            .transform(x => x === "" ? undefined : x)
            .concat(isAddMode ? Yup.string().required("Password is required") : null)
            .min(6, "Password must be at least 6 characters"),
        phone_number: Yup.number()
            .required("Number is required"),
        email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
        avatar: Yup.string()
            .required("Avatar is required"),
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
                alertService.success("User added", { keepAfterRouteChange: true });
                history.push(".");
            })
            .catch(alertService.error);
    }

    function updateUser(id, data) {
        return userService.update(id, data)
            .then(() => {
                alertService.success("User updated", { keepAfterRouteChange: true });
                history.push("..");
            })
            .catch(alertService.error);
    }

    useEffect(() => {
        if (!isAddMode) {
            // get user and set form fields
            userService.getById(id).then(user => {
                const fields = ["title", "full_name", "username", "email", "avatar", "role"];
                fields.forEach(field => setValue(field, user[field]));
            });
        }
    }, []);

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
                <h5>{isAddMode ? "Add Exam Questions" : "Edit Exam Questions"}</h5>
                <div className="form-row">
                    <div className="mb-3 row">
                        <label for="questionID" class="form-label">Question ID</label>
                        <input type="email" class="form-control" id="questionID" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3 row form-group">
                        <label>1st Option</label>
                        <input name="full_name" type="text" ref={register} className={`form-control ${errors.full_name ? "is-invalid" : ""}`} />
                        <div className="invalid-feedback">{errors.full_name?.message}</div>
                    </div>
                    <div className="mb-3 row form-group">
                        <label>2nd Option</label>
                        <input name="username" type="text" ref={register} className={`form-control ${errors.username ? "is-invalid" : ""}`} />
                        <div className="invalid-feedback">{errors.username?.message}</div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="mb-3 row form-group">
                        <label>3rd Option</label>
                        <input name="email" type="text" ref={register} className={`form-control ${errors.email ? "is-invalid" : ""}`} />
                        <div className="invalid-feedback">{errors.email?.message}</div>
                    </div>
                    <div className="mb-3 row form-group">
                        <label>4th Option</label>
                        <input name="avatar" type="text" ref={register} className={`form-control ${errors.avatar ? "is-invalid" : ""}`} />
                        <div className="invalid-feedback">{errors.avatar?.message}</div>
                    </div>
                    <div class="mb-3 row">
                        <label for="formFileSm" class="form-label">Examinee Image</label>
                        <input class="form-control-sm" type="file" id="formFileSm" />
                    </div>
                </div>

                <div className="form-group">
                    <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary">
                        {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Save
                    </button>
                    <Link to={isAddMode ? "." : ".."} className="btn btn-link">Cancel</Link>
                </div>
            </form>
        </div>
    );
}

export { AddEditQuestions };