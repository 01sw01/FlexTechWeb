// TODO: remove mock functionality
// Mock data for the e-commerce prototype

import charger1 from "@assets/stock_images/mobile_phone_accesso_df5e9c75.jpg";
import charger2 from "@assets/stock_images/mobile_phone_accesso_e9c8edb5.jpg";
import charger3 from "@assets/stock_images/mobile_phone_accesso_45a40fb3.jpg";
import charger4 from "@assets/stock_images/mobile_phone_accesso_0ba7d756.jpg";
import charger5 from "@assets/stock_images/mobile_phone_accesso_3b11ed84.jpg";

import case1 from "@assets/stock_images/smartphone_case_prot_4f2c0694.jpg";
import case2 from "@assets/stock_images/smartphone_case_prot_b30ff142.jpg";
import case3 from "@assets/stock_images/smartphone_case_prot_b17b212c.jpg";
import case4 from "@assets/stock_images/smartphone_case_prot_b059e665.jpg";
import case5 from "@assets/stock_images/smartphone_case_prot_341c7c65.jpg";

import headphone1 from "@assets/stock_images/headphones_earbuds_m_7038256d.jpg";
import headphone2 from "@assets/stock_images/headphones_earbuds_m_01441da6.jpg";
import headphone3 from "@assets/stock_images/headphones_earbuds_m_fa64ce62.jpg";
import headphone4 from "@assets/stock_images/headphones_earbuds_m_5c87d8b2.jpg";
import headphone5 from "@assets/stock_images/headphones_earbuds_m_d05e8966.jpg";

import powerbank1 from "@assets/stock_images/power_bank_portable__285a25a3.jpg";
import powerbank2 from "@assets/stock_images/power_bank_portable__ce85b9a1.jpg";
import powerbank3 from "@assets/stock_images/power_bank_portable__3999cb4f.jpg";
import powerbank4 from "@assets/stock_images/power_bank_portable__8ac937ed.jpg";
import powerbank5 from "@assets/stock_images/power_bank_portable__3d4477de.jpg";

import cable1 from "@assets/stock_images/usb_cable_lightning__fa457c72.jpg";
import cable2 from "@assets/stock_images/usb_cable_lightning__0685ebb0.jpg";
import cable3 from "@assets/stock_images/usb_cable_lightning__621c7026.jpg";
import cable4 from "@assets/stock_images/usb_cable_lightning__729837a4.jpg";
import cable5 from "@assets/stock_images/usb_cable_lightning__f4b4adf5.jpg";

