import '../index.css'


const About = () => {
    return (
        <div className="h-auto snap-center flex flex-col items-center justify-center gap-10" id="about">
            <div className="container flex flex-col items-center justify-center">
                <h1 className="text-6xl pb-5 pt-40">About me</h1>
                <div className="flex gap-10 justify-center items-center pt-10">
                    <div className="bio flex flex-col w-2/5 text-justify gap-5 text-sm rounded-xl py-5 px-10">
                        <p>Highly motivated Junior Programmer with hands-on experience in microcontroller programming, specifically Arduino Uno, acquired during thesis projects. Proficient in C++ for embedded system programming within the Arduino IDE, demonstrating the ability to program and build devices to meet project specifications.</p>
                        <p>Dedicated to continuous learning, I have pursued online courses on platforms such as freeCodeCamp, Cisco Skills for All, Microsoft Learn, and SoloLearn to enhance proficiency in HTML, CSS, and JavaScript, as well as front-end frameworks including React.js, Bootstrap, and Tailwind CSS. Additional skills include object-oriented programming in Java using Eclipse IDE and MySQL database management.</p>
                    </div>
                    <div className="flex flex-col gap-10">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="pr-10 font-black uppercase">Full Name</td>
                                    <td>: John Matthew T. Gernale</td>
                                </tr>
                                <tr>
                                    <td className="font-black uppercase">Age</td>
                                    <td>: 23</td>
                                </tr>
                                <tr>
                                    <td className="font-black uppercase">Address</td>
                                    <td>: Bulacan PH</td>
                                </tr>
                                <tr>
                                    <td className="font-black uppercase">Phone</td>
                                    <td>: 09858648265</td>
                                </tr>
                                <tr>
                                    <td className="font-black uppercase">Email</td>
                                    <td>: matthewgernale26@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                        <a href="images/John-Matthew-Gernale-RESUME.pdf" target="_blank" rel="noreferrer" className="btn px-5 py-7 rounded-md flex text-nowrap gap-7 text-sm items-center justify-center overflow-hidden">
                            <img src="images/dl-icon.png" className="w-5" />
                            <span className="">Download CV</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container flex flex-col justify-center items-center pt-10">
                <h2 className="text-4xl title">Educational Background</h2>
                <div className="flex justify-between px-10 py-10 w-fit gap-40">
                    <div>
                        <h3 className="mb-5 title text-2xl">College</h3>
                        <p className="">Polytechnic University of the Philippines</p>
                        <p className="font-bold pb-10">BS Computer Engineering <span className="font-normal">| 2019 - 2023</span></p>

                        <table>
                            <thead>
                                <tr>
                                    <td className="font-bold">Awards</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="w-60">2020-2021 First Semester</td>
                                    <td className="font-bold">Dean's Lister</td>
                                </tr>
                                <tr>
                                    <td>2020-2021 Second Semester</td>
                                    <td className="font-bold">President's Lister</td>
                                </tr>
                                <tr>
                                    <td>2021-2022 First Semester</td>
                                    <td className="font-bold">Dean's Lister</td>
                                </tr>
                                <tr>
                                    <td>2021-2022 Second Semester</td>
                                    <td className="font-bold">President's Lister</td>
                                </tr>
                                <tr>
                                    <td>2022-2023 First Semester</td>
                                    <td className="font-bold">President's Lister</td>
                                </tr>
                                <tr>
                                    <td>2022-2023 Second Semester</td>
                                    <td className="font-bold">Dean's Lister</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="title text-2xl mb-2">Senior Highschool</h3>
                            <p>Sacred Heart Academy Santa Maria Bulacan</p>
                            <p className="font-bold">STEM <span className="font-normal">| 2013-2017</span></p>
                        </div>
                        <div>
                            <h3 className="title text-2xl mb-2">Junior Highschool</h3>
                            <p>Grace of Shekinah School</p>
                            <p>2017-2019</p>
                        </div>
                        <div>
                            <h3 className="title text-2xl mb-2">Elementary</h3>
                            <p>San Gabriel Elementary School</p>
                            <p>2007-2013</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container flex flex-col items-center gap-20 justify-center pb-20">
                <div className="title text-4xl flex flex-col items-center justify center gap-10">
                    <h2>Programming Languages</h2>
                    <div className="grid grid-flow-col gap-7">
                        <div className="skills w-fit rounded-lg cursor-pointer shadow-md"><img className="w-40" src="images/java-icon.png" /></div>
                        <div className="skills w-fit rounded-lg cursor-pointer shadow-md"><img className="w-40" src="images/js-icon.png" /></div>
                        <div className="skills w-fit rounded-lg cursor-pointer shadow-md"><img className="w-40" src="images/csharp-icon.png" /></div>
                        <div className="skills w-fit rounded-lg cursor-pointer shadow-md"><img className="w-40" src="images/cpp-icon.png" /></div>
                        <div className="skills w-fit rounded-lg cursor-pointer shadow-md"><img className="w-40" src="images/php-icon.png" /></div>
                    </div>
                </div>
                <div className="title text-4xl flex flex-col items-center justify-center gap-10">
                    <h2>Tech Stacks</h2>
                    <div className="grid grid-cols-5 gap-7 items-center justify-center w-fit">
                        <div className="skills w-fit rounded-lg cursor-pointer shadow-md"><img src="images/html-icon.png" /></div>
                        <div className="skills w-fit rounded-lg cursor-pointer shadow-md"><img src="images/css-icon.png" /></div>
                        <div className="skills w-fit rounded-lg cursor-pointer shadow-md"><img src="images/react-icon.png" /></div>
                        <div className="skills w-fit rounded-lg cursor-pointer shadow-md"><img src="images/tailwind-icon.png" /></div>
                        <div className="skills w-fit rounded-lg cursor-pointer shadow-md"><img src="images/bootstrap-icon.png" /></div>
                        <div className="skills w-fit rounded-lg cursor-pointer shadow-md"><img src="images/mysql-icon.png" /></div>
                        <div className="skills w-fit rounded-lg cursor-pointer shadow-md"><img src="images/mssql-icon.png" /></div>
                    </div>                    
                </div>
                <div className="title text-4xl flex flex-col items-center justify-center gap-10">
                    <h2>Graphic Design Tools</h2>
                    <div className="grid grid-flow-col gap-7">
                        <div className="skills w-fit rounded-lg cursor-pointer shadow-md"><img className="w-40" src="images/figma-icon.png" /></div>
                        <div className="skills w-fit rounded-lg cursor-pointer shadow-md"><img className="w-40" src="images/ps-icon.png" /></div>
                        <div className="skills w-fit rounded-lg cursor-pointer shadow-md"><img className="w-40" src="images/ai-icon.png" /></div>
                        <div className="skills w-fit rounded-lg cursor-pointer shadow-md"><img className="w-40" src="images/canva-icon.png" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default About;