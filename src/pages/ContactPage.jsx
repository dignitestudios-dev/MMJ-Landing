import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";

const ContactPage = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    setData((values) => ({ ...values, [name]: value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("contact form >> ", data);

    if (!data.name || !data.phone || !data.email || !data.message) {
      alert("Please fill all the fields");
    } else {
      const response = await fetch(
        "https://backend.mymedicaljournal.app/api/enduser/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const res = await response.json();
      console.log("res >> ", res);

      setData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <div
      className="w-full py-6 px-4 min-h-screen flex items-center justify-center"
      id="contact"
    >
      <div className="mx-auto w-full md:w-[80%] xl:w-[70%] grid grid-cols-12 h-auto md:h-[653px]">
        {/* left side */}
        <div className="col-span-12 lg:col-span-6 b-black h-full bg-black rounded-t-[22px] md:rounded-t-[0px] lg:rounded-s-[22px] px-8 lg:px-12 flex flex-col gap-y-10 py-8 md:pt-14">
          <div className="flex flex-col gap-y-6">
            <h2 className="text-white font-medium text-[32px] leading-[35px]">
              Let’s Connect and <br /> Create Together!
            </h2>
            <p className="text-sm font-normal text-white leading-[21px]">
              Feel free to contact us and we will get back to you as soon as
              possible. Fill this form or contact us directly.
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-base font-medium text-white leading-[24px]">
              Our Office
            </p>
            <div className="flex items-center gap-x-2">
              <MdLocationOn className="text-white w-5 h-5" />
              <span className="text-[#C6C6C6] text-sm font-normal leading-[21px]">
                4650 Amber Valley Pky, Suite 2 Fargo, ND 58104
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-base font-medium text-white">Email</p>
            <div className="flex items-center gap-x-2">
              <IoMail className="text-white w-5 h-5" />
              <span className="text-[#C6C6C6] text-sm font-normal leading-[21px]">
                medjournal21@yahoo.com
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-base font-medium text-white">Phone</p>
            <div className="flex items-center gap-x-2">
              <BiSolidPhoneCall className="text-white w-5 h-5" />
              <span className="text-[#C6C6C6] text-sm font-normal leading-[21px]">
                701-405-2025
              </span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="col-span-12 lg:col-span-6 bg-[#eaebeb] h-full rounded-b-[22px] md:rounded-b-[0px] lg:rounded-r-[22px] flex flex-col justify-center items-start gap-y-8 px-8 lg:px-14 py-6 md:py-0">
          <h2 className="text-black text-[32px] font-semibold leading-[48px]">
            Closer Than a Click Away
          </h2>
          <form
            onSubmit={handleOnSubmit}
            className="w-full flex flex-col justify-center items-start gap-y-4"
          >
            <div className="w-full">
              <label htmlFor="name" className="text-sm font-normal">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={data.name}
                onChange={handleOnChange}
                className="w-full border-0 border-b border-[#D1D1D1] bg-transparent py-2 text-sm text-[#848484] outline-none font-normal"
                placeholder="e.g John"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="text-md font-normal">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={handleOnChange}
                className="w-full border-0 border-b border-[#D1D1D1] bg-transparent py-2 text-sm text-[#848484] outline-none font-normal"
                placeholder="e.g John@gmail.com"
              />
            </div>
            <div className="w-full">
              <label htmlFor="phone" className="text-md font-normal">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={data.phone}
                onChange={handleOnChange}
                className="w-full border-0 border-b border-[#D1D1D1] bg-transparent py-2 text-sm text-[#848484] outline-none font-normal"
                placeholder="e.g 0491 570 156"
              />
            </div>
            <div className="w-full">
              <label htmlFor="message" className="text-md font-normal">
                Message
              </label>
              <input
                type="text"
                id="message"
                name="message"
                value={data.message}
                onChange={handleOnChange}
                className="w-full border-0 border-b border-[#D1D1D1] bg-transparent py-2 text-sm text-[#848484] outline-none font-normal"
                placeholder="Enter your message here"
              />
            </div>
            <div className="pt-3">
              <button
                type="submit"
                className="w-[170px] h-[60px] text-white bg-black text-base font-medium rounded-full leading-[24px]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
