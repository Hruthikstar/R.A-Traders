import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Minus, Plus, Phone } from "lucide-react";

const OtherProducts = () => {
  const products = [
    {
      id: 1,
      name: "Sample Product",
      price: 199,
      description: "This is a sample description for the product.",
      image: "/images/other/sample.jpg",
    },
  ];

  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const increment = (id: number) => {
    const current = quantities[id] || 1;
    if (current < 50) setQuantities({ ...quantities, [id]: current + 1 });
  };

  const decrement = (id: number) => {
    const current = quantities[id] || 1;
    if (current > 1) setQuantities({ ...quantities, [id]: current - 1 });
  };

  const toggleFavorite = (id: number) => {
    const newFav = new Set(favorites);
    newFav.has(id) ? newFav.delete(id) : newFav.add(id);
    setFavorites(newFav);
  };

  const contactWhatsApp = (product: any) => {
    const qty = quantities[product.id] || 1;
    const total = qty * product.price;
    const msg = `Hello, I'm interested in ${product.name} - Quantity: ${qty} (Total: ₹${total}).`;
    window.open(`https://wa.me/918888095594?text=${encodeURIComponent(msg)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-white dark:from-slate-900 dark:to-slate-800">
      <Navbar />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
          Other Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border">
              <div className="aspect-square bg-gray-100 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-full h-full"
                />
              </div>

              <CardContent className="p-5">
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {product.description}
                </p>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  ₹{product.price}
                </span>
              </CardContent>

              <CardFooter className="p-5 pt-0 flex flex-col gap-3">
                <div className="flex items-center gap-2 w-full">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => decrement(product.id)}
                    className="rounded-full"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>

                  <div className="flex-1 text-center">
                    <span className="text-xl font-bold">
                      {quantities[product.id] || 1}
                    </span>
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => increment(product.id)}
                    className="rounded-full"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>

                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="ml-2 p-2 rounded-full bg-white/90 dark:bg-slate-800/90 shadow hover:scale-110 transition"
                  >
                    <Heart
                      className={`${favorites.has(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"} h-5 w-5`}
                    />
                  </button>
                </div>

                <Button
                  onClick={() => contactWhatsApp(product)}
                  className="w-full rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                >
                  <Phone className="mr-2 h-4 w-4" /> Contact WhatsApp
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OtherProducts;
