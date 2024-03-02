import '../index.css'


const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center pb-20" id="contact">
            <h1 className="title text-6xl pt-20 pb-14">Connect with me</h1>
            <form className="flex flex-col w-1/2 gap-5">
                <label className="font-bold"name="full_name">Full Name</label>
                <input type="text" placeholder="John Doe" className="shadow-inner border-2 border-[#222222] text-2xl rounded-2xl px-5 py-5 text-[#222222]" id="fName" />
                <label className="font-bold" name="email" required>Email</label>
                <input type="email" placeholder="johndoe@gmail.com" className="shadow-inner border-2 border-[#222222] text-2xl rounded-2xl px-5 py-5 text-[#222222]" id="email" />
                <label className="font-bold" name="message" required>Leave a message</label>
                <textarea placeholder="Your message..." className="shadow-inner border-2 border-[#222222] text-2xl rounded-2xl px-5 py-5 text-[#222222]" id="msg"></textarea>
                <input type="submit" className="bg-[#222222] w-40 py-3 rounded-xl text-white text-center cursor-pointer self-center mt-5 duration-75 hover:bg-[#3b3b3b]"></input>
            </form>
        </div>
    );
}


export default Contact