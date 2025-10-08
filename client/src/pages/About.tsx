import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import shoppingCartImg from "@assets/img-10_1759756527491.jpg";
import { Link } from "wouter";
import { Smartphone, ShieldCheck, Zap, Award, Users, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About FlexTech
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner for premium mobile accessories and technology solutions in Dubai
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
              <div className="rounded-xl overflow-hidden">
                <img
                  src={shoppingCartImg}
                  alt="FlexTech Store"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Your Mobile Technology Partner</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At FlexTech, we believe in giving you the freedom to choose. We specialize in premium mobile accessories and devices, offering unparalleled flexibility to our customers across Dubai and the UAE.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is simple: ensure that everyone can switch and upgrade their mobile devices effortlessly, without being tied down to a single brand or gadget. Whether you're looking for the latest iPhone accessories, Samsung gear, or universal tech solutions, we've got you covered.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From durable phone cases and lightning-fast chargers to premium earbuds and crystal-clear screen protectors, our curated collection ensures your devices are always protected and performing at their best.
                </p>
                <div className="flex gap-4">
                  <Link href="/store">
                    <Button size="lg" data-testid="button-browse-products">
                      Browse Products
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" data-testid="button-contact-us">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Values Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose FlexTech?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6 text-center hover-elevate">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-sans text-lg font-semibold mb-2">Wide Selection</h3>
                  <p className="text-muted-foreground">
                    Hundreds of premium accessories for all major mobile brands and models
                  </p>
                </Card>

                <Card className="p-6 text-center hover-elevate">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-sans text-lg font-semibold mb-2">Quality Guaranteed</h3>
                  <p className="text-muted-foreground">
                    Only authentic products with manufacturer warranties and our quality promise
                  </p>
                </Card>

                <Card className="p-6 text-center hover-elevate">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-sans text-lg font-semibold mb-2">Fast Delivery</h3>
                  <p className="text-muted-foreground">
                    Same-day delivery available across Dubai with free shipping on orders over AED 100
                  </p>
                </Card>

                <Card className="p-6 text-center hover-elevate">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-sans text-lg font-semibold mb-2">Expert Support</h3>
                  <p className="text-muted-foreground">
                    24/7 customer service and tech support to help you choose the right accessories
                  </p>
                </Card>

                <Card className="p-6 text-center hover-elevate">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-sans text-lg font-semibold mb-2">Trusted by Thousands</h3>
                  <p className="text-muted-foreground">
                    Join over 10,000 satisfied customers who trust FlexTech for their mobile needs
                  </p>
                </Card>

                <Card className="p-6 text-center hover-elevate">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-sans text-lg font-semibold mb-2">Competitive Prices</h3>
                  <p className="text-muted-foreground">
                    Best prices in the UAE with regular deals and exclusive discounts
                  </p>
                </Card>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Products</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                  <div className="text-muted-foreground">Happy Customers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">5.0</div>
                  <div className="text-muted-foreground">Google Rating</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Upgrade Your Mobile Experience?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Explore our collection of premium accessories and find the perfect match for your device
            </p>
            <Link href="/store">
              <Button size="lg" variant="secondary" data-testid="button-shop-now">
                Shop Now
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
