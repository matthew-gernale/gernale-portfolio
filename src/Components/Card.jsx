
import '../index.css'



const Card = () => {
    return(
        <div className="card flex flex-col items-center justify-center w-fit px-10 py-10 rounded-2xl cursor-pointer">
                    <h2 className="title pb-5">Project Name</h2>
                    <img src="images/jm-resort.png" alt="web-snap" className="snap rounded-lg border border-[#222222] w-80" />
                    <p className="place-self-start pt-5 pb-2 text-zinc-400 text-xs uppercase">Technologies Used</p>
                    <div className="grid grid-flow-col gap-2 place-self-start">
                        <div className="icon bg-[#222222] rounded-full p-1"><img src="images/react-icon.png" alt="icons" className="w-5" /></div>
                        <div className="icon bg-[#222222] rounded-full p-1"><img src="images/html-icon.png" alt="icons" className="w-5" /></div>
                        <div className="icon bg-[#222222] rounded-full p-1"><img src="images/figma-icon.png" alt="icons" className="w-5" /></div>
                    </div>
                    <a href="#" className="flex items-center justify-center">
                        <div className="btn border border-[#222222] px-6 py-1 rounded-full mt-5">Preview</div>
                    </a>
        </div>
    );
}

export default Card