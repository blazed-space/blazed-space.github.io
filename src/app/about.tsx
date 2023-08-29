import { HiLightBulb, HiSparkles, HiBeaker, HiGlobeAlt, HiEmojiHappy, HiUserGroup } from 'react-icons/hi';
function About() {

    return (
        <>
            <div>
                <div>
                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                                <img
                                alt="Beaker"
                                src="/images/wallpaper-beaker.png"
                                className="absolute inset-0 h-full w-full object-cover rounded-md"
                                />
                            </div>

                            <div className="lg:py-16">
                                <article className="space-y-4 text-gray-600">
                                    <h2 className="text-2xl font-bold sm:text-4xl">
                                        About Us
                                    </h2>
                                    <p>
                                        At Blazed Space, we're igniting possibilities in the digital realm, where innovation knows no bounds. 
                                        Our passion for software development fuels us to explore new frontiers, creating solutions that redefine industries and shape the future.
                                    </p>
                                    <h3 className="text-xl">
                                        Unleashing Innovation
                                    </h3>
                                    <p>
                                        We're not just a software company; we're a beacon of innovation. 
                                        Our diverse team of brilliant minds thrives on curiosity, excellence, and a relentless pursuit of pushing technological boundaries.
                                    </p>
                                    <h3 className="text-xl">
                                        What We Do
                                    </h3>
                                    <ul className="block list-disc pl-10">
                                        <li>
                                            <b>Cutting-Edge Applications:</b> Our applications are more than code—they're experiences. We build applications that redefine user engagement and elevate business success.
                                        </li>
                                        <li>
                                            <b>Web Solutions:</b> From seamless websites to complex web applications, we're crafting digital journeys that captivate users and drive businesses forward.
                                        </li>
                                        <li>
                                            <b>Data Insights:</b> Transforming data into actionable insights is our superpower. Our data-driven solutions empower businesses to make informed decisions.
                                        </li>
                                        <li>
                                            <b>Innovative Technologies:</b> We harness emerging technologies like AI, blockchain, and AR to create solutions that not only meet today's needs but anticipate tomorrow's challenges.
                                        </li>
                                    </ul>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-4 md:m-8 px-5 lg:px-20 pb-10 text-gray-800">
                    <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                        <h3 className="text-4xl font-bold">
                            Why Choose Us?
                        </h3>
                    </div>
                    <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col items-center p-4">
                            <HiLightBulb className="w-10 h-10" />
                            <h3 className="my-3 text-xl font-semibold">
                                Cutting-Edge Solutions
                            </h3>
                            <div className="space-y-1 leadi">
                                <p>
                                    We don't follow trends; we set them. Our software solutions are the embodiment of innovation, setting new benchmarks and transforming industries.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center p-4">
                            <HiSparkles className="w-10 h-10" />
                            <h3 className="my-3 text-xl font-semibold">
                                Limitless Creativity
                            </h3>
                            <div className="space-y-1 leadi">
                                <p>
                                    We believe limitations are opportunities in disguise. Our team thrives on transforming complex challenges into elegant, user-centric solutions.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center p-4">
                            <HiBeaker className="w-10 h-10" />
                            <h3 className="my-3 text-xl font-semibold">
                                Research-Driven Excellence
                            </h3>
                            <div className="space-y-1 leadi">
                                <p>
                                    Research isn't a step in our process; it's the foundation. We're dedicated to exploring the latest technologies and methodologies to deliver excellence.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center p-4">
                            <HiGlobeAlt className="w-10 h-10" />
                            <h3 className="my-3 text-xl font-semibold">
                                Global Collaboration
                            </h3>
                            <div className="space-y-1 leadi">
                                <p>
                                    Collaboration fuels innovation. We collaborate with talents from around the world, creating a tapestry of diverse ideas and expertise.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center p-4">
                            <HiEmojiHappy className="w-10 h-10" />
                            <h3 className="my-3 text-xl font-semibold">
                                Impactful Results
                            </h3>
                            <div className="space-y-1 leadi">
                                <p>
                                    We don't just write code; we craft digital experiences that leave a lasting impact on users, businesses, and society as a whole.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center p-4">
                            <HiUserGroup className="w-10 h-10" />
                            <h3 className="my-3 text-xl font-semibold">
                                Expert Team
                            </h3>
                            <div className="space-y-1 leadi">
                                <p>
                                    Our team of software engineers, designers, and visionaries are at the forefront of technology, working collaboratively to turn ideas into reality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;