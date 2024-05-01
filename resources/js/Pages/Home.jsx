import { Link } from '@inertiajs/react';
import { Facebook, Instagram, Linkedin, Mail, Menu, Twitter, X } from 'lucide-react';
import React, { useState } from 'react'

const features = [
    {
        title: "Intuitive User Interfaces",
        content: "We would design sleek and intuitive user interfaces for seamless navigation and productivity.",
    },
    {
        title: "Customization Options",
        content: "Personalize your device with a wide range of customization options, including themes, wallpapers, and widgets.",
    },
    {
        title: "Enhanced Security",
        content: "Protect your data with advanced security features such as encryption, secure boot, and app permissions management.",
    },
    {
        title: "Optimized Performance",
        content: "Enjoy smooth performance and efficient resource management for enhanced battery life and responsiveness.",
    },
    {
        title: "App Ecosystem",
        content: "Access a rich ecosystem of apps and services through our curated app store, ensuring a diverse range of software for every need."
    }
];

const developers = [
    {
        title: "Kernel Developer",
        image: "kernel.webp",
    },
    {
        title: "Platform Developer",
        image: "platform.webp",
    },
        {
        title: "System Developer",
        image: "system.webp",
    },
        {
        title: "App Developer",
        image: "app.webp",
    },
        {
        title: "Backend Developer",
        image: "backend.png",
    },
        {
        title: "Frontend Developer",
        image: "frontend.jpg",
    },
];

