import { validateAll } from 'indicative/validator';
const messages = {
    required: (field) => `${field} is required`,
    'email.email': 'Please enter a valid email address',
    'min': 'The value is too small',
    'confirmed': 'Password do not match'
}

const initialRules = {
    email: 'required|email',
    password: 'required',
}

const validateForm = async (data, rules = initialRules) => {
    await validateAll(data, rules, messages)
        .then(data => Promise.resolve(data))
        .catch(err => {
            const formattedError = {};
            err.forEach((err) => {
                formattedError[err.field] = err['message'];
            });
            return Promise.reject(formattedError)
        });
}

export default validateForm;