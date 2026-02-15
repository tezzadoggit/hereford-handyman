/**
 * Flat Pack Assembly Service Page
 * - IKEA/flat pack furniture, wardrobes, desks, beds, garden furniture
 * - SEO targeted: "flat pack assembly Hereford", "furniture assembly Hereford"
 * - No real photos - use placeholder boxes
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FlatPackAssemblyHead from "@/components/FlatPackAssemblyHead";
import {
  Armchair,
  BadgeCheck,
  Bed,
  Check,
  Clock,
  Package,
  Phone,
  Shield,
  Star,
  Wrench,
} from "lucide-react";
import { Link } from "wouter";

export default function FlatPackAssembly() {
  return (
    <div className="min-h-screen flex flex-col">
      <FlatPackAssemblyHead />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent font-semibold text-sm mb-6">
              EXPERT ASSEMBLY • ALL BRANDS & STORES
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Flat Pack Assembly Service in Hereford
            </h1>

            <p className="text-xl text-primary-foreground/90 mb-8">
              IKEA, Argos, Wayfair, B&Q -- whatever the brand, we assemble it properly. Professional flat pack furniture assembly across Hereford and Herefordshire.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6">
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-lg px-8 py-6">
                Call 01432 000 000
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-accent/10 py-6 border-y border-accent/20">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center space-x-2">
              <BadgeCheck className="w-5 h-5 text-accent" />
              <span className="font-semibold">Fully Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-accent" />
              <span className="font-semibold">Fully Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-accent fill-accent" />
              <span className="font-semibold">Local & Trusted</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-accent" />
              <span className="font-semibold">Fixed Rate: £45/hr</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Professional Furniture Assembly Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Life's too short for flat pack frustration. We build it properly, securely, and in a fraction of the time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Wardrobes */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Package className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Wardrobe Assembly</h3>
                <p className="text-muted-foreground mb-4">
                  From IKEA PAX systems to sliding door wardrobes, we build and install wardrobes level, plumb, and securely fixed to the wall.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    IKEA PAX systems
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Sliding door wardrobes
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Hinged door wardrobes
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Internal organiser fitting
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border bg-muted/30 rounded p-4">
                  <p className="text-sm text-muted-foreground text-center">Wardrobe assembly -- PAX systems, sliding doors, and fitted wardrobes built to perfection</p>
                </div>
              </CardContent>
            </Card>

            {/* Beds & Bunk Beds */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Bed className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Bed Frame Assembly</h3>
                <p className="text-muted-foreground mb-4">
                  Bed frames, bunk beds, cabin beds, and divans assembled and positioned. We ensure everything is solid, stable, and squeak-free.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Standard bed frames
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Bunk beds & cabin beds
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Ottoman storage beds
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Headboard fitting
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border bg-muted/30 rounded p-4">
                  <p className="text-sm text-muted-foreground text-center">Bed frame assembly -- all types from bunk beds to ottomans, built solid and level</p>
                </div>
              </CardContent>
            </Card>

            {/* Desks & Office */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Desks & Office Furniture</h3>
                <p className="text-muted-foreground mb-4">
                  Home office desks, standing desks, filing cabinets, and bookcases. Get your workspace set up properly without the frustration.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Computer desks
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Standing desks
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Bookcases & shelving units
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Filing cabinets
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border bg-muted/30 rounded p-4">
                  <p className="text-sm text-muted-foreground text-center">Office furniture assembly -- desks, bookcases, and storage solutions</p>
                </div>
              </CardContent>
            </Card>

            {/* Living Room */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Armchair className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Living Room Furniture</h3>
                <p className="text-muted-foreground mb-4">
                  TV units, sideboards, coffee tables, and display cabinets assembled with care. We handle the awkward ones that need two people too.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    TV stands & media units
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Sideboards & dressers
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Display cabinets
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Coffee & side tables
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border bg-muted/30 rounded p-4">
                  <p className="text-sm text-muted-foreground text-center">Living room furniture -- TV units, sideboards, and display cabinets</p>
                </div>
              </CardContent>
            </Card>

            {/* Children's Furniture */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Package className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Children's Furniture</h3>
                <p className="text-muted-foreground mb-4">
                  Nursery furniture, children's beds, toy storage, and playroom setups. We build everything securely with child safety in mind.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Cots & cot beds
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Children's wardrobes
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Toy storage units
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Wall-anchored for safety
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border bg-muted/30 rounded p-4">
                  <p className="text-sm text-muted-foreground text-center">Children's furniture built safely with anti-tip wall anchoring</p>
                </div>
              </CardContent>
            </Card>

            {/* Garden Furniture */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Garden Furniture Assembly</h3>
                <p className="text-muted-foreground mb-4">
                  Outdoor dining sets, rattan loungers, gazebos, and BBQs assembled in your garden. We handle the heavy lifting and tricky instructions.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Garden table & chair sets
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Rattan corner sofas
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Gazebo assembly
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    BBQ assembly
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border bg-muted/30 rounded p-4">
                  <p className="text-sm text-muted-foreground text-center">Garden furniture -- dining sets, loungers, gazebos, and BBQs</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-accent/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Why Choose Hereford Handyman for Flat Pack Assembly?
            </h2>
            <p className="text-xl text-muted-foreground">
              Save your weekends. We build flat pack furniture in a fraction of the time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fast & Efficient</h3>
                <p className="text-muted-foreground">
                  What takes most people an entire afternoon, we complete in 1-2 hours. We've assembled hundreds of flat pack items and know the shortcuts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Built Properly</h3>
                <p className="text-muted-foreground">
                  Every bolt tightened, every cam lock engaged, every panel aligned. We use proper tools (not the cheap Allen key in the box) for a solid result.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Wall-Anchored</h3>
                <p className="text-muted-foreground">
                  Tall wardrobes, bookcases, and chests of drawers anchored to the wall for safety -- especially important in homes with children.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Flat Pack Assembly FAQs
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about furniture assembly in Hereford
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-base font-semibold">
                  How long does it take to build a wardrobe?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A standard double wardrobe (like IKEA PAX) takes 1.5-2.5 hours to assemble. Sliding door systems add another 30-60 minutes. Larger systems with multiple frames, drawers, and internal organisers may take 3-4 hours. We always estimate the time before starting.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-base font-semibold">
                  What brands do you assemble?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  All of them. IKEA, Argos, B&Q, Wickes, Wayfair, Amazon, Dunelm, Very, Next Home, John Lewis -- if it comes in a flat pack, we can build it. We've assembled thousands of items from every major retailer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Can you assemble multiple items in one visit?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, that's the most cost-effective approach. Many customers order a full room's worth of furniture (wardrobe, chest of drawers, bedside tables, bed frame) and we assemble everything in one booking. This saves both time and money.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Do you take away the packaging?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We flatten all cardboard and polystyrene packaging for easy recycling. We can take it away for a small additional charge, or we can stack it neatly by your recycling bins. We always leave the room tidy with no debris.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-base font-semibold">
                  What if parts are missing from the box?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  It happens more often than you'd think. We carry spare cam locks, dowels, screws, and common fixings to keep the build going. For specific branded parts, we can help you contact the retailer. We won't charge you for time spent waiting on missing parts.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-background">
        <div className="container">
          <h3 className="text-2xl font-bold text-center mb-8">Related Services You Might Need</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/general-repairs">
              <Button variant="outline" className="border-accent/30 hover:bg-accent/10">General Repairs</Button>
            </Link>
            <Link href="/carpentry">
              <Button variant="outline" className="border-accent/30 hover:bg-accent/10">Carpentry & Joinery</Button>
            </Link>
            <Link href="/garden-outdoor">
              <Button variant="outline" className="border-accent/30 hover:bg-accent/10">Garden & Outdoor</Button>
            </Link>
            <Link href="/electrical">
              <Button variant="outline" className="border-accent/30 hover:bg-accent/10">Electrical</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Got Flat Pack Furniture to Assemble?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Save your weekend -- let us build it properly in half the time
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-background/95">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" placeholder="John Smith" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="01432 000 000" />
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                      Get Free Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <Card className="bg-background/95">
                <CardContent className="p-6 flex flex-col justify-center items-center h-full">
                  <Phone className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Prefer to Call?</h3>
                  <a href="tel:01432000000" className="text-2xl font-bold text-primary hover:underline mb-2">
                    01432 000 000
                  </a>
                  <p className="text-sm text-muted-foreground">Mon-Sat 8am-6pm</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
