import logoBlackSvg from "@images/logo.svg";

import { FaFacebook, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container w-full">
      <div className="footer--contents mx-[70px] my-[50px]">
        <div className="footer--content 2xl:flex 2xl:flex-row 2xl:justify-between">
          <div className="logo w-[300px] 2xl:my-3">
            <img src={logoBlackSvg} alt="logo" draggable="false" />
            <div className="text-base font-normal my-4">
              A platform where our artists can share their work, become noticed,
              communicate their feelings and emotions via their creations.
            </div>
          </div>
          <div className="footer--buttons 2xl:justify-between 2xl:w-4/5">
            <div className="flex flex-row md:flex md:justify-between">
              <div className="flex flex-col md:w-3/5 md:flex-row md:justify-between">
                <div className="mt-3">
                  <ul>
                    <li className="text-xl font-bold mb-1">Explore</li>
                    <li>
                      <Link className="text-base font-normal hover:text-accent-100">
                        Latest
                      </Link>
                    </li>
                    <li>
                      <Link className="text-base font-normal hover:text-accent-100">
                        Following
                      </Link>
                    </li>
                    <li>
                      <Link className="text-base font-normal hover:text-accent-100">
                        Popular
                      </Link>
                    </li>
                    <li>
                      <Link className="text-base font-normal hover:text-accent-100">
                        Trending
                      </Link>
                    </li>
                    <li>
                      <Link className="text-base font-normal hover:text-accent-100">
                        Topics
                      </Link>
                    </li>
                    <li>
                      <Link className="text-base font-normal hover:text-accent-100">
                        Artists
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="md:pr-3 lg:pr-8 xl:flex xl:justify-between xl:w-4/5">
                  <div className="my-3 xl:pl-24">
                    <ul>
                      <li className="text-xl font-bold mb-1">Company</li>
                      <li>
                        <Link className="text-base font-normal hover:text-accent-100">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link className="text-base font-normal hover:text-accent-100">
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link className="text-base font-normal hover:text-accent-100">
                          Support Us
                        </Link>
                      </li>
                      <li>
                        <Link className="text-base font-normal hover:text-accent-100">
                          Help & FAQs
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="my-3 xl:pr-6 2xl:pr-16">
                    <ul>
                      <li className="text-xl font-bold mb-1">Legals</li>
                      <li>
                        <Link
                          className="text-base font-normal hover:text-accent-100"
                          to="/terms"
                        >
                          Terms & Conditions
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-base font-normal hover:text-accent-100"
                          to="/privacy-policy"
                        >
                          Privacy Policies
                        </Link>
                      </li>
                      <li>
                        <Link className="text-base font-normal hover:text-accent-100">
                          Cookie Policies
                        </Link>
                      </li>
                      <li className="text-base font-normal">
                        <Link className="text-base font-normal hover:text-accent-100">
                          Security
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="xl:flex xl:justify-between xl:w-1/3">
                <div className="my-3">
                  <ul>
                    <li className="text-xl font-bold mb-1">Colaboration</li>
                    <li>
                      <Link className="text-base font-normal hover:text-accent-100">
                        Advertisement
                      </Link>
                    </li>
                    <li>
                      <Link className="text-base font-normal hover:text-accent-100">
                        Partnership
                      </Link>
                    </li>
                    <li>
                      <Link className="text-base font-normal hover:text-accent-100">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link className="text-base font-normal hover:text-accent-100">
                        API
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="my-3">
                  <ul>
                    <li className="text-xl font-bold mb-1">Forum</li>
                    <li>
                      <Link className="text-base font-normal hover:text-accent-100">
                        Latest Patch Update
                      </Link>
                    </li>
                    <li>
                      <Link className="text-base font-normal hover:text-accent-100">
                        What's New!
                      </Link>
                    </li>
                    <li>
                      <Link className="text-base font-normal hover:text-accent-100">
                        Special Offers!
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-0.5 bg-secondary-30"></div>
        <div className="footer--link">
          <div className="flex justify-center items-end my-3 md:justify-between">
            <div className="mx-1">&copy; 2022 Textura.</div>
            <div className="flex justify-center items-center max-sm:hidden">
              <FaFacebook size={30} className="text-accent-100 mx-4" />{" "}
              <FaTwitter size={30} className="text-accent-100 mx-4" />{" "}
              <FaYoutube size={30} className="text-accent-100 mx-4" />{" "}
              <FaGithub size={30} className="text-accent-100 mx-4" />
            </div>
            <div className="mx-1">All Rights Reserved.</div>
          </div>
          <div className="flex justify-center items-center md:hidden">
            <FaFacebook size={30} className="text-accent-100 mx-4" />{" "}
            <FaTwitter size={30} className="text-accent-100 mx-4" />{" "}
            <FaYoutube size={30} className="text-accent-100 mx-4" />{" "}
            <FaGithub size={30} className="text-accent-100 mx-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
