import React, { Component } from 'react';
import './home.css';

class ContactForm extends Component {
    render() {
        return (
            <div className='Contact-form'>
                <div className='image-form'>
                <img src="https://pointchurch.com/wp-content/uploads/2019/02/Blank-Person-Image-300x284.png" className='img'/>
                </div>
                <div className='form'>
                    <input type='text' Value='First Name'></input>
                    <input type='text' Value='Last Name'></input>
                    <input type='' Value='Phone Number'></input>
                    <input type='text' Value='Email'></input>
                    <input type='text' Value='Address'></input>
                    <input type='text' Value='Profile Image Url'></input>
                    <button className='btn'>Add Contact</button>
                </div>
            </div>
        );
    }
}

export default ContactForm;

