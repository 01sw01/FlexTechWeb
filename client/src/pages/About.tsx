import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import shoppingCartImg from "@assets/img-10_1759756527491.jpg";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ fontFamily: 'var(--font-display)' }}>
              About FlexTech
            </h1>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="rounded-xl overflow-hidden">
                <img
                  src={shoppingCartImg}
                  alt="FlexTech Store"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Your Mobile Technology Partner</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We at FlexTech specialize in selling mobiles and accessories, with a focus on providing flexibility to our customers. Our mission is to ensure that people are free to switch and upgrade their mobile devices effortlessly, without being tied down to a single gadget.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Experience the convenience of choosing a new phone or accessory whenever you feel like it. We specialize in providing high quality accessories to enhance your tech experience. From durable phone cases and high-speed chargers to stylish earbuds and screen protectors, our diverse range of products ensures your mobile devices are always protected and performing at their best.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Committed to exceptional customer service and competitive pricing, FlexTech is your go-to destination for all your mobile needs.
                </p>
                <Link href="/store">
                  <Button size="lg" className="mt-4" data-testid="button-browse-products">
                    Browse Our Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
