"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Calendar,
  Clock,
  Users,
  Phone,
  Mail,
  User,
  MessageSquare,
  Heart,
  Gift,
  Building,
} from "lucide-react";
import FancyButton from "@/components/FancyButton";
import { DecorativeBorder } from "@/components/ui/DecorativeBorder";
import Navigation from "@/components/Navigation";

type BookingType = "spa" | "events" | "business";

interface FormData {
  bookingType: BookingType;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  location: string;
  specialRequests: string;
  // Spa specific
  treatmentType: string;
  duration: string;
  // Events specific
  eventType: string;
  eventDuration: string;
  catering: boolean;
  audioVisual: boolean;
  // Business specific
  roomType: string;
  businessPurpose: string;
  equipment: string[];
}

const initialFormData: FormData = {
  bookingType: "spa",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "1",
  location: "",
  specialRequests: "",
  treatmentType: "",
  duration: "",
  eventType: "",
  eventDuration: "",
  catering: false,
  audioVisual: false,
  roomType: "",
  businessPurpose: "",
  equipment: [],
};

const bookingOptions = {
  spa: {
    title: "SPA & WELLNESS",
    subtitle: "Book Your Treatment",
    icon: Heart,
    treatments: [
      "Signature Massage",
      "Aromatherapy Session",
      "Facial Treatment",
      "Body Wrap",
      "Couples Massage",
      "Meditation Session",
    ],
    durations: [
      "60 minutes",
      "90 minutes",
      "120 minutes",
      "Half Day Package",
      "Full Day Package",
    ],
  },
  events: {
    title: "EVENT SPACES",
    subtitle: "Plan Your Event",
    icon: Gift,
    types: [
      "Wedding Reception",
      "Corporate Meeting",
      "Birthday Celebration",
      "Anniversary Party",
      "Business Conference",
      "Private Dinner",
    ],
    durations: [
      "2 hours",
      "4 hours",
      "6 hours",
      "8 hours",
      "Full Day",
      "Multiple Days",
    ],
  },
  business: {
    title: "BUSINESS CENTER",
    subtitle: "Reserve Your Space",
    icon: Building,
    rooms: [
      "Executive Meeting Room",
      "Board Room",
      "Conference Hall",
      "Private Office",
      "Co-working Space",
      "Presentation Room",
    ],
    equipment: [
      "Projector",
      "Audio System",
      "Video Conferencing",
      "Whiteboard",
      "Flipchart",
      "High-Speed Internet",
    ],
  },
};

function BookingForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle URL query parameter for booking type
  useEffect(() => {
    const type = searchParams.get("type");
    if (type && (type === "spa" || type === "events" || type === "business")) {
      setFormData((prev) => ({ ...prev, bookingType: type as BookingType }));
    }
  }, [searchParams]);

  const currentBooking = bookingOptions[formData.bookingType];
  const IconComponent = currentBooking.icon;

  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean | string[]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleEquipmentToggle = (equipment: string) => {
    setFormData((prev) => ({
      ...prev,
      equipment: prev.equipment.includes(equipment)
        ? prev.equipment.filter((e) => e !== equipment)
        : [...prev.equipment, equipment],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert(
      "Booking request submitted successfully! We will contact you shortly to confirm your reservation."
    );
    setFormData(initialFormData);
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-6xl mx-auto sm:px-4 py-12 sm:py-16 lg:py-20">
      <form onSubmit={handleSubmit}>
        <DecorativeBorder className="w-full">
          {/* Booking Type Selection */}
          <div className="mb-8 sm:mb-12">
            <h2 className="font-editorial text-2xl sm:text-3xl font-light tracking-[0.15em] text-primary mb-6 text-center">
              Select Booking Type
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {Object.entries(bookingOptions).map(([key, option]) => {
                const IconComp = option.icon;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() =>
                      handleInputChange("bookingType", key as BookingType)
                    }
                    className={`p-6 border-2 transition-all duration-300 ${
                      formData.bookingType === key
                        ? "border-primary bg-primary/5"
                        : "border-primary/20 hover:border-primary/40"
                    }`}
                  >
                    <IconComp className="w-8 h-8 mx-auto mb-4 text-primary" />
                    <h3 className="font-synonym text-sm font-semibold tracking-[0.1em] text-primary mb-2">
                      {option.title}
                    </h3>
                    <p className="font-synonym text-xs text-primary/70">
                      {option.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Booking Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Personal Information */}
            <div>
              <h3 className="font-editorial text-xl sm:text-2xl font-light tracking-[0.1em] text-primary mb-6 flex items-center">
                <User className="w-5 h-5 mr-3" />
                Personal Information
              </h3>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-synonym text-sm font-medium text-primary mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className="w-full p-3 border border-primary/20 bg-white text-primary font-synonym focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-synonym text-sm font-medium text-primary mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      className="w-full p-3 border border-primary/20 bg-white text-primary font-synonym focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-synonym text-sm font-medium text-primary mb-2 flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full p-3 border border-primary/20 bg-white text-primary font-synonym focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-synonym text-sm font-medium text-primary mb-2 flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full p-3 border border-primary/20 bg-white text-primary font-synonym focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-synonym text-sm font-medium text-primary mb-2 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) =>
                        handleInputChange("date", e.target.value)
                      }
                      className="w-full p-3 border border-primary/20 bg-white text-primary font-synonym focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-synonym text-sm font-medium text-primary mb-2 flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) =>
                        handleInputChange("time", e.target.value)
                      }
                      className="w-full p-3 border border-primary/20 bg-white text-primary font-synonym focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-synonym text-sm font-medium text-primary mb-2 flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Number of{" "}
                    {formData.bookingType === "spa"
                      ? "Guests"
                      : formData.bookingType === "events"
                      ? "Attendees"
                      : "Participants"}
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) =>
                      handleInputChange("guests", e.target.value)
                    }
                    className="w-full p-3 border border-primary/20 bg-white text-primary font-synonym focus:border-primary focus:outline-none"
                  >
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                    <option value="20+">20+</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Specific Information */}
            <div>
              <h3 className="font-editorial text-xl sm:text-2xl font-light tracking-[0.1em] text-primary mb-6 flex items-center">
                <IconComponent className="w-5 h-5 mr-3" />
                {currentBooking.title} Details
              </h3>

              <div className="space-y-6">
                {formData.bookingType === "spa" && (
                  <>
                    <div>
                      <label className="block font-synonym text-sm font-medium text-primary mb-2">
                        Treatment Type *
                      </label>
                      <select
                        required
                        value={formData.treatmentType}
                        onChange={(e) =>
                          handleInputChange("treatmentType", e.target.value)
                        }
                        className="w-full p-3 border border-primary/20 bg-white text-primary font-synonym focus:border-primary focus:outline-none"
                      >
                        <option value="">Select Treatment</option>
                        {bookingOptions.spa.treatments.map((treatment) => (
                          <option key={treatment} value={treatment}>
                            {treatment}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-synonym text-sm font-medium text-primary mb-2">
                        Duration *
                      </label>
                      <select
                        required
                        value={formData.duration}
                        onChange={(e) =>
                          handleInputChange("duration", e.target.value)
                        }
                        className="w-full p-3 border border-primary/20 bg-white text-primary font-synonym focus:border-primary focus:outline-none"
                      >
                        <option value="">Select Duration</option>
                        {bookingOptions.spa.durations.map((duration) => (
                          <option key={duration} value={duration}>
                            {duration}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                )}

                {/* Events Specific Fields */}
                {formData.bookingType === "events" && (
                  <>
                    <div>
                      <label className="block font-synonym text-sm font-medium text-primary mb-2">
                        Event Type *
                      </label>
                      <select
                        required
                        value={formData.eventType}
                        onChange={(e) =>
                          handleInputChange("eventType", e.target.value)
                        }
                        className="w-full p-3 border border-primary/20 bg-white text-primary font-synonym focus:border-primary focus:outline-none"
                      >
                        <option value="">Select Event Type</option>
                        {bookingOptions.events.types.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-synonym text-sm font-medium text-primary mb-2">
                        Event Duration *
                      </label>
                      <select
                        required
                        value={formData.eventDuration}
                        onChange={(e) =>
                          handleInputChange("eventDuration", e.target.value)
                        }
                        className="w-full p-3 border border-primary/20 bg-white text-primary font-synonym focus:border-primary focus:outline-none"
                      >
                        <option value="">Select Duration</option>
                        {bookingOptions.events.durations.map((duration) => (
                          <option key={duration} value={duration}>
                            {duration}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label className="block font-synonym text-sm font-medium text-primary">
                        Additional Services
                      </label>
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          id="catering"
                          checked={formData.catering}
                          onChange={(e) =>
                            handleInputChange("catering", e.target.checked)
                          }
                          className="w-4 h-4 text-primary border-primary/20 focus:ring-primary"
                        />
                        <label
                          htmlFor="catering"
                          className="font-synonym text-sm text-primary"
                        >
                          Catering Services
                        </label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          id="audioVisual"
                          checked={formData.audioVisual}
                          onChange={(e) =>
                            handleInputChange("audioVisual", e.target.checked)
                          }
                          className="w-4 h-4 text-primary border-primary/20 focus:ring-primary"
                        />
                        <label
                          htmlFor="audioVisual"
                          className="font-synonym text-sm text-primary"
                        >
                          Audio/Visual Equipment
                        </label>
                      </div>
                    </div>
                  </>
                )}

                {/* Business Specific Fields */}
                {formData.bookingType === "business" && (
                  <>
                    <div>
                      <label className="block font-synonym text-sm font-medium text-primary mb-2">
                        Room Type *
                      </label>
                      <select
                        required
                        value={formData.roomType}
                        onChange={(e) =>
                          handleInputChange("roomType", e.target.value)
                        }
                        className="w-full p-3 border border-primary/20 bg-white text-primary font-synonym focus:border-primary focus:outline-none"
                      >
                        <option value="">Select Room</option>
                        {bookingOptions.business.rooms.map((room) => (
                          <option key={room} value={room}>
                            {room}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-synonym text-sm font-medium text-primary mb-2">
                        Business Purpose
                      </label>
                      <input
                        type="text"
                        value={formData.businessPurpose}
                        onChange={(e) =>
                          handleInputChange("businessPurpose", e.target.value)
                        }
                        placeholder="e.g., Board meeting, Client presentation"
                        className="w-full p-3 border border-primary/20 bg-white text-primary font-synonym focus:border-primary focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-synonym text-sm font-medium text-primary mb-3">
                        Required Equipment
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {bookingOptions.business.equipment.map((equipment) => (
                          <div
                            key={equipment}
                            className="flex items-center space-x-2"
                          >
                            <input
                              type="checkbox"
                              id={equipment}
                              checked={formData.equipment.includes(equipment)}
                              onChange={() => handleEquipmentToggle(equipment)}
                              className="w-4 h-4 text-primary border-primary/20 focus:ring-primary"
                            />
                            <label
                              htmlFor={equipment}
                              className="font-synonym text-xs text-primary"
                            >
                              {equipment}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Special Requests */}
                <div>
                  <label className="font-synonym text-sm font-medium text-primary mb-2 flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Special Requests
                  </label>
                  <textarea
                    value={formData.specialRequests}
                    onChange={(e) =>
                      handleInputChange("specialRequests", e.target.value)
                    }
                    rows={4}
                    placeholder="Any special requirements or additional information..."
                    className="w-full p-3 border border-primary/20 bg-white text-primary font-synonym focus:border-primary focus:outline-none resize-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-12">
            <FancyButton
              type="submit"
              variant="green"
              size="lg"
              disabled={isSubmitting}
              className="!min-w-[250px] !py-4"
            >
              {isSubmitting ? "SUBMITTING..." : "SUBMIT BOOKING REQUEST"}
            </FancyButton>
          </div>

          {/* Note */}
          <div className="mt-8 text-center">
            <p className="font-synonym text-sm text-primary/70">
              * Required fields. We will contact you within 24 hours to confirm
              your booking.
            </p>
          </div>
        </DecorativeBorder>
      </form>
    </div>
  );
}

function BookingLoadingFallback() {
  return (
    <div className="max-w-6xl mx-auto sm:px-4 py-12 sm:py-16 lg:py-20">
      <DecorativeBorder className="w-full">
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="font-synonym text-sm text-primary/70">
              Loading booking form...
            </p>
          </div>
        </div>
      </DecorativeBorder>
    </div>
  );
}

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 lg:h-96 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/90" />
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center">
            <div className="font-synonym text-xs sm:text-sm tracking-[0.3em] text-cream/70 mb-4 uppercase">
              Luxury Reservations
            </div>
            <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] text-cream mb-6">
              BOOK YOUR EXPERIENCE
            </h1>
            <div className="w-20 sm:w-24 h-[2px] bg-cream/30 mx-auto" />
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-16 h-16 border border-cream/20 transform rotate-45" />
        <div className="absolute bottom-16 left-16 w-12 h-12 border border-cream/20 transform -rotate-12" />
      </div>

      {/* Main Content */}
      <Suspense fallback={<BookingLoadingFallback />}>
        <BookingForm />
      </Suspense>
    </div>
  );
}
