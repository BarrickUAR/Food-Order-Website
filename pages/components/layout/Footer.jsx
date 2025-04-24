import React from "react";
import Title from "../ui/Title";

const Footer = () => {
  return (
    <div class="bg-secondary text-white">
      <div class="container mx-auto pt-16 pb-6">
        <div class="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6">
          <div class="md:flex-1">
            <h2 class="text-[30px]">Contact Us</h2>
            <div class="flex flex-col gap-y-2 mt-3 ">
              <a href="#">
                <i class="fa fa-map-marker"></i>
                <span class="inline-block ml-2">Location</span>
              </a>
              <a href="tel:+900000000000">
                <i class="fa fa-phone"></i>
                <span class="inline-block ml-2">Call +90 000 000 00 00</span>
              </a>
              <a href="mailto:demo@gmail.com">
                <i class="fa fa-envelope"></i>
                <span class="inline-block ml-2">demo@gmail.com</span>
              </a>
            </div>
          </div>

          <div class="md:flex-1">
            <h2 class="text-[38px]">Feane</h2>
            <p class="mt-3">Short description about the website or company.</p>
            <div class="flex items-center justify-center mt-5 gap-x-2">
              <a
                href="#"
                class="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:text-white hover:bg-primary transition-all"
              >
                <i class="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                class="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:text-white hover:bg-primary transition-all"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                class="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:text-white hover:bg-primary transition-all"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                class="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:text-white hover:bg-primary transition-all"
              >
                <i class="fab fa-discord"></i>
              </a>
              <a
                href="#"
                class="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:text-white hover:bg-primary transition-all"
              >
                <i class="fab fa-behance"></i>
              </a>
            </div>
          </div>

          <div class="md:flex-1">
            <h2 class="text-[30px]">Opening Hours</h2>
            <div class="flex flex-col gap-y-2 mt-3">
              <div>
                <span class="inline-block ml-2">Mon - Fri</span>
              </div>
              <div>
                <span class="inline-block ml-2">08:00 am - 09:00 pm</span>
              </div>
            </div>
          </div>
        </div>

        <p class="text-center mt-10">© 2025 All Rights Reserved By Berk UCAR</p>
      </div>
    </div>
  );
};

export default Footer;
