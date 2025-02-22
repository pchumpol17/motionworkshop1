"use client"

import {motion} from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const Banner = () => {

    const BannerImg = "/assets/coffee-cover.jpg"
    const AppStore = "/assets/app_store.png"
    const PlayStore = "/assets/play_store.png"

    const BannerStyle = {
        backgroundImage: `url(${BannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
    }

    const MotionImage = motion(Image)

    return (
        <>
            <div className="container my-14">
                <motion.div 
                    initial={{opacity:0, scale:0.5}}
                    whileInView={{opacity:1, scale:1}}
                    transition={{type:"spring",stiffness:100,damping:10,delay:0.2}}
                    style={BannerStyle} 
                    className="sm:min-h-[400px] flex items-center justify-center bg-center px-4 py-6 sm:px-8 sm:py-12 rounded-xl shadow-md md:justify-end"
                >
                    <div>
                        <div className="max-w-xl mx-auto space-y-4 lg:space-y-6">
                            <motion.h1 
                                initial={{opacity:0, y:100}}
                                whileInView={{opacity:1, y:0}}
                                transition={{type:"spring",stiffness:100,damping:10,delay:0.2}}
                                className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center"
                            >
                                Download the app
                            </motion.h1>

                            <motion.p 
                                initial={{opacity:0, y:100}}
                                whileInView={{opacity:1, y:0}}
                                transition={{type:"spring",stiffness:100,damping:10,delay:0.4}}
                                className="text-center text-gray-600 sm:px-10 md: text-xl"
                            >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nostrum reprehenderit vero aspernatur quas velit facilis beatae quod, consectetur repellat labore perferendis quam autem harum, optio, praesentium alias voluptate! Officiis.
                            </motion.p>
                        
                            {/* img */}
                            <div className="flex justify-center items-center gap-4">
                                <Link
                                    href={"#"}
                                    className="max-w-[150] sm:max-w-[120px] md:max-w-[200px]"
                                >
                                    <MotionImage
                                        initial={{opacity:0, y:100}}
                                        whileInView={{opacity:1, y:0}}
                                        transition={{type:"spring",stiffness:100,damping:10,delay:0.2}}

                                        src={AppStore}
                                        alt="app store"
                                        width={200}
                                        height={200}
                                    >

                                    </MotionImage>
                                </Link>
                                
                                <Link
                                    href={"#"}
                                    className="max-w-[150] sm:max-w-[120px] md:max-w-[200px]"
                                >
                                    <MotionImage
                                        initial={{opacity:0, y:100}}
                                        whileInView={{opacity:1, y:0}}
                                        transition={{type:"spring",stiffness:100,damping:10,delay:0.4}}

                                        src={PlayStore}
                                        alt="play store"
                                        width={200}
                                        height={200}
                                    >

                                    </MotionImage>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}
export default Banner