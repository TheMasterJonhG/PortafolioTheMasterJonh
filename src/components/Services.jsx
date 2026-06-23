
import { Code2, Layout, Globe } from "lucide-react";
import serviceImg from '../assets/img-service.png';

export default function Services() {

  const services = [
    {
      name: "Desarrollo Web",
      icon: <Layout className="w-8 h-8 text-[#2563eb]" />,
      description:
        "Creación de sitios web a medida, desde páginas estáticas hasta sistemas complejos, optimizados para el rendimiento y la experiencia de usuario.",
    },
    {
      name: "Aplicaciones Web",
      icon: <Code2 className="w-8 h-8 text-[#2563eb]" />,
      description:
        "Desarrollo de aplicaciones interactivas y dinámicas usando frameworks modernos como React, y tecnologías de backend como Node.js.",
    },
    {
      name: "Diseño Responsivo",
      icon: <Globe className="w-8 h-8 text-[#2563eb]" />,
      description:
        "Aseguro que tus sitios y aplicaciones se vean y funcionen perfectamente en cualquier dispositivo, desde móviles hasta ordenadores de escritorio.",
    },
  ];

  return (
    <section
      id="services"
      className="w-full px-[12%] py-16 scroll-mt-20 text-[#1f2937] dark:text-gray-200 transition-colors duration-500 font-montserrat"
    >
      {/* Encabezado */}
      <h4 className="text-center mb-2 text-lg text-[#2563eb] dark:text-[#60a5fa]">
        Servicios que ofrezco
      </h4>
      <h2 className="text-center text-5xl mb-12 font-semibold">
        Mis servicios
      </h2>

      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Sección de texto y servicios */}
        <div className="flex flex-col gap-8 w-full max-w-xl">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex gap-4 items-start cursor-pointer group transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center p-3 rounded-full bg-[#2563eb]/10 group-hover:bg-[#2563eb]/20 transition-colors">
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 group-hover:text-[#2563eb] dark:group-hover:text-[#60a5fa] transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Imagen lateral */}
        <img
          src={serviceImg}
          alt="Servicios de desarrollo web"
          className="max-w-md w-full md:max-w-lg rounded-xl select-none"
        />
      </div>
    </section>
  );
}
