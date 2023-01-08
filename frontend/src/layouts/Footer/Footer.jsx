import logoBlackSvg from "@images/logo.svg";

import { FaFacebook, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer-container w-full relative bottom-0 border-t-2 border-solid border-secondary-20">
      <div className="footer--contents px-16 pt-12 pb-6 ">
        <div className="footer--content 2xl:flex gap-24 items-center">
          <div className="logo w-[300px] 2xl:my-3">
            <img
              src={logoBlackSvg}
              alt="logo"
              draggable="false"
              className="h-12"
            />
            <p className="text-sm font-normal my-4 w-full">
              A platform where our artists can share their work, become noticed,
              communicate their feelings and emotions via their creations.
            </p>
          </div>
          <div className="footer--buttons w-full">
            <ul className="flex flex-col gap-1">
              <li className="text-base font-bold mb-1">Explore</li>
              <li>
                <Link className="text-sm font-normal hover:text-accent-100">
                  Latest
                </Link>
              </li>
              <li>
                <Link className="text-sm font-normal hover:text-accent-100">
                  Following
                </Link>
              </li>
              <li>
                <Link className="text-sm font-normal hover:text-accent-100">
                  Popular
                </Link>
              </li>
              <li>
                <Link className="text-sm font-normal hover:text-accent-100">
                  Trending
                </Link>
              </li>
              <li>
                <Link className="text-sm font-normal hover:text-accent-100">
                  Topics
                </Link>
              </li>
              <li>
                <Link className="text-sm font-normal hover:text-accent-100">
                  Artists
                </Link>
              </li>
            </ul>

            <ul className="flex flex-col gap-1">
              <li className="text-base font-bold mb-1">Company</li>
              <li>
                <Link className="text-sm font-normal hover:text-accent-100">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-sm font-normal hover:text-accent-100">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-sm font-normal hover:text-accent-100">
                  Support Us
                </Link>
              </li>
              <li>
                <Link className="text-sm font-normal hover:text-accent-100">
                  Help & FAQs
                </Link>
              </li>
            </ul>

            <ul className="flex flex-col gap-1">
              <li className="text-base font-bold mb-1">Legals</li>
              <li>
                <Link
                  className="text-sm font-normal hover:text-accent-100"
                  to="/terms"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm font-normal hover:text-accent-100"
                  to="/privacy-policy"
                >
                  Privacy Policies
                </Link>
              </li>
              <li>
                <Link className="text-sm font-normal hover:text-accent-100">
                  Cookie Policies
                </Link>
              </li>
              <li className="text-sm font-normal">
                <Link className="text-sm font-normal hover:text-accent-100">
                  Security
                </Link>
              </li>
            </ul>

            <ul className="flex flex-col gap-1">
              <li className="text-base font-bold mb-1">Colaboration</li>
              <li>
                <Link className="text-sm font-normal hover:text-accent-100">
                  Advertisement
                </Link>
              </li>
              <li>
                <Link className="text-sm font-normal hover:text-accent-100">
                  Partnership
                </Link>
              </li>
              <li>
                <Link className="text-sm font-normal hover:text-accent-100">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="text-sm font-normal hover:text-accent-100">
                  API
                </Link>
              </li>
            </ul>

            <ul className="flex flex-col gap-1">
              <li className="text-base font-bold mb-1">Forum</li>
              <li>
                <Link className="text-sm font-normal hover:text-accent-100">
                  Latest Patch Update
                </Link>
              </li>
              <li>
                <Link className="text-sm font-normal hover:text-accent-100">
                  What's New!
                </Link>
              </li>
              <li>
                <Link className="text-sm font-normal hover:text-accent-100">
                  Special Offers!
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <section className="w-[100%] h-[1px] bg-secondary-30"></section>
        <section className="footer--link">
          <div className="flex justify-center items-end my-3 md:justify-between">
            <div className="mx-1">&copy; 2022 Textura.</div>
            <div className="flex justify-center items-center max-sm:hidden">
              <FaFacebook size={24} className="text-secondary-100 mx-4" />{" "}
              <FaTwitter size={24} className="text-secondary-100 mx-4" />{" "}
              <FaYoutube size={24} className="text-secondary-100 mx-4" />{" "}
              <FaGithub size={24} className="text-secondary-100 mx-4" />
            </div>
            <div className="mx-1">All Rights Reserved.</div>
          </div>
          <div className="flex justify-center items-center sm:hidden">
            <FaFacebook size={24} className="text-secondary-100 mx-4" />{" "}
            <FaTwitter size={24} className="text-secondary-100 mx-4" />{" "}
            <FaYoutube size={24} className="text-secondary-100 mx-4" />{" "}
            <FaGithub size={24} className="text-secondary-100 mx-4" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Footer;
