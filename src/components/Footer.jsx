import facebook from "/assets/facebook.png";
import instagram from "/assets/instagram.png";
import twitter from "/assets/twitter.png";
import logo from "/assets/logo-xl.png";

export default function Footer() {
  return (
    <footer className="bg-[#1f4d3b] text-white mt-16">

      {/* TOP SECTION */}
      <div className="text-center py-16 px-4">
        
        {/* Logo */}
        

        <h1 className="text-3xl font-bold">KeenKeeper</h1>

        <p className="text-gray-300 mt-2">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>

        {/* Social Links Title */}
        <p className="mt-6 text-sm text-gray-300">Social Links</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-3">
           <img src={instagram} className="w-6 cursor-pointer" />
          <img src={facebook} className="w-6 cursor-pointer" />
         
          <img src={twitter} className="w-6 cursor-pointer" />
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-600 px-10 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">

        {/* LEFT */}
        <p>© 2026 KeenKeeper. All rights reserved.</p>

        {/* RIGHT */}
        <div className="flex gap-6 mt-2 md:mt-0">
          <span className="cursor-pointer hover:text-white">Privacy Policy</span>
          <span className="cursor-pointer hover:text-white">Terms of Service</span>
          <span className="cursor-pointer hover:text-white">Cookies</span>
        </div>
      </div>

    </footer>
  );
}