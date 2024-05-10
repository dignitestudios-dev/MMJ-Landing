import React from "react";
import { styles } from "../../styles/styles";
import { AppStore, GooglePlay, HeroImage } from "../../assets/export";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={`px-4 md:px-8 h-auto `} id="home">
      <div className="w-full rounded-[4rem] lg:h-[603px] grid grid-cols-1 md:grid-cols-12 gap-y-0 hero-bg">
        <div className="col-span-12 lg:col-span-6 flex flex-col items-start justify-center gap-y-7 md:gap-y-14 px-8 py-8 md:px-16">
          <div className="flex flex-col gap-y-6">
            <h1 className="text-[35px] md:text-[55px] font-normal text-white leading-[40px] md:leading-[58px]">
              <span className={`${styles.greenText} font-bold`}>Discover</span>{" "}
              Your <br />
              Health Journey with <br />
              <span className={`${styles.greenText} font-bold`}>
                My Medical Journal
              </span>
            </h1>
            <p className={`${styles.secondaryText} font-normal text-sm`}>
              Empower Yourself with Personalized Symptom Tracking and Insightful
              Data Analysis
            </p>
          </div>
          <div className="flex items-center justify-start gap-x-2 md:gap-x-6">
            <Link to="https://play.google.com/store/apps/details?id=com.dignitestudios.mymedicaljournal" target="_blank">
              <img src={GooglePlay} alt="" className="h-16 lg:h-14" />
            </Link>
            <Link to="https://apps.apple.com/us/app/my-medical-journal-app/id6502008545" target="_blank">
              <img src={AppStore} alt="" className="h-16 lg:h-14" />
            </Link>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 flex justify-center items-end md:bg-transparent">
          <img src={HeroImage} alt="" className="2xl:h-[96%]"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
