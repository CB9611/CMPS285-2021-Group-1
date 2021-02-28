import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

const NewContact = () => {
    const [newContact, setNewContact] = useState(
        { fullName: '', phoneNumber: '', email: '', comment: ''}
    );

    const handleChange = (event) => {
        setNewContact({...newContact, [event.target.name]: event.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://localhost:44381/api/UserContact', newContact)
        .then(function (response) {
            console.log(response)
            if (response !=null) {
                alert("Contact information submitted successfully.");
            }  
        })
        .catch(function (error) {
            console.log(error)
        })
    
    }

    
        

       
    

    return (
        <div className="container">
            <form className='white' onSubmit={handleSubmit}>
                <h5 className="grey-text.text-darken-3">Contact Us</h5>                        
                <div className="input-field">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" name="fullName" value={newContact.fullName} onChange={handleChange} required />
                </div>
                <div className="input-field">
                <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" name="phoneNumber" value={newContact.phoneNumber} onChange={handleChange} required />
                </div>
                <div className="input-field">
                <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={newContact.email} onChange={handleChange} required />
                    </div>
                    <div className="input-field">
                <label htmlFor="comment">Comment</label>
                    <input type="text" name="comment" value={newContact.comment} onChange={handleChange} required />
                    </div>
                 <div class="btn-group">
                 <Button color="primary" type = "submit" size="lg">Submit</Button>{' '}
                
                                                 
                </div>
            </form>
        </div>
    );
}
export default NewContact;