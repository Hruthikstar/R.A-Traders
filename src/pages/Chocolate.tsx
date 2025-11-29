import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Package, Truck, Shield, Award, ChevronRight, Phone, Plus, Minus, Sparkles, Apple } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChocolateImg from "../assets/chocolate.jpg";

type ChocolateProduct = {
  id: number;
  name: string;
  basePrice: number;
  description: string;
  image?: string;
  priceType?: "gram" | "quantity"; // 'gram' for 1-32, 'quantity' for 33-121
};

const chocolateProducts: ChocolateProduct[] = [
  // 1-32: Keep as grams
  { id: 1, name: "TIFFANY DELUXE", basePrice: 40, description: "Tiffany Deluxe Chocolate", image: "/images/chocolate/tiffany_deluxe.jpg", priceType: "gram" },
  { id: 2, name: "COCON JELLY", basePrice: 40, description: "Coconut Jelly Chocolate", image: "/images/chocolate/coconjelly.jpg", priceType: "gram" },
  { id: 3, name: "BONJEM", basePrice: 120, description: "Bonjem Special", image: "/images/chocolate/bonjem.jpg", priceType: "gram" },
  { id: 4, name: "THAI CHEW CANDY", basePrice: 70, description: "Thai Chew Candy", image: "/images/chocolate/thai_Chew_Candy.jpg", priceType: "gram" },
  { id: 5, name: "SWISS JELLY", basePrice: 65, description: "Swiss Jelly Candy", image: "/images/chocolate/swissjelly.jpg", priceType: "gram" },
  { id: 6, name: "MOON", basePrice: 65, description: "Moon Chocolate", image: "/images/chocolate/moon.jpg", priceType: "gram" },
  { id: 7, name: "CREAM FUDGE", basePrice: 65, description: "Cream Fudge", image: "/images/chocolate/creamfudge.jpg", priceType: "gram" },
  { id: 8, name: "BLUES", basePrice: 65, description: "Blues Chocolate", image:"/images/chocolate/nlues.jpg", priceType: "gram" },
  { id: 9, name: "COCOA BEAN CHOCOLATE", basePrice: 65, description: "Pure Cocoa Bean Chocolate", image: "/images/chocolate/cocoabean.jpg", priceType: "gram" },
  { id: 10, name: "BAYTIN", basePrice: 70, description: "Baytin Chocolate", image: "/images/chocolate/baytin.jpg", priceType: "gram" },
  { id: 11, name: "TRUFFLE BALLS", basePrice: 70, description: "Chocolate Truffle Balls", image: "/images/chocolate/truffleballs.jpg", priceType: "gram" },
  { id: 12, name: "LEXUS", basePrice: 70, description: "Lexus Premium Chocolate", image: "/images/chocolate/lexus.jpg", priceType: "gram" },
  { id: 13, name: "LOPPYS", basePrice: 70, description: "Loppys Chocolate", image:"/images/chocolate/loppys.jpg", priceType: "gram" },
  { id: 14, name: "FONDELLA", basePrice: 70, description: "Fondella Chocolate", image: "/images/chocolate/fondella.jpg", priceType: "gram" },
  { id: 15, name: "MADEX", basePrice: 75, description: "Madex Premium", image: "/images/chocolate/madex.jpg", priceType: "gram" },
 { id: 18, name: "AKSU", basePrice: 75, description: "Aksu Chocolate", image: "/images/chocolate/aksu.jpg", priceType: "gram" },
  { id: 19, name: "HANDMADE", basePrice: 75, description: "Handmade Chocolate", image: "/images/chocolate/handmade.jpg", priceType: "gram" },
  { id: 20, name: "MARISELLA", basePrice: 80, description: "Marisella Premium", image: "/images/chocolate/marisella.jpg", priceType: "gram" },
  { id: 21, name: "SORAY", basePrice: 60, description: "Soray Chocolate", image: "/images/chocolate/soray.jpg", priceType: "gram" },
  { id: 22, name: "BOYS", basePrice: 60, description: "Boys Special Chocolate", image: "/images/chocolate/boys.jpg", priceType: "gram" },
  { id: 23, name: "GIRLS", basePrice: 60, description: "Girls Special Chocolate", image: "/images/chocolate/girls.jpg", priceType: "gram" },
  { id: 24, name: "STONE CANDY", basePrice: 40, description: "Stone Candy", image: "/images/chocolate/stonecandy.jpg", priceType: "gram" },
  { id: 25, name: "LOVE CANDY", basePrice: 25, description: "Love Candy", image: "/images/chocolate/tiffany_deluxe.jpg", priceType: "gram" },
  { id: 26, name: "LADIO DATES CHOCOLATE", basePrice: 120, description: "Ladio Dates Chocolate", image: "/images/chocolate/ladiodates.jpg", priceType: "gram" },
  { id: 27, name: "SALSA DARK DATES CHOCOLATE", basePrice: 110, description: "Salsa Dark Dates Chocolate", image:"/images/chocolate/salsa2.jpg", priceType: "gram" },
  { id: 28, name: "SALSA YELLOW BROWN DATES CHOCOLATE", basePrice: 110, description: "Salsa Yellow Brown Dates", image: "/images/chocolate/salsa1.jpg", priceType: "gram" },
  { id: 29, name: "SALSA YELLOW DATES CHOCOLATE", basePrice: 110, description: "Salsa Yellow Dates", image: "/images/chocolate/salsa5.jpg", priceType: "gram" },
  { id: 30, name: "SALSA GOLD DATES CHOCOLATE", basePrice: 110, description: "Salsa Gold Dates", image: "/images/chocolate/salsa3.jpg", priceType: "gram" },
  { id: 31, name: "SALSA WHITE DATES CHOCOLATE", basePrice: 110, description: "Salsa White Dates", image: "/images/chocolate/salsa6.jpg", priceType: "gram" },
  { id: 32, name: "SALSA VALETINE RED DATES CHOCOLATE", basePrice: 110, description: "Salsa Valentine Red Dates", image: "/images/chocolate/salsa4.jpg", priceType: "gram" },

  // 33-121: Changed to quantity (basePrice is per unit)
  { id: 33, name: "LOTUS KUNAFA SMALL", basePrice: 50, description: "Lotus Kunafa Small", image: "/images/chocolate/lotus_small.jpg", priceType: "quantity" },
  { id: 34, name: "KUNAFA GOLD", basePrice: 55, description: "Kunafa Gold", image: "/images/chocolate/kunafa_gold.jpg", priceType: "quantity" },
  { id: 35, name: "DUBAI MILAN KUNAFA", basePrice: 400, description: "Dubai Milan Kunafa 45g", image: "/images/chocolate/kunafa_dubai.jpg", priceType: "quantity" },
  { id: 36, name: "KUNAFA CHOCOLATE", basePrice: 500, description: "Kunafa Chocolate 200g", image: "/images/raphotos/kunafa_dubai1.jpg", priceType: "quantity" },
  { id: 37, name: "DREAM DUBAI KUNAFA CHOCOLATE", basePrice: 500, description: "Dream Dubai Kunafa 130g", image:"/images/raphotos/kunafa_yellow.jpg", priceType: "quantity" },
  { id: 38, name: "G3 DUBAI CHOCOLATE GREEN", basePrice: 500, description: "G3 Dubai Chocolate Green 100g", image: "/images/chocolate/kunafa_green.jpg", priceType: "quantity" },
  { id: 39, name: "G3 DUBAI CHOCOLATE", basePrice: 500, description: "G3 Dubai Chocolate 100g", image:"/images/chocolate/kunafa_pistachio.jpg", priceType: "quantity" },
  { id: 40, name: "ARABIAN TREATZ KUNAFA STRAWBERRY", basePrice: 600, description: "Kunafa Strawberry 100g", image: "/images/chocolate/kunafa_arabian.jpg", priceType: "quantity" },
  { id: 41, name: "ARABIAN TREATZ KUNAFA PISTACHIO", basePrice: 600, description: "Kunafa Pistachio 100g", image: "/images/remote/arabian-kunafa-pistachio.jpg", priceType: "quantity" },
  { id: 42, name: "ARABIAN TREATZ KUNAFA MANGO", basePrice: 600, description: "Kunafa Mango 100g", image: "/images/chocolate/kunafa_mango.jpg", priceType: "quantity" },
  { id: 43, name: "KUNAFA LIMITED EDITION", basePrice: 420, description: "Limited Edition 50g", image: "/images/chocolate/kunafa_limited.jpg", priceType: "quantity" },
  { id: 44, name: "MILLENNIUM DARK CHOCOLATE 99%", basePrice: 600, description: "Dark Chocolate 99% 100g", image: "/images/remote/millennium-99-dark.jpg", priceType: "quantity" },
  { id: 45, name: "MILLENNIUM BRUT DARK CHOCOLATE 74%", basePrice: 600, description: "Dark Chocolate 74% 100g", image:"/images/remote/millennium-74-brut.jpg", priceType: "quantity" },
  { id: 46, name: "LINDT DARK CHOCOLATE 70%", basePrice: 600, description: "Lindt Dark 70% 100g", image: "/images/remote/lindt-70-dark.jpg", priceType: "quantity" },
  { id: 47, name: "GALAXY DARK CHOCOLATE", basePrice: 130, description: "Galaxy Dark 36g", image: "/images/remote/galaxy-dark-36g.jpg", priceType: "quantity" },
  { id: 48, name: "GALAXY SMOOTH WHITE", basePrice: 130, description: "Galaxy White 38g", image: "/images/remote/galaxy-smooth-white-38g.jpg", priceType: "quantity" },
  { id: 49, name: "FIDJI CAPPUCCINO", basePrice: 320, description: "Fidji Cappuccino 90g", image:"/images/chocolate/FIDJI_CAPPUCCINO.jpg", priceType: "quantity" },
  { id: 50, name: "FIDJI STRAWBERRY", basePrice: 320, description: "Fidji Strawberry 90g", image: "/images/chocolate/fidiji_strawberry.jpg", priceType: "quantity" },
  { id: 51, name: "FIDJI HAZELNUT", basePrice: 320, description: "Fidji Hazelnut 90g", image: "/images/chocolate/FIDJI_CAPPUCCINO.jpg", priceType: "quantity" },
  { id: 52, name: "KIT KAT DARK CHOCOLATE", basePrice: 220, description: "Kit Kat Dark 150g", image: "/images/remote/kitkat-dark-150g.jpg", priceType: "quantity" },
  { id: 53, name: "KIT KAT DELIGHT", basePrice: 220, description: "Kit Kat Delight 150g", image: "/images/chocolate/kitkatdekight.jpg", priceType: "quantity" },
  { id: 54, name: "SNICKERS 50G", basePrice: 70, description: "Snickers 50g", image: "/images/chocolate/snicker_50.jpg", priceType: "quantity" },
  { id: 55, name: "TWIX 50G", basePrice: 70, description: "Twix 50g", image: "/images/remote/twix-50g.png", priceType: "quantity" },
  { id: 56, name: "KIT KAT 4PCS", basePrice: 90, description: "Kit Kat 4pcs 41.5g", image: "/images/remote/kitkat-4pcs.jpg", priceType: "quantity" },
  { id: 57, name: "MARS 90", basePrice: 90, description: "Mars 20g", image: "/images/remote/mars-20g.png", priceType: "quantity" },
  { id: 58, name: "SNICKERS CARAMEL", basePrice: 145, description: "Snickers Caramel 42g", image:"/images/chocolate/SNICKERS_CARAMEL.jpg", priceType: "quantity" },
  { id: 59, name: "MILK CHOCOLATE", basePrice: 62, description: "Milk Chocolate", image: "/images/raphotos/milka_normal.jpg", priceType: "quantity" },
  { id: 60, name: "KIT KAT 8PCS PACK", basePrice: 400, description: "Kit Kat 8pcs 141.6g", image: "/images/remote/kitkat-8pcs-pack.jpg", priceType: "quantity" },
  { id: 61, name: "SNICKERS 5PCS PACK", basePrice: 250, description: "Snickers 5pcs 115g", image: "/images/chocolate/snicker_5.jpg", priceType: "quantity" },
  { id: 62, name: "KINDER CARDS 76G", basePrice: 500, description: "Kinder Cards 76g", image: "/images/chocolate/KINDER_CARDS_76g.png", priceType: "quantity" },
  { id: 63, name: "KINDER CARDS 256G", basePrice: 1099, description: "Kinder Cards 256g", image:"/images/chocolate/KINDER_CARDS_256_G.jpg", priceType: "quantity" },
  { id: 64, name: "KINDER CHOCOLATE", basePrice: 25, description: "Kinder Chocolate 14g", image: "/images/chocolate/KINDER_CHOCOLATE.jpg", priceType: "quantity" },
  { id: 65, name: "KINDER CREAMY", basePrice: 30, description: "Kinder Creamy 19g", image: "/images/chocolate/KINDER_CREAMY.jpg", priceType: "quantity" },
  { id: 66, name: "HERSHEY'S EXTRA CREAMY", basePrice: 500, description: "Hershey's Extra Creamy 50g", image: "/images/chocolate/HERSHEY_S_EXTRA_CREAMY.png", priceType: "quantity" },
  { id: 67, name: "HERSHEY'S SPECIAL DARK", basePrice: 500, description: "Hershey's Dark 50g", image: "/images/chocolate/HERSHEY_S_SPECIAL_DARK.jpg", priceType: "quantity" },
  { id: 68, name: "DAIRY MILK WHOLENUT", basePrice: 2000, description: "Dairy Milk Wholenut 300g", image:"/images/chocolate/DAIRY_MILK_CHOCOLATE.jpg", priceType: "quantity" },
  { id: 69, name: "DAIRY MILK TRIPPLE CHOCOLATE", basePrice: 2000, description: "Triple Chocolate 300g", image: "/images/chocolate/DAIRY_MILK_TRIPPLE_CHOCOLATE.jpg", priceType: "quantity" },
  { id: 70, name: "DAIRY MILK CHOCOLATE", basePrice: 2000, description: "Dairy Milk 300g", image:"/images/chocolate/DAIRY_MILK_CHOCOLATE.jpg", priceType: "quantity" },
  { id: 71, name: "KINDER JOY", basePrice: 50, description: "Kinder Joy 20g", image: "/images/remote/kinder-joy-20g.png", priceType: "quantity" },
  { id: 72, name: "TOBLERONE 35G", basePrice: 90, description: "Toblerone 35g", image: "/images/raphotos/kinder_creamy.jpg", priceType: "quantity" },
  { id: 73, name: "DUBAI CHOCOLATE PACKET", basePrice: 1500, description: "Dubai Chocolate 200g", image: "/images/raphotos/toblerone_black.jpg", priceType: "quantity" },
  { id: 74, name: "TOBLERONE MILK CHOCOLATE 100G", basePrice: 325, description: "Toblerone Milk 100g", image:"/images/coco/milk.jpg", priceType: "quantity" },
  { id: 75, name: "TOBLERONE WHITE CHOCOLATE", basePrice: 325, description: "Toblerone White 100g", image: "/images/raphotos/toblerone_almonds.jpg", priceType: "quantity" },
  { id: 76, name: "TOBLERONE SALTED CARAMEL", basePrice: 325, description: "Toblerone Salted Caramel 100g", image: "/images/coco/tobleronesaltedcaramel.jpg", priceType: "quantity" },
  { id: 77, name: "TOBLERONE RAISINS", basePrice: 325, description: "Toblerone Raisins 100g", image: "/images/coco/tobleroneraisins.jpg", priceType: "quantity" },
  { id: 78, name: "TOBLERONE 200G PACKET", basePrice: 1099, description: "Toblerone 200g", image: "/images/coco/tobleronenormal.jpg", priceType: "quantity" },
  { id: 79, name: "DAIM CHOCOLATE PACKET", basePrice: 780, description: "Daim Chocolate 200g", image: "/images/remote/daim-200g.jpg", priceType: "quantity" },
  { id: 80, name: "JEWELS GALAXY CHOCOLATE BOX", basePrice: 1499, description: "Galaxy Jewels 383g", image: "/images/remote/jewels-galaxy-383g.jpg", priceType: "quantity" },
  { id: 81, name: "CHOCO TIDO", basePrice: 20, description: "Choco Tido 18g", image: "/images/remote/choco-tido-18g.png", priceType: "quantity" },
  { id: 82, name: "SAFARI", basePrice: 30, description: "Safari 22g", image: "/images/chocolate/SAFARi.jpg", priceType: "quantity" },
  { id: 83, name: "HERSHEY'S COOKIES AND CREAM", basePrice: 110, description: "Cookies & Cream 40g", image: "/images/raphotos/hershey_cream.jpg", priceType: "quantity" },
  { id: 84, name: "TRUFFE SELECTION CHOCOLATES BOX", basePrice: 150, description: "Truffe Selection 250g", image: "/images/coco/truffe.jpg", priceType: "quantity" },
  { id: 85, name: "BREAK CHOCOLATE", basePrice: 60, description: "Break Chocolate 25g", image:"/images/raphotos/darkchocolate1.jpg", priceType: "quantity" },
  { id: 86, name: "NANI PISTACHIO NOUGAT", basePrice: 59, description: "Pistachio Nougat 40g", image: "/images/raphotos/kinder_creamy.jpg", priceType: "quantity" },
  { id: 87, name: "NANI ALMOND CARAMEL", basePrice: 59, description: "Almond Caramel 40g", image: "/images/coco/almond.jpg", priceType: "quantity" },
  { id: 88, name: "HISS CRISPY WAFER", basePrice: 25, description: "Crispy Wafer 21g", image:"/images/coco/crispywafer.jpg", priceType: "quantity" },
  { id: 89, name: "MALTESERS", basePrice: 140, description: "Maltesers 37g", image: "/images/chocolate/MALTESERS.png", priceType: "quantity" },
  { id: 90, name: "LOACKER CLASIC NAPOLITANER", basePrice: 130, description: "Loacker 45g", image: "/images/chocolate/LOACKER_CLASIC_NAPOLITANER.jpg", priceType: "quantity" },
  { id: 91, name: "M&M CRISPY", basePrice: 130, description: "M&M Crispy 36g", image: "/images/chocolate/m$m_crispy.jpg", priceType: "quantity" },
  { id: 92, name: "M&M PEANUT", basePrice: 130, description: "M&M Peanut 45g", image: "/images/chocolate/m$m_peanut.jpg", priceType: "quantity" },
  { id: 93, name: "M&M CHOCOLATE", basePrice: 130, description: "M&M Chocolate 45g", image: "/images/chocolate/m$m_chocolate.jpg", priceType: "quantity" },
  { id: 94, name: "MILKA OREO", basePrice: 249, description: "Milka Oreo 90g", image: "/images/chocolate/MILKA_OREO.jpg", priceType: "quantity" },
  { id: 95, name: "MILKA STRAWBERRY", basePrice: 240, description: "Milka Strawberry 90g", image: "/images/chocolate/MILKA_STRAWBERRY.jpg", priceType: "quantity" },
  { id: 96, name: "MILKA ALPINE MILK", basePrice: 240, description: "Milka Alpine 98g", image: "/images/chocolate/MILKA_ALPINE.jpg", priceType: "quantity" },
  { id: 97, name: "MILKA BUBBLY", basePrice: 249, description: "Milka Bubbly 90g", image: "/images/chocolate/MILKA_BUBBLY_ALPINE_MILK.jpg", priceType: "quantity" },
  { id: 98, name: "MILKA CARAMEL", basePrice: 240, description: "Milka Caramel 95g", image:"/images/chocolate/MILKA_CARAMEL.jpg", priceType: "quantity" },
  { id: 99, name: "CADBURY DAIRY MILK HAZELNUT", basePrice: 420, description: "Hazelnut 130g", image: "/images/chocolate/dairy_hazel.jpg", priceType: "quantity" },
  { id: 100, name: "CADBURY BLACK FOREST", basePrice: 420, description: "Black Forest 130g", image: "/images/chocolate/dairy_blackforest.jpg", priceType: "quantity" },
  { id: 101, name: "CADBURY MILK CHOCOLATE", basePrice: 420, description: "Milk Chocolate 135g", image: "/images/chocolate/dairy_susu.jpg", priceType: "quantity" },
  { id: 102, name: "DAIRY MILK ROAST ALMOND", basePrice: 420, description: "Roast Almond 130g", image: "/images/chocolate/dairy_almond.jpg", priceType: "quantity" },
  { id: 103, name: "CADBURY BUBBLY", basePrice: 290, description: "Bubbly 87g", image: "/images/chocolate/dairy_bubbly.jpg", priceType: "quantity" },
  { id: 104, name: "RAFFAELLO", basePrice: 160, description: "Raffaello 30g", image: "/images/chocolate/rafello.jpg", priceType: "quantity" },
  { id: 105, name: "BOUNTY BAR", basePrice: 101, description: "Bounty 57g", image: "/images/remote/bounty-57g.jpg", priceType: "quantity" },
  { id: 106, name: "KOPIKO CAPPUCCINO CHOCOLATE", basePrice: 499, description: "Kopiko Cappuccino 400g", image: "/images/raphotos/kopiko_chocolate.jpg", priceType: "quantity" },
  { id: 107, name: "KOPIKO COFFEE CHOCOLATE", basePrice: 499, description: "Kopiko Coffee 400g", image: "/images/raphotos/kopiko.jpg", priceType: "quantity" },
  { id: 108, name: "LEXUS COCONUT CREAM CHOCOLATE", basePrice: 699, description: "Coconut Cream 800g", image:"/images/chocolate/lexus_coc.jpg", priceType: "quantity" },
  { id: 109, name: "LEXUS PEANUT CREAM CHOCOLATE", basePrice: 699, description: "Peanut Cream 800g", image: "/images/chocolate/lexus_co.jpg", priceType: "quantity" },
  { id: 110, name: "SNICKERS MINIS PACKET", basePrice: 2000, description: "Snickers Minis 500g", image: "/images/chocolate/snicker_mini.jpg", priceType: "quantity" },
  { id: 111, name: "MARS MINIS PACKET", basePrice: 1299, description: "Mars Minis 500g", image: "/images/chocolate/mars_mini.jpg", priceType: "quantity" },
  { id: 112, name: "CELEBRATION TRAVEL RETAIL", basePrice: 1699, description: "Celebration 450g", image: "/images/chocolate/celebration.jpg", priceType: "quantity" },
  { id: 113, name: "KINDER BUENO MINI", basePrice: 1499, description: "Kinder Bueno Mini 400g", image: "/images/chocolate/kinder_bun.jpg", priceType: "quantity" },
  { id: 114, name: "LADIO CAMEL CHOCOLATE DATES", basePrice: 750, description: "Camel Dates 500g", image: "/images/chocolate/ladio.jpg", priceType: "quantity" },
  { id: 115, name: "TWIX MINIS", basePrice: 1299, description: "Twix Minis 500g", image: "/images/chocolate/twin.jpg", priceType: "quantity" },
  { id: 116, name: "SAPPHIRE ALMONDS ASSORTMENT", basePrice: 500, description: "Almonds Mix 175g", image: "/images/chocolate/sapphire_ass.jpg", priceType: "quantity" },
  { id: 117, name: "SAPPHIRE ALMOND 175G", basePrice: 500, description: "Almond 175g", image: "/images/chocolate/SAPPHIRE_ALMOND_COVERED_IN_MILK_CHOCO.jpg", priceType: "quantity" },
  { id: 118, name: "SAPPHIRE ALMOND 350G", basePrice: 500, description: "Almond 350g", image: "/images/chocolate/sapphire_al.jpg", priceType: "quantity" },
  { id: 119, name: "SAPPHIRE ALMOND 90G", basePrice: 275, description: "Almond 90g", image: "/images/chocolate/SAPPHIRE_ALMOND_COVERED_IN_MILK_CHOCO.png", priceType: "quantity" },
  { id: 120, name: "NESTLE QUALITY STREET", basePrice: 1900, description: "Quality Street 900g", image: "/images/chocolate/sapphire_ns.jpg", priceType: "quantity" },
  { id: 121, name: "SAPPHIRE ALMOND HEART SHAPED", basePrice: 475, description: "Heart Shaped 160g", image: "/images/chocolate/SAPPHIRE_ALMOND_COVERED_WITH_MILK_CHOCO_HEART_SHAPED.jpg", priceType: "quantity" },
];

