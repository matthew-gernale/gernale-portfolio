import '../index.css'
import Card from './Card'


const Projects = () => {
    return (
        <div className="flex flex-col items-center justify-start py-20 mx-20" id="project">
            <div className="asset-wrapper flex flex-col gap-5 py-16">
                <img src="images/my-work.png" alt="asset" className="asset" />
                <img src="images/my-work-b.png" alt="asset" className="asset" />
            </div>
            <h1 className="title text-6xl pb-20">Projects</h1>
            <div className="card-wrapper grid grid-flow-row grid-cols-3 gap-7">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}


export default Projects;