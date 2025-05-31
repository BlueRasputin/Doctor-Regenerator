import React, {useState} from 'react';
import '../Contact.css'





const Contact = () => {
//validate form function
//usestate to update fields
const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
});
const [errors, setErrors] = useState({});
const [submitted, setSubmitted] = useState(false);
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
        //Form Submission logic
        console.log('Form Submitted successfully!');
    } else {
        console.log('Form submission failed due to validation errors.');
    }
};

const validateForm = (data) => {
    const errors = {};

    if (!data.name.trim()) {
        errors.name = 'Name is required';
    } else if (data.name.length < 2) {
            errors.name = 'Name must be at least 2 characters long';
        }
    
    if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (!data.message) {
        errors.message = 'Please enter your Feedback';
    // } else if (data.message.length == "") {
    //     errors.message = 'Please enter a message';
    }
    if (Object.keys(errors).length === 0) {
        console.log('Thanks for your feedback!');
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    } else {
    console.log('Please complete all information');
    setSubmitted(false);
    }
    return errors;
};


    return (
        <div className="form-container">
            <h2 className="form-title">Please let us know how we can improve our site!</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label">
                        Name:
                    
                    <input 
                        className="form-input"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="on"
                    />

                    </label>
                    {errors.name && (
                        <span className="error-message">
                            {errors.name}
                        </span>
                    )}
                </div>
                <br/>
                <div>
                    <label className="form-label">
                        Email:
                    
                    <input 
                        className="form-input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="on"
                    />

                    </label>
                    {errors.email && (
                        <span className="error-message">
                            {errors.email}
                        </span>
                    )}
                </div>
                <br/>
                <div>
                    <label className="form-label">
                        Message:
                    
                    <textarea
                        className="form-input"
                        id="messageBox"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        autoComplete="on"
                    />

                    </label>
                    {errors.message && (
                        <span className="error-message">
                            {errors.message}
                        </span>
                    )}
                </div>
                <br />
                    {submitted && (
                        <p className="success-message">Thanks for your Feedback!</p>
                    )}
                <button className="submit-button" type="submit">Submit</button>
            </form>
            
        </div>
    );       
}



export default Contact;