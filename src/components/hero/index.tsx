import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';
export default function Hero(){
    return (
        <div className="bg-gray-100 text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left select-none">
                    <h1 className="text-5xl font-bold leadi sm:text-6xl">
                        Blazed Space Research & Development
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">
                        We are the R&D division of Blazed Labs, we make software great.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="/#/about" className="px-8 py-3 text-lg font-semibold rounded bg-red-600 hover:bg-red-700 active:bg-red-800 text-gray-50">
                            <HiOutlineQuestionMarkCircle className="inline-flex mr-4 w-5 h-5" />
                            <span className="inline-flex">
                                Learn More
                            </span>
                        </a>
                        <a rel="noopener noreferrer" href="/#/journal" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800 hover:bg-gray-900 hover:text-gray-100 active:bg-gray-800">
                            Research Journal
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 select-none">
                    <img src="/images/john-mcmahon-ljjcoULkxL8-unsplash.jpg" alt="Red Ibis" title="Blazed Ibis" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    );
}