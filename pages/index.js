import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="lg:grid lg:grid-cols-2 mt-28 lg:mt-52">
                <div className="w-2/4 bg-grayish-blue-100 h-[410px] -z-10 rounded-bl-[2.5rem] absolute right-0 top-0" />
                <section className="pl-3  lg:order-2 grid place-items-center lg:mt-0 lg:pl-[5.5rem]">
                    <img
                        src="/images/illustration-devices.svg"
                        alt="illustration devices"
                        className="object-cover h-60 object-left lg:h-96"
                    />
                </section>

                <section className="mt-24 mx-auto lg:ml-28 lg:mx-0 lg:mt-0 w-10/12 lg:w-auto ">
                    <div className="font-Barlow-Condensed flex space-x-3 items-center text-lg">
                        <span className="bg-grayish-blue-900 text-grayish-blue-100 px-3 rounded-full    ">
                            NEW
                        </span>
                        <h2 className="text-grayish-blue-200 text-lg font-light tracking-[4px]">
                            MONOGRAPH DASHBOARD
                        </h2>
                    </div>

                    <div className="font-Barlow">
                        <h1 className="font-Barlow-Condensed font-bold text-4xl lg:text-6xl mt-4 text-grayish-blue-900">
                            POWERFUL INSIGHTS <br /> INTO YOUR TEAM
                        </h1>
                        <p className="font-Barlow text-grayish-blue-800 text-lg leading-tight mt-3 lg:mt-6">
                            Project planning and time tracking <br /> for agile
                            teams
                        </p>
                    </div>

                    <div className="font-Barlow-Condensed mt-10 flex space-x-5 items-center lg:mt-10">
                        <button className="bg-buttonred text-grayish-blue-100 py-2 px-4 lg:py-3 lg:px-6 lg:text-lg tracking-wide rounded-md">
                            SCHEDULE A DEMO
                        </button>
                        <p className="text-grayish-blue-200 tracking-widest lg:text-lg">
                            TO SEE A PREVIEW
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
