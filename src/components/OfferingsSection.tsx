"use client";

import { useState } from "react";
import FancyButton from "./FancyButton";
import RotatingTextCircle from "./RotatingTextCircle";
import { DecorativeBorder } from "./ui/DecorativeBorder";
import { MenuModal } from "./ui/MenuModal";
import Image from "next/image";
import Link from "next/link";

interface Offering {
  id: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
}

const offerings: Offering[] = [
  {
    id: "spa",
    title: "SPA & WELLNESS",
    description:
      "Escape to our tranquil spa sanctuary where ancient wellness traditions meet modern luxury. Our expert therapists offer signature treatments using organic botanicals and healing minerals. Rejuvenate your body and spirit in our peaceful retreat featuring private treatment rooms, a meditation garden, and aromatherapy experiences.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttonText: "BOOK TREATMENT",
  },
  {
    id: "dining",
    title: "FINE DINING",
    description:
      "Experience culinary artistry at our award-winning restaurant where our master chef creates innovative dishes using locally-sourced ingredients. From intimate wine tastings to elaborate tasting menus, each meal is a journey through flavors that celebrate both tradition and creativity in an elegant atmosphere.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttonText: "VIEW MENU",
  },
  {
    id: "events",
    title: "EVENT SPACES",
    description:
      "Host unforgettable gatherings in our versatile event spaces designed for both intimate celebrations and grand occasions. Our dedicated events team ensures every detail is perfect, from customized catering to sophisticated lighting and audiovisual equipment, creating memories that last a lifetime.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttonText: "PLAN EVENT",
  },
  {
    id: "business",
    title: "BUSINESS CENTER",
    description:
      "Conduct business seamlessly in our state-of-the-art business center equipped with high-speed internet, private meeting rooms, and professional support services. Whether hosting board meetings or working remotely, our sophisticated facilities ensure productivity in an atmosphere of refined comfort.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttonText: "RESERVE SPACE",
  },
];

function OfferingCard({
  offering,
  index,
  onViewMenu,
}: {
  offering: Offering;
  index: number;
  onViewMenu?: () => void;
}) {
  const isEven = index % 2 === 0;

  return (
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-x-4 xl:gap-x-8 items-center mb-12 sm:mb-16 lg:mb-10 md:px-6">
      {/* Image Section */}
      <div
        className={`relative group mb-8 lg:mb-0 px-3 ${
          isEven ? "lg:order-1" : "lg:order-2"
        }`}
      >
        {/* Decorative image frame */}
        <div className="relative">
          {/* Shadow element */}
          <div className="absolute inset-0 bg-primary/5 transform translate-x-2 translate-y-2 sm:translate-x-4 sm:translate-y-4 -z-10"></div>

          {/* Main image container */}
          <div className="relative aspect-[5/4] overflow-hidden border border-primary/10">
            <Image
              src={offering.image}
              alt={offering.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-60" />
          </div>

          {/* Corner accent */}
          <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-t-2 border-primary/20"></div>
          <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-b-2 border-primary/20"></div>
        </div>
      </div>

      {/* Content Section */}
      <div
        className={`flex items-center justify-center min-h-[400px] sm:min-h-[500px] ${
          isEven ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <DecorativeBorder className="w-full max-w-xl">
          {/* Category indicator */}
          <div className="font-synonym text-xs tracking-[0.3em] text-primary/60 mb-4 uppercase">
            Luxury Experience
          </div>

          <h3 className="font-editorial text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-light tracking-[0.15em] text-primary mb-6 leading-tight">
            {offering.title}
          </h3>

          <p className="font-synonym text-primary/75 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 text-justify">
            {offering.description}
          </p>

          {/* Decorative separator */}
          <div className="flex items-center mb-8 sm:mb-10">
            <div className="w-8 sm:w-12 h-[1px] bg-primary/30"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary/20 mx-3 sm:mx-4 transform rotate-45"></div>
            <div className="w-8 sm:w-12 h-[1px] bg-primary/30"></div>
          </div>

          <div className="flex justify-center lg:justify-start">
            {offering.id === "dining" ? (
              <FancyButton
                variant="green"
                className="!min-w-[180px] sm:!min-w-[200px] !py-3 sm:!py-4"
                onClick={onViewMenu}
              >
                {offering.buttonText}
              </FancyButton>
            ) : (
              <Link href={`/booking?type=${offering.id}`}>
                <FancyButton
                  variant="green"
                  className="!min-w-[180px] sm:!min-w-[200px] !py-3 sm:!py-4"
                >
                  {offering.buttonText}
                </FancyButton>
              </Link>
            )}
          </div>
        </DecorativeBorder>
      </div>
    </div>
  );
}

export default function OfferingsSection() {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  const handleViewMenu = () => {
    setIsMenuModalOpen(true);
  };

  const closeMenuModal = () => {
    setIsMenuModalOpen(false);
  };

  return (
    <section
      id="offerings"
      className="bg-cream pb-16 sm:pb-20 lg:pb-24 px-4 relative overflow-hidden"
    >
      {/* Enhanced background decorative elements */}
      <div className="absolute top-32 right-20 w-24 h-24 border border-primary/8 transform rotate-45" />
      <div className="absolute top-96 left-16 w-16 h-16 border border-primary/8 transform -rotate-12" />
      <div className="absolute bottom-64 right-32 w-20 h-20 border border-primary/8 transform rotate-12" />
      <div className="absolute bottom-32 left-24 w-12 h-12 border border-primary/8 transform -rotate-45" />

      {/* Section Header */}
      <div className="max-w-6xl mx-auto mt-8 sm:mt-12 mb-4 sm:mb-8 text-center lg:text-left">
        <div className="font-synonym text-xs sm:text-sm tracking-[0.3em] text-primary/70 mb-4">
          LUXURY AMENITIES
        </div>
        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] text-primary mb-6 sm:mb-8">
          EXPLORE OUR OFFERINGS
        </h2>
        <div className="w-20 sm:w-24 h-[2px] bg-primary/30 mx-auto lg:mx-0" />
      </div>

      {/* Offerings Grid */}
      <div>
        {offerings.map((offering, index) => (
          <OfferingCard
            key={offering.id}
            offering={offering}
            index={index}
            onViewMenu={handleViewMenu}
          />
        ))}
      </div>

      {/* Enhanced bottom decorative element */}
      <div className="flex justify-center mt-10 sm:mt-12 lg:mt-16">
        <RotatingTextCircle text="Veloura • " />
      </div>

      {/* Menu Modal */}
      <MenuModal isOpen={isMenuModalOpen} onClose={closeMenuModal} />
    </section>
  );
}
