import { validateAll } from 'indicative/validator';
const messages = {
    required: (field) => `${field} is required`,
    'email.email': 'Please enter a valid email address'
}

const validateForm = async (data, rules) => {
    await validateAll(data, rules, messages)
        .then(data => Promise.resolve(data))
        .catch(err => {
            const formattedError = {};
            err.forEach((err) => {
                formattedError[err.field] = err['message']
            });
            return Promise.reject(formattedError)
        });
}

export default validateForm;