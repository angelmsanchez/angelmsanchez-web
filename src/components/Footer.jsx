import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { MainLogo } from "../assets/logos/MainLogo";
import { LinkedinIcon } from "../assets/icons/LinkedinIcon";

const footerData = [
  {
    title: "Products",
    items: ["Services", "About Us", "News and Stories", "Roadmap"],
  },
  {
    title: "Important Links",
    items: [
      "Organization Team",
      "Our Journeys",
      "Pricing Plans",
      "Roadmap",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "Company",
    items: ["About Us", "Jobs", "Press", "Contact Us"],
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10 pb-10 lg:pt-20 lg:pb-6 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="md:flex justify-between items-center">
            <div className="flex justify-center lg:justify-start items-center">
              <div className="text-white mr-2 text-6xl">
                <MainLogo />
              </div>
              <div className="text-white font-['Inter'] font-bold text-xl">
                Angel Muñoz
              </div>
            </div>
            <p className="mt-6 mb-6 md:mt-0 md:mb-0 text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
              Front End Developer since 2013
            </p>
            <div className="w-36 mx-auto lg:mx-0">
              <a
                className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                href="https://www.facebook.com/angel.munoz.967/"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon />
              </a>
              <a
                className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                href="https://www.linkedin.com/in/angel-mu%C3%B1oz-sanchez-10229418/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinIcon />
              </a>
              <a
                className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                href="https://www.instagram.com/il_cotos/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </a>
            </div>
            {/* <div className="w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">Products</h3>
                <ul>
                  {footerData[0].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="#"
                        aria-label=""
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  Important Links
                </h3>
                <ul>
                  {footerData[1].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="#"
                        aria-label=""
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-white">Company</h3>
                <ul>
                  {footerData[2].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="#"
                        aria-label=""
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
          </div>
          <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-6 mt-6 md:mt-16">
            &copy; 2024 Angel Muñoz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
