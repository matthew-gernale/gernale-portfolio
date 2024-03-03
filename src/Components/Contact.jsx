import { useState } from 'react';
import '../index.scss'


const Contact = () => {


    const [formState, setFormState] = useState({});
    const changeHandler = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    }


    const submitHandler = (e) => {
        e.preventDefault();

        const config = {
        SecureToken: '77a64a20-ac7f-4320-bfa2-fd3c08b2b7ae',
        To : 'matthewgernale26@gmail.com',
        From : formState.email,
        Subject : `${formState.full_name} from your Portfolio`,
        Body : formState.message,
    }

        if (window.Email) {
            window.Email.send(config).then(() => alert("Message sent successfully!"));
        }
    }
    
    return (
        <div className="flex flex-col items-center justify-center pb-20" id="contact">
            <h1 className="title text-6xl pt-20 pb-14">Connect with me</h1>
            <form className="flex flex-col w-1/2 gap-5" onSubmit={submitHandler}>
                <label htmlFor="fName" className="font-bold">Full Name</label>
                <input type="text" placeholder="John Doe" className="shadow-inner border-2 border-[#222222] text-2xl rounded-2xl px-5 py-5 text-[#222222]" id="fName" onChange={changeHandler} name="full_name" value={formState.full_name || ''} required autoComplete='name' />
                
                <label htmlFor="email" className="font-bold">Email</label>
                <input type="email" placeholder="johndoe@gmail.com" className="shadow-inner border-2 border-[#222222] text-2xl rounded-2xl px-5 py-5 text-[#222222]" id="email" onChange={changeHandler} name="email" value={formState.email || ''} required autoComplete='email' />
                
                <label htmlFor="msg" className="font-bold">Leave a message</label>
                <textarea placeholder="Your message..." className="shadow-inner border-2 border-[#222222] text-2xl rounded-2xl px-5 py-5 text-[#222222]" id="msg" onChange={changeHandler} name="message" value={formState.message || ''} required ></textarea>
                
                <input type="submit" className="bg-[#222222] w-40 py-3 rounded-xl text-white text-center cursor-pointer self-center mt-5 duration-75 hover:bg-[#3b3b3b]"></input>
            </form>
        </div>
    );
}


export default Contact