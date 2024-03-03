import '../index.scss'
import MyPic from '../images/hero-pic.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'


const Hero = () => {

    const [greetings] = useTypewriter({
        words: ['Hello',
                'Kamusta',
                'Hola', 
                'Bonjour',
                'Ciao',
                'Konnichiwa',
                'Hallo',
                'Nǐ hǎo',
                'S̄wạs̄dī',
                'Annyeong'],
        loop: 0,
        typeSpeed: 50,
        deleteSpeed: 50,
    }); 

    return (
        <div className="hero h-screen flex items-end justify-between snap-center overflow-hidden" id="home">
            <div className="ml-20 self-center w-1/2">
                <span className="font-black text-4xl text-[#222222]">&lt;{greetings} /&gt;</span>
                <p className="text-3xl text-gray-500 poppins-extralight mb-5">my name is <span className="font-bold text-[#ff3562]">Matt</span> and I am a</p>
                <h1 className="text-9xl">Software Developer</h1>
            </div>

            <img src={MyPic} className="w-2/5 align-self-end" />
        </div>
    );
}

export default Hero;