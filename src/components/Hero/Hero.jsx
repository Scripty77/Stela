import React from "react";
import PersonajeAstronauta from "../../assets/Personaje.png";
import { motion } from "framer-motion";
import { slideUp, slideInFromSide } from "../../utility/animation";

function Hero() {
  return (
    <div className="flex flex-col justify-start items-center min-h-[80vh] px-7">
      {/* Texto superior */}
      <motion.h2
        variants={slideUp(0.5)}
        initial="initial"
        animate="animate"
        className="text-white mb-10 mt-6 text-center max-w-2xl text-2xl"
      >
        Bienvenido a STELAR, la plataforma descentralizada diseñada
        para hacer tus intercambios de criptoactivos más sencillos que nunca.
      </motion.h2>
      {/* Card e imagen */}
      <div className="flex justify-center items-center gap-20 w-full mt-2">
        {/* Card */}
        <div className="flex flex-col rounded-xl bg-white/90 p-12 shadow-xl w-full max-w-xl transition-all duration-300">
          {/* Primer div: USDC */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center">
              {/* Icono USDC */}
              <div className="w-16 h-16 rounded-full flex items-center justify-center mr-6">
                <i className="bi bi-currency-dollar text-5xl text-blue-500"></i>
              </div>
              <div>
                <div className="text-4xl font-semibold text-gray-700">400</div>
                <div className="text-gray-500 text-lg">USDT</div>
              </div>
            </div>
            <div className="text-blue-500 text-lg font-medium">
              Balance: 600
            </div>
          </div>
          {/* Flecha */}
          <div className="flex justify-center mb-10">
            <div className="bg-blue-200 rounded-md p-4">
              <i className="bi bi-arrow-down text-black-700 text-3xl"></i>
            </div>
          </div>
          {/* Segundo div: VELO */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Icono VELO */}
              <div className="w-16 h-16 rounded-full flex items-center justify-center mr-6">
                <i className="bi bi-currency-bitcoin text-5xl text-blue-500"></i>
              </div>
              <div>
                <div className="text-4xl font-semibold text-gray-700">
                  0.0036
                </div>
                <div className="text-gray-500 text-lg">BTC</div>
              </div>
            </div>
            <div className="text-blue-500 text-lg font-medium">
              Balance: 0
            </div>
          </div>
        </div>
        {/* Imagen */}
        <div className="hidden md:flex justify-center items-center">
          <motion.div
            variants={slideInFromSide("right", 0.5)}
            initial="initial"
            animate="animate"
            className="p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36"
          >
            <img
              src={PersonajeAstronauta}
              alt="astronauta"
              className="max-h-220 w-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
      {/* Texto al final */}
      <p className="text-white mt-2">
        Created by Raiku.Dev
      </p>
    </div>
  );
}

export default Hero;