import hero1 from "@assets/stock_images/mobile_phone_accesso_dba05bdc.jpg";
import hero2 from "@assets/stock_images/smartphone_technolog_ff7d483e.jpg";
import hero3 from "@assets/stock_images/mobile_phone_accesso_cbf2cad1.jpg";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  inStock: boolean;
  stockQuantity: number;
  isBestseller?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  features: string[];
  specifications: Record<string, string>;
  description: string;
  sku: string;
  tags: string[];
  status: 'active' | 'inactive' | 'draft';
  dateAdded: string;
  views: number;
  sales: number;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Fast Wireless Charger 15W',
    brand: 'TechPower',
    category: 'Accessories',
    subcategory: 'Chargers',
    price: 29.99,
    originalPrice: 49.99,
    discount: 40,
    rating: 4.5,
    reviewCount: 128,
    images: [charger1],
    inStock: true,
    stockQuantity: 45,
    isBestseller: true,
    features: ['15W Fast Charging', 'Qi Compatible', 'LED Indicator'],
    specifications: { 'Power': '15W', 'Compatibility': 'iPhone, Samsung, Qi-enabled' },
    description: 'High-speed wireless charging pad with LED indicator.',
    sku: 'WC-15W-001',
    tags: ['wireless', 'fast charging'],
    status: 'active',
    dateAdded: '2024-01-15',
    views: 1250,
    sales: 89
  },
  {
    id: '2',
    name: 'Protective Silicone Case',
    brand: 'CaseGuard',
    category: 'Accessories',
    subcategory: 'Cases',
    price: 12.99,
    rating: 4.2,
    reviewCount: 95,
    images: [case1],
    inStock: true,
    stockQuantity: 120,
    isNew: true,
    features: ['Shockproof', 'Slim Design', 'Multiple Colors'],
    specifications: { 'Material': 'Silicone', 'Protection': 'Military Grade' },
    description: 'Durable silicone case with military-grade protection.',
    sku: 'SC-PRO-002',
    tags: ['case', 'protective'],
    status: 'active',
    dateAdded: '2024-03-01',
    views: 850,
    sales: 67
  },
  {
    id: '3',
    name: 'Wireless Earbuds Pro',
    brand: 'AudioMax',
    category: 'Accessories',
    subcategory: 'Headphones',
    price: 79.99,
    originalPrice: 129.99,
    discount: 38,
    rating: 4.8,
    reviewCount: 245,
    images: [headphone1],
    inStock: true,
    stockQuantity: 32,
    isBestseller: true,
    isFeatured: true,
    features: ['Active Noise Cancellation', '30hr Battery', 'Touch Controls'],
    specifications: { 'Battery Life': '30 hours', 'Bluetooth': '5.3', 'Water Resistance': 'IPX4' },
    description: 'Premium wireless earbuds with ANC and superior sound quality.',
    sku: 'WE-PRO-003',
    tags: ['wireless', 'earbuds', 'anc'],
    status: 'active',
    dateAdded: '2024-02-10',
    views: 2100,
    sales: 156
  },
  {
    id: '4',
    name: '20000mAh Power Bank',
    brand: 'PowerCell',
    category: 'Accessories',
    subcategory: 'Power Banks',
    price: 39.99,
    rating: 4.6,
    reviewCount: 178,
    images: [powerbank1],
    inStock: true,
    stockQuantity: 58,
    features: ['20000mAh Capacity', 'Fast Charge', '2 USB Ports'],
    specifications: { 'Capacity': '20000mAh', 'Ports': '2x USB-A, 1x USB-C', 'Fast Charging': 'Yes' },
    description: 'High-capacity portable charger with dual USB ports.',
    sku: 'PB-20K-004',
    tags: ['power bank', 'fast charging'],
    status: 'active',
    dateAdded: '2024-01-20',
    views: 980,
    sales: 92
  },
  {
    id: '5',
    name: 'USB-C to Lightning Cable 2m',
    brand: 'ConnectPro',
    category: 'Accessories',
    subcategory: 'Cables',
    price: 15.99,
    originalPrice: 24.99,
    discount: 36,
    rating: 4.3,
    reviewCount: 67,
    images: [cable1],
    inStock: true,
    stockQuantity: 200,
    features: ['2m Length', 'Fast Charging', 'Durable Braided'],
    specifications: { 'Length': '2 meters', 'Connector': 'USB-C to Lightning', 'Durability': 'Braided' },
    description: 'Premium braided cable for fast charging and data transfer.',
    sku: 'CB-2M-005',
    tags: ['cable', 'usb-c', 'lightning'],
    status: 'active',
    dateAdded: '2024-02-15',
    views: 650,
    sales: 124
  },
  {
    id: '6',
    name: '3-in-1 Charging Station',
    brand: 'TechPower',
    category: 'Accessories',
    subcategory: 'Chargers',
    price: 49.99,
    rating: 4.7,
    reviewCount: 89,
    images: [charger2],
    inStock: true,
    stockQuantity: 28,
    isFeatured: true,
    features: ['Charges 3 Devices', 'Foldable Design', 'Travel Friendly'],
    specifications: { 'Devices': '3 simultaneous', 'Input': 'USB-C', 'Output': '18W total' },
    description: 'Compact 3-in-1 charging station for phone, watch, and earbuds.',
    sku: 'CS-3IN1-006',
    tags: ['charger', 'multi-device'],
    status: 'active',
    dateAdded: '2024-03-05',
    views: 720,
    sales: 54
  },
  {
    id: '7',
    name: 'Premium Leather Wallet Case',
    brand: 'LuxeCase',
    category: 'Accessories',
    subcategory: 'Cases',
    price: 34.99,
    rating: 4.4,
    reviewCount: 112,
    images: [case2],
    inStock: true,
    stockQuantity: 76,
    features: ['Genuine Leather', 'Card Slots', 'Stand Function'],
    specifications: { 'Material': 'Genuine Leather', 'Card Capacity': '3 cards', 'Kickstand': 'Yes' },
    description: 'Elegant leather wallet case with card storage and stand.',
    sku: 'LC-WALL-007',
    tags: ['case', 'leather', 'wallet'],
    status: 'active',
    dateAdded: '2024-01-25',
    views: 890,
    sales: 71
  },
  {
    id: '8',
    name: 'Sport Bluetooth Headphones',
    brand: 'FitAudio',
    category: 'Accessories',
    subcategory: 'Headphones',
    price: 45.99,
    originalPrice: 69.99,
    discount: 34,
    rating: 4.5,
    reviewCount: 134,
    images: [headphone2],
    inStock: true,
    stockQuantity: 64,
    features: ['Waterproof IPX7', 'Secure Fit', '12hr Battery'],
    specifications: { 'Water Resistance': 'IPX7', 'Battery': '12 hours', 'Bluetooth': '5.0' },
    description: 'Waterproof sport headphones with secure ear hooks.',
    sku: 'FH-SPORT-008',
    tags: ['headphones', 'sport', 'waterproof'],
    status: 'active',
    dateAdded: '2024-02-20',
    views: 1050,
    sales: 83
  },
  {
    id: '9',
    name: 'Mini Portable Power Bank 10000mAh',
    brand: 'PowerCell',
    category: 'Accessories',
    subcategory: 'Power Banks',
    price: 24.99,
    rating: 4.4,
    reviewCount: 156,
    images: [powerbank2],
    inStock: true,
    stockQuantity: 95,
    isNew: true,
    features: ['Ultra Compact', '10000mAh', 'LED Display'],
    specifications: { 'Capacity': '10000mAh', 'Display': 'LED percentage', 'Weight': '180g' },
    description: 'Ultra-compact power bank with LED battery display.',
    sku: 'PB-10K-009',
    tags: ['power bank', 'portable', 'mini'],
    status: 'active',
    dateAdded: '2024-03-10',
    views: 740,
    sales: 98
  },
  {
    id: '10',
    name: 'Magnetic USB-C Cable 3-Pack',
    brand: 'ConnectPro',
    category: 'Accessories',
    subcategory: 'Cables',
    price: 22.99,
    rating: 4.6,
    reviewCount: 87,
    images: [cable2],
    inStock: true,
    stockQuantity: 142,
    isBestseller: true,
    features: ['Magnetic Connection', '3-Pack', 'LED Indicator'],
    specifications: { 'Length': '1 meter each', 'Type': 'Magnetic USB-C', 'LED': 'Yes' },
    description: 'Set of 3 magnetic charging cables with LED indicators.',
    sku: 'CB-MAG-010',
    tags: ['cable', 'magnetic', '3-pack'],
    status: 'active',
    dateAdded: '2024-01-30',
    views: 1120,
    sales: 145
  },
  {
    id: '11',
    name: 'Car Wireless Charger Mount',
    brand: 'AutoCharge',
    category: 'Accessories',
    subcategory: 'Chargers',
    price: 32.99,
    rating: 4.3,
    reviewCount: 76,
    images: [charger3],
    inStock: true,
    stockQuantity: 54,
    features: ['Auto-Clamping', '15W Fast Charge', '360° Rotation'],
    specifications: { 'Power': '15W', 'Mount': 'Vent & Dashboard', 'Sensor': 'Auto-open' },
    description: 'Automatic wireless car charger with secure mount.',
    sku: 'AC-CAR-011',
    tags: ['car charger', 'wireless', 'mount'],
    status: 'active',
    dateAdded: '2024-02-05',
    views: 680,
    sales: 62
  },
  {
    id: '12',
    name: 'Clear Transparent Case',
    brand: 'CaseGuard',
    category: 'Accessories',
    subcategory: 'Cases',
    price: 9.99,
    rating: 4.1,
    reviewCount: 201,
    images: [case3],
    inStock: true,
    stockQuantity: 180,
    features: ['Crystal Clear', 'Anti-Yellow', 'Slim Profile'],
    specifications: { 'Material': 'TPU', 'Thickness': '1.2mm', 'Clarity': 'HD Clear' },
    description: 'Ultra-clear protective case that showcases your phone.',
    sku: 'CG-CLEAR-012',
    tags: ['case', 'clear', 'transparent'],
    status: 'active',
    dateAdded: '2024-03-15',
    views: 1450,
    sales: 187
  },
  {
    id: '13',
    name: 'Gaming Earbuds Low Latency',
    brand: 'GameAudio',
    category: 'Accessories',
    subcategory: 'Headphones',
    price: 59.99,
    originalPrice: 89.99,
    discount: 33,
    rating: 4.7,
    reviewCount: 165,
    images: [headphone3],
    inStock: true,
    stockQuantity: 41,
    isFeatured: true,
    features: ['50ms Low Latency', 'Gaming Mode', 'RGB Lights'],
    specifications: { 'Latency': '50ms', 'Battery': '25 hours', 'RGB': 'Customizable' },
    description: 'Low-latency gaming earbuds with RGB lighting effects.',
    sku: 'GA-GAME-013',
    tags: ['gaming', 'earbuds', 'low latency'],
    status: 'active',
    dateAdded: '2024-02-25',
    views: 1320,
    sales: 109
  },
  {
    id: '14',
    name: 'Solar Power Bank 30000mAh',
    brand: 'EcoPower',
    category: 'Accessories',
    subcategory: 'Power Banks',
    price: 54.99,
    rating: 4.5,
    reviewCount: 93,
    images: [powerbank3],
    inStock: true,
    stockQuantity: 38,
    features: ['Solar Charging', '30000mAh', 'Flashlight Built-in'],
    specifications: { 'Capacity': '30000mAh', 'Solar Panel': '1.5W', 'Flashlight': 'LED' },
    description: 'High-capacity solar power bank with emergency flashlight.',
    sku: 'EP-SOLAR-014',
    tags: ['solar', 'power bank', 'outdoor'],
    status: 'active',
    dateAdded: '2024-01-10',
    views: 560,
    sales: 47
  },
  {
    id: '15',
    name: 'Retractable Multi-Cable',
    brand: 'ConnectPro',
    category: 'Accessories',
    subcategory: 'Cables',
    price: 18.99,
    rating: 4.4,
    reviewCount: 118,
    images: [cable3],
    inStock: true,
    stockQuantity: 88,
    features: ['3-in-1 Retractable', 'Auto-Rewind', 'Tangle-Free'],
    specifications: { 'Connectors': 'USB-C, Lightning, Micro-USB', 'Length': '1.2m retractable' },
    description: '3-in-1 retractable cable for all your devices.',
    sku: 'CP-RETRO-015',
    tags: ['cable', 'retractable', '3-in-1'],
    status: 'active',
    dateAdded: '2024-03-20',
    views: 790,
    sales: 102
  },
  {
    id: '16',
    name: 'Wall Charger 65W GaN',
    brand: 'TechPower',
    category: 'Accessories',
    subcategory: 'Chargers',
    price: 44.99,
    originalPrice: 69.99,
    discount: 36,
    rating: 4.8,
    reviewCount: 142,
    images: [charger4],
    inStock: true,
    stockQuantity: 67,
    isBestseller: true,
    features: ['65W GaN Tech', '3 Ports', 'Compact Size'],
    specifications: { 'Power': '65W total', 'Ports': '2x USB-C, 1x USB-A', 'Technology': 'GaN' },
    description: 'Ultra-compact 65W GaN charger with 3 ports.',
    sku: 'TP-GAN-016',
    tags: ['charger', 'gan', 'fast charging'],
    status: 'active',
    dateAdded: '2024-02-28',
    views: 1580,
    sales: 132
  },
  {
    id: '17',
    name: 'Rugged Armor Case',
    brand: 'ArmorTech',
    category: 'Accessories',
    subcategory: 'Cases',
    price: 19.99,
    rating: 4.6,
    reviewCount: 189,
    images: [case4],
    inStock: true,
    stockQuantity: 156,
    features: ['Military Grade', 'Raised Edges', 'Carbon Fiber'],
    specifications: { 'Drop Protection': 'MIL-STD-810G', 'Material': 'TPU + Carbon Fiber' },
    description: 'Military-grade rugged case with carbon fiber texture.',
    sku: 'AT-ARMOR-017',
    tags: ['case', 'rugged', 'protective'],
    status: 'active',
    dateAdded: '2024-01-18',
    views: 1240,
    sales: 168
  },
  {
    id: '18',
    name: 'Studio Over-Ear Headphones',
    brand: 'AudioMax',
    category: 'Accessories',
    subcategory: 'Headphones',
    price: 129.99,
    originalPrice: 199.99,
    discount: 35,
    rating: 4.9,
    reviewCount: 276,
    images: [headphone4],
    inStock: true,
    stockQuantity: 23,
    isFeatured: true,
    isBestseller: true,
    features: ['Hi-Res Audio', 'ANC Pro', '40hr Battery'],
    specifications: { 'Frequency': '20Hz-40kHz', 'Battery': '40 hours', 'ANC': 'Advanced' },
    description: 'Premium studio-quality headphones with advanced ANC.',
    sku: 'AM-STUDIO-018',
    tags: ['headphones', 'studio', 'hi-res'],
    status: 'active',
    dateAdded: '2024-01-05',
    views: 2450,
    sales: 194
  },
  {
    id: '19',
    name: 'Slim Power Bank 5000mAh',
    brand: 'SlimPower',
    category: 'Accessories',
    subcategory: 'Power Banks',
    price: 16.99,
    rating: 4.2,
    reviewCount: 124,
    images: [powerbank4],
    inStock: true,
    stockQuantity: 112,
    isNew: true,
    features: ['Credit Card Size', '5000mAh', 'Built-in Cable'],
    specifications: { 'Capacity': '5000mAh', 'Thickness': '8mm', 'Cable': 'Lightning built-in' },
    description: 'Ultra-slim pocket-sized power bank with built-in cable.',
    sku: 'SP-SLIM-019',
    tags: ['power bank', 'slim', 'portable'],
    status: 'active',
    dateAdded: '2024-03-12',
    views: 620,
    sales: 78
  },
  {
    id: '20',
    name: 'Coiled Charging Cable',
    brand: 'ConnectPro',
    category: 'Accessories',
    subcategory: 'Cables',
    price: 13.99,
    rating: 4.3,
    reviewCount: 84,
    images: [cable4],
    inStock: true,
    stockQuantity: 134,
    features: ['Coiled Design', 'Stretch 1.5m', 'Space Saving'],
    specifications: { 'Extended Length': '1.5 meters', 'Type': 'USB-C', 'Design': 'Coiled' },
    description: 'Space-saving coiled cable that stretches when needed.',
    sku: 'CP-COIL-020',
    tags: ['cable', 'coiled', 'compact'],
    status: 'active',
    dateAdded: '2024-02-18',
    views: 530,
    sales: 69
  },
  {
    id: '21',
    name: 'Dual Wireless Charging Pad',
    brand: 'TechPower',
    category: 'Accessories',
    subcategory: 'Chargers',
    price: 39.99,
    rating: 4.5,
    reviewCount: 97,
    images: [charger5],
    inStock: true,
    stockQuantity: 72,
    features: ['Charge 2 Devices', '20W Total', 'Non-Slip Surface'],
    specifications: { 'Output': '10W per device', 'Total Power': '20W', 'Size': '200x100mm' },
    description: 'Dual wireless charging pad for phone and earbuds.',
    sku: 'TP-DUAL-021',
    tags: ['wireless', 'charger', 'dual'],
    status: 'active',
    dateAdded: '2024-03-08',
    views: 710,
    sales: 65
  },
  {
    id: '22',
    name: 'Glitter Sparkle Case',
    brand: 'GlamCase',
    category: 'Accessories',
    subcategory: 'Cases',
    price: 14.99,
    rating: 4.0,
    reviewCount: 156,
    images: [case5],
    inStock: true,
    stockQuantity: 98,
    features: ['Glitter Design', 'Shockproof', 'Camera Protection'],
    specifications: { 'Style': 'Glitter gradient', 'Material': 'TPU + Glitter', 'Drop Test': '6ft' },
    description: 'Stylish glitter case with excellent drop protection.',
    sku: 'GC-GLITTER-022',
    tags: ['case', 'glitter', 'fashion'],
    status: 'active',
    dateAdded: '2024-02-12',
    views: 920,
    sales: 114
  },
  {
    id: '23',
    name: 'Neckband Bluetooth Headphones',
    brand: 'FlexAudio',
    category: 'Accessories',
    subcategory: 'Headphones',
    price: 35.99,
    rating: 4.4,
    reviewCount: 108,
    images: [headphone5],
    inStock: true,
    stockQuantity: 86,
    features: ['Magnetic Earbuds', '20hr Battery', 'Quick Charge'],
    specifications: { 'Battery': '20 hours', 'Standby': '200 hours', 'Charge Time': '1.5 hours' },
    description: 'Lightweight neckband headphones with magnetic earbuds.',
    sku: 'FA-NECK-023',
    tags: ['neckband', 'bluetooth', 'magnetic'],
    status: 'active',
    dateAdded: '2024-01-22',
    views: 780,
    sales: 91
  },
  {
    id: '24',
    name: 'Wireless Power Bank 15000mAh',
    brand: 'PowerCell',
    category: 'Accessories',
    subcategory: 'Power Banks',
    price: 45.99,
    originalPrice: 69.99,
    discount: 34,
    rating: 4.7,
    reviewCount: 132,
    images: [powerbank5],
    inStock: true,
    stockQuantity: 49,
    isBestseller: true,
    features: ['Wireless + Wired', '15000mAh', 'Fast Charge'],
    specifications: { 'Capacity': '15000mAh', 'Wireless': '10W', 'Wired': '18W PD' },
    description: 'Versatile power bank with wireless and wired charging.',
    sku: 'PC-WIRE-024',
    tags: ['power bank', 'wireless', 'fast charging'],
    status: 'active',
    dateAdded: '2024-02-22',
    views: 1150,
    sales: 118
  },
  {
    id: '25',
    name: 'Right Angle Gaming Cable',
    brand: 'GameConnect',
    category: 'Accessories',
    subcategory: 'Cables',
    price: 16.99,
    rating: 4.5,
    reviewCount: 73,
    images: [cable5],
    inStock: true,
    stockQuantity: 105,
    features: ['90° Connector', 'Nylon Braided', 'Gaming Optimized'],
    specifications: { 'Angle': '90 degrees', 'Length': '2 meters', 'Material': 'Braided nylon' },
    description: '90-degree cable designed for gaming comfort.',
    sku: 'GC-ANGLE-025',
    tags: ['cable', 'gaming', 'right angle'],
    status: 'active',
    dateAdded: '2024-03-18',
    views: 640,
    sales: 57
  }
];

