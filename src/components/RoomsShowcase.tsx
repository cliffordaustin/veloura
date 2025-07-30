"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Icon } from "@iconify/react";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RotatingTextCircle from "./RotatingTextCircle";

interface Room {
  id: string;
  category: string;
  name: string;
  images: string[]; // Changed from single image to array of images
  textColor: string;
  overlayColor: string;
  description: string;
  features: string[];
  specifications: {
    bed: string;
    size: string;
    bathroom: string;
  };
}

const rooms: Room[] = [
  {
    id: "standard",
    category: "STANDARD ROOM",
    name: "CLASSIC COMFORT",
    images: [
      "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    textColor: "text-white",
    overlayColor: "bg-gray-900/60",
    description:
      "A comfortable retreat featuring modern amenities and classic design. Our Standard Room offers everything you need for a pleasant stay, including premium linens, complimentary wifi, and climate control. Perfect for business travelers or couples seeking quality accommodation.",
    features: [
      "Complimentary WiFi",
      "Climate Control",
      "Premium Linens",
      "Flat-screen TV",
      "Mini Refrigerator",
    ],
    specifications: {
      bed: "QUEEN BED",
      size: "280-320 SQ.FT.",
      bathroom: "STANDARD BATH",
    },
  },
  {
    id: "deluxe",
    category: "DELUXE ROOM",
    name: "ELEVATED ELEGANCE",
    images: [
      "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1158&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    textColor: "text-primary",
    overlayColor: "bg-cream/80",
    description:
      "Experience refined comfort in our Deluxe Room, where contemporary design meets timeless elegance. Featuring upgraded amenities, premium furnishings, and enhanced space for relaxation. The perfect choice for discerning guests seeking elevated hospitality.",
    features: [
      "Premium WiFi",
      "Climate Control",
      "Luxury Linens",
      "Smart TV",
      "Mini Bar",
      "Seating Area",
    ],
    specifications: {
      bed: "KING BED",
      size: "320-380 SQ.FT.",
      bathroom: "DELUXE BATH",
    },
  },
  {
    id: "premium",
    category: "PREMIUM ROOM",
    name: "REFINED LUXURY",
    images: [
      "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=2660&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    textColor: "text-white",
    overlayColor: "bg-blue-900/60",
    description:
      "Indulge in sophisticated luxury with our Premium Room, featuring high-end furnishings, marble accents, and panoramic views. Every detail has been carefully curated to provide an exceptional experience for our most valued guests.",
    features: [
      "High-speed WiFi",
      "Smart Climate Control",
      "Egyptian Cotton Linens",
      "Premium Entertainment System",
      "Full Mini Bar",
      "Luxury Seating Area",
      "Work Desk",
    ],
    specifications: {
      bed: "KING BED",
      size: "380-440 SQ.FT.",
      bathroom: "MARBLE BATH",
    },
  },
  {
    id: "suite",
    category: "EXECUTIVE SUITE",
    name: "PRESIDENTIAL SUITE",
    images: [
      "https://images.unsplash.com/photo-1741682739917-dae3dd66364f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1594736797933-d0401ba0d6ba?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    textColor: "text-white",
    overlayColor: "bg-amber-900/60",
    description:
      "The pinnacle of luxury accommodation, our Presidential Suite offers unparalleled space and amenities. Featuring separate living and sleeping areas, premium furnishings, and exclusive services. Designed for executives and dignitaries who demand the finest.",
    features: [
      "Ultra-fast WiFi",
      "Smart Home Technology",
      "Premium Linens",
      "Entertainment Center",
      "Full Bar",
      "Separate Living Area",
      "Executive Desk",
      "Concierge Service",
    ],
    specifications: {
      bed: "KING BED",
      size: "600-750 SQ.FT.",
      bathroom: "LUXURY BATH",
    },
  },
  {
    id: "penthouse",
    category: "PENTHOUSE SUITE",
    name: "ROYAL PENTHOUSE",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    textColor: "text-white",
    overlayColor: "bg-emerald-900/60",
    description:
      "The ultimate in luxury hospitality, our Royal Penthouse spans the entire top floor with breathtaking panoramic views. Featuring multiple bedrooms, a private terrace, butler service, and custom furnishings. An exclusive retreat for royalty and VIP guests.",
    features: [
      "Dedicated WiFi",
      "Smart Home Automation",
      "Custom Linens",
      "Home Theater",
      "Private Bar",
      "Multiple Living Areas",
      "Private Terrace",
      "Butler Service",
      "Private Elevator",
    ],
    specifications: {
      bed: "KING BED",
      size: "1200+ SQ.FT.",
      bathroom: "SPA BATHROOM",
    },
  },
];

export default function RoomsShowcase() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRoomClick = (room: Room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
  };

  return (
    <section
      id="rooms"
      className="bg-cream py-8 sm:py-12 px-4 relative overflow-hidden"
    >
      <div className="flex justify-center mb-4 sm:mb-8">
        <RotatingTextCircle text="Veloura • " />
      </div>
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-primary/10 transform rotate-45" />
      <div className="absolute bottom-40 left-10 w-24 h-24 border border-primary/10 transform -rotate-12" />

      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-8 sm:mb-12">
        <div className="text-center lg:text-left">
          <div className="font-synonym text-xs sm:text-sm tracking-[0.3em] text-primary/70 mb-4">
            LUXURY ACCOMMODATIONS
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] text-primary mb-6 lg:mb-0">
              OUR ROOMS
            </h2>
          </div>

          <div className="w-24 h-[2px] bg-primary/30 mx-auto lg:mx-0" />
        </div>
      </div>

      {/* Swiper Container with External Navigation */}
      <div className="relative">
        {/* Navigation Arrows - Completely outside swiper */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute -left-5 md:left-0 top-1/2 -translate-y-1/2 z-20 group transition-all duration-300 hover:scale-110"
          aria-label="Previous room"
        >
          <Icon
            icon="material-symbols-light:chevron-left-rounded"
            className="text-primary group-hover:text-primary/70 size-12 lg:size-14 transition-colors duration-300"
          />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 group transition-all duration-300 hover:scale-110"
          aria-label="Next room"
        >
          <Icon
            icon="material-symbols-light:chevron-right-rounded"
            className="text-primary group-hover:text-primary/70 size-12 lg:size-14 transition-colors duration-300"
          />
        </button>

        {/* Swiper Container */}
        <div className="max-w-7xl mx-auto px-5 sm:px-12 lg:px-16">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-primary/30 !w-3 !h-3",
              bulletActiveClass: "swiper-pagination-bullet-active !bg-primary",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
            }}
            className="rooms-swiper"
          >
            {rooms.map((room, index) => (
              <SwiperSlide key={room.id}>
                <RoomCard
                  room={room}
                  index={index}
                  onClick={() => handleRoomClick(room)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Room Details Modal */}
      <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
          <Dialog.Content className="fixed inset-0 z-50 bg-cream">
            <VisuallyHidden.Root>
              <Dialog.Title>
                {selectedRoom
                  ? `${selectedRoom.name} - ${selectedRoom.category}`
                  : "Room Details"}
              </Dialog.Title>
            </VisuallyHidden.Root>
            {selectedRoom && (
              <RoomModal room={selectedRoom} onClose={closeModal} />
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Custom styles for Swiper pagination */}
      <style jsx global>{`
        .rooms-swiper .swiper-pagination {
          bottom: -40px !important;
        }
        .rooms-swiper .swiper-pagination-bullet {
          border-radius: 0 !important;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}

function RoomCard({
  room,
  onClick,
}: {
  room: Room;
  index: number;
  onClick: () => void;
}) {
  return (
    <div
      className="relative group cursor-pointer overflow-hidden aspect-[4/5] lg:aspect-[3/4]"
      onClick={onClick}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{
          backgroundImage: `url(${room.images[0]})`, // Use first image as preview
        }}
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 ${room.overlayColor} transition-opacity duration-300 group-hover:opacity-80`}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 sm:p-8">
        {/* Category */}
        <div
          className={`font-synonym text-xs md:text-sm tracking-[0.3em] mb-4 sm:mb-6 ${room.textColor} opacity-90`}
        >
          {room.category}
        </div>

        {/* Room Name */}
        <h3
          className={`font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wider ${room.textColor}`}
        >
          {room.name}
        </h3>

        {/* Decorative Line */}
        <div className="mt-6 sm:mt-8 w-12 sm:w-16 h-[1px] bg-current opacity-60" />
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

function RoomModal({ room, onClose }: { room: Room; onClose: () => void }) {
  const imageSwiperRef = useRef<SwiperType | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="h-full w-full">
      {/* Close Button */}
      <Dialog.Close asChild>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-300"
          aria-label="Close modal"
        >
          <Icon icon="mdi:close" className="text-primary size-5 sm:size-6" />
        </button>
      </Dialog.Close>

      <div className="flex flex-col md:flex-row h-full">
        {/* Image Section with Swiper */}
        <div className="relative w-full md:w-1/2 h-[45%] md:h-full bg-gray-100">
          <Swiper
            onBeforeInit={(swiper) => {
              imageSwiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            onSlideChange={(swiper) => setCurrentImageIndex(swiper.realIndex)}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-white/50 !w-2 !h-2",
              bulletActiveClass: "swiper-pagination-bullet-active !bg-white",
            }}
            className="h-full image-swiper"
          >
            {room.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Image Navigation Arrows */}
          <button
            onClick={() => imageSwiperRef.current?.slidePrev()}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-300 flex items-center justify-center"
            aria-label="Previous image"
          >
            <Icon
              icon="mdi:chevron-left"
              className="text-primary size-6 sm:size-8"
            />
          </button>

          <button
            onClick={() => imageSwiperRef.current?.slideNext()}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-300 flex items-center justify-center"
            aria-label="Next image"
          >
            <Icon
              icon="mdi:chevron-right"
              className="text-primary size-6 sm:size-8"
            />
          </button>

          {/* Image counter */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 z-10">
            <span className="font-synonym text-xs sm:text-sm tracking-wider text-primary">
              {currentImageIndex + 1} OF {room.images.length}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 flex flex-col h-[55%] md:h-full">
          <div className="flex-1 overflow-y-auto px-6 sm:px-8 lg:px-16 py-6 sm:py-8 lg:py-12">
            {/* Category */}
            <div className="font-synonym text-xs sm:text-sm tracking-[0.3em] text-primary/70 mb-4 sm:mb-6">
              {room.category}
            </div>

            {/* Room Name */}
            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-wider text-primary mb-6 sm:mb-8 leading-tight">
              {room.name}
            </h1>

            {/* Description */}
            <p className="text-primary/80 text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 font-synonym">
              {room.description}
            </p>

            {/* Specifications */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8 sm:mb-12">
              <div className="text-center sm:text-left">
                <div className="font-synonym text-xs tracking-[0.2em] text-primary/60 mb-2">
                  {room.specifications.bed}
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-synonym text-xs tracking-[0.2em] text-primary/60 mb-2">
                  {room.specifications.size}
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-synonym text-xs tracking-[0.2em] text-primary/60 mb-2">
                  {room.specifications.bathroom}
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="mb-8 sm:mb-12">
              <h3 className="font-editorial text-lg sm:text-xl text-primary mb-4 sm:mb-6">
                AMENITIES
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {room.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-primary"></div>
                    <span className="font-synonym text-sm sm:text-base text-primary/80">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="border border-primary/20 p-6 sm:p-8 bg-white/50 mb-6 sm:mb-8">
              <div className="text-center">
                <h3 className="font-editorial text-xl sm:text-2xl text-primary mb-4">
                  CONTACT FOR BOOKING
                </h3>
                <div className="space-y-2 font-synonym text-primary">
                  <p className="text-base sm:text-lg font-medium">
                    +233 XX XXX XXXX
                  </p>
                  <p className="text-base sm:text-lg font-medium">
                    +233 XX XXX XXXX
                  </p>
                  <p className="text-xs sm:text-sm text-primary/70 mt-4">
                    Call between 9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for image swiper pagination */}
      <style jsx global>{`
        .image-swiper .swiper-pagination {
          bottom: 20px !important;
        }
        .image-swiper .swiper-pagination-bullet {
          border-radius: 0 !important;
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
