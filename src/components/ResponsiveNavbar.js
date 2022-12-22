import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'
import { Navbar } from 'flowbite-react'
import { Flowbite, DarkThemeToggle } from 'flowbite-react'
const ResponsiveNavbar = () => {
    return (
        <>
                <Navbar
                    fluid={true}
                    rounded={true}
                >
                    <Navbar.Brand href="/">
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="mr-3 h-6 sm:h-9"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                            ECrpal
                        </span>
                    </Navbar.Brand>
                    <div className="flex md:order-2">
                        <Link to="/upload"> <Button>
                            Upload Files
                        </Button>
                        </Link>
                        <Navbar.Toggle />
                        <DarkThemeToggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/"
                        className='text-xl text-black'
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/" className='text-xl'>
                        Connect wallet
                    </Navbar.Link>
                    <Navbar.Link href="/"
                        className='text-xl text-black'>
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default ResponsiveNavbar