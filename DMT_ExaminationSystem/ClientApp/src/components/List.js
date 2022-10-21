// import React, { useEffect } from "react";
// import { Link, useLocation, useParams } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";

// import { alertService } from "../../services/alert.service";
// import { userService } from "../../services/user.service";


// function AddEditQuestions() {
//     const match = useLocation();
//     const history = match.pathname;
//     const id = useParams();
//     const isAddMode = !id;

//     // form validation rules
//     const validationSchema = Yup.object().shape({
//         full_name: Yup.string()
//             .required("Full Name is required"),
//         username: Yup.string()
//             .required("User Name is required"),
//         password: Yup.string()
//             .transform(x => x === "" ? undefined : x)
//             .concat(isAddMode ? Yup.string().required("Password is required") : null)
//             .min(6, "Password must be at least 6 characters"),
//         phone_number: Yup.number()
//             .required("Number is required"),
//         email: Yup.string()
//             .email("Email is invalid")
//             .required("Email is required"),
//         avatar: Yup.string()
//             .required("Avatar is required"),
//     });

//     // functions to build form returned by useForm() hook
//     const { register, handleSubmit, reset, setValue, errors, formState } = useForm({
//         resolver: yupResolver(validationSchema)
//     });

//     function onSubmit(data) {
//         return isAddMode
//             ? createUser(data)
//             : updateUser(id, data);
//     }

//     function createUser(data) {
//         return userService.create(data)
//             .then(() => {
//                 alertService.success("User added", { keepAfterRouteChange: true });
//                 history.push(".");
//             })
//             .catch(alertService.error);
//     }

//     function updateUser(id, data) {
//         return userService.update(id, data)
//             .then(() => {
//                 alertService.success("User updated", { keepAfterRouteChange: true });
//                 history.push("..");
//             })
//             .catch(alertService.error);
//     }

//     useEffect(() => {
//         if (!isAddMode) {
//             // get user and set form fields
//             userService.getById(id).then(user => {
//                 const fields = ["title", "full_name", "username", "email", "avatar", "role"];
//                 fields.forEach(field => setValue(field, user[field]));
//             });
//         }
//     }, []);

//     return (
//         <div className="container">
//             <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
//                 <h1>{isAddMode ? "Add User" : "Edit User"}</h1>
//                 <div className="form-row">
//                     <div className="form-group col">
//                         <label>Title</label>
//                         <select name="title" ref={register} className={`form-control ${errors.title ? "is-invalid" : ""}`}>
//                             <option value=""></option>
//                             <option value="Mr">Mr</option>
//                             <option value="Mrs">Mrs</option>
//                             <option value="Miss">Miss</option>
//                             <option value="Ms">Ms</option>
//                         </select>
//                         <div className="invalid-feedback">{errors.title?.message}</div>
//                     </div>
//                     <div className="form-group col-5">
//                         <label>Full Name</label>
//                         <input name="full_name" type="text" ref={register} className={`form-control ${errors.full_name ? "is-invalid" : ""}`} />
//                         <div className="invalid-feedback">{errors.full_name?.message}</div>
//                     </div>
//                     <div className="form-group col-5">
//                         <label>Username</label>
//                         <input name="username" type="text" ref={register} className={`form-control ${errors.username ? "is-invalid" : ""}`} />
//                         <div className="invalid-feedback">{errors.username?.message}</div>
//                     </div>
//                 </div>
//                 <div className="form-row">
//                     <div className="form-group col-7">
//                         <label>Email</label>
//                         <input name="email" type="text" ref={register} className={`form-control ${errors.email ? "is-invalid" : ""}`} />
//                         <div className="invalid-feedback">{errors.email?.message}</div>
//                     </div>
//                     <div className="form-group col-7">
//                         <label>Avatar</label>
//                         <input name="avatar" type="text" ref={register} className={`form-control ${errors.avatar ? "is-invalid" : ""}`} />
//                         <div className="invalid-feedback">{errors.avatar?.message}</div>
//                     </div>
//                     {/* <div className="form-group col">
//                     <label>Role</label>
//                     <select name="role" ref={register} className={`form-control ${errors.user_type ? "is-invalid" : ""}`}>
//                         <option value=""></option>
//                         <option value="1">User</option>
//                         <option value="2">Admin</option>
//                     </select>
//                     <div className="invalid-feedback">{errors.user_type?.message}</div>
//                 </div> */}
//                 </div>
//                 {!isAddMode &&
//                     <div>
//                         <h3 className="pt-3">Change Password</h3>
//                         <p>Leave blank to keep the same password</p>
//                     </div>
//                 }
//                 <div className="form-row">
//                     <div className="form-group col">
//                         <label>Password</label>
//                         <input name="password" type="password" ref={register} className={`form-control ${errors.password ? "is-invalid" : ""}`} />
//                         <div className="invalid-feedback">{errors.password?.message}</div>
//                     </div>
//                     <div className="form-group col">
//                         <label>Phone Number</label>
//                         <input name="phone_number" type="text" ref={register} className={`form-control ${errors.phone_number ? "is-invalid" : ""}`} />
//                         <div className="invalid-feedback">{errors.phone_number?.message}</div>
//                     </div>
//                 </div>
//                 <div className="form-group">
//                     <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary">
//                         {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
//                         Save
//                     </button>
//                     <Link to={isAddMode ? "." : ".."} className="btn btn-link">Cancel</Link>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export { AddEditQuestions };














































// <h1>Users</h1>
// <Link to={`${path}/add`} className="btn btn-sm btn-success mb-2">Add User</Link>
// <Table className="table table-striped" hover>
//     <thead>
//         <tr>
//             <th style={{ wuser_idth: "30%" }}>Name</th>
//             <th style={{ wuser_idth: "30%" }}>Email</th>
//             <th style={{ wuser_idth: "30%" }}>Phone Number</th>
//             <th style={{ wuser_idth: "10%" }}></th>
//         </tr>
//     </thead>
//     <tbody>
//         {users && users.map(user =>
//             <tr key={user.user_id}>
//                 <th scope="row">{user.full_name}</th>
//                 <th scope="row">{user.email}</th>
//                 <th scope="row">{user.phone_number}</th>
//                 <th style={{ whiteSpace: "nowrap" }} scope="row">
//                     <Link to={`${path}/edit/${user.user_id}`} className="btn btn-sm btn-primary mr-1">Edit</Link>
//                     <button onClick={() => deleteUser(user.user_id)} className="btn btn-sm btn-danger btn-delete-user" disabled={user.isDeleting}>
//                         {user.isDeleting
//                             ? <span className="spinner-border spinner-border-sm"></span>
//                             : <span>Delete</span>
//                         }
//                     </button>
//                 </th>
//             </tr>
//         )}
//         {!users &&
//             <tr>
//                 <td colSpan="4" className="text-center">
//                     <div className="spinner-border spinner-border-lg align-center"></div>
//                 </td>
//             </tr>
//         }
//         {users && !users.length &&
//             <tr>
//                 <td colSpan="4" className="text-center">
//                     <div className="p-2">No Users To Display</div>
//                 </td>
//             </tr>
//         }
//     </tbody>
// </Table>