// Additional products (no duplicates)
const additionalChocolateProducts: ChocolateProduct[] = [
  { id: 122, name: "DIGESTIVE ORIGINAL", basePrice: 45, description: "Digestive Original 30g", priceType: "quantity", image: "/images/chocolate/digestive_og.jpg" },
  { id: 123, name: "DIGESTIVE CARAMEL", basePrice: 49, description: "Digestive Caramel 30g", priceType: "quantity", image: "/images/chocolate/digestive_ca.jpg" },
  { id: 124, name: "MINIS", basePrice: 1299, description: "Minis 500g", priceType: "quantity", image: "/images/chocolate/minis.jpg" },
  { id: 125, name: "DIGESTIVE ORIGINAL 400g", basePrice: 349, description: "Digestive Original 400g", priceType: "quantity", image: "/images/chocolate/DIGESTIVE_ORIGINAL_400g.jpg" },
  { id: 126, name: "SNICKERS 11.5G", basePrice: 10, description: "Snickers 11.5g", priceType: "quantity", image: "/images/chocolate/snickers_11g.jpg" },
  { id: 127, name: "SNICKERS 20G", basePrice: 20, description: "Snickers 20g", priceType: "quantity", image: "/images/chocolate/snickers_20g.png" },
  { id: 128, name: "GO FRESH", basePrice: 30, description: "Go Fresh 20g", priceType: "quantity", image: "/images/chocolate/gofresh.jpg" },
  { id: 129, name: "SNICKERS 40G", basePrice: 50, description: "Snickers 40g", priceType: "quantity", image: "/images/chocolate/snickers_40g.jpg" },
  { id: 130, name: "FRUIT TELLA GRAPES", basePrice: 59, description: "Fruit Tella Grapes", priceType: "quantity", image: "/images/chocolate/fruitella_grapes.jpg" },
  { id: 131, name: "FRUIT TELLA ORANGE", basePrice: 59, description: "Fruit Tella Orange", priceType: "quantity", image: "/images/chocolate/fruitella_mango.jpg" },
  { id: 132, name: "FRUIT TELLA STRAWBERRY AND BANANA", basePrice: 59, description: "Fruit Tella Strawberry and Banana", priceType: "quantity", image: "/images/chocolate/fruitella_straw.jpg" },
  { id: 133, name: "HOT FIRE SOFFTY", basePrice: 149, description: "Hot Fire Soffty 120g", priceType: "quantity", image: "/images/chocolate/hot_fire_soffty.jpg" },
  { id: 134, name: "JUICY DROPS PEACH", basePrice: 15, description: "Juicy Drops Peach 17.5g", priceType: "quantity", image: "/images/chocolate/juice_drops.jpg" },
  { id: 135, name: "JUICY DROPS WATERMELON", basePrice: 15, description: "Juicy Drops Watermelon 17.5g", priceType: "quantity", image: "/images/chocolate/juice_watermelon.jpg" },
  { id: 136, name: "CHUPA CHUPS", basePrice: 99, description: "Chupa Chups 11g", priceType: "quantity", image: "/images/chocolate/chupa.jpg" },
  { id: 137, name: "HUBBA BUBBA SNAPPY STRAWBERRY", basePrice: 199, description: "Hubba Bubba Snappy Strawberry 56g", priceType: "quantity", image: "/images/chocolate/HUBBA_BUBBA_FANCY_FRUIT.png" },
  { id: 138, name: "HUBBA BUBBA FANCY FRUIT", basePrice: 199, description: "Hubba Bubba Fancy Fruit 56g", priceType: "quantity", image: "/images/chocolate/HUBBA_BUBBA_SNAPPY_STRAWBERRY.jpg" },
  { id: 139, name: "BATOOK SPECIAL MINT", basePrice: 15, description: "Batook Special Mint 12.5g", priceType: "quantity", image: "/images/chocolate/BATOOK_SPECIAL_MINT.jpg" },
  { id: 140, name: "BATOOK BANANA", basePrice: 15, description: "Batook Banana 12.5g", priceType: "quantity", image: "/images/chocolate/batook_banana.jpg" },
  { id: 141, name: "BATOOK CARDAMOM", basePrice: 15, description: "Batook Cardamom 12.5g", priceType: "quantity", image: "/images/chocolate/BATOOK_carda.jpg" },
  { id: 142, name: "BATOOK GRAPES", basePrice: 15, description: "Batook Grapes 12.5g", priceType: "quantity", image: "/images/chocolate/BATOOK_GRAPES.png" },
  { id: 143, name: "IMPACT MINTS PINEAPPLE", basePrice: 149, description: "Impact Mints Pineapple 14g", priceType: "quantity", image: "/images/chocolate/impact_mints_pineapple.jpg" },
  { id: 144, name: "IMPACT MINTS PEACH", basePrice: 149, description: "Impact Mints Peach 14g", priceType: "quantity", image: "/images/chocolate/impact_mints_peach.jpg" },
  { id: 145, name: "IMPACT MINTS STRAWBERRY", basePrice: 149, description: "Impact Mints Strawberry 14g", priceType: "quantity", image: "/images/chocolate/IMPACT_MINT_STRAW.jpg" },
  { id: 146, name: "MENTOS MINT", basePrice: 25, description: "Mentos Mint 29.7g", priceType: "quantity", image: "/images/chocolate/mentos_mint.jpg" },
  { id: 147, name: "MENTOS RAINBOW", basePrice: 25, description: "Mentos Rainbow 29.7g", priceType: "quantity", image: "/images/chocolate/mentos_rainbow.jpg" },
  { id: 148, name: "EXTRA SPEARMINT", basePrice: 60, description: "Extra Spearmint 14g", priceType: "quantity", image: "/images/chocolate/extra_spearmint.jpg" },
  { id: 149, name: "EXTRA PEPPER MINT", basePrice: 60, description: "Extra Pepper Mint 14g", priceType: "quantity", image: "/images/chocolate/extra_pepper.jpg" },
  { id: 150, name: "EXTRA WATERMELON", basePrice: 60, description: "Extra Watermelon 14g", priceType: "quantity", image: "/images/chocolate/extra_water.jpg" },
  { id: 151, name: "EXTRA STRAWBERRY", basePrice: 60, description: "Extra Strawberry 14g", priceType: "quantity", image: "/images/chocolate/extra_strawberry.jpg" },
];

