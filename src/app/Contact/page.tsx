import Image from "next/image";
import family from "@/app/images/desktop-header-24.png";
import phone from "@/app/images/icn settings .icn-xl.png";
import location from "@/app/images/icn settings .icn-xl (1).png";
import mail from "@/app/images/icn settings .icn-xl (2).png";
import arrow from "@/app/images/Arrow 2.png";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="w-full">
      {/* HERO FOR CONTACT */}
      <div className="bg-white">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10 px-4 lg:px-8 max-w-6xl mx-auto mt-10 lg:mt-16">
          {/* Text Section */}
          <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-1/2">
            <h5 className="text-base font-bold text-gray-800">CONTACT US</h5>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Get in touch today!
            </h1>
            <h4 className="text-base lg:text-lg text-gray-500 leading-relaxed">
              We know how large objects will act, but things on a small scale.
            </h4>
            <div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-800">
                Phone: +451 215 215
              </h3>
              <h3 className="text-lg lg:text-xl font-bold text-gray-800">
                Fax: +451 215 215
              </h3>
            </div>
            <div className="flex gap-4 text-gray-600">
              <FaTwitter className="w-6 h-6" />
              <FaFacebook className="w-6 h-6" />
              <FaInstagram className="w-6 h-6" />
              <FaLinkedinIn className="w-6 h-6" />
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <Image src={family} alt="family" priority className="rounded-xl" />
          </div>
        </div>
      </div>

      {/* OFFICE AND CONTACT */}
      <div className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-10">
          {/* Header Section */}
          <div className="text-center">
            <h6 className="text-sm font-bold text-gray-800">VISIT OUR OFFICE</h6>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2">
              We help small businesses with big ideas
            </h2>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card Template */}
            {[{ img: phone }, { img: location }, { img: mail }].map((card, i) => (
              <div
                key={i}
                className={`p-6 flex flex-col items-center gap-4 rounded-lg shadow-md ${
                  i === 1 ? "bg-gray-800 text-white" : "bg-gray-100"
                }`}
              >
                <div className="w-16 h-16">
                  <Image src={card.img} alt="icon" />
                </div>
                <div className="text-center">
                  <h6 className="text-sm font-bold">georgia.young@example.com</h6>
                  <h6 className="text-sm font-bold">georgia.young@ple.com</h6>
                </div>
                <div className="font-bold text-base">Get Support</div>
                <button className="w-40 h-12 rounded-full border border-blue-500 hover:bg-blue-100 text-blue-500">
                  Submit Request
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LAST SECTION */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center gap-8">
          <Image src={arrow} alt="arrow" className="w-16" />
          <div>
            <h5 className="text-lg font-bold text-gray-800">WE CANNOT WAIT TO MEET YOU</h5>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mt-4">
              Let’s Talk
            </h1>
            <button className="mt-6 py-3 px-8 bg-blue-500 text-white rounded-lg text-lg font-bold">
              Try it free now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
