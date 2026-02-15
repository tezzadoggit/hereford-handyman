/**
 * Garden & Outdoor Service Page
 * - Fencing, decking, patios, shed assembly, garden maintenance, pressure washing
 * - SEO targeted: "garden maintenance Hereford", "fencing Hereford", "decking Hereford"
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
import GardenOutdoorHead from "@/components/GardenOutdoorHead";
import {
  BadgeCheck,
  Check,
  Clock,
  Droplets,
  Fence,
  Hammer,
  Phone,
  Shield,
  Shovel,
  Star,
  TreePine,
  Wrench,
} from "lucide-react";
import { Link } from "wouter";

export default function GardenOutdoor() {
  return (
    <div className="min-h-screen flex flex-col">
      <GardenOutdoorHead />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent font-semibold text-sm mb-6">
              OUTDOOR SPECIALISTS • FULLY INSURED
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Garden & Outdoor Services in Hereford
            </h1>

            <p className="text-xl text-primary-foreground/90 mb-8">
              Fencing, decking, patios, shed assembly, and garden maintenance. Everything you need to make the most of your outdoor space across Hereford and Herefordshire.
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
              Complete Garden & Outdoor Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From storm-damaged fences to brand new decking, we handle every outdoor project for your Hereford home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Fencing */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Fence className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fencing</h3>
                <p className="text-muted-foreground mb-4">
                  New fences erected, storm-damaged panels replaced, and posts repaired. We work with all fence types popular across Herefordshire properties.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Lap panel fencing
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Close board fencing
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Fence post replacement
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Gate hanging & repair
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border bg-muted/30 rounded p-4">
                  <p className="text-sm text-muted-foreground text-center">Fencing services -- new installations, storm damage repair, and gate fitting</p>
                </div>
              </CardContent>
            </Card>

            {/* Decking */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <TreePine className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Decking</h3>
                <p className="text-muted-foreground mb-4">
                  Timber and composite decking built to last. We create level, well-supported decking areas perfect for entertaining in your Hereford garden.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Softwood timber decking
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Composite decking
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Raised decking with steps
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Decking repair & restoration
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border bg-muted/30 rounded p-4">
                  <p className="text-sm text-muted-foreground text-center">Decking installations -- timber and composite options with proper substructure</p>
                </div>
              </CardContent>
            </Card>

            {/* Patios */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Hammer className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Patios & Paving</h3>
                <p className="text-muted-foreground mb-4">
                  Patio slabs laid on a proper base for years of trouble-free use. From simple stepping stones to full patio areas with drainage.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Patio slab laying
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Pathway creation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Patio repair & re-levelling
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Jointing & sealing
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border bg-muted/30 rounded p-4">
                  <p className="text-sm text-muted-foreground text-center">Patio and paving -- slabs laid level with proper drainage and pointing</p>
                </div>
              </CardContent>
            </Card>

            {/* Shed Assembly */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Shed & Outbuilding Assembly</h3>
                <p className="text-muted-foreground mb-4">
                  Sheds, summerhouses, log cabins, and playhouses assembled on a level base. We handle the heavy lifting and tricky roof panels.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Shed assembly
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Summerhouse build
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Base preparation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Felt roofing & weatherproofing
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border bg-muted/30 rounded p-4">
                  <p className="text-sm text-muted-foreground text-center">Shed and outbuilding assembly with base preparation and weatherproofing</p>
                </div>
              </CardContent>
            </Card>

            {/* Garden Maintenance */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Shovel className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Garden Maintenance</h3>
                <p className="text-muted-foreground mb-4">
                  General garden tidying, clearance, and maintenance for when things have got a bit overgrown. We get your outdoor space back in shape.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Garden clearance
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Hedge trimming
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Raised bed building
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Trellis & screening
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border bg-muted/30 rounded p-4">
                  <p className="text-sm text-muted-foreground text-center">Garden maintenance -- clearance, hedging, raised beds, and general tidying</p>
                </div>
              </CardContent>
            </Card>

            {/* Pressure Washing */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Droplets className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Pressure Washing</h3>
                <p className="text-muted-foreground mb-4">
                  Restore your driveways, patios, and decking to like-new condition. Professional pressure washing removes years of algae, moss, and dirt.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Driveway cleaning
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Patio pressure washing
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Decking restoration
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Wall & path cleaning
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border bg-muted/30 rounded p-4">
                  <p className="text-sm text-muted-foreground text-center">Pressure washing -- driveways, patios, decking, and walls restored</p>
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
              Why Choose Hereford Handyman for Garden Work?
            </h2>
            <p className="text-xl text-muted-foreground">
              Built to last through Herefordshire weather
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Materials</h3>
                <p className="text-muted-foreground">
                  Pressure-treated timber, concrete-set posts, and proper fixings. We build outdoor structures that withstand the Herefordshire wind and rain.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Proper Foundations</h3>
                <p className="text-muted-foreground">
                  Concrete post bases, compacted hardcore sub-bases, and proper drainage. We don't skip the groundwork that keeps everything level and stable.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fixed-Rate Pricing</h3>
                <p className="text-muted-foreground">
                  £45/hr with clear estimates for every outdoor project. Materials quoted separately and transparently -- no hidden markups.
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
                Garden & Outdoor FAQs
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about garden services in Hereford
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-base font-semibold">
                  How much does garden fencing cost in Hereford?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  At our £45/hr rate, a typical 6-panel fence run (roughly 11 metres) takes about a day to install including setting posts in concrete. Materials (panels, posts, gravel boards, postcrete) typically cost £300-500 depending on quality. We provide a full quote including materials after assessing your garden.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Can you replace just a few damaged fence panels?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, panel replacement is one of our most common outdoor jobs -- especially after winter storms in Herefordshire. We can replace individual panels and repair or replace damaged posts without disturbing the rest of the fence. We match the existing style as closely as possible.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-base font-semibold">
                  How long does it take to build decking?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A typical 3m x 4m decking area takes 2-3 days including frame construction, board laying, and finishing. Larger or more complex designs (raised decking, steps, balustrades) may take longer. We always provide a day-by-day schedule before starting.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Do you assemble sheds from all suppliers?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we assemble sheds from all major suppliers including B&Q, Wickes, Argos, Forest Garden, and direct-from-manufacturer deliveries. We prepare the base, assemble the structure, and apply any necessary weatherproofing. We also anchor to the ground for security and wind resistance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-base font-semibold">
                  What time of year is best for outdoor work?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Fencing and shed assembly can be done year-round. For decking, patios, and painting, spring through autumn gives the best results as concrete and sealants set better in warmer weather. That said, we work through Herefordshire winters when the weather allows -- just plan ahead for drying times.
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
            <Link href="/carpentry">
              <Button variant="outline" className="border-accent/30 hover:bg-accent/10">Carpentry & Joinery</Button>
            </Link>
            <Link href="/painting-decorating">
              <Button variant="outline" className="border-accent/30 hover:bg-accent/10">Painting & Decorating</Button>
            </Link>
            <Link href="/general-repairs">
              <Button variant="outline" className="border-accent/30 hover:bg-accent/10">General Repairs</Button>
            </Link>
            <Link href="/flat-pack-assembly">
              <Button variant="outline" className="border-accent/30 hover:bg-accent/10">Flat Pack Assembly</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get a free, no-obligation quote for your garden project
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
