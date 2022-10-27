function Header() {
  return <header>
     <div className="" >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My list</li>
        </ul>
    </div>
    <div></div>
  </header>
  
}

export default Header