

function Header() {
    const menu = [
      {
        id: 1,
        name: < a href="#About">ABOUT</a> ,
      },
      {
        id: 2,
        name: <a href="#Skills">SKILLS</a>,
      },
      {
        id: 3,
        name: "PORTPOLIO",
      },
      {
        id: 4,
        name: "CONTACT",
      },
    ];
    return (
      <div className="flex items-center fixed
      w-full justify-between border-b-[1px]  dark:bg-slate-800">
        <div
          className="w-[90px] h-[90px]
          bg-black"
        >
          <img src="/logo.png" className="p-7" />
        </div>
        <div className="hidden md:flex gap-14">
          {menu.map((item,index) => (
            <div key={index}
              className="cursor-pointer 
                  hover:underline font-medium"
            >
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
        <div
          className="w-[90px] h-[90px]
          bg-black flex justify-center items-center "
        >
           <a target="blank" href="https://mail.google.com/mail/u/0/#inbox" rel="noopener noreferrer"><svg
            
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg></a>
        </div>
      </div>
    );
  }
  
  export default Header;