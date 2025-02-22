"use client"

import {motion} from "framer-motion"

const Location = () => {
    return (
        <>
            <div className="container my-36">
                <div className="flex flex-col justify-center items-center md:flex-row gap-x-14">
                    {/* form */}
                    <Form />

                    {/* gps */}
                    <Gps />
                </div>
            </div>
        </>
    )
}
export default Location

function Form () {
    return (
        <>
            <div className="space-y-8">
                <motion.h1 
                    initial={{opacity:0, y:100}}
                    animate={{opacity:1, y:0}}
                    transition={{type:"spring",stiffness:100,damping:10,delay:0.1}}
                    className="text-3xl font-bold text-gray-600">
                    Buy our Product from anywhere !
                </motion.h1>

                <motion.div 
                    initial={{opacity:0, y:100}}
                    animate={{opacity:1, y:0}}
                    transition={{type:"spring",stiffness:100,damping:10,delay:0.3}}
                    className="flex item-center gap-4">
                    <input 
                        placeholder="Name"
                        type="text"
                        className="input-style w-full lg:w-[150px] border focus:outline-none focus:border-primary" 
                    />

                    <input 
                        placeholder="Email"
                        type="email"
                        className="input-style w-full border focus:outline-none focus:border-primary"
                    />
                </motion.div>

                <motion.div 
                    initial={{opacity:0, y:100}}
                    animate={{opacity:1, y:0}}
                    transition={{type:"spring",stiffness:100,damping:10,delay:0.2}}
                    className="flex item-center gap-4">
                    <input 
                        placeholder="Country"
                        type="text"
                        className="input-style w-full border focus:outline-none focus:border-primary" 
                    />

                    <input 
                        placeholder="Zipcode"
                        type="number"
                        className="input-style w-full lg:w-[150px] border focus:outline-none focus:border-primary"
                    />
                </motion.div>

                <motion.button
                    initial={{opacity:0, y:100}}
                    animate={{opacity:1, y:0}}
                    transition={{type:"spring",stiffness:100,damping:10,delay:0.4}}
                    className="primary-btn w-full shadow-xl"
                >
                    สั่งเลย
                </motion.button>
            </div>
        </>
    )
}

function Gps() {

    const gpsMaps = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.681218906735!2d100.37674137455753!3d13.677137899018822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2bddd4af5cd5b%3A0x4196494919622e64!2sCODE-FIN-NUA!5e0!3m2!1sth!2sth!4v1740117890756!5m2!1sth!2sth"
    
    return (
        <>
            <motion.div 
                initial={{opacity:0, scale:0.5}}
                animate={{opacity:1, scale:1}}
                transition={{type:"spring",stiffness:100,damping:10,delay:0.1}}
                className="">
                <iframe
                    src={gpsMaps}
                    width={600}
                    height={450}
                    style={{border:2, borderRadius:"0.5rem"}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="maps"
                    className="rounded-xl w-full sm:w-[300px] sm:h-[300px] md:h-[250px] overflow-hidden shadow-2xl mx-auto"
                >
                </iframe>
            </motion.div>
        </>
    )
}