// More chocolate products
const moreChocolateProducts: ChocolateProduct[] = [
  { id: 152, name: "FORTUNA T8 HEART", basePrice: 220, description: "Fortuna T8 Heart 80g", priceType: "quantity", image: "/images/chocolate/fortuna_t8.jpg" },
  { id: 153, name: "FORTUNA T12 HEART", basePrice: 300, description: "Fortuna T12 Heart 120g", priceType: "quantity", image: "/images/morechocolate/fortuna-t12-heart.jpg" },
  { id: 154, name: "FORTUNA T5 PANDA", basePrice: 160, description: "Fortuna T5 Panda 50g", priceType: "quantity", image: "/images/morechocolate/fortuna-t5-panda.jpg" },
  { id: 155, name: "FORTUNA T5 RABBIT", basePrice: 210, description: "Fortuna T5 Rabbit 50g", priceType: "quantity", image: "/images/morechocolate/fortuna-t5-rabbit.webp" },
  { id: 156, name: "FORTUNA T12 RECTANGLE", basePrice: 300, description: "Fortuna T12 Rectangle 120g", priceType: "quantity", image: "/images/chocolate/fortuna_t12.jpg" },
  { id: 157, name: "KAT KAT TAT", basePrice: 40, description: "Kat Kat Tat 20g", priceType: "quantity", image: "/images/morechocolate/kat-kat-tat.jpg" },
  { id: 158, name: "FERRERO ROCHER T16", basePrice: 1499, description: "Ferrero Rocher T16 200g", priceType: "quantity", image: "/images/morechocolate/ferrero-rocher-t16.jpg" },
  { id: 159, name: "KALFANY ASSORTED FRUIT DROPS", basePrice: 490, description: "Kalfany Assorted Fruit Drops 150g", priceType: "quantity", image: "/images/morechocolate/kalfany-assorted-fruit.png" },
  { id: 160, name: "KALFANY CITRUS FRUIT DROPS", basePrice: 490, description: "Kalfany Citrus Fruit Drops 150g", priceType: "quantity", image: "/images/morechocolate/kalfany-citrus-fruit.jpg" },
  { id: 161, name: "KALFANY STRAWBERRY DROPS", basePrice: 490, description: "Kalfany Strawberry Drops 150g", priceType: "quantity", image: "/images/morechocolate/kalfany-strawberry.png" },
  { id: 162, name: "KALFANY FRUIT SELECTION DROPS", basePrice: 490, description: "Kalfany Fruit Selection Drops 150g", priceType: "quantity", image: "/images/morechocolate/kalfany-fruit-selection.png" },
  { id: 163, name: "KALFANY CHERRY DROPS", basePrice: 490, description: "Kalfany Cherry Drops 150g", priceType: "quantity", image: "/images/morechocolate/kalfany-cherry.png" },
  { id: 164, name: "KALFANY COFFEE DROPS", basePrice: 490, description: "Kalfany Coffee Drops 150g", priceType: "quantity", image: "/images/morechocolate/kalfany-coffee.png" },
  { id: 165, name: "MARSHZONE MARSHMALLOW FRIES", basePrice: 150, description: "Marshzone Marshmallow Fries", priceType: "quantity", image: "/images/morechocolate/marshzone-marshmallow-fries.jpg" },
  { id: 166, name: "COCON PUDDING", basePrice: 230, description: "Cocon Pudding 480g", priceType: "quantity", image: "/images/morechocolate/cocon-pudding.jpg" },
  { id: 167, name: "TWIN BURGER", basePrice: 25, description: "Twin Burger 14g", priceType: "quantity", image: "/images/morechocolate/twin-burger.png" },
  { id: 168, name: "GUMMI PIZZA", basePrice: 28, description: "Gummi Pizza 14g", priceType: "quantity", image: "/images/morechocolate/gummi-pizza.jpg" },
  { id: 169, name: "GUMMI PIZZA PACKET", basePrice: 220, description: "Gummi Pizza Packet 96g", priceType: "quantity", image: "/images/morechocolate/gummi-pizza-packet.jpg" },
];

