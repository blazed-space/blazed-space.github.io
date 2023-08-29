import Heading from "../components/heading";

const Contrubute = () => {

    return (
      <div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-md px-4 md:px-8 pt-10">
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">
              Contributing to Blazed Space R&D
            </h1>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-20 text-center">
              Welcome to the Blazed Space R&D project! 
              We're thrilled that you're interested in contributing. 
              This document outlines the guidelines and steps to follow when contributing to our project. 
              By participating, you're joining a community of passionate individuals dedicated to pushing the boundaries of space research and development.
            </p>

            <Heading title="Ways to Contribute" />

            <p className="pt-6 pl-10 italic text-gray-500">
              There are several ways to contribute to Blazed Space R&D projects:
            </p>

            <ul className="mb-6 pt-5 pl-5 list-inside list-disc text-gray-500 md:mb-8 space-y-1">
              <li>
                <b>Code Contributions:</b> Help us improve our software by submitting code changes, enhancements, or bug fixes.
              </li>
              <li>
                <b>Documentation:</b> Contribute to our documentation to ensure accurate and up-to-date resources for users and developers.
              </li>
              <li>
                <b>Testing:</b> Test our software, identify bugs, and help us maintain a stable and reliable system.
              </li>
              <li>
                <b>Feedback:</b> Share your thoughts, ideas, and suggestions to help shape the project's direction.
              </li>
              <li>
                <b>Community Support:</b> Assist other contributors and users by answering questions, providing guidance, and fostering a positive environment.
              </li>
            </ul>

            <Heading title="Getting Started" />
            
            <ol className="mb-6 pt-5 pl-5 list-inside list-decimal md:mb-8 space-y-1">
              <li>
                <b>Fork the Repository:</b> Start by forking the Blazed Space R&D repository to your own GitHub account.
              </li>
              <li>
                <b>Clone the Repository:</b> Clone the forked repository to your local machine.
              </li>
              <li>
                <b>Create a Branch:</b> Before making any changes, create a new branch for your work. Use a descriptive name that summarizes your contribution.
              </li>
              <li>
                <b>Make Changes:</b> Work on your contribution, following the coding guidelines and best practices.
              </li>
              <li>
                <b>Test:</b> If your contribution involves code changes, test thoroughly to ensure it functions as expected.
              </li>
              <li>
                <b>Commit:</b> Commit your changes with clear and concise messages describing your modifications.
              </li>
              <li>
                <b>Push:</b> Push your changes to your forked repository on GitHub.
              </li>
              <li>
                <b>Create Pull Request:</b> Open a pull request (PR) from your branch to the main Blazed Space R&D repository. Provide a detailed description of your changes.
              </li>
            </ol>

            <Heading title="Coding Guidelines" />

            <ul className="mb-6 pt-5 pl-5 list-inside list-disc md:mb-8 space-y-1">
              <li>
                Follow the coding style and conventions used in the project.
              </li>
              <li>
                Write clear, well-documented code that is easy for others to understand.
              </li>
              <li>
                Ensure your code is tested thoroughly, and new features have appropriate unit tests.
              </li>
              <li>
                Keep dependencies updated and include any new dependencies in a documented manner.
              </li>
            </ul>

            <Heading title="Submission Process" />
            
            <p className="py-5">
              All contributions, including code, documentation, and issues, should be submitted through pull requests.
              PRs will be reviewed by the maintainers. Be prepared to make changes based on their feedback.
            </p>

            <Heading title="Community Guidelines" />

            <ul className="mb-6 pt-5 pl-5 list-inside list-disc md:mb-8 space-y-1">
              <li>
                Respect all members of the community, regardless of their background or skill level.
              </li>
              <li>
                Be inclusive and welcoming to new contributors.
              </li>
              <li>
                Ask for help when needed and offer assistance to others.
              </li>
              <li>
                Ensure use of best practices and industry standards in contributions.
              </li>
              <li>
                Maintain a consistent brand style in all software published by Blazed Labs.
              </li>
              <li>
                Ensure user experience and satisfaction is put first before personal or corporate gain.
              </li>
            </ul>

            <Heading title="Code of Conduct" />

            <p className="py-5">
              Read and abide by our <a href="/#/code-of-conduct" className="text-blue-500 hover:underline">Code of Conduct</a>.
              We expect all contributors to follow these guidelines to ensure a positive and respectful community.
            </p>

            <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
              <img src="/images/lockscreen-beaker.png" loading="lazy" alt="Ibis Interactive" className="object-cover object-center" />
            </div>
            
            <Heading title="Recognition" />

            <p className="py-3 text-gray-500 sm:text-lg">
              <b>Contributors to Blazed Space R&D projects are greatly appreciated.</b> <br />
              Your efforts will be recognized in our project's documentation and on our website. 
              The more you contribute, the more prominent your recognition will be.
              Thank you for your interest in contributing to Blazed Space R&D! 
              Your contributions make a real difference in advancing web research and development.
            </p>
          </div>
        </div>

      </div>
    );
  };
  
  export default Contrubute;