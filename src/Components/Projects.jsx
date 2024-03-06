import '../index.scss'
import Card from './Card'
import BannerStroke from '../images/my-work.png'
import BannerBlack from '../images/my-work-b.png'
import JsIcon from '../images/js-icon.png'
import CsharpIcon from '../images/csharp-icon.png'
import HtmlIcon from '../images/html-icon.png'
import CssIcon from '../images/css-icon.png'
import ReactIcon from '../images/react-icon.png'
import TailwindIcon from '../images/tailwind-icon.png'
import BootstrapIcon from '../images/bootstrap-icon.png'
import MssqlIcon from '../images/mssql-icon.png'
import FigmaIcon from '../images/figma-icon.png'
import PsIcon from '../images/ps-icon.png'
import resort from '../images/jm-resort.png'
import Ems from '../images/management-system.png'
import Jm from '../images/jm-landing-page.pdf'
import P2p from '../images/p2p-app.pdf'
import P2pImg from '../images/p2p-app.png'
import CityApp from '../images/city-gallery.png'
import SnakeGame from '../images/snake-game.png'
import NotedApp from '../images/noted-app.png'



const Projects = () => {
    return (
        <div className="flex flex-col items-center justify-start py-20 mx-20" id="project">
            <div className="asset-wrapper flex flex-col gap-5 py-16">
                <img src={BannerStroke} alt="asset" className="asset" />
                <img src={BannerBlack} alt="asset" className="asset" />
            </div>
            <h1 className="title text-6xl pb-20">Projects</h1>
            <div className="card-wrapper grid grid-flow-row grid-cols-3 gap-7">
                <Card title="Employee Management System" imageUrl={Ems} icon={[CsharpIcon, HtmlIcon, CssIcon, BootstrapIcon, MssqlIcon]} project="https://youtu.be/_g9xKQa6P5w"/>
                <Card title="Snake Game" imageUrl={SnakeGame} icon={[ReactIcon, HtmlIcon, CssIcon, JsIcon, TailwindIcon]} project="https://matthew-gernale.github.io/JavaSnake/" />
                <Card title="Noted" imageUrl={NotedApp} icon={[ReactIcon, HtmlIcon, CssIcon, JsIcon, BootstrapIcon]} project="https://matthew-gernale.github.io/noted/" />
                <Card title="City Gallery" imageUrl={CityApp} icon={[HtmlIcon, CssIcon]} project="https://matthew-gernale.github.io/city-gallery/" />
                <Card title="Jm Resort Landing Page" imageUrl={resort} icon={[FigmaIcon, PsIcon]} project={Jm} />
                <Card title="P2P Booking App" imageUrl={P2pImg} icon={[FigmaIcon]} project={P2p} />
            </div>
        </div>
    );
}


export default Projects;