// Even more chocolate products
const evenMoreChocolateProducts: ChocolateProduct[] = [
  { id: 170, name: "MEIJI HELLO PANDA CHOCOLATE BISCUIT", basePrice: 99, description: "Meiji Hello Panda Chocolate Biscuit 22g", priceType: "quantity", image: "/images/chocolate/meiji_choco.jpg" },
  { id: 171, name: "MEIJI HELLO PANDA STRAWBERRY BISCUIT", basePrice: 99, description: "Meiji Hello Panda Strawberry Biscuit 42g", priceType: "quantity", image: "/images/chocolate/meiji_straw.jpg" },
  { id: 172, name: "MEIJI MINI HELLO PANDA CHOCOLATE BISCUIT", basePrice: 49, description: "Meiji Mini Hello Panda Chocolate Biscuit 21g", priceType: "quantity", image: "/images/chocolate/meiji_biscuit.jpg" },
  { id: 173, name: "3D EYE SPINNER", basePrice: 15, description: "3D Eye Spinner 8g", priceType: "quantity", image: "/images/chocolate/3D_EYE_SPINNER.jpg" },
  { id: 174, name: "EYE BALL GUMMY SOFT CANDY", basePrice: 10, description: "Eye Ball Gummy Soft Candy 10g", priceType: "quantity", image: "/images/chocolate/EYE_BALL_GUMMY_SOFT_CANDY.jpg" },
  { id: 175, name: "QUAKER WHOLE OATS", basePrice: 700, description: "Quaker Whole Oats 900g", priceType: "quantity", image: "/images/chocolate/quaker.jpg" },
  { id: 176, name: "NUTELLA HAZELNUT SPREAD WITH COCOA 180G", basePrice: 250, description: "Nutella Hazelnut Spread with Cocoa 180g", priceType: "quantity", image: "/images/chocolate/nutella_ha.jpg" },
  { id: 177, name: "NUTELLA HAZELNUT SPREAD WITH COCOA 350G", basePrice: 450, description: "Nutella Hazelnut Spread with Cocoa 350g", priceType: "quantity", image: "/images/chocolate/nutella_sp.jpg" },
  { id: 178, name: "ALMARAI CREAMY TASTE 200G", basePrice: 460, description: "Almarai Creamy Taste 200g", priceType: "quantity", image: "/images/chocolate/ALMARAI_CREAMY_TASTE.jpg" },
  { id: 179, name: "ALMARAI CREAMY TASTE 500G", basePrice: 899, description: "Almarai Creamy Taste 500g", priceType: "quantity", image: "/images/chocolate/ALMARAI_CREAMY_TASTE.jpg" },
  { id: 180, name: "BISCOFF SMOOTH", basePrice: 699, description: "Biscoff Smooth 400g", priceType: "quantity", image: "/images/chocolate/BISCOFF_SMOOTH.jpg" },
  { id: 181, name: "SONYA PEANUT BUTTER CRUNCHY", basePrice: 260, description: "Sonya Peanut Butter Crunchy 510g", priceType: "quantity", image: "/images/chocolate/SONYA_PEANUT_BUTTER_CRUNCHY.png" },
  { id: 182, name: "SONYA PEANUT BUTTER CREAMY", basePrice: 260, description: "Sonya Peanut Butter Creamy 510g", priceType: "quantity", image: "/images/chocolate/SONYA_PEANUT_BUTTER_CREAMY.png" },
  { id: 183, name: "NUTS CRISP", basePrice: 399, description: "Nuts Crisp 400g", priceType: "quantity", image: "/images/chocolate/nuts_cr.jpg" },
  { id: 184, name: "COFFEE MATE", basePrice: 380, description: "Coffee Mate 400g", priceType: "quantity", image: "/images/chocolate/COFFEE_MATE.jpeg" },
  { id: 185, name: "HEINZ APPLE CIDER VINEGAR", basePrice: 480, description: "Heinz Apple Cider Vinegar 500ml", priceType: "quantity", image: "/images/chocolate/HEINZ_APPLE_CIDER_VINEGAR.png" },
  { id: 186, name: "HERSHEY'S WHOLE ALMONDS COVERED IN CREAMY MILK CHOCOLATE", basePrice: 500, description: "Hershey's Whole Almonds Covered in Creamy Milk Chocolate 60g", priceType: "quantity", image: "/images/chocolate/HERSHEY_S_WHOLE_ALMONDS_COVERED_IN_CREAMY_MILK_CHOCOLATE.jpg" },
  { id: 187, name: "CHOKI CHOKI", basePrice: 49, description: "Choki Choki 27g", priceType: "quantity", image: "/images/chocolate/CHOKI_CHOKI.jpg" },
  { id: 188, name: "MEIJI YAN YAN STRAWBERRY BISCUIT WITH STRAWBERRY CREAM", basePrice: 110, description: "Meiji Yan Yan Strawberry Biscuit with Strawberry Cream 40g", priceType: "quantity", image: "/images/chocolate/yanyan_strawberry.jpg" },
  { id: 189, name: "MEIJI YAN YAN CHOCOLATE BISCUIT WITH CHOCOLATE CREAM", basePrice: 110, description: "Meiji Yan Yan Chocolate Biscuit with Chocolate Cream 40g", priceType: "quantity", image: "/images/chocolate/yanyan_chocolate.jpg" },
  { id: 190, name: "OREOGO CHOCOLATE STICK & CREAM DIP", basePrice: 99, description: "Oreogo Chocolate Stick & Cream Dip 40g", priceType: "quantity", image: "/images/chocolate/OREOGO_CHOCOLATE_STICK___CREAM_DIP.jpg" },
  { id: 191, name: "QUICK MILK MAGIC SNIPER SALTED CARAMEL", basePrice: 199, description: "Quick Milk Magic Sniper Salted Caramel 30g", priceType: "quantity", image: "/images/chocolate/QUICK_MILK_MAGIC_SNIPER_SALTED_CARAMEL.jpg" },
  { id: 192, name: "DREAM EXTRA FINE CHOCO BISCUIT", basePrice: 129, description: "Dream Extra Fine Choco Biscuit 80g", priceType: "quantity", image: "/images/chocolate/DREAM_EXTRA_FINE_CHOCO_BISCUIT.jpg" },
  // Tiffany wafer range (135g packs)
  { id: 193, name: "TIFFANY CRUNCH AND CREAMY STRAWBERRY WAFFERS", basePrice: 99, description: "Strawberry flavoured cream wafers (135g)", priceType: "quantity", image: "/images/chocolate/crunch_strawberry.jpg" },
  { id: 194, name: "TIFFANY CRUNCH AND CREAMY CHOCOLATE WAFFERS", basePrice: 99, description: "Chocolate flavoured cream wafers (135g)", priceType: "quantity", image: "/images/chocolate/TIFFANY_CRUNCH_AND_CREAMY_CHOCOLATE_WAFFERS.jpg" },
  { id: 195, name: "TIFFANY CRUNCH AND CREAMY HAZELNUT WAFFERS", basePrice: 99, description: "Hazelnut flavoured cream wafers (135g)", priceType: "quantity", image: "/images/chocolate/crunch_hazlenut.jpg" },
  { id: 196, name: "TIFFANY CRUNCH AND CREAMY ORANGE WAFFERS", basePrice: 99, description: "Orange flavoured cream wafers (135g)", priceType: "quantity", image: "/images/chocolate/TIFFANY_CRUNCH_AND_CREAMY_ORANGE_WAFFERS.jpg" },
  { id: 197, name: "TIFFANY CRUNCH AND CREAMY VANILA WAFFERS", basePrice: 99, description: "Vanilla flavoured cream wafers (135g)", priceType: "quantity", image: "/images/chocolate/tiffany-wafer-vanilla-65g.jpg" },
  // Tiffany wafer range (65g packs)
  { id: 198, name: "TIFFANY CRUNCH AND CREAMY STRAWBERRY WAFFERS 65G", basePrice: 66, description: "Strawberry flavoured cream wafers (65g)", priceType: "quantity", image: "/images/chocolate/crunch_strawberry.jpg" },
  { id: 199, name: "TIFFANY CRUNCH AND CREAMY CHOCOLATE WAFFERS 65G", basePrice: 66, description: "Chocolate flavoured cream wafers (65g)", priceType: "quantity", image: "/images/chocolate/TIFFANY_CRUNCH_AND_CREAMY_CHOCOLATE_WAFFERS.jpg" },
  { id: 200, name: "TIFFANY CRUNCH AND CREAMY HAZELNUT WAFFERS 65G", basePrice: 66, description: "Hazelnut flavoured cream wafers (65g)", priceType: "quantity", image: "/images/chocolate/crunch_hazlenut.jpg" },
  { id: 201, name: "TIFFANY CRUNCH AND CREAMY ORANGE WAFFERS 65G", basePrice: 66, description: "Orange flavoured cream wafers (65g)", priceType: "quantity", image: "/images/chocolate/TIFFANY_CRUNCH_AND_CREAMY_ORANGE_WAFFERS.jpg" },
  { id: 202, name: "TIFFANY CRUNCH AND CREAMY VANILA WAFFERS 65G", basePrice: 66, description: "Vanilla flavoured cream wafers (65g)", priceType: "quantity", image: "/images/chocolate/tiffany-wafer-vanilla-65g.jpg" },
  // Oreo wafer
  { id: 203, name: "OREO DUTCH COCOA WAFFER", basePrice: 125, description: "Oreo Dutch cocoa wafer (117g)", priceType: "quantity", image:"/images/chocolate/OREO_DUTCH_COCOA_WAFFER.jpg" },
];

// Merge without duplicates
const allChocolateProducts: ChocolateProduct[] = [
  ...chocolateProducts,
  ...additionalChocolateProducts.filter(
    (prod) => !chocolateProducts.some((p) => p.name.toLowerCase() === prod.name.toLowerCase())
  ),
  ...moreChocolateProducts.filter(
    (prod) =>
      !chocolateProducts.some((p) => p.name.toLowerCase() === prod.name.toLowerCase()) &&
      !additionalChocolateProducts.some((p) => p.name.toLowerCase() === prod.name.toLowerCase())
  ),
  ...evenMoreChocolateProducts.filter(
    (prod) =>
      !chocolateProducts.some((p) => p.name.toLowerCase() === prod.name.toLowerCase()) &&
      !additionalChocolateProducts.some((p) => p.name.toLowerCase() === prod.name.toLowerCase()) &&
      !moreChocolateProducts.some((p) => p.name.toLowerCase() === prod.name.toLowerCase())
  ),
];

const features = [
  { icon: Package, title: "Premium Quality", description: "Handcrafted with finest ingredients" },
  { icon: Truck, title: "Fast Delivery", description: "Delivered fresh to your doorstep" },
  { icon: Shield, title: "100% Authentic", description: "Guaranteed original products" },
  { icon: Award, title: "Award Winning", description: "Recognized for excellence" },
];

