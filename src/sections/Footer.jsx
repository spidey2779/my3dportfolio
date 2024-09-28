const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a className="social-icon  cursor-pointer" href="https://github.com/spidey2779">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a className="social-icon  cursor-pointer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
            alt="linkedin"
            className="w-1/2 h-1/2 invert"
          />
        </a>
        <a className="social-icon cursor-pointer" href="mailto:gteja2779@gmail.com" >
          <img
            src="https://cdn.vectorstock.com/i/1000v/12/04/mail-icon-in-flat-style-email-symbol-vector-28061204.jpg"
            alt="instagram"
            className="w-1/2 h-1/2"
          />
        </a>
      </div>

      <p className="text-white-500">© 2024 Teja. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
