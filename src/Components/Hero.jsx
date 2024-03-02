import '../index.scss'


const Hero = () => {

    const greetings = "Hello";

    return (
        <div className="hero h-screen flex items-end justify-between snap-center overflow-hidden" id="home">
            <div className="ml-20 self-center w-1/2">
                <p className="text-3xl text-gray-500 poppins-extralight mb-5">{greetings}, my name is <span className="font-bold">Matt</span> and I am a</p>
                <h1 className="text-9xl">Software Developer</h1>
            </div>

            <img src="images/hero-pic.png" className="w-2/5 align-self-end" />
        </div>
    );
}

export default Hero;