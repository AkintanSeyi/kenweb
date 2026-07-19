import React from 'react';
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Meetkenpaxton = () => {
  return (
    <div className="bg-white font-sans text-blue-900">
      {/* Header Banner - kept as is per previous instruction */}
      {/* ================= MOBILE ================= */}
<div className="block md:hidden">
  {/* Image */}
  <div className="h-[320px] overflow-hidden">
    <img
      src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1784026012/Meet_me_Banner-2880w_dp9m7e.webp"
      alt=""
      className="w-full h-full object-cover object-right"
    />
  </div>

  {/* Red Text Box */}
  <div className="bg-[#E31D2B] text-white px-6 py-10 text-center">
    <h1 className="text-[36px] leading-[0.9] font-black uppercase">
      BUILT FOR THIS
      <br />
      FIGHT
    </h1>
  </div>
</div>

{/* ================= DESKTOP ================= */}
<header className="hidden md:flex relative w-full h-[90vh] flex-col justify-center px-8 md:px-20 lg:px-26">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage:
        "url('https://res.cloudinary.com/dvuq6vmiy/image/upload/v1784026012/Meet_me_Banner-2880w_dp9m7e.webp')",
    }}
  />

  {/* Content */}
  <div className="relative z-10 text-white mt-auto mb-20">
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9]">
      BUILT FOR
      <br />
      THIS FIGHT
    </h1>
  </div>
</header>

      <main className="max-w-8xl mx-auto py-16 px-8">
        
        {/* Section 1: Text (65%) | Image (35%) */}
        <div className="grid md:grid-cols-[1fr,.7fr] gap-12 items-start mb-20">
          <p className="text-gray-800 leading-relaxed text-lg">
            Ken Paxton is a fearless conservative, a relentless fighter, and a true defender of Texas values. 
            He’s never bent a knee — not against the Biden administration, not against corporate overreach, 
            and certainly not against the corrupt political establishment that’s tried to silence him time 
            and time again.
            <br /><br />
            As Texas’ 51st Attorney General, Ken Paxton has been on the front lines of the most important 
            legal fights in the country. He’s sued the Biden administration over 100 times, standing up 
            against open borders policies, government overreach, attacks on the Second Amendment, and the 
            far-left’s radical agenda. His legal victories were so significant that even CNN had to admit 
            defeat, calling Texas “a legal graveyard for Biden policies.”
          </p>
          <img 
            src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1784025180/KP_2-2880w_qcaza7.webp" 
            alt="Ken Paxton Signing" 
            className="w-full rounded shadow-lg" 
          />
        </div>





        {/* Section 2: Image (35%) | Text (65%) */}
        {/* <div className="grid md:grid-cols-[0.5fr,1fr] gap-12 items-start">
          <img 
            src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1784021397/25nat-paxton-impeachment-pfcm-mediumSquareAt3X-2880w_tk5fqm.webp" 
            alt="Ken Paxton Speaking" 
            className="w-full rounded shadow-lg" 
          />
          <p className="text-gray-800  leading-relaxed text-lg">
            During the Obama years, he led the charge to defend Texas’ state sovereignty and religious 
            liberties from federal overreach. Before becoming Attorney General, Paxton served in the 
            Texas House and Senate, where he was consistently ranked among the most conservative lawmakers.
            <br /><br />
            The son of an Air veteran, Ken is a proud product of American grit and determination. 
            He earned his B.A. and M.B.A. from Baylor University, where he served as student body 
            president, and later received his law degree from the University of Virginia School of Law.
            <br /><br />
            From the courtroom to the Capitol, Ken Paxton has never stopped fighting for Texas — 
            and he’s just getting started.
          </p>
        </div>
 */}
 <div className="grid md:grid-cols-[0.5fr,1fr] gap-12 items-start">
  {/* Text first on mobile, second on desktop */}
  <p className="order-1 md:order-2 text-gray-800 leading-relaxed text-lg">
    During the Obama years, he led the charge to defend Texas’ state sovereignty and religious
    liberties from federal overreach. Before becoming Attorney General, Paxton served in the
    Texas House and Senate, where he was consistently ranked among the most conservative lawmakers.
    <br /><br />
    The son of an Air veteran, Ken is a proud product of American grit and determination.
    He earned his B.A. and M.B.A. from Baylor University, where he served as student body
    president, and later received his law degree from the University of Virginia School of Law.
    <br /><br />
    From the courtroom to the Capitol, Ken Paxton has never stopped fighting for Texas —
    and he’s just getting started.
  </p>

  {/* Image second on mobile, first on desktop */}
  <img
    src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1784021397/25nat-paxton-impeachment-pfcm-mediumSquareAt3X-2880w_tk5fqm.webp"
    alt="Ken Paxton Speaking"
    className="order-2 md:order-1 w-full rounded shadow-lg"
  />
</div>






      </main>
      <footer className="bg-[#0f2d5e] text-white py-10 md:py-12 px-6 border-[#E31D2B]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
      
          {/* Logo */}
          <div className="flex-1 flex justify-center md:justify-start">
            <img
              src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1783954823/White_logo-250w_a9qjlk.webp"
              alt="Paxton U.S. Senate Logo"
              className="w-44 md:w-52 h-auto"
            />
          </div>
      
          {/* Address */}
          <div className="flex-1 text-center text-[11px] md:text-[12px] uppercase tracking-[2px] md:tracking-widest space-y-4 opacity-90">
            <p className="leading-6">
              110 N Akard Street, PMB# 40,<br className="md:hidden" />
              Dallas, Texas 75201
            </p>
      
            <div className="border border-white inline-block px-4 py-2">
              <p className="font-bold text-[11px] md:text-[12px]">
                Paid for by Ken Paxton For Senate
              </p>
            </div>
          </div>
      
          {/* Social */}
          <div className="flex-1 flex flex-col items-center md:items-end gap-5">
            <div className="flex gap-5 text-2xl">
              <a
                href="https://www.facebook.com/kenpaxtontx"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaFacebookF />
              </a>
      
              <a
                href="https://x.com/kenpaxtontx"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
              >
                <FaXTwitter />
              </a>
      
              <a
                href="https://www.youtube.com/@kenpaxtontx"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition"
              >
                <FaYoutube />
              </a>
            </div>
      
            <p className="text-[10px] md:text-[11px] text-center md:text-right uppercase font-bold tracking-wider break-all md:break-normal">
              MEDIA CONTACT:
              <br className="md:hidden" />
              ElectKenPaxton@gmail.com
            </p>
      
            <p className="text-[10px] uppercase tracking-wider opacity-80 text-center md:text-right">
              <a
                href="https://tandcs.us/kptx/"
                className="underline hover:opacity-100"
              >
                Privacy Policy / Terms of Use
              </a>
            </p>
          </div>
      
        </div>
      </footer>
    </div>
  );
};

export default Meetkenpaxton;