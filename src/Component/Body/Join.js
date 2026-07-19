import React, { useState, useRef } from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zip: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!Object.values(formData).every((val) => val.trim() !== "")) {
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        "service_q3o9kfi",
        "template_6s4rywh",
        form.current,
        "r74i8ubdddP5m4F_P",
      )
      .then(() => {
        setSubmittedSuccess(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          zip: "",
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const inputClass = (value) =>
    `w-full border p-3 outline-none transition ${
      submitted && value.trim() === ""
        ? "border-red-600 ring-1 ring-red-600"
        : "border-gray-300 focus:border-[#0f2d5e] focus:ring-1 focus:ring-[#0f2d5e]"
    }`;

  return (
    <div className="bg-white font-sans text-blue-900">
      {/* Hero Banner */}
   {/* ================= MOBILE ================= */}
<div className="block md:hidden">
  {/* Image */}
  <div className="h-[320px] overflow-hidden">
    <img
      src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1784027259/endorse-banner2-2880w_yoeywb.webp"
      alt=""
      className="w-full h-full object-cover object-center"
    />
  </div>

  {/* Red Text Box */}
  <div className="bg-[#E31D2B] text-white px-6 py-10 text-center">
    <h1 className="text-[36px] leading-[0.9] font-black uppercase">
      JOIN  PAXTON'S
      <br />
      PATRIOTS!
    </h1>

    <p className="mt-4 text-[18px] font-bold uppercase leading-tight">
      Real Conservatives. Real Texans.
      <br />
      Ready to fight.
    </p>
  </div>
</div>

{/* ================= DESKTOP ================= */}
<header className="hidden md:flex relative w-full h-[90vh] flex-col justify-center px-8 md:px-20 lg:px-28">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage:
        "url('https://res.cloudinary.com/dvuq6vmiy/image/upload/v1784027259/endorse-banner2-2880w_yoeywb.webp')",
    }}
  />

  {/* Content */}
  <div className="relative z-10 text-white mt-auto mb-20">
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9]">
      JOIN
      <br />
      PAXTON'S
      <br />
      PATRIOTS!
    </h1>

    <p className="text-xl md:text-2xl font-bold tracking-widest uppercase mt-3">
      Real Conservatives. Real Texans.
      <br />
      Ready to fight.
    </p>
  </div>
</header>

      {/* Join Section */}
   <div className="z-20 max-w-6xl mx-auto bg-white text-[#0f2d5e] px-5 py-10 md:p-10">

  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4 uppercase tracking-tight text-[#0f2d5e] leading-tight">
    JOIN PAXTON'S PATRIOTS TODAY!
  </h2>

  <p className="text-center text-base md:text-lg mb-5 max-w-3xl mx-auto leading-relaxed">
    Join Paxton’s Patriots to stand shoulder to shoulder with grassroots
    Texans who are ready to defend the Constitution, secure our border,
    and take a sledgehammer to the establishment.
  </p>

  <p className="text-center text-base md:text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
    Sign up below for exclusive campaign updates, behind-the-scenes
    content from the campaign trail, early access to events, volunteer
    opportunities, and the tools you need to help us defeat James Talarico
    and keep Texas red.
  </p>

  {submittedSuccess ? (
    <div className="text-center py-10 md:py-16">
      <h2 className="text-lg md:text-xl font-black uppercase text-[#0f2d5e]">
        THANK YOU, PATRIOT. WELCOME TO THE FIGHT.
      </h2>

      <p className="mt-8 text-base md:text-xl text-[#0f2d5e]">
        We'll be in touch with ways you can stay in the fight.
      </p>

      <p className="text-base md:text-xl text-[#0f2d5e]">
        Let's shake up Washington — together.
      </p>

      <p className="mt-10 text-base md:text-xl text-[#0f2d5e]">
        — Team Paxton
      </p>
    </div>
  ) : (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
    >

      {/* Name */}
      <div>
        <label className="block text-[12px] font-black uppercase mb-1 tracking-widest text-[#0f2d5e]/80">
          Name
        </label>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className={inputClass(formData.name)}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-[12px] font-black uppercase mb-1 tracking-widest text-[#0f2d5e]/80">
          Email
        </label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className={inputClass(formData.email)}
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-[12px] font-black uppercase mb-1 tracking-widest text-[#0f2d5e]/80">
          Phone
        </label>
        <input
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
          className={inputClass(formData.phone)}
        />
      </div>

      {/* Zip */}
      <div>
        <label className="block text-[12px] font-black uppercase mb-1 tracking-widest text-[#0f2d5e]/80">
          Zip
        </label>
        <input
          name="zip"
          type="text"
          value={formData.zip}
          onChange={(e) =>
            setFormData({ ...formData, zip: e.target.value })
          }
          className={inputClass(formData.zip)}
        />
      </div>

      <div className="col-span-full text-[11px] md:text-[12px] text-gray-500 leading-relaxed">
        <input type="checkbox" className="mr-2" />
        By entering your phone number and selecting the checkbox, you
        agree to the{" "}
        <span className="text-red-700 underline">
          <a href="https://tandcs.us/kptx/">
            terms & privacy policy
          </a>
        </span>{" "}
        for recurring autodialed campaign and donation messages from Ken
        Paxton to the phone number you provide. No consent required to
        buy. Text STOP to end. Msg&data rates may apply. Reply HELP for
        help. Message frequency may vary. Text Messaging Opt-In Data: We
        will not share or sell your text messaging opt-in data, consent,
        or related personal information with any third parties, unless
        required by law.
      </div>

      <button
        disabled={isSending}
        type="submit"
        className="col-span-full w-full md:w-auto md:mx-auto px-7 py-4 bg-[#E31D2B] text-white font-black text-base md:text-lg uppercase tracking-widest hover:bg-red-800 transition"
      >
        {isSending ? "SENDING..." : "GET IN THE FIGHT →"}
      </button>

    </form>
  )}
</div>

      {/* Footer CTA */}
      {/* Footer Social CTA Section */}
      <div className="bg-[#E31D2B] py-10 md:py-14 px-5 md:px-6 text-center text-white">
  <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase leading-tight tracking-tight max-w-4xl mx-auto mb-8">
    LET YOUR FRIENDS KNOW YOU'RE WITH THE ONLY REAL CONSERVATIVE IN THE RACE.
  </h3>

  <div className="flex justify-center items-center gap-5 md:gap-6">
    {/* Facebook */}
    <a
      href="https://www.facebook.com/kenpaxtontx"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition"
    >
      <FaFacebookF className="text-xl md:text-2xl" />
    </a>

    {/* X */}
    <a
      href="https://x.com/kenpaxtontx"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition"
    >
      <FaXTwitter className="text-xl md:text-2xl" />
    </a>

    {/* YouTube */}
    <a
      href="https://www.youtube.com/@kenpaxtontx"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition"
    >
      <FaYoutube className="text-xl md:text-2xl" />
    </a>
  </div>
</div>
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

export default Join;
