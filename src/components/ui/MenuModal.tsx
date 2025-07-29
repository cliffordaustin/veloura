"use client";

import { X, ChefHat, Wine, Coffee, Utensils } from "lucide-react";
import { DecorativeBorder } from "./DecorativeBorder";
import FancyButton from "../FancyButton";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuData = {
  appetizers: [
    {
      name: "Oysters Rockefeller",
      description: "Fresh oysters baked with spinach, herbs, and parmesan",
      price: "$24",
    },
    {
      name: "Truffle Arancini",
      description: "Crispy risotto balls with black truffle and aged parmesan",
      price: "$18",
    },
    {
      name: "Tuna Tartare",
      description: "Yellowfin tuna with avocado, citrus, and sesame tuile",
      price: "$26",
    },
    {
      name: "Foie Gras Terrine",
      description: "House-made terrine with brioche and cherry compote",
      price: "$32",
    },
  ],
  mains: [
    {
      name: "Wagyu Beef Tenderloin",
      description: "8oz prime cut with roasted vegetables and red wine jus",
      price: "$65",
    },
    {
      name: "Pan-Seared Halibut",
      description:
        "Fresh Atlantic halibut with saffron risotto and beurre blanc",
      price: "$42",
    },
    {
      name: "Duck Confit",
      description:
        "Slow-cooked duck leg with cassoulet beans and cherry gastrique",
      price: "$38",
    },
    {
      name: "Lobster Thermidor",
      description: "Maine lobster tail with cognac cream sauce and herbs",
      price: "$58",
    },
    {
      name: "Vegetarian Tasting",
      description: "Chef's selection of seasonal vegetables and grains",
      price: "$34",
    },
  ],
  desserts: [
    {
      name: "Chocolate Soufflé",
      description: "Dark chocolate soufflé with vanilla bean ice cream",
      price: "$16",
    },
    {
      name: "Crème Brûlée",
      description: "Classic vanilla custard with caramelized sugar",
      price: "$14",
    },
    {
      name: "Lemon Tart",
      description: "Meyer lemon curd with meringue and berry compote",
      price: "$15",
    },
  ],
  beverages: [
    {
      name: "Wine Pairing",
      description: "Sommelier-selected wines to complement your meal",
      price: "$45",
    },
    {
      name: "Craft Cocktails",
      description: "Signature cocktails made with premium spirits",
      price: "$18-22",
    },
    {
      name: "Artisan Coffee",
      description: "Single-origin coffee beans, expertly roasted",
      price: "$8",
    },
  ],
};

const sectionIcons = {
  appetizers: ChefHat,
  mains: Utensils,
  desserts: Coffee,
  beverages: Wine,
};

export function MenuModal({ isOpen, onClose }: MenuModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto bg-cream">
        <DecorativeBorder className="w-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="font-synonym text-xs tracking-[0.3em] text-primary/70 mb-2 uppercase">
                Fine Dining
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-light tracking-[0.15em] text-primary">
                RESTAURANT MENU
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-primary hover:text-primary/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Sections */}
          <div className="space-y-12">
            {Object.entries(menuData).map(([sectionKey, items]) => {
              const IconComponent =
                sectionIcons[sectionKey as keyof typeof sectionIcons];
              const sectionTitle =
                sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1);

              return (
                <div key={sectionKey}>
                  {/* Section Header */}
                  <div className="flex items-center mb-6">
                    <IconComponent className="w-5 h-5 mr-3 text-primary" />
                    <h3 className="font-editorial text-xl sm:text-2xl font-light tracking-[0.1em] text-primary">
                      {sectionTitle}
                    </h3>
                    <div className="flex-1 ml-6">
                      <div className="h-[1px] bg-primary/20" />
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {items.map((item, index) => (
                      <div
                        key={index}
                        className="border-l-2 border-primary/10 pl-4 hover:border-primary/30 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-synonym text-base font-semibold text-primary tracking-wide">
                            {item.name}
                          </h4>
                          <span className="font-editorial text-lg font-light text-primary ml-4">
                            {item.price}
                          </span>
                        </div>
                        <p className="font-synonym text-sm text-primary/75 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-primary/10">
            <div className="text-center space-y-4">
              <p className="font-synonym text-sm text-primary/70">
                All dishes are prepared with locally-sourced, seasonal
                ingredients
              </p>
              <p className="font-synonym text-xs text-primary/60">
                Please inform our staff of any dietary restrictions or allergies
              </p>

              {/* Decorative separator */}
              <div className="flex items-center justify-center my-6">
                <div className="w-12 h-[1px] bg-primary/30" />
                <div className="w-2 h-2 bg-primary/20 mx-4 transform rotate-45" />
                <div className="w-12 h-[1px] bg-primary/30" />
              </div>

              <div className="flex justify-center">
                <FancyButton
                  variant="green"
                  onClick={onClose}
                  className="!min-w-[180px]"
                >
                  CLOSE MENU
                </FancyButton>
              </div>
            </div>
          </div>
        </DecorativeBorder>
      </div>
    </div>
  );
}
