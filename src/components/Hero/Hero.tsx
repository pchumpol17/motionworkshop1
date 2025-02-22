"use client"

import BgImage from "../../../public/assets/bg-slate.png"
import Image from "next/image"
import BlackCoffee from "../../../public/assets/black.png"
import Navbar from "../Navbar/Navbar"
import {motion} from "framer-motion"

const Hero = () => {
    const bgImage = {
        backgroundImage: `url(${BgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }

    const MotionImage = motion(Image)

    return (
        <>
            <motion.main 
                initial={{opacity:0, y:-100}}
                animate={{opacity:1, y:0}}
                transition={{type:"spring", stiffness:100, damping:10, delay:0.1}}                
                style={bgImage}
            >
                <section className="min-h-[750px] w-full relative text-white">
                    <div className="container">
                        {/* Navbar */}
                        <Navbar/>

                        {/* Hero */}

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
                            {/* text content */}
                            <div className="text-lightOrange mt-[100px] md:mt-0 space-y-28 p-4">
                                <motion.h1 
                                    initial={{opacity:0, y:-100}}
                                    animate={{opacity:1, y:0}}
                                    transition={{type:"spring", stiffness:100, damping:10, delay:0.2}}
                                    className="text-3xl md:text-5xl font-bold leading-tight ml-14"
                                >
                                    Frontend Motion
                                </motion.h1>
                                <motion.div 
                                    initial={{opacity:0, y:-100}}
                                    animate={{opacity:1, y:0}}
                                    transition={{type:"spring",stiffness:100,damping:10, delay:0.6}}
                                    className="relative"
                                >
                                    <div className="relative z-10 space-y-4">
                                        <h1 className="text-2xl md:text-4xl font-bold text-primaryDark">Coder Life Style</h1>
                                        <h1 className="text-sm opacity-55 leading-loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe esse reiciendis recusandae adipisci consequatur, tenetur assumenda molestias hic, quae at accusamus corporis odit nisi perspiciatis nostrum tempore nam eveniet id.</h1>
                                    </div>
                                    <div className="absolute z-0 -top-6 bg-gray-700/25 -left-10 w-[250px] h-[200px]">

                                    </div>
                                </motion.div>
                            </div>

                            {/* hero img */}
                            <div className="relative">
                                <MotionImage
                                    initial={{opacity:0, y:-100}}
                                    animate={{opacity:1, y:0}}
                                    transition={{type:"spring",stiffness:100,damping:10, delay:0.2}}                                   
                                    className="relative z-40 h-[400] md:h-[700px] img-shadow"
                                    src={BlackCoffee}
                                    alt="heroimg"
                                >
                                </MotionImage>
                                <motion.div 
                                    initial={{opacity:0, scale:0}}
                                    animate={{opacity:1, scale:1}}
                                    transition={{type:"spring",stiffness:100,damping:10, delay:0.3}}
                                    className="border-[20px] absolute top-24 -right-16 z-10 border-primary w-[180px] h-[180px] rounded-full"
                                >
                                </motion.div>

                                <div className="absolute -top-20 left-[250px] z-1">
                                    <motion.h1 
                                        initial={{opacity:0, scale:0}}
                                        animate={{opacity:1, scale:1}}
                                        transition={{type:"spring",stiffness:100,damping:10, delay:0.4}}
                                        className="text-[80px] sm:text-[120px] md:text-[200px] scale-105 font-bold text-darkGray/40 leading-none"
                                    >
                                        Coder your Life
                                    </motion.h1>
                                </div>
                            </div>

                            {/* third div */}
                            <motion.div 
                                initial={{opacity:0, y:-100}}
                                animate={{opacity:1, y:0}}
                                transition={{type:"spring",stiffness:100,damping:10, delay:0.3}}
                                className="text-lightOrange mt-[100px] md:mt-0 space-y-28 p-4"
                            >
                                <h1 className="text-3xl md:text-5xl font-bold leading-tight ml-14 opacity-0">Frontend Motion</h1>
                                <div className="relative">
                                    <div className="relative z-10 space-y-4">
                                        <motion.h1 
                                            initial={{opacity:0, y:-100}}
                                            animate={{opacity:1, y:0}}
                                            transition={{type:"spring",stiffness:100,damping:10, delay:0.6}}
                                            className="text-2xl md:text-4xl font-bold text-primaryDark"
                                        >
                                            Coder Life Style
                                        </motion.h1>
                                        <motion.h1 
                                            initial={{opacity:0, y:-100}}
                                            animate={{opacity:1, y:0}}
                                            transition={{type:"spring",stiffness:100,damping:10, delay:0.7}}
                                            className="text-sm opacity-55 leading-loose"
                                        >
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe esse reiciendis recusandae adipisci consequatur, tenetur assumenda molestias hic, quae at accusamus corporis odit nisi perspiciatis nostrum tempore nam eveniet id.
                                        </motion.h1>
                                    </div>
                                    <div className="absolute z-0 -top-6 bg-darkGray/70 -right-10 w-[440px] h-[200px]">

                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </motion.main>
        </>
    )
}
export default Hero