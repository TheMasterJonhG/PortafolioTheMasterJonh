import { Youtube, Facebook, Instagram, Github } from "lucide-react";
import logoLight from '@/assets/logo.png';
import logoDark from '@/assets/logo_dark.png';
import mailIconLight from '@/assets/mail_icon.png';
import mailIconDark from '@/assets/mail_icon_dark.png';

export default function Footer() {
  return (
    <footer className="mt-20 text-[#1f2937] dark:text-white font-sans">
      {/* Logo */}
      <div className="text-center">
        <img src={logoLight} alt="Logo JGCS" className="w-36 mx-auto mb-2 dark:hidden" />
        <img src={logoDark} alt="Logo JGCS" className="w-36 mx-auto mb-2 hidden dark:block" />

        {/* Email */}
        <div className="w-max flex items-center gap-2 mx-auto mb-4">
          <img src={mailIconLight} alt="Correo" className="w-5 dark:hidden" />
          <img src={mailIconDark} alt="Correo" className="w-5 hidden dark:block" />
          <a href="mailto:jonathangcs07@gmail.com" className="hover:underline">
            jonathangcs07@gmail.com
          </a>
        </div>

        {/* Redes sociales */}
        <div className="flex items-center justify-center gap-6">
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <Youtube className="w-6 h-6 hover:text-[#FF0000] transition-colors" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-6 h-6 hover:text-[#1877F2] transition-colors" />
          </a>
          <a href="https://github.com/TheMasterJonhG" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-gray-600 dark:hover:text-gray-400 transition-colors" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 hover:text-[#C13584] transition-colors" />
          </a>
        </div>
      </div>

      {/* Pie de página */}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between border-t border-gray-400 mx-[10%] mt-12 py-3 gap-2">
        <p className="text-center">
          © {new Date().getFullYear()} <a href="https://github.com/TheMasterJonhG" className="hover:underline">TheMasterJonhG</a>. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
