
import React, { useState } from 'react';


const Contact = () => {

    const [data , setdata] = useState({
        name : "",
        email : "",
        number : "",
        msg : "",
    });


    const InputEvent = (event) => {
        const { name , value} = event.target;

        setdata((preval) => {
            return {
                ...preval,
                [name] : value,
            }
        })
    }

    const submit = () => {

        alert(`My name is${data.name}. my email is ${data.email}. My contact-number is ${data.number}. and This is my message ${data.msg}`);
    }

    return (
        <>
            <div className='my-5 text-center'>
                <h1 className='tab-center'> Contact US </h1>
            </div>

            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={submit}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1">First Name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" name='name' value={data.name} onChange={InputEvent} placeholder="Enter Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1">Email</label>
                                <input type="email" class="form-control" id="exampleInputPassword1"name='email' value={data.email} onChange={InputEvent} placeholder="Password" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1">Mobile Number</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" name='number' value={data.number} onChange={InputEvent}  placeholder="Enter mobielnumber" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1">message</label>
                                <input type="textarea" class="form-control" id="exampleInputEmail1" name='msg' value={data.msg} onChange={InputEvent}   placeholder="message" />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;

