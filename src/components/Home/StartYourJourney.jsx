import React from "react";
import {
  AppStore,
  GooglePlay,
  StartYourJourneyImage,
} from "../../assets/export";
import { Link } from "react-router-dom";

const StartYourJourney = () => {
  return ( 
    <div className="w-full py-6 md:py-20 px-4 lg:px-16">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-y-0">
        <div className="col-span-12 lg:col-span-6 flex flex-col items-start justify-center gap-y-4 xl:ps-24 text-justify order-2 lg:order-1">
          <h2 className="text-[32px] font-semibold leading-[48px]">
            Start Your Journey Today
          </h2>
          <p className={`font-normal text-[#6F6F6F] text-lg leading-[27px]`}>
            Unlock a world of convenience with our app! Seamlessly schedule
            appointments, receive personalized health insights, and stay
            connected with our latest offerings—all from the palm of your hand.
            Download now to embark on your journey towards better health.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <Link to="/">
              <img src={GooglePlay} alt="" className="" />
            </Link>
            <Link to="https://apps.apple.com/us/app/my-medical-journal-app/id6502008545" target="_blank">
              <img src={AppStore} alt="" className="" />
            </Link>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 flex justify-center items-center order-1 lg:order-2">
          <img src={StartYourJourneyImage} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default StartYourJourney;
