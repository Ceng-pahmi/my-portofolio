
import { IoLogoGithub,IoLogoYoutube,IoLogoLinkedin,
  IoLogoInstagram } from "react-icons/io5";
function SideBar() {
return (
  <div
  className="w-[90px] border-r-[1px] dark:bg-slate-800
  h-screen fixed flex flex-col justify-around items-center mt-[90px]"
  >
      <h2 className='-rotate-90 tracking-widest'>HOMEPAGE</h2>
      <div className='flex flex-col gap-7 mb-10 text-[20px]'>
          <a target="blank" href="https://github.com/Ceng-pahmi"><IoLogoGithub  className="cursor-pointer hover:scale-110 transition-all ease-in-out"/></a>
          <a target="blank" href="https://www.youtube.com/channel/UChZisCZpb7bMlq_mhP79NLA"><IoLogoYoutube className="cursor-pointer hover:scale-110 transition-all ease-in-out"/></a>
          <a target="blank" href="https://www.linkedin.com/in/muhammad-pahmi-adriansah-34a650245/"><IoLogoLinkedin   className="cursor-pointer hover:scale-110 transition-all ease-in-out"/></a>
          <a target="blank" href="https://www.instagram.com/ceng.pahmi/"><IoLogoInstagram  className="cursor-pointer hover:scale-110 transition-all ease-in-out"/></a>
      </div>
  </div>
)
}

export default SideBar