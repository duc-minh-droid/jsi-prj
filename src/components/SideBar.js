import React, { useState } from 'react'
import { IoFlowerOutline } from 'react-icons/io5'
import { BiHomeHeart } from 'react-icons/bi'
import { AiFillMail, AiFillPlusCircle } from 'react-icons/ai'
import { motion, AnimatePresence } from 'framer-motion'
import Login from './Login'
import SideBarItem from './SideBarItem'
import { useUser } from '../store/stores'

const sidebarVariants = {
    hidden: {
        x: '-100vw',
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            mass: 0.4,
            damping: 8,
            delay: 0.5
        }
    },
}
function SideBar() {
    const [isClicked, setIsClicked] = useState(false)
    const user = useUser(state => state.user)

    return (
        <motion.div variants={sidebarVariants} initial='hidden' animate='visible' drag whileDrag={{ scale: 1.2 }} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            className=' fixed flex flex-col ml-6 mt-10 shadow-xl p-3 pt-15 gap-4 rounded-full items-center bg-white z-40'>
            <div className='flex flex-col gap-3'>
                <motion.div onClick={() => setIsClicked(prev => !prev)}>
                    <IoFlowerOutline size={50} />
                </motion.div>
                <AnimatePresence>
                    {isClicked && (
                        <motion.div
                            variants={{
                                initial: {
                                    height: 0,
                                },
                                animate: {
                                    height: "auto",
                                    transition: {
                                        when: "beforeChildren",
                                    },
                                },
                                exit: {
                                    height: 0,
                                    transition: {
                                        when: "afterChildren",
                                    },
                                },
                            }}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            key={isClicked ? "enter" : "exit"}
                            className="text-lg font-light"
                        >
                            <motion.div
                                variants={{
                                    initial: {
                                        opacity: 0,
                                    },
                                    animate: {
                                        opacity: 1,
                                    },
                                    exit: {
                                        opacity: 0,
                                    },
                                }}
                            >
                                <>
                                    <div className='flex flex-col gap-3'>
                                        <SideBarItem to='/'>
                                            <BiHomeHeart size={50} />
                                        </SideBarItem>
                                        {user && <>
                                            <SideBarItem to='/create'>
                                                <AiFillPlusCircle size={50} />
                                            </SideBarItem>
                                            <SideBarItem to='/letters'>
                                                <AiFillMail size={50} />
                                            </SideBarItem>
                                        </>}
                                        {/* <SideBarItem to='/admin'>
                                            <AiFillMail size={50} />
                                        </SideBarItem> */}
                                        <Login />
                                    </div>
                                </>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

export default SideBar