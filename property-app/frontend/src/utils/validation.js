export const validateLogin = (username, password) => {
    const errors = {};
    if (!username) {
        errors.username = "Username is required";
    }
    if (!password) {
        errors.password = "Password is required";
    }
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};

export const validateRegister = (username, password, confirmPassword) => {
    const errors = {};
    if (!username) {
        errors.username = "Username is required";
    }
    if (!password) {
        errors.password = "Password is required";
    } else if (password !== confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
    }
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};