import React, { useEffect } from "react";
import { gsap, Linear } from "gsap";

const NotFoundPage = () => {
  useEffect(() => {
    let t1 = gsap.timeline();
    let t2 = gsap.timeline();
    let t3 = gsap.timeline();

    t1.to(".cog1", {
      transformOrigin: "50% 50%",
      rotation: "+=360",
      repeat: -1,
      ease: Linear.easeNone,
      duration: 8,
    });

    t2.to(".cog2", {
      transformOrigin: "50% 50%",
      rotation: "-=360",
      repeat: -1,
      ease: Linear.easeNone,
      duration: 8,
    });

    t3.fromTo(
      ".wrong-para",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        stagger: { repeat: -1, yoyo: true },
      }
    );
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-[20vmin] text-[#142833]">4</h1>
        <div className="relative scale-50 flex">
          <div className="cog1 w-[20vmin] h-[20vmin] rounded-full border-[3vmin] border-[#f3c623] relative">
            <div className="top w-[5vmin] h-[5vmin] bg-[#f3c623] absolute top-[-7vmin] left-[4.5vmin]"></div>
            <div className="down w-[5vmin] h-[5vmin] bg-[#f3c623] absolute bottom-[-7vmin] left-[4.5vmin]"></div>
            <div className="left w-[5vmin] h-[5vmin] bg-[#f3c623] absolute left-[-7vmin] top-[4.5vmin]"></div>
            <div className="right w-[5vmin] h-[5vmin] bg-[#f3c623] absolute right-[-7vmin] top-[4.5vmin]"></div>
            <div className="left-top w-[5vmin] h-[5vmin] bg-[#f3c623] absolute left-[-4vmin] top-[-4vmin] rotate-[-45deg]"></div>
            <div className="left-down w-[5vmin] h-[5vmin] bg-[#f3c623] absolute left-[-4vmin] top-[12.5vmin] rotate-[45deg]"></div>
            <div className="right-top w-[5vmin] h-[5vmin] bg-[#f3c623] absolute right-[-4vmin] top-[-4vmin] rotate-[45deg]"></div>
            <div className="right-down w-[5vmin] h-[5vmin] bg-[#f3c623] absolute right-[-4vmin] top-[12.5vmin] rotate-[-45deg]"></div>
          </div>
          <div className="cog2 w-[20vmin] h-[20vmin] rounded-full border-[3vmin] border-[#4f8a8b] relative -ml-[10vmin]">
            <div className="top w-[5vmin] h-[5vmin] bg-[#4f8a8b] absolute top-[-7vmin] left-[4.5vmin]"></div>
            <div className="down w-[5vmin] h-[5vmin] bg-[#4f8a8b] absolute bottom-[-7vmin] left-[4.5vmin]"></div>
            <div className="left w-[5vmin] h-[5vmin] bg-[#4f8a8b] absolute left-[-7vmin] top-[4.5vmin]"></div>
            <div className="right w-[5vmin] h-[5vmin] bg-[#4f8a8b] absolute right-[-7vmin] top-[4.5vmin]"></div>
            <div className="left-top w-[5vmin] h-[5vmin] bg-[#4f8a8b] absolute left-[-4vmin] top-[-4vmin] rotate-[-45deg]"></div>
            <div className="left-down w-[5vmin] h-[5vmin] bg-[#4f8a8b] absolute left-[-4vmin] top-[12.5vmin] rotate-[45deg]"></div>
            <div className="right-top w-[5vmin] h-[5vmin] bg-[#4f8a8b] absolute right-[-4vmin] top-[-4vmin] rotate-[45deg]"></div>
            <div className="right-down w-[5vmin] h-[5vmin] bg-[#4f8a8b] absolute right-[-4vmin] top-[12.5vmin] rotate-[-45deg]"></div>
          </div>
        </div>
        <h1 className="text-[20vmin] text-[#142833] z-[-1]">4</h1>
        <p className="wrong-para font-[Montserrat] mt-4 p-[1vmin] text-[#092532] font-semibold text-sm">
          Uh Oh! Page not found!
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
