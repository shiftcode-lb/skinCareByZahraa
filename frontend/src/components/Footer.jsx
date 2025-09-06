import React from "react";
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div class="relative flex flex-col items-center justify-center w-full py-6 bg-primary text-white/70">
    <a href="#" class="flex items-center flex-col justify-center text-2xl font-semibold text-background fancy">
        <img src={assets.logo} class="h-20 mr-3 sm:h-17" alt="Landwind Logo"/>
		SkinCare By Zahraa
    </a>

    <span class="block text-sm text-center text-background mt-5">©2025 Landwind™. All Rights Reserved.
		Built with 
        <a href="https://flowbite.com"
			class="text-primary hover:underline">Flowbite</a> and 
            <a
			href="https://tailwindcss.com" class="text-purple-600 hover:underline">Tailwind
			CSS
        </a>.
	</span>
</div>
  );
};

export default Footer;
