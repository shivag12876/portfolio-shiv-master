import React from 'react'
import ShineBorder from './ui/shine-border'
import { MdKeyboardArrowRight } from 'react-icons/md'
import SocialIcons from './SocialIcons'
import WordRotate from './ui/word-rotate'
import IconCloud from './ui/icon-cloud'
import ScrollLink from './ScrollLink'
import Link from 'next/link'
import data from '../data/data.json';
import { FaExternalLinkAlt } from 'react-icons/fa'

const resumeLink = data.resumeLink

const iconSlugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "vercel",
    "git",
    "mongodb",
    "github",
    "visualstudiocode",
    "googlechrome",
    "cplusplus",
    "bootstrap",
    "tailwindcss",
    "npm",
];

const Hero = () => {
    const words = ['Shivam Gupta', 'a Web Developer'];
    return (
        <section id='hero' className='sm:flex-row h-full flex-col flex justify-around items-center text-center sm:text-left w-full overflow-hidden'>
            <div className="text-white flex flex-col justify-center items-center sm:items-start sm:justify-start gap-4 lg:gap-6 h-full">
                <h1 className='lg:text-5xl w-full flex-col flex text-2xl lg:gap-2 font-medium'>
                    <span className='flex flex-col sm:flex-row'>
                        Hello, I&apos;m&nbsp;
                        <WordRotate words={words} />
                    </span>
                    from India
                </h1>
                <p className='lg:text-lg text-base w-full sm:w-3/4'>
                    I&apos;m an aspiring software engineer with an interest in <span className='font-medium'>Frontend Frameworks.</span>
                </p>
                <div className="flex items-center sm:justify-start justify-center flex-col w-full sm:flex-row gap-4 lg:gap-6">
                    <ShineBorder
                        className="text-center rounded-full px-4 py-3 hover:bg-gradient-to-bl from-[#A07CFE] via-[#FE8FB5] to-[#FFBE7B]"
                        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    >
                        <ScrollLink href={"#portfolio"} className='capitalize bg-transparent flex-center gap-2'>View my work <MdKeyboardArrowRight /></ScrollLink>
                    </ShineBorder>
                    <ScrollLink href={"#contact"} className='capitalize w-fit bg-white text-black hover:bg-black hover:text-white rounded-full px-4 py-3 flex-center gap-2'>Contact Me <MdKeyboardArrowRight /></ScrollLink>
                </div>
                <SocialIcons />
                <Link
                    href={resumeLink}
                    target='_blank'
                    rel='noreferrer noopener'
                    className='text-white my-1 font-medium text-base lg:text-lg hover:underline underline-offset-1 sm:hidden flex flex-row gap-2 items-center'
                >
                    <FaExternalLinkAlt /> Resume
                </Link>
            </div>
            <IconCloud iconSlugs={iconSlugs} />
        </section>
    )
}

export default Hero