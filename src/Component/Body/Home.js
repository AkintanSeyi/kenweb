import React, { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Home = () => {
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
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

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
        "f1t7cIqUi9wPyGJ3d",
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {showPopup && (
  <div className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center p-4">
    <div className="relative bg-white border-[5px] md:border-[8px] border-[#0f3b73] w-full max-w-[700px] px-8 py-10 sm:px-8 sm:py-10 md:px-10 md:py-12">

      {/* Close */}
      <button
        onClick={() => setShowPopup(false)}
        className="absolute top-3 right-4 md:top-4 md:right-5 text-gray-500 hover:text-black text-3xl md:text-4xl leading-none"
      >
        ×
      </button>

      {/* Logo */}
      <img
        src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1783950866/Untitled-7-247w_fy78r9.webp"
        alt=""
        className="w-44 sm:w-56 md:w-[290px] mx-auto mb-5 md:mb-6"
      />

      <p className="text-center uppercase tracking-[0.2em] md:tracking-[0.35em] text-[#d7192d] font-bold text-sm sm:text-base md:text-lg">
        EVERY DOLLAR SENDS A MESSAGE:
      </p>

      <h1 className="text-center uppercase font-black text-[#103b73] leading-none mt-3 text-[30px] sm:text-[36px] md:text-[40px]">
        WE WON'T BEND A KNEE
      </h1>

      <button
        onClick={() => {
          setShowPopup(false);
          navigate(
            "/winred/ken-paxton-for-senate/donate-today/653898598083884832845"
          );
        }}
        className="mt-8 md:mt-10 w-full border border-[#e31d2b] py-4 md:py-5 text-[#e31d2b] font-black text-lg md:text-xl uppercase hover:bg-[#e31d2b] hover:text-white transition"
      >
        DONATE →
      </button>

    </div>
  </div>
)}

      <div className="min-h-screen bg-white text-gray-900 font-sans">
        {/* Red Top Stripe */}
        <div className="bg-[#E31D2B]  hover:cursor-pointer text-white text-center py-4 text-xl md:text-3xl font-black font-archivo tracking-tighter uppercase shadow-md">
          Endorse Paxton. Join Paxton's Patriots! →
        </div>

        {/* Hero Section */}
        {/* Hero Section - Blue background with Image */}
        {/* <section className="relative w-full bg-[#0f2d5e] text-white pt-20 pb-40 overflow-hidden">
        
          <div
            className="absolute top-0 right-0 w-[70%] h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dvuq6vmiy/image/upload/v1783944467/IMG_9847_1_vmwzts.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f2d5e] via-[#0f2d5e]/90 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 space-y-6">
              <h3 className="font-bold tracking-[0.3em] uppercase opacity-90 text-xl">
                Ken Paxton
              </h3>
              <h1 className="text-7xl font-black leading-[0.9] uppercase  tracking-tighter">
                UNSHAKABLE.
                <br />
                UNBROKEN.
                <br />
                UNAFRAID.
              </h1>
              <p className="text-lg leading-relaxed opacity-90 font-medium">
                The Democrats have made Texas their top target, and they've
                nominated the most radical candidate in Texas history: James
                Talarico. This election will determine whether Texas remains the
                conservative stronghold that leads America or becomes another
                state controlled by the radical left.
              </p>
              <p className="font-black text-3xl uppercase border-[#E31D2B] ">
                KEN PAXTON IS LEADING THE FIGHT TO STOP HIM, BUT HE CAN'T DO IT
                ALONE.
              </p>
            </div>
            <div className="md:w-[40%]"></div>
          </div>
        </section> */}




<section className="bg-[#0f2d5e] overflow-hidden">

  {/* ================= MOBILE ================= */}
  <div className="block md:hidden">

    {/* Top Image */}
    <div className="relative h-[340px] overflow-hidden">
      <img
        src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1783944467/IMG_9847_1_vmwzts.jpg"
        alt=""
        className="w-full h-full object-cover object-top"
      />

      {/* Fade into blue */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f2d5e] to-transparent"></div>
    </div>

    {/* Content */}
    <div className="px-6 pt-2 pb-28 text-white">

      <h3 className="uppercase text-center text-[20px] tracking-[5px]  font-bold">
        Ken Paxton
      </h3>

      <h1 className="mt-4 text-[44px] text-center  leading-[0.88] font-black uppercase">
        UNSHAKABLE.
        <br />
        UNBROKEN.
        <br />
        UNAFRAID.
      </h1>

      <p className="mt-6 text-[15px] text-center  leading-7 opacity-95">
        The Democrats have made Texas their top target, and they've nominated
        the most radical candidate in Texas history: James Talarico. This
        election will determine whether Texas remains the conservative
        stronghold that leads America or becomes another state controlled by
        the radical left.
      </p>

      <p className="mt-7 text-[22px]  text-center leading-tight font-black uppercase">
        Ken Paxton is leading the fight to stop him, but he
        <br />
        can't do it alone.
      </p>

    </div>

  </div>

  {/* ================= DESKTOP ================= */}
  <div className="hidden md:block relative min-h-[760px]">

    <div className="absolute right-0 top-0 w-[58%] h-full">
      <img
        src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1783944467/IMG_9847_1_vmwzts.jpg"
        alt=""
        className="w-full h-full object-cover object-top"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0f2d5e] via-[#0f2d5e]/70 to-transparent"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-10 h-[760px] flex items-center">

      <div className="w-[48%] text-white">

        <h3 className="uppercase tracking-[7px] text-xl font-bold">
          Ken Paxton
        </h3>

        <h1 className="mt-6 text-7xl leading-[0.88] font-black uppercase">
          UNSHAKABLE.
          <br />
          UNBROKEN.
          <br />
          UNAFRAID.
        </h1>

        <p className="mt-8 text-lg leading-8">
          The Democrats have made Texas their top target, and they've nominated
          the most radical candidate in Texas history: James Talarico. This
          election will determine whether Texas remains the conservative
          stronghold that leads America or becomes another state controlled by
          the radical left.
        </p>

        <p className="mt-8 text-3xl font-black uppercase leading-tight">
          Ken Paxton is leading the fight to stop him,
          <br />
          but he can't do it alone.
        </p>

      </div>

    </div>

  </div>

</section>









        {/* Form Section - Placed outside the blue section so it sits on white */}
    <div className="relative z-20 max-w-6xl mx-auto bg-white text-[#0f2d5e]
    px-5 py-8
    sm:px-8 sm:py-10
    md:p-10
    -mt-10 md:-mt-24
    shadow-2xl border-t-4 border-[#0f2d5e]">

  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center uppercase tracking-tight leading-tight">
    JOIN PAXTON'S PATRIOTS TODAY!
  </h2>

  <p className="text-center text-[15px] sm:text-base md:text-lg mt-4 mb-8 max-w-3xl mx-auto leading-7">
    Sign up below for exclusive campaign updates, behind-the-scenes content
    from the campaign trail, early access to events, volunteer
    opportunities, and the tools you need to help us defeat James
    Talarico and keep Texas red.
  </p>

  {submittedSuccess ? (
    <div className="text-center py-10 md:py-16">

      <h2 className="text-2xl md:text-3xl font-black uppercase">
        THANK YOU, PATRIOT. WELCOME TO THE FIGHT.
      </h2>

      <p className="mt-8 text-lg md:text-xl">
        We'll be in touch with ways you can stay in the fight.
      </p>

      <p className="text-lg md:text-xl">
        Let's shake up Washington — together.
      </p>

      <p className="mt-10 text-lg md:text-xl">
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
        <label className="block text-[11px] md:text-[12px] font-black uppercase mb-1 tracking-widest">
          Name
        </label>

        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className={`${inputClass(formData.name)} w-full`}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-[11px] md:text-[12px] font-black uppercase mb-1 tracking-widest">
          Email
        </label>

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className={`${inputClass(formData.email)} w-full`}
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-[11px] md:text-[12px] font-black uppercase mb-1 tracking-widest">
          Phone
        </label>

        <input
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
          className={`${inputClass(formData.phone)} w-full`}
        />
      </div>

      {/* Zip */}
      <div>
        <label className="block text-[11px] md:text-[12px] font-black uppercase mb-1 tracking-widest">
          Zip
        </label>

        <input
          name="zip"
          type="text"
          value={formData.zip}
          onChange={(e) =>
            setFormData({ ...formData, zip: e.target.value })
          }
          className={`${inputClass(formData.zip)} w-full`}
        />
      </div>

      <div className="col-span-full text-[11px] md:text-[12px] leading-6 text-gray-500">
        <input type="checkbox" className="mr-2 align-middle" />
        By entering your phone number and selecting the checkbox, you agree
        to the{" "}
        <a
          href="https://tandcs.us/kptx/"
          className="text-red-700 underline"
        >
          terms & privacy policy
        </a>{" "}
        for recurring autodialed campaign and donation messages from Ken
        Paxton to the phone number you provide. No consent required to buy.
        Text STOP to end. Msg & data rates may apply.
      </div>

      <button
        disabled={isSending}
        type="submit"
        className="col-span-full w-full md:w-auto md:mx-auto
          bg-[#E31D2B] text-white
          py-4 px-8
          font-black
          text-base md:text-lg
          uppercase tracking-widest
          hover:bg-red-800
          transition"
      >
        {isSending ? "SENDING..." : "GET IN THE FIGHT →"}
      </button>

    </form>
  )}
</div>

        {/* About Section */}
      <section className="flex flex-col md:flex-row bg-[#E31D2B] text-white">
  {/* Image */}
  <div className="w-full md:w-[38%] h-[320px] sm:h-[420px] md:h-auto overflow-hidden">
    <img
      src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1783947583/Fighter_KP-754d5d9e-1920w_cqrp8u.webp"
      alt="Ken"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content */}
  <div className="w-full md:w-[62%] px-6 py-10 sm:px-8 sm:py-12 md:p-16 flex flex-col justify-center">
    <h3 className="text-[13px]  font-bold uppercase tracking-widest mb-4">
      About Ken
    </h3>

    <p className="mb-8   leading-relaxed text-[16px] md:text-base">
      Ken Paxton is a fearless conservative, a battle-tested Attorney
      General, and a relentless defender of Texas values. He's taken on
      Biden's overreach, fought for election integrity, and never bent a
      knee — even as the establishment came after him time and time
      again. Now, he's bringing that same Texas toughness to the U.S.
      Senate.
    </p>

    <button
      onClick={() => navigate("/about")}
      className="border-2 border-white px-8 py-3 w-full sm:w-fit font-bold hover:bg-white hover:text-[#E31D2B] transition"
    >
      LEARN MORE →
    </button>
  </div>
</section>
        {/* Donation Section */}
       <section className="py-14 md:py-20 text-center px-5 sm:px-8 md:px-6">
  {/* Heading */}
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f2d5e] mb-4 uppercase tracking-tight leading-tight">
    EVERY DOLLAR SENDS A MESSAGE:
    <br className="md:hidden" />
    <span className="text-[#E31D2B]"> WE WON'T BEND A KNEE.</span>
  </h2>

  {/* Subtext */}
  <p className="mb-10 text-gray-700 font-medium max-w-2xl mx-auto text-[16px] leading-7">
    Stand with Ken. He's taken the hits and kept fighting — now it's our
    turn to strike back at the Swamp.
  </p>

  {/* Donation Buttons */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap justify-center gap-4 md:gap-6 lg:gap-9 max-w-5xl mx-auto">
    {["GIVE $25", "GIVE $50", "GIVE $100", "CUSTOM AMOUNT"].map((text) => (
      <button
        key={text}
        onClick={() =>
          navigate(
            "/winred/ken-paxton-for-senate/donate-today/653898598083884832845"
          )
        }
        className="border border-[#E31D2B] text-[#E31D2B] w-full sm:w-auto px-10 md:px-16 py-4 font-black hover:bg-[#E31D2B] hover:text-white transition duration-200 uppercase tracking-widest text-sm"
      >
        {text}
      </button>
    ))}
  </div>
</section>

        {/* Footer Section */}
      <section className="bg-[#E31D2B] flex justify-center">
  <img
    src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1783949432/339813784_152047611130134_2730394229275614479_n-e1711469371805-80bde372-00843c79-1920w_ycs2go.webp"
    alt=""
    className="block w-full max-w-2xl h-auto object-cover"
  />
</section>

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
    </>
  );
};

export default Home;