const benefits = [
  { icon: Sparkles, title: "Rich Flavor", description: "Indulgent taste experience" },
  { icon: Apple, title: "Premium Ingredients", description: "Finest quality cocoa" },
  { icon: Heart, title: "Perfect Gift", description: "Ideal for any occasion" },
];

const Chocolate = () => {
  const [selectedGrams, setSelectedGrams] = useState<Record<number, number>>({});
  const [selectedQuantity, setSelectedQuantity] = useState<Record<number, number>>({});
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const setGramsFor = (productId: number, grams: number) => {
    setSelectedGrams((prev) => ({ ...prev, [productId]: grams }));
  };

  const setQuantityFor = (productId: number, qty: number) => {
    setSelectedQuantity((prev) => ({ ...prev, [productId]: Math.max(1, qty) }));
  };

  const incrementQuantity = (productId: number) => {
    const current = selectedQuantity[productId] || 1;
    if (current < 100) setQuantityFor(productId, current + 1);
  };

  const decrementQuantity = (productId: number) => {
    const current = selectedQuantity[productId] || 1;
    if (current > 1) setQuantityFor(productId, current - 1);
  };

  const getPrice = (product: ChocolateProduct, gramsOrQty?: number) => {
    if (product.priceType === "quantity") {
      const q = gramsOrQty || 1;
      return product.basePrice * q;
    } else {
      const g = gramsOrQty || 100;
      return Math.round(product.basePrice * (g / 100));
    }
  };

  const contactWhatsApp = (productId: number) => {
    const product = chocolateProducts.find((p) => p.id === productId);
    if (!product) return;

    let message = "";
    if (product.priceType === "quantity") {
      const qty = selectedQuantity[productId] || 1;
      const price = getPrice(product, qty);
      message = `Hello, I'm interested in ${product.name} - Quantity: ${qty} (Total: ₹${price}). Please assist with ordering.`;
    } else {
      const grams = selectedGrams[productId] || 100;
      const price = getPrice(product, grams);
      message = `Hello, I'm interested in ${product.name} - ${grams}g (Total: ₹${price}). Please assist with ordering.`;
    }

    const url = `https://wa.me/918888095594?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-800 to-red-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20">
              <Award className="h-4 w-4 text-amber-300" />
              <span className="text-sm font-medium">Premium Artisan Chocolates</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-orange-200 to-amber-200 bg-clip-text text-transparent">
              Indulge in Pure Bliss
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience the finest handcrafted chocolates made with premium ingredients and passion
            </p>
            <Button
              size="lg"
              className="bg-white text-amber-900 hover:bg-amber-50 shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 rounded-full px-8 text-lg font-semibold group"
            >
              Explore Collection
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-pulse">🍫</div>
        <div className="absolute bottom-20 right-20 text-5xl opacity-20 animate-pulse delay-300">🍬</div>
        <div className="absolute top-1/2 right-10 text-4xl opacity-20 animate-pulse delay-700">🎁</div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-200"
                >
                  <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl p-3 w-fit mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1 text-sm md:text-base">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-amber-900 to-orange-900 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
              Why Choose Our Chocolates?
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Indulge in premium quality and rich flavors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-full p-4 w-fit mx-auto mb-4">
                    <Icon className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Gallery */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-900 to-orange-900 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
            Our Chocolate Collection
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Discover our curated selection of premium chocolates, each crafted with love and the finest ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allChocolateProducts.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-amber-200 relative"
            >
              <button
                onClick={() => toggleFavorite(product.id)}
                className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <Heart
                  className={`h-5 w-5 transition-all duration-300 ${
                    favorites.has(product.id) ? "fill-red-500 text-red-500" : "text-slate-400 hover:text-red-500"
                  }`}
                />
              </button>

              <div className="aspect-square overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-700 dark:to-slate-600 relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]"></div>
                <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative z-10">
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="max-w-[75%] max-h-[75%] object-contain" />
                  ) : (
                    <div className="text-8xl">🍫</div>
                  )}
                </div>
              </div>

              <CardContent className="p-5">
                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                <p className="text-sm text-slate-600 mb-2">{product.description}</p>

                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">
                    ₹{product.priceType === "quantity" ? getPrice(product, selectedQuantity[product.id] || 1) : getPrice(product, selectedGrams[product.id] || 100)}
                  </span>
                  <span className="text-sm text-slate-500">
                    {product.priceType === "quantity" ? "/unit" : `/${(selectedGrams[product.id] || 100) >= 1000 ? `${(selectedGrams[product.id] || 100) / 1000}kg` : `${selectedGrams[product.id] || 100}g`}`}
                  </span>
                </div>
              </CardContent>

              <CardFooter className="p-5 pt-0 flex flex-col gap-3">
                {product.priceType === "quantity" ? (
                  // Quantity selector for products 33-121
                  <div className="flex items-center gap-2 w-full">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => decrementQuantity(product.id)}
                      className="h-10 w-10 rounded-full hover:bg-amber-50 border-2"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>

                    <div className="flex-1 text-center">
                      <span className="text-xl font-bold text-slate-900">
                        {selectedQuantity[product.id] || 1}
                      </span>
                    </div>

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => incrementQuantity(product.id)}
                      className="h-10 w-10 rounded-full hover:bg-amber-50 border-2"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  // Gram selector for products 1-32
                  <div className="flex items-center gap-2 w-full flex-wrap">
                    {[100, 200, 250, 500, 1000].map((g) => {
                      const isSelected = (selectedGrams[product.id] || 100) === g;
                      return (
                        <Button
                          key={g}
                          variant={isSelected ? undefined : "outline"}
                          onClick={() => setGramsFor(product.id, g)}
                          className={`h-10 px-3 rounded-full text-sm font-semibold ${
                            isSelected ? "bg-amber-600 text-white" : ""
                          }`}
                        >
                          {g >= 1000 ? `${g / 1000}kg` : `${g}g`}
                        </Button>
                      );
                    })}
                  </div>
                )}

                <Button
                  onClick={() => contactWhatsApp(product.id)}
                  className="w-full rounded-full font-semibold bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Contact WhatsApp
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Sweet Gifts for Every Occasion</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Perfect for celebrations, thank you gifts, or just to brighten someone's day
              </p>
              <Button size="lg" className="bg-white text-amber-900 hover:bg-amber-50 shadow-xl rounded-full px-8 text-lg font-semibold">
                Shop Gift Sets
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Chocolate;
