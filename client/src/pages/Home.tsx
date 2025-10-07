import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import ServiceCard from "@/components/ServiceCard";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { mockProducts, heroSlides, serviceCards } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import shoppingCartImg from "@assets/img-10_1759756527491.jpg";
import mobileServicesImg from "@assets/img-9_1759756527491.png";
import accessoriesIconsImg from "@assets/img-7_1759756527490.png";
import ratingsIcon from "@assets/ratings-icon_1759756527496.png";
import whatsappIcon from "@assets/whatsapp-icon_1759756527496.png";

export default function Home() {
  const featuredProducts = mockProducts.filter(p => p.isFeatured).slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSlider slides={heroSlides} />

        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Welcome to FlexTech
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Your one-stop shop for premium mobile accessories and the latest smartphones
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center text-center">
                <img src={accessoriesIconsImg} alt="Mobile Accessories" className="w-full max-w-sm mb-4 rounded-xl" />
                <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
                <p className="text-muted-foreground">Choose from hundreds of premium accessories</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src={shoppingCartImg} alt="Shopping Experience" className="w-full max-w-sm mb-4 rounded-xl" />
                <h3 className="text-xl font-semibold mb-2">Easy Shopping</h3>
                <p className="text-muted-foreground">Browse, select, and purchase with ease</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src={mobileServicesImg} alt="Mobile Services" className="w-full max-w-sm mb-4 rounded-xl" />
                <h3 className="text-xl font-semibold mb-2">Expert Service</h3>
                <p className="text-muted-foreground">Professional support for all your mobile needs</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: 'var(--font-display)' }}>
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCards.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  Featured Products
                </h2>
                <p className="text-muted-foreground">Discover our most popular accessories</p>
              </div>
              <Button variant="outline" className="gap-2 hidden md:flex" data-testid="button-view-all">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} image={product.images[0]} />
              ))}
            </div>
            <div className="text-center mt-8 md:hidden">
              <Button variant="outline" className="gap-2" data-testid="button-view-all-mobile">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <img src={ratingsIcon} alt="5-Star Rating" className="w-48 mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Trusted by Thousands
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Join our satisfied customers who have rated us 5 stars on Google. Quality products, excellent service, and unbeatable prices.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="https://wa.me/+971542664712" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary" size="lg" className="gap-2" data-testid="button-whatsapp-cta">
                      <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-foreground/10 rounded-xl p-6 text-center backdrop-blur">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-sm opacity-90">Products</div>
                </div>
                <div className="bg-primary-foreground/10 rounded-xl p-6 text-center backdrop-blur">
                  <div className="text-4xl font-bold mb-2">10K+</div>
                  <div className="text-sm opacity-90">Happy Customers</div>
                </div>
                <div className="bg-primary-foreground/10 rounded-xl p-6 text-center backdrop-blur">
                  <div className="text-4xl font-bold mb-2">5.0</div>
                  <div className="text-sm opacity-90 flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Google Rating
                  </div>
                </div>
                <div className="bg-primary-foreground/10 rounded-xl p-6 text-center backdrop-blur">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-sm opacity-90">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ fontFamily: 'var(--font-display)' }}>
              About FlexTech
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="rounded-xl overflow-hidden">
                <img
                  src={shoppingCartImg}
                  alt="FlexTech Store"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Your Mobile Technology Partner</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We at FlexTech specialize in selling mobiles and accessories, with a focus on providing flexibility to our customers. Our mission is to ensure that people are free to switch and upgrade their mobile devices effortlessly, without being tied down to a single gadget.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Experience the convenience of choosing a new phone or accessory whenever you feel like it. We specialize in providing high quality accessories to enhance your tech experience. From durable phone cases and high-speed chargers to stylish earbuds and screen protectors, our diverse range of products ensures your mobile devices are always protected and performing at their best.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Committed to exceptional customer service and competitive pricing, FlexTech is your go-to destination for all your mobile needs.
                </p>
                <Button size="lg" className="mt-4" data-testid="button-learn-more">
                  Learn More About Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ fontFamily: 'var(--font-display)' }}>
              Contact Us
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-card rounded-xl p-8 space-y-6 shadow-lg">
                <p className="text-center text-muted-foreground mb-6">
                  Have questions? We're here to help! Reach out to us anytime.
                </p>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border bg-background"
                    data-testid="input-contact-name"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border bg-background"
                    data-testid="input-contact-email"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border bg-background resize-none"
                    data-testid="input-contact-message"
                  />
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={() => console.log('Message sent')}
                    data-testid="button-send-message"
                  >
                    Send Message
                  </Button>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t">
                  <a 
                    href="https://wa.me/+971542664712" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="outline" className="gap-2" data-testid="button-contact-whatsapp">
                      <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
                      WhatsApp
                    </Button>
                  </a>
                  <a 
                    href="https://deliveroo.ae" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="outline" data-testid="button-deliveroo">
                      Order on Deliveroo
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
