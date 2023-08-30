 import Heading from "../components/heading";
import { ListItem } from "../components/list/data";
import NumberList from "../components/list/number";

function Conduct() {

    return (
        <>
            <div>
                <div>
                    <div>
                        <div className="bg-white py-6 sm:py-8 lg:py-12">
                            <div className="mx-auto max-w-screen-md px-4 md:px-8 pt-10">
                                <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-20">
                                    Contributor Covenant Code of Conduct
                                </h1>

                                <Heading title="Our Pledge" />

                                <p className="p-5">
                                    We as members, contributors, and leaders pledge to make participation in our
                                    community a harassment-free experience for everyone, regardless of age, body
                                    size, visible or invisible disability, ethnicity, sex characteristics, gender
                                    identity and expression, level of experience, education, socio-economic status,
                                    nationality, personal appearance, race, caste, color, religion, or sexual
                                    identity and orientation.
                                </p>

                                <p className="font-bold pb-10">
                                    We pledge to act and interact in ways that contribute to an open, welcoming,
                                    diverse, inclusive, and healthy community.
                                </p>

                                <Heading title="Our Standards" />
                                
                                <p className="py-5">
                                    Examples of behavior that contributes to a <i>positive environment</i> for our
                                    community include:
                                </p>

                                <NumberList list={[
                                    {
                                        body: "Demonstrating empathy and kindness toward other people."
                                    },
                                    {
                                        body: "Being respectful of differing opinions, viewpoints, and experiences."
                                    },
                                    {
                                        body: "Giving and gracefully accepting constructive feedback."
                                    },
                                    {
                                        body: "Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience."
                                    },
                                    {
                                        body: "Focusing on what is best not just for us as individuals, but for the overall community"
                                    }
                                ] as ListItem[]} />

                                <p className="py-5">
                                    Examples of unacceptable behavior include:
                                </p>

                                <NumberList list={[
                                    {
                                        body: "The use of sexualized language or imagery, and sexual attention or advances of any kind."
                                    },
                                    {
                                        body: "Trolling, insulting or derogatory comments, and personal or political attacks."
                                    },
                                    {
                                        body: "Public or private harassment."
                                    },
                                    {
                                        body: "Publishing others' private information, such as a physical or email address, without their explicit permission"
                                    },
                                    {
                                        body: "Other conduct which could reasonably be considered inappropriate in a professional setting."
                                    }
                                ] as ListItem[]} />

                                <Heading title="Enforcement Responsibilities" />

                                <p className="p-6">
                                    Community leaders are responsible for clarifying and enforcing our standards of
                                    acceptable behavior and will take appropriate and fair corrective action in
                                    response to any behavior that they deem inappropriate, threatening, offensive,
                                    or harmful.
                                </p>

                                <p className="p-6 pt-0">
                                    Community leaders have the right and responsibility to remove, edit, or reject
                                    comments, commits, code, wiki edits, issues, and other contributions that are
                                    not aligned to this Code of Conduct, and will communicate reasons for moderation
                                    decisions when appropriate.
                                </p>

                                <Heading title="Scope" />

                                <p className="p-6">
                                    This Code of Conduct applies within all community spaces, and also applies when
                                    an individual is officially representing the community in public spaces.
                                    Examples of representing our community include using an official e-mail address,
                                    posting via an official social media account, or acting as an appointed
                                    representative at an online or offline event.
                                </p>

                                <Heading title="Enforcement" />

                                <p className="p-6">
                                    Instances of abusive, harassing, or otherwise unacceptable behavior may be
                                    reported to the community leaders responsible for enforcement at codeofconduct@posit.co. 
                                    All complaints will be reviewed and investigated promptly and fairly.
                                </p>
                                <p className="p-6 pt-0">
                                    All community leaders are obligated to respect the privacy and security of the
                                    reporter of any incident.
                                </p>

                                <Heading title="Attribution" />
                                <p className="p-6">
                                    This Code of Conduct is adapted from the <a href="https://www.contributor-covenant.org/version/2/1/code_of_conduct.html" className="text-blue-800 hover:underline" target="_blank">Contributor Covenant homepage</a>,
                                    version 2.1.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Conduct;