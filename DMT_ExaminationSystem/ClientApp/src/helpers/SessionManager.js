const SessionManager = {

    getUserType() {
        const user = sessionStorage.getItem("usertype");
        if (user) return user;
        else return null;
    },

    setUserSession(user_id, full_name, avatar, username, phone_number, email, user_type) {
        let usertype;
        if (user_type === 0) {
            usertype = "admin";
        }
        else if (user_type === 1) {
            usertype = "user";
        }        
        sessionStorage.setItem("user_id", user_id);
        sessionStorage.setItem("full_name", full_name);
        sessionStorage.setItem("avatar", avatar);
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("phone_number", phone_number);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("usertype", usertype);
    },

    removeUserSession() {
        sessionStorage.removeItem("user_id");
        sessionStorage.removeItem("full_name");
        sessionStorage.removeItem("avatar");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("phone_number");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("usertype");
    }
}

export default SessionManager;
