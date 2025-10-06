import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import ServiceCard from "@/components/ServiceCard";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { mockProducts, heroSlides, serviceCards } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProducts = mockProducts.filter(p => p.isFeatured).slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartCount={0} />
      
      <main className="flex-1">
        <HeroSlider slides={heroSlides} />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
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
              <h2 className="text-3xl md:text-4xl font-bold">
                Featured Products
              </h2>
              <Button variant="outline" className="gap-2" data-testid="button-view-all">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} image={product.images[0]} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              About Us
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="rounded-xl overflow-hidden">
                <img
                  src={mockProducts[0].images[0]}
                  alt="FlexTech Store"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Get to know us</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We at FlexTech specialize in selling mobiles and accessories, with a focus on providing flexibility to our customers. Our mission is to ensure that people are free to switch and upgrade their mobile devices effortlessly, without being tied down to a single gadget.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Experience the convenience of choosing a new phone or accessory whenever you feel like it. We specialize in providing high quality accessories to enhance your tech experience. From durable phone cases and high-speed chargers to stylish earbuds and screen protectors, our diverse range of products ensures your mobile devices are always protected and performing at their best.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Committed to exceptional customer service and competitive pricing, Flextech is your go-to destination for all your mobile needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Contact Us
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-card rounded-xl p-8 space-y-6">
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
                
                <div className="flex items-center justify-center gap-4 pt-4">
                  <a 
                    href="https://wa.me/+971542664712" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="outline" data-testid="button-contact-whatsapp">
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
