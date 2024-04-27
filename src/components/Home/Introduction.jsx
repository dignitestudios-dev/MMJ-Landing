import React from "react";
import { IntrodctionImage } from "../../assets/export";

const Introduction = () => {
  return (
    <div className="px-4 lg:px-24 py-6 pt-8 lg:pt-28 w-full" id="introduction">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-y-6 justify-start items-start">
        <div className="col-span-5 flex justify-center items-center order-2 lg:order-1">
          <img src={IntrodctionImage} alt="" className="xl:h-[604px] xl:w-[299px]" />
        </div>
        <div className="col-span-7 flex flex-col justify-start gap-y-6 order-1 lg:order-2 xl:px-4">
          <h2 className="text-[32px] font-semibold">Introduction</h2>
          <div className="flex flex-col gap-y-6">
            <p className="text-sm font-normal leading-[21px]">
              Imagine walking into your doctor's office armed with a detailed
              report of your health trends, symptoms, and progress over time.
              With "My Medical Journal," this is not just a dream – Enter My
              Medical Journal, your personal health companion and diary,
              revolutionizing the way you manage your well-being
            </p>
            <p>
              In today's bustling world, staying on top of your health can often
              be challenging. That's why we've designed an app that not only
              simplifies health tracking but also empowers you to make informed
              decisions about your wellness journey. <br />
              My Medical Journal is more than just a health diary – it's a
              comprehensive tool that allows you to record, monitor, and analyze
              your health with ease. Whether it's a routine check-in, symptom
              tracking, or simply noting how you're feeling, our app provides a
              user-friendly platform for all your health-related needs. <br />
              But what truly sets "My Medical Journal" apart is its versatility
              and advanced features. In addition to logging your health
              check-ins and engaging with interactive questionnaires, our app
              allows you to generate PDF files of your entries. This feature
              enables you to compile detailed insights from your health logs,
              providing you with a comprehensive overview that you can easily
              share with your healthcare provider.
            </p>
            <p>
              Whether you're managing a chronic condition, striving for fitness
              goals, or simply prioritizing your overall well-being, "My Medical
              Journal" puts the power of health management in your hands.
              Download today on the App Store and Google Play Store to start
              your journey towards better health. Let "My Medical Journal" be
              your trusted companion every step of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
