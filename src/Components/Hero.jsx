import '../index.css'


const Hero = () => {

    const greetings = "Hello";

    return (
        <div className="h-screen border-2 flex justify-center items-center snap-center">
            <p>{greetings}</p>
            <p>My name is</p>

        </div>
    );
}

export default Hero;