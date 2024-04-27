import React from "react";
import { styles } from "../../styles/styles";
import { AppStore, GooglePlay, HeroImage } from "../../assets/export";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={`px-4 md:px-8 h-auto `} id="home">
      <div className="w-full rounded-[4rem] lg:h-[603px] grid grid-cols-1 md:grid-cols-12 gap-y-0 hero-bg">
        <div className="col-span-12 lg:col-span-6 flex flex-col items-start justify-evenly gap-y-6 px-6 py-8 md:px-16">
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
          <div className="flex flex-col gap-1">
            <p className={`text-white font-bold text-4xl`}>
              Launching Soon!
            </p>
            {/* <p className={`${styles.secondaryText} font-normal text-sm`}>The app is under development.</p> */}
          </div>
          <div className="flex items-center justify-start gap-x-0 md:gap-x-4">
            <Link to="/">
              <img src={GooglePlay} alt="" className="" />
            </Link>
            <Link to="/">
              <img src={AppStore} alt="" className="" />
            </Link>
          </div>
          
          {/* <div className="flex items-center gap-x-6 md:gap-x-16 md:ps-2">
            <div>
              <p className="text-white text-3xl font-bold">4.8</p>
              <p className={`text-base font-normal ${styles.secondaryText}`}>
                Rating in Appstore
              </p>
            </div>
            <div>
              <p className="text-white text-[30px] font-bold">500K+</p>
              <p className={`text-base font-normal ${styles.secondaryText}`}>
                Active users
              </p>
            </div>
          </div> */}
        </div>
        <div className="col-span-12 lg:col-span-6 flex justify-center items-end md:bg-transparent">
          <img src={HeroImage} alt="" className="2xl:h-[96%]"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