const Home = () => {

    const [menu, setMenu] = useState(false);

  return (
    <div>
        <nav className="flex justify-between p-4 px-6 relative">
            <div className="logo font-black text-3xl">
                <span className="text-red-500">O</span>
                <span className="text-yellow-500">S</span>
                <span className="text-green-500">G</span>
            </div>

            <div onClick={() => setMenu(!menu)} className="menu">
                <Menu size={50} strokeWidth={1.4}/>
            </div>

            <div className={`fixed top-0 ${menu ? "right-0" : "-right-[200vw]"} transition-all duration-300 h-screen border-l w-[400px] z-50 bg-white`}>

                <div className="flex items-center justify-center py-6">
                    <div onClick={() => setMenu(!menu)} className="h-[50px] w-[50px] rounded-full cursor-pointer border border-black text-3xl flex items-center justify-center">
                        <X />
                    </div>
                </div>

                <div className="">
                    <div className="text-center text-3xl font-thin p-4 opacity-80 hover:scale-105 transition duration-100 mb-2 cursor-pointer">Home</div>
                    <div className="text-center text-3xl font-thin p-4 opacity-80 hover:scale-105 transition duration-100 mb-2 cursor-pointer">About</div>
                    <div className="text-center text-3xl font-thin p-4 opacity-80 hover:scale-105 transition duration-100 mb-2 cursor-pointer">Docs</div>
                    <div className="text-center text-3xl font-thin p-4 opacity-80 hover:scale-105 transition duration-100 mb-2 cursor-pointer">Blog</div>
                    <Link href='/login'>
                        <div className="text-center text-3xl font-thin p-4 opacity-80 hover:scale-105 transition duration-100 mb-2 cursor-pointer">Login</div>
                    </Link>
                    <Link href='/register'>
                        <div className="text-center text-3xl font-thin p-4 opacity-80 hover:scale-105 transition duration-100 mb-2 cursor-pointer">Contribute</div>
                    </Link>
                </div>

            </div>

        </nav>

        <header className="relative pt-12">

            <div className="flex min-h-screen spacing">
                
                <div className="middle h-full relative z-10 max-[1250px]:max-w-[700px] max-[1190px]:max-w-[500px] max-[850px]:text-white">
                    <h1 className="large-txt ">Inspiring Mobile Experiences Beyond The Norm</h1>
                    <p className='max-w-[600px] my-3'>
                        Welcome to OS-Ghana, an open-source initiative dedicated to revolutionizing the mobile experience. Our project aims to provide a cutting-edge mobile operating system that empowers users with flexibility, performance, and security
                    </p>
                    <div className="flex gap-3 py-3">
                        <button className="bg-white border-2 border-yellow-600 text-yellow-600">Learn More</button>
                        <Link href='/register'>
                            <button className="bg-green-600">Join Us</button>
                        </Link>
                    </div>
                </div>

                <div className="right w-[650px] max-[1000px]:w-[50vw] max-[850px]:w-full h-full absolute top-0 right-0 z-0">
                    <img src="/images/cool.png" className="object-contain h-full w-full max-[850px]:hidden" />
                    <img src="/images/phones.jpg" className="object-cover h-full w-full min-[850px]:hidden" />
                    <div className="absolute top-0 left-0 h-full w-full max-[850px]:bg-black max-[850px]:bg-opacity-80"></div>
                </div>
            </div>

            {/* <div className="absolute top-0 right-0 w-full h-full z-0">
                <img src="/images/phones.jpg" className="object-cover h-full w-full" />
            </div> */}
        </header>

        <section className="min-[850px]:-mt-16 relative max-[1050px]:py-12">
            <div className="grid grid-cols-12 max-[850px]:grid-cols-8 max-[560px]:grid-cols-4 gap-6 justify-center relative z-10">
                <div className="col-span-4 flex flex-col justify-center gap-6">
                    <div className="flex max-w-[400px] bg-white border border-gray-200 rounded-xl">
                        <div className="">
                            <div className="font-bold text-3xl max-[1050px]:text-xl border-b px-4 py-2">{features[0].title}</div>
                            <p className="px-4 py-2">{features[0].content}</p>
                        </div>
                    </div>

                    <div className="flex max-w-[400px] bg-white border border-gray-200 rounded-xl min-[850px]:hidden">
                        <div className="">
                            <div className="font-bold text-3xl max-[1050px]:text-xl border-b px-4 py-2">{features[2].title}</div>
                            <p className="px-4 py-2">{features[2].content}</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 flex flex-col justify-center gap-6">
                    <div className="flex max-w-[400px] bg-white border border-gray-200 rounded-xl">
                        <div className="">
                            <div className="font-bold text-3xl max-[1050px]:text-xl border-b px-4 py-2">{features[1].title}</div>
                            <p className="px-4 py-2">{features[1].content}</p>
                        </div>
                    </div>

                    <div className="h-[400px] my-3 max-[650px]:hidden">
                        <img src="/images/phone.png" className="object-contain h-full w-full" />
                    </div>

                    <div className="flex max-w-[400px] bg-white border border-gray-200 rounded-xl">
                        <div className="">
                            <div className="font-bold text-3xl max-[1050px]:text-xl border-b px-4 py-2">{features[3].title}</div>
                            <p className="px-4 py-2">{features[3].content}</p>
                        </div>
                    </div>

                </div>
                <div className="col-span-4 flex items-center max-[850px]:hidden">
                    <div className="flex max-w-[400px] bg-white border border-gray-200 rounded-xl">
                        <div className="">
                            <div className="font-bold text-3xl max-[1050px]:text-xl border-b px-4 py-2">{features[2].title}</div>
                            <p className="px-4 py-2">{features[2].content}</p>
                        </div>
                    </div>
                </div>
                    

            </div>
            <div className="absolute top-0 left-0 h-full w-full">
                <img src="/images/lines.jpg" alt="" className="object-cover h-full w-full opacity-20" />
            </div>
        </section>

        <section className="py-12">
            <h1 className='medium-txt text-center'>Join Our Team <br /> Build The Future !</h1>

            <div className="grid grid-cols-12 max-[1095px]:grid-cols-8 max-[600px]:grid-cols-4 max-[720px]:gap-6 gap-12 my-12">
                {developers.map( ({ title, image }) => 

                    <div className="card col-span-4 max- rounded-xl overflow-hidden shadow hover:scale-105 transition duration-300">
                        <div className="h-[300px] bg-black">
                            <img src={`/images/${image}`} className="object-cover h-full w-full" />
                        </div>
                        <div className="content p-2">
                            <h2 className='font-bold text-xl mb-2'>{title}</h2>
                            <Link href='/register'>
                                <button className='w-full bg-white border-2 border-black hover:border-blue-600 py-1.5 text-black'>Apply Now</button>
                            </Link>
                        </div>
                    </div>

                )}
            </div>
        </section>

        <footer className='bg-[#111] text-white spacing py-12 grid grid-cols-12 max-[1020px]:grid-cols-8 max-[650px]:grid-cols-4'>
            <div className="col-span-4 flex items-center flex-col h-full justify-center">
                <div className="border rounded-3xl border-white px-6 py-2 mb-3 min-w-[300px] text-center">
                    info@osg.com
                </div>
                <div className="border rounded-3xl border-white px-6 py-2 mb-3 min-w-[300px] text-center">
                    0508809987
                </div>
            </div>
            <div className="col-span-4 h-full flex items-center justify-center text-center">
                <div className="text-9xl opacity-30 font-black">OSG</div>
            </div>
            <div className="col-span-4 max-[650px]:row-start-1 max-[650px]:mb-6">
                <div className="flex items-center gap-6 h-full justify-center">
                    <div className="h-[50px] w-[50px] rounded-full flex items-center justify-center border border-white border-opacity-30">
                        <Linkedin />
                    </div>

                    <div className="h-[50px] w-[50px] rounded-full flex items-center justify-center border border-white border-opacity-30">
                        <Facebook />
                    </div>

                    <div className="h-[50px] w-[50px] rounded-full flex items-center justify-center border border-white border-opacity-30">
                        <Instagram />
                    </div>

                    <div className="h-[50px] w-[50px] rounded-full flex items-center justify-center border border-white border-opacity-30">
                        <Twitter />
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Home