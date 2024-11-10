import Link from "next/link";
import Image from "next/image";
import img from "../../public/nextjs.jpg";

export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-black to-black text-white body-font">
            <div className="container mx-auto flex flex-col items-center px-5 py-10 md:py-20">
                <div className="relative mb-10 w-full max-w-3xl"> {/* Set a max width for the image */}
                    <Image
                        className="rounded-[50px] border-4 border-white object-cover object-center"
                        alt="hero"
                        src={img}
                        layout="responsive"
                        width={700} // Adjust width as necessary
                        height={400} // Adjust height as necessary
                    />
                </div>
                <div className="text-center lg:w-2/3 w-full">
                    <div className="p-4">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Exploring Next.js 15 RC</h1>
                        <p className="text-lg md:text-2xl mb-6">
                            We will explore the Next.js 15 RC to test the latest features for the upcoming stable release of Next.js. The first release candidate for Next.js 15 RC was rolled out on May 23, 2024. This means we can examine all the new development, production, and caching features.
                        </p>
                        <p className="text-lg md:text-2xl">
                            The latest updates include several key features organized into stable and experimental improvements.
                        </p>
                    </div>

                    <div className="p-4">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Stable improvements</h1>
                        <ul className="text-lg md:text-2xl mb-6 list-disc list-inside">
                            <li>Support for React 19 RC</li>
                            <li>Hydration error improvements</li>
                            <li>Caching improvements</li>
                            <li>Updated create-next-app</li>
                            <li>Bundling external packages</li>
                            <li>Experimental features</li>
                            <li>React compiler</li>
                            <li>Partial prerendering</li>
                            <li>Next/After</li>
                        </ul>
                    </div>
                </div>
        <div className="flex justify-center">
        <Link href="/learn-more">
          <span className="bg-slate-900 text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300 cursor-pointer">
            Learn More
          </span>
        </Link>
        </div>
            </div>
        </section>
    );
}