import React from "react";
import { Instagram, MessageCircle } from "lucide-react"; // WhatsApp → MessageCircle

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
      <aside>
        <img 
          src="/path-to-your-logo.png" 
          alt="My Logo" 
          width="50" 
          height="50" 
          className="inline-block"
        />

        <p className="font-bold">
          Skin Care By Zahraa
          <br />
          Nurturing healthy skin since 2022
        </p>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved -{" "}
          <a href="https://shiftcode.org">ShiftCode</a>
        </p>
      </aside>

      <nav>
        <div className="grid grid-flow-col gap-4">
          {/* Instagram */}
          <a
            href="https://instagram.com/skin.care.by.zahraa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-6 h-6" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/76873779"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
