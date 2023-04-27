import React from "react";

function Footer() {
  return (
    <section className="bg-black">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center">
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 text-white hover:underline underline-offset-2"
            >
              About
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 text-white hover:underline underline-offset-2"
            >
              Blog
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 text-white hover:underline underline-offset-2"
            >
              Team
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 text-white hover:underline underline-offset-2"
            >
              Pricing
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 text-white hover:underline underline-offset-2"
            >
              Contact
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 text-white hover:underline underline-offset-2"
            >
              Terms
            </a>
          </div>
        </nav>
        <p className="mt-8 text-base leading-6 text-center text-white">
          No copyright
        </p>
      </div>
    </section>
  );
}

export default Footer;