export const heroSlides = [
  {
    id: 1,
    image: hero1,
    title: 'Exciting News! iPhone 16 Pro Max Available',
    subtitle: 'Now available with flexible payment options',
    cta: 'Shop Now'
  },
  {
    id: 2,
    image: hero2,
    title: 'Premium Mobile Accessories',
    subtitle: 'Quality products at unbeatable prices',
    cta: 'Browse Collection'
  },
  {
    id: 3,
    image: hero3,
    title: 'Fast Wireless Charging',
    subtitle: 'Latest charging technology for all devices',
    cta: 'View Chargers'
  }
];

export const serviceCards = [
  {
    title: 'Mobile Accessories',
    description: 'All types of mobile accessories available at FlexTech! From cases, chargers, headphones to screen protectors and more.',
    icon: 'Smartphone'
  },
  {
    title: 'Wide Range of Phones',
    description: 'We offer both new keypad phones and the latest smartphones to suit your needs.',
    icon: 'Phone'
  },
  {
    title: 'Unlocking Services',
    description: 'We specialize in unlocking phones, fixing stuck devices, and reinstalling operating systems.',
    icon: 'Unlock'
  },
  {
    title: 'Computer Accessories',
    description: 'Premium computer accessories to enhance your tech experience.',
    icon: 'Monitor'
  },
  {
    title: 'Expert IT Services',
    description: 'Windows installation, data recovery, data transfer, and software installation services.',
    icon: 'HardDrive'
  },
  {
    title: 'Hydrogel Screen Protectors',
    description: 'Premium Hydrogel Screen Protectors with superior scratch resistance.',
    icon: 'Shield'
  }
];

export const brands = [
  'TechPower',
  'CaseGuard',
  'AudioMax',
  'PowerCell',
  'ConnectPro',
  'AutoCharge',
  'GameAudio',
  'EcoPower',
  'ArmorTech',
  'SlimPower',
  'GlamCase',
  'FlexAudio',
  'GameConnect',
  'LuxeCase',
  'FitAudio'
];

export const categories = [
  { name: 'Chargers', count: 6 },
  { name: 'Cases', count: 6 },
  { name: 'Headphones', count: 6 },
  { name: 'Power Banks', count: 5 },
  { name: 'Cables', count: 6 }
];
