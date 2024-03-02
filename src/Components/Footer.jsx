import '../index.css'


const Footer = () => {
    return (
        <div className="bg-[#222222] flex flex-col items-center justify-center gap-10 py-10" id="footer">
            <div className="flex flex-row gap-5 justify-center">
                <a href="https://facebook.com/matt4youu" target="_blank" rel="noreferrer">
                    <img src="images/fb-icon.png" alt="social-icon" className="icon border  w-14 p-2 rounded-full cursor-pointer" />
                </a>

                <a href="https://instagram.com/matt4youu/" target="_blank" rel="noreferrer">
                    <img src="images/ig-icon.png" alt="social-icon" className="icon border  w-14 p-2 rounded-full cursor-pointer" />
                </a>
                
                <a href="https://github.com/matthewGernale" target="_blank" rel="noreferrer">
                    <img src="images/github-icon.png" alt="social-icon" className="icon border  w-14 p-2 rounded-full cursor-pointer" />
                </a>
                <a href="https://linkedin.com/in/john-matthew-gernale-baa2b4299/" target="_blank" rel="noreferrer"><img src="images/linkedin-icon.png" alt="social-icon" className="icon border  w-14 p-2 rounded-full cursor-pointer" /></a>
            </div>
            <div className="text-zinc-400 text-lg flex flex-col items-center justify-center">
                <p>09858648265</p>
                <p>matthewgernale26@gmail.com</p>
            </div>
        </div>
    );
}


export default Footer