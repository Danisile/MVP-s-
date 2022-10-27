import {BellIcon, SearchIcon } from '@heroicons/react/solid';

function Header() {
  return (
    <header>
        <div className="flex items-center space-x-2 md:space-x-10" >
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            width={100}
            height={100}
            className="cursor-pointer object-contain"
            />

            <ul className="hidden space-x-4 md:flex">
                <li className="headerLink">Home</li>
                <li className="headerLink">TV Shows</li>
                <li className="headerLink">Movies</li>
                <li className="headerLink">New & Popular</li>
                <li className="headerLink">My list</li>
            </ul>
        </div>

        <div>
            <SearchIcon className="hidden h-6 w-6 sm:inline "/>
            <p className="hidden lg:inline">Kids</p>
            <BellIcon className="h-6 w-6"></BellIcon>
        </div>
    </header>
  )
}

export default Header