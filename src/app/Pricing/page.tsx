
import Image from "next/image";
import arrow from "@/app/images/Vector (14).png";
import circle from "@/app/images/icn-circle circle-xs secondary-color-1.png";
import circle2 from "@/app/images/icn-circle circle-xs mute.png";
import arrow2 from "@/app/images/Vector (1).png"
import { FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


export default function Pricing() {
  return (
    <div>
   <div className="max-w-[1050px] mx-auto py-12 px-4 lg:py-28 lg:px-8 flex flex-col gap-12">
        {/* Navbar + Intro Section */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 lg:p-8">
            <div className="max-w-[870px] mx-auto flex flex-col items-center space-y-4 text-center">
              <h5 className="text-[#737373] text-sm font-bold">PRICING</h5>
              <h2 className="text-[#252B42] text-2xl lg:text-5xl font-bold">Simple Pricing</h2>
              <div className="flex items-center justify-center space-x-2 text-sm font-bold">
                <a className="text-[#252B42]" href="#">Home</a>
                <Image src={arrow} alt="arrow" className="w-4 h-4" />
                <span className="text-[#737373]">Pricing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Short Intro Section */}
        <div className="text-center space-y-4">
          <h2 className="text-[#252B42] text-2xl lg:text-3xl font-bold">Pricing</h2>
          <p className="text-[#737373] text-sm leading-relaxed">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
          </p>
        </div>

        {/* Toggle Section */}
        <div className="flex items-center justify-center gap-4 w-full max-w-md mx-auto">
          <h5 className="text-sm font-bold text-[#252B42]">Monthly</h5>
          <div className="relative flex items-center w-12 h-6 bg-white border border-[#23A6F0] rounded-full">
            <div className="absolute w-5 h-5 bg-[#D0D0D0] rounded-full left-1 top-[3px] transition-transform"></div>
          </div>
          <h5 className="text-sm font-bold text-[#252B42]">Yearly</h5>
          <button className="flex items-center justify-center px-4 py-2 bg-[#B3E3FF] rounded-full">
            <h6 className="text-xs font-bold text-[#23A6F0]">Save 25%</h6>
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Free Plan */}
          <div className="border rounded-lg p-8 bg-white flex flex-col items-center gap-6">
            <h3 className="text-2xl font-bold text-[#252B42]">FREE</h3>
            <p className="text-sm text-[#737373] text-center">
              Organize across all apps by hand.
            </p>
            <div className="flex items-baseline gap-2">
              <h2 className="text-4xl font-bold text-[#23A6F0]">0</h2>
              <div>
                <h3 className="text-xl font-bold text-[#23A6F0]">$</h3>
                <h6 className="text-sm text-[#8EC2F2]">Per Month</h6>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Image src={circle} alt="check" className="w-4 h-4" />
                <span className="text-sm text-[#252B42] font-bold">Unlimited product updates</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src={circle2} alt="check" className="w-4 h-4" />
                <span className="text-sm text-[#252B42] font-bold">1GB Cloud storage</span>
              </div>
            </div>
            <button className="px-6 py-3 bg-[#23A6F0] text-white font-bold text-sm rounded-lg">
              Try for Free
            </button>
          </div>

          {/* Standard Plan */}
          <div className="border rounded-lg p-8 bg-[#252B42] text-white flex flex-col items-center gap-6">
            <h3 className="text-2xl font-bold">STANDARD</h3>
            <p className="text-sm text-center">
              Organize across all apps by hand.
            </p>
            <div className="flex items-baseline gap-2">
              <h2 className="text-4xl font-bold text-[#23A6F0]">9.99</h2>
              <div>
                <h3 className="text-xl font-bold text-[#23A6F0]">$</h3>
                <h6 className="text-sm text-[#8EC2F2]">Per Month</h6>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Image src={circle} alt="check" className="w-4 h-4" />
                <span className="text-sm font-bold">Unlimited product updates</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src={circle2} alt="check" className="w-4 h-4" />
                <span className="text-sm font-bold">1GB Cloud storage</span>
              </div>
            </div>
            <button className="px-6 py-3 bg-[#23A6F0] text-white font-bold text-sm rounded-lg">
              Try for Free
            </button>
          </div>

          {/* Premium Plan */}
          <div className="border rounded-lg p-8 bg-white flex flex-col items-center gap-6">
            <h3 className="text-2xl font-bold text-[#252B42]">PREMIUM</h3>
            <p className="text-sm text-[#737373] text-center">
              Organize across all apps by hand.
            </p>
            <div className="flex items-baseline gap-2">
              <h2 className="text-4xl font-bold text-[#23A6F0]">19.99</h2>
              <div>
                <h3 className="text-xl font-bold text-[#23A6F0]">$</h3>
                <h6 className="text-sm text-[#8EC2F2]">Per Month</h6>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Image src={circle} alt="check" className="w-4 h-4" />
                <span className="text-sm text-[#252B42] font-bold">Unlimited product updates</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src={circle2} alt="check" className="w-4 h-4" />
                <span className="text-sm text-[#252B42] font-bold">1GB Cloud storage</span>
              </div>
            </div>
            <button className="px-6 py-3 bg-[#23A6F0] text-white font-bold text-sm rounded-lg">
              Try for Free
            </button>
          </div>
        </div>
      </div>

    

{/* white div 1 */}
<div className="w-full bg-white">
  <div className="mx-auto w-full lg:max-w-[1056px] px-4 py-[80px] flex flex-col items-center gap-[50px]">
    {/* faqs text */}
    <div className="w-full text-center py-6">
      <div className="max-w-[650px] mx-auto">
        <h2 className="font-Montserrat font-bold text-[32px] sm:text-[40px] text-[#252B42] leading-[40px] sm:leading-[50px] tracking-[0.2px]">
          Pricing FAQs
        </h2>
        <h4 className="font-Montserrat font-normal text-[16px] sm:text-[20px] text-[#737373] leading-[24px] sm:leading-[30px] tracking-[0.2px] mt-4">
          Problems trying to resolve the conflict between the two major realms of Classical physics
        </h4>
      </div>
    </div>

    {/* answers to FAQs */}
    <div className="flex flex-col gap-[30px] w-full">
      {[...Array(3)].map((_, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row items-center gap-[20px] w-full"
        >
          {/* Left Answer */}
          <div className="flex flex-col items-start p-4 w-full md:w-[48%] bg-gray-100 rounded-[9px]">
            <div className="flex flex-row items-start gap-4">
              <div className="flex-none">
                <Image src={arrow2} alt="arrow2" width={16} height={16} />
              </div>
              <div>
                <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                  The quick fox jumps over the lazy dog
                </h5>
                <h6 className="font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373] mt-2">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </h6>
              </div>
            </div>
          </div>

          {/* Right Answer */}
          <div className="flex flex-col items-start p-4 w-full md:w-[48%] bg-gray-100 rounded-[9px]">
            <div className="flex flex-row items-start gap-4">
              <div className="flex-none">
                <Image src={arrow2} alt="arrow2" width={16} height={16} />
              </div>
              <div>
                <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                  The quick fox jumps over the lazy dog
                </h5>
                <h6 className="font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373] mt-2">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </h6>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <h1 className="font-Montserrat font-normal text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px] tracking-[0.2px] text-[#737373] text-center">
      Haven’t got your answer? Contact our support
    </h1>
  </div>
</div>

     {/* White div 2 */}
<div className="relative bg-white flex flex-col items-center py-16 gap-12 w-full">
  {/* Container */}
  <div className="w-full max-w-4xl flex flex-col items-center gap-8 px-4">
    
    {/* Main content */}
    <div className="flex flex-col items-center gap-6 text-center">
      <h2 className="font-Montserrat font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight text-[#252B42] w-full">
        Start your 14 days free trial
      </h2>
      <p className="font-Montserrat font-normal text-sm sm:text-base leading-6 text-[#737373] max-w-md">
        Met minim Mollie non desert Alamo est sit cliquey dolor 
        do met sent. RELIT official consequent.
      </p>
      <div className="bg-[#23A6F0] text-white font-Montserrat font-bold text-sm sm:text-base rounded-md px-10 py-4 cursor-pointer hover:bg-[#1c86c8]">
        Try it free now
      </div>
    </div>

    {/* Social Media Logos */}
    <div className="flex flex-row gap-8">
      {/* Twitter */}
      <div className="text-[#1DA1F2] text-xl sm:text-2xl">
        <FaTwitter />
      </div>

      {/* Facebook */}
      <div className="text-[#4267B2] text-xl sm:text-2xl">
        <FaFacebookSquare />
      </div>

      {/* Instagram */}
      <div className="text-[#C13584] text-xl sm:text-2xl">
        <FaInstagram />
      </div>

      {/* LinkedIn */}
      <div className="text-[#0077B5] text-xl sm:text-2xl">
        <FaLinkedin />
      </div>
    </div>
  </div>
</div>

    
    </div>
  );
}