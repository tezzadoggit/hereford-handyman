/**
 * Carpentry & Joinery Service Page
 * - Bespoke shelving, wall panelling, staircase refurbishment, door hanging, skirting boards
 * - SEO targeted: "carpenter Hereford", "joinery Hereford"
 * - 18 real photos available from Dean's portfolio
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
import CarpentryHead from "@/components/CarpentryHead";
import {
  BadgeCheck,
  Check,
  Clock,
  DoorOpen,
  Hammer,
  Layers,
  Phone,
  Ruler,
  Shield,
  Star,
  TreePine,
} from "lucide-react";
import { Link } from "wouter";

export default function Carpentry() {
  return (
    <div className="min-h-screen flex flex-col">
      <CarpentryHead />
      <Header />

      {/* Hero Section */}
      <section className="relative text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/deans-work/grey-panelling-hallway.jpg"
            alt="Grey panelled hallway with blue kitchen - carpentry by Hereford Handyman"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/75"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent font-semibold text-sm mb-6">
              BESPOKE WOODWORK • QUALITY CRAFTSMANSHIP
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Expert Carpenter & Joiner in Hereford
            </h1>

            <p className="text-xl text-primary-foreground/90 mb-8">
              Bespoke shelving, wall panelling, staircase refurbishment, and precision joinery. Handcrafted woodwork for homes across Hereford and Herefordshire.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6">
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-lg px-8 py-6">
                Call 07494 273 251
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
              Professional Carpentry & Joinery Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From bespoke fitted furniture to structural repairs, we bring precision and craftsmanship to every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bespoke Shelving */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Layers className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Bespoke Shelving & Storage</h3>
                <p className="text-muted-foreground mb-4">
                  Custom-built shelving units designed to fit your exact space. Alcove shelving, floating shelves, and built-in storage solutions.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Alcove shelving & cupboards
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Floating shelf installation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Built-in wardrobes
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Under-stair storage
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <img src="/images/deans-work/carpentry-detail.jpg" alt="Freestanding cupboard units built by Hereford Handyman" className="rounded-lg w-full h-40 object-cover" />
                </div>
              </CardContent>
            </Card>

            {/* Wall Panelling */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Ruler className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Wall Panelling</h3>
                <p className="text-muted-foreground mb-4">
                  Decorative wall panelling crafted and installed to create stunning feature walls. Shaker-style, tongue-and-groove, and geometric designs.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Shaker-style panels
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Tongue-and-groove cladding
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Wainscoting & dado rails
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Acoustic slat panelling
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <img src="/images/deans-work/wall-panelling-progress.jpg" alt="Wall panel grid installation in progress" className="rounded-lg w-full h-40 object-cover" />
                </div>
              </CardContent>
            </Card>

            {/* Staircase Refurbishment */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <TreePine className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Staircase Refurbishment</h3>
                <p className="text-muted-foreground mb-4">
                  Breathe new life into tired staircases. Spindle replacement, newel post upgrades, tread cladding, and complete handrail renewal.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Spindle replacement
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Newel post upgrades
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Tread cladding & repair
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Handrail installation
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <img src="/images/deans-work/hallway-floorboards.jpg" alt="White staircase refurbished by Hereford Handyman" className="rounded-lg w-full h-40 object-cover" />
                </div>
              </CardContent>
            </Card>

            {/* Door Hanging */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <DoorOpen className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Door Hanging & Fitting</h3>
                <p className="text-muted-foreground mb-4">
                  New internal and external doors supplied and fitted. Precision hanging for smooth operation and perfect alignment every time.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Internal door hanging
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    External door fitting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Lock & handle installation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Door frame repair
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <img src="/images/deans-work/grey-panelling-hallway.jpg" alt="Grey panelled hallway with door fitting" className="rounded-lg w-full h-40 object-cover" />
                </div>
              </CardContent>
            </Card>

            {/* Skirting & Architrave */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Hammer className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Skirting Boards & Architrave</h3>
                <p className="text-muted-foreground mb-4">
                  Replace tired or damaged skirting boards and architrave with modern or period-appropriate profiles. Clean, precise joinery throughout.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Skirting board replacement
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Architrave fitting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Period profile matching
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Dado & picture rails
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <img src="/images/deans-work/dark-herringbone-lvt.jpg" alt="New panelling and skirting boards fitted by Hereford Handyman" className="rounded-lg w-full h-40 object-cover" />
                </div>
              </CardContent>
            </Card>

            {/* Bespoke Furniture */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <TreePine className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Bespoke Furniture</h3>
                <p className="text-muted-foreground mb-4">
                  Custom-made furniture pieces designed for your exact requirements. Window seats, bench seating, media units, and more.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Window seats & bay storage
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Built-in bench seating
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Custom media units
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Bespoke bookcases
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <img src="/images/deans-work/wall-panelling-closeup.jpg" alt="Lattice panelling carpentry by Hereford Handyman" className="rounded-lg w-full h-40 object-cover" />
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
              Why Choose Hereford Handyman for Carpentry?
            </h2>
            <p className="text-xl text-muted-foreground">
              Traditional craftsmanship with modern precision
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Ruler className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Precision Joinery</h3>
                <p className="text-muted-foreground">
                  Every cut measured twice, every joint tight and flush. We take pride in craftsmanship that lasts generations, not just years.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Timber</h3>
                <p className="text-muted-foreground">
                  We source quality hardwoods and softwoods, including locally sourced Herefordshire oak where available. No chipboard shortcuts.
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
                  Transparent £45/hr rate with detailed time estimates upfront. No hidden charges, no inflated material markups.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Recent Carpentry Projects in Hereford
            </h2>
            <p className="text-xl text-muted-foreground">
              Bespoke woodwork crafted for homes across Herefordshire
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Grey Panelled Hallway", desc: "Bespoke hallway panelling with contrasting blue kitchen beyond", area: "Herefordshire", img: "/images/deans-work/grey-panelling-hallway.jpg", alt: "Grey panelled hallway with blue kitchen" },
              { title: "Staircase Refurbishment", desc: "Full staircase painted and refurbished to a pristine white finish", area: "Herefordshire", img: "/images/deans-work/hallway-floorboards.jpg", alt: "White staircase refurbished by Hereford Handyman" },
              { title: "Banister Detail Work", desc: "Precision stairwell banister detailing and painting", area: "Herefordshire", img: "/images/deans-work/stairwell-painting.jpg", alt: "Stairwell banister detail carpentry" },
              { title: "Panel Grid Installation", desc: "Geometric panel grid installation adding character to walls", area: "Herefordshire", img: "/images/deans-work/wall-panelling-progress.jpg", alt: "Panel grid installation in progress" },
              { title: "Lattice Panelling", desc: "Decorative lattice panelling creating a stunning feature wall", area: "Herefordshire", img: "/images/deans-work/wall-panelling-closeup.jpg", alt: "Lattice panelling installation" },
              { title: "Freestanding Cupboard Units", desc: "Custom-built freestanding cupboard units for practical storage", area: "Herefordshire", img: "/images/deans-work/carpentry-detail.jpg", alt: "Freestanding cupboard units" },
            ].map((project, i) => (
              <Card key={i} className="hover:shadow-xl transition-all">
                <CardContent className="p-4">
                  <img
                    src={project.img}
                    alt={project.alt}
                    className="rounded-lg w-full h-[200px] object-cover mb-4"
                  />
                  <h4 className="font-bold mb-1">{project.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{project.desc}</p>
                  <p className="text-xs font-semibold text-accent">{project.area}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Carpentry & Joinery FAQs
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about our woodwork services
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-base font-semibold">
                  How much does bespoke shelving cost in Hereford?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  At our fixed rate of £45/hr, a typical alcove shelving unit takes 8-12 hours depending on complexity. Materials are quoted separately and depend on your choice of timber and finish. We provide a full written estimate before starting any work.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Can you match existing woodwork in my period property?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely. Hereford has many beautiful period properties and we have experience matching Victorian, Edwardian, and Georgian moulding profiles. We can source matching timber and profiles, or custom-mill them to replicate your existing design.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-base font-semibold">
                  How long does it take to hang a new door?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A single internal door typically takes 1.5-2.5 hours to hang, including trimming to fit, hinge recessing, and handle installation. If the frame needs attention, add another hour. We can usually hang 3-4 doors in a single day visit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Do you supply materials or should I source them?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We can handle everything including material sourcing from local timber merchants in Hereford, or you can supply your own. We work with local suppliers to get quality timber at competitive prices and are happy to advise on the best options for your project.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Can you combine carpentry with painting and decorating?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, that's one of the advantages of using a multi-skilled handyman. We can build your shelving, panelling, or furniture and then paint or stain it to a professional finish, all in one booking. Check our <a href="/painting-decorating" className="text-accent hover:underline">painting & decorating page</a> for more details.
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
            <Link href="/painting-decorating">
              <Button variant="outline" className="border-accent/30 hover:bg-accent/10">Painting & Decorating</Button>
            </Link>
            <Link href="/kitchen-fitting">
              <Button variant="outline" className="border-accent/30 hover:bg-accent/10">Kitchen Fitting</Button>
            </Link>
            <Link href="/flooring">
              <Button variant="outline" className="border-accent/30 hover:bg-accent/10">Flooring</Button>
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
              Ready for Bespoke Carpentry?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get a free, no-obligation quote for your woodwork project
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
                  <a href="tel:07494273251" className="text-2xl font-bold text-primary hover:underline mb-2">
                    07494 273 251
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
