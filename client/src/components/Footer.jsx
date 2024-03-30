import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import {BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble} from 'react-icons/bs'
const FooterCom = () => {
    return (
        <Footer container className='border border-t-8 border-teal-500'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-col-1'>
                    <div className='mt-5'>
                        <Link to={'/'} className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                            <span className='px-2 py-1 bg-gradient-to-r bg-[#FF00FF] rounded-lg text-white'>Sahad's</span>
                            Blog
                        </Link>
                    </div>
                    <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                        <div>
                        <Footer.Title title='About'/>
                        <Footer.LinkGroup col>
                            <Footer.Link   nk href='https://www.100jsprojects.com' target='_blank' rel='noopener noreferrer'>
                                100 js Projects
                            </Footer.Link>
                            <Footer.Link href='/about' target='_blank' rel='noopener noreferrer'>
                                Sahad's Blog
                            </Footer.Link>
                        </Footer.LinkGroup>
                        </div>
                        <div>
                        <Footer.Title title='Follow Us'/>
                        <Footer.LinkGroup col>
                            <Footer.Link   nk href='https://github.com/codingwithsarang/MERN_blog' target='_blank' rel='noopener noreferrer'>
                                Code Base Link(Github)
                            </Footer.Link>
                            <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                                Discord
                            </Footer.Link>
                        </Footer.LinkGroup>
                        </div>
                        <div>
                        <Footer.Title title='LEGAL'/>
                        <Footer.LinkGroup col>
                            <Footer.Link   >
                               Privacy policy
                            </Footer.Link>
                            <Footer.Link >
                                Terms & conditions
                            </Footer.Link>
                        </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright href='#' by="Sahad's blogs"  year={new Date().getFullYear()}/>
                </div>
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <Footer.Icon href='#' icon={BsFacebook}/>
                    <Footer.Icon href='#' icon={BsInstagram}/>
                    <Footer.Icon href='#' icon={BsTwitter}/>
                    <Footer.Icon href='#' icon={BsGithub}/>
                    <Footer.Icon href='#' icon={BsDribbble}/>
                </div>
            </div>
        </Footer>
    )
}

export default FooterCom