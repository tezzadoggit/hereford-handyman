/**
 * Bathroom Renovations Service Page
 * - Full bathroom refurbishment, tile fitting, plumbing, shower installation, accessibility
 * - SEO targeted: "bathroom fitter Hereford", "bathroom renovation Hereford"
 * - 4 real photos available from Dean's portfolio
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
import BathroomRenovationsHead from "@/components/BathroomRenovationsHead";
import {
  Accessibility,
  BadgeCheck,
  Bath,
  Check,
  Clock,
  Droplets,
  Layers,
  Phone,
  Shield,
  ShowerHead,
  Star,
  Wrench,
} from "lucide-react";
import { Link } from "wouter";

export default function BathroomRenovations() {
  return (
    <div className="min-h-screen flex flex-col">
      <BathroomRenovationsHead />
      <Header />

      {/* Hero Section */}
      <section className="relative text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/deans-work/bathroom-patterned-tiles.jpg"
            alt="Blue vanity bathroom with patterned tiles fitted by Hereford Handyman"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/75"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent font-semibold text-sm mb-6">
              COMPLETE BATHROOM FITTING • FULLY INSURED
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Bathroom Renovation Specialists in Hereford
            </h1>

            <p className="text-xl text-primary-foreground/90 mb-8">
              Full bathroom refurbishment including tiling, plumbing, shower installation, and accessibility adaptations. One tradesman for the entire project.
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
              Complete Bathroom Fitting & Renovation Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From a simple shower replacement to a complete bathroom transformation, we handle it all
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Full Bathroom Refurbishment */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Bath className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Full Bathroom Refurbishment</h3>
                <p className="text-muted-foreground mb-4">
                  Complete strip-out and refit of your bathroom. New suite, tiling, flooring, and fixtures all installed to a showroom standard.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Full strip-out & disposal
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    New suite installation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    All plumbing & connections
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Wall & floor tiling
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <img src="/images/deans-work/bathroom-patterned-tiles.jpg" alt="Blue vanity bathroom with patterned tiles" className="rounded-lg w-full h-40 object-cover" />
                </div>
              </CardContent>
            </Card>

            {/* Tile Fitting */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Layers className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Bathroom Tile Fitting</h3>
                <p className="text-muted-foreground mb-4">
                  Professional wall and floor tiling for bathrooms. From classic white metro tiles to large format porcelain, we achieve perfect finishes.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Wall tiling (full & half height)
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Floor tiling
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Shower enclosure tiling
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Grouting & waterproofing
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <img src="/images/deans-work/bathroom-subway-tiles.jpg" alt="Bathroom detail with tiling by Hereford Handyman" className="rounded-lg w-full h-40 object-cover" />
                </div>
              </CardContent>
            </Card>

            {/* Shower Installation */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <ShowerHead className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Shower Installation</h3>
                <p className="text-muted-foreground mb-4">
                  Walk-in showers, enclosures, and over-bath showers fitted to perfection. Waterproof tanking and proper drainage guaranteed.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Walk-in shower installation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Shower enclosure fitting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Wet room creation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Thermostatic valve installation
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <img src="/images/deans-work/grey-bathroom.jpg" alt="WC and cloakroom fitted by Hereford Handyman" className="rounded-lg w-full h-40 object-cover" />
                </div>
              </CardContent>
            </Card>

            {/* Plumbing */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Droplets className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Bathroom Plumbing</h3>
                <p className="text-muted-foreground mb-4">
                  All bathroom plumbing handled in-house. Basin, bath, and toilet connections, waste pipes, and water supply alterations.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Basin & bath plumbing
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Toilet fitting & connection
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Radiator & towel rail fitting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Waste & overflow connections
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <img src="/images/deans-work/20230209_140413.jpg" alt="Small bathroom with towel rail fitted by Hereford Handyman" className="rounded-lg w-full h-40 object-cover" />
                </div>
              </CardContent>
            </Card>

            {/* Accessibility Adaptations */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Accessibility className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Accessibility Adaptations</h3>
                <p className="text-muted-foreground mb-4">
                  Make your bathroom safer and more accessible. Grab rails, walk-in showers, raised toilets, and non-slip surfaces for elderly and disabled users.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Grab rail installation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Level-access shower creation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Raised toilet seats
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Non-slip flooring
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <img src="/images/deans-work/grey-bathroom.jpg" alt="Accessible cloakroom fitted by Hereford Handyman" className="rounded-lg w-full h-40 object-cover" />
                </div>
              </CardContent>
            </Card>

            {/* Vanity Units & Storage */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Vanity Units & Fixtures</h3>
                <p className="text-muted-foreground mb-4">
                  Vanity units, mirror cabinets, towel rails, and bathroom accessories fitted securely and connected properly.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Vanity unit fitting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Mirror cabinet mounting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Heated towel rail installation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Bathroom accessories
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <img src="/images/deans-work/bathroom-patterned-tiles.jpg" alt="Modern vanity unit with blue cabinetry" className="rounded-lg w-full h-40 object-cover" />
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
              Why Choose Hereford Handyman for Bathroom Renovation?
            </h2>
            <p className="text-xl text-muted-foreground">
              A complete bathroom service from one trusted local tradesman
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">All Trades Covered</h3>
                <p className="text-muted-foreground">
                  Plumbing, tiling, carpentry, and finishing all handled by one person. No juggling multiple tradespeople or waiting for the next one to arrive.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Waterproof Guarantee</h3>
                <p className="text-muted-foreground">
                  Proper tanking, waterproofing, and sealing to prevent leaks. We don't cut corners on the hidden work that matters most.
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
                  Transparent £45/hr rate with a detailed estimate upfront. We quote for the whole bathroom project so there are no unpleasant surprises.
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
              Recent Bathroom Projects in Hereford
            </h2>
            <p className="text-xl text-muted-foreground">
              Real bathroom renovations from homes across Herefordshire
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Blue Vanity Bathroom", desc: "Statement blue vanity unit with patterned floor tiles", img: "/images/deans-work/bathroom-patterned-tiles.jpg", alt: "Blue vanity bathroom with patterned tiles" },
              { title: "Bathroom Detail", desc: "Quality fixtures and fittings with attention to detail", img: "/images/deans-work/bathroom-subway-tiles.jpg", alt: "Bathroom detail work" },
              { title: "Cloakroom WC", desc: "Compact cloakroom fitted to maximise a small space", img: "/images/deans-work/grey-bathroom.jpg", alt: "WC cloakroom fitted by Hereford Handyman" },
              { title: "Small Bathroom Renovation", desc: "Complete small bathroom refurbishment with towel rail", img: "/images/deans-work/20230209_140413.jpg", alt: "Small bathroom renovation in Hereford" },
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
                Bathroom Renovation FAQs
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about bathroom fitting in Hereford
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-base font-semibold">
                  How long does a full bathroom renovation take?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A complete bathroom renovation typically takes 5-8 days, depending on the scope. This includes strip-out, plumbing alterations, tiling, suite installation, and finishing touches. We provide a detailed day-by-day schedule so you know exactly what to expect.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-base font-semibold">
                  How much does a bathroom renovation cost in Hereford?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Labour for a full bathroom renovation at our £45/hr rate typically ranges from £2,000-£3,500 depending on complexity. Materials (suite, tiles, fixtures) are separate and vary widely based on your choices. We always provide a full written quote after our initial assessment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Can you convert a bath to a walk-in shower?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, bath-to-shower conversions are one of our most popular bathroom jobs. We remove the bath, create a properly waterproofed shower tray or wet room floor, install a shower enclosure, and tile the area. This is also a great option for improving accessibility in your home.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Do you supply the bathroom suite and tiles?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  You can source your own or we can help. Many customers choose their suite from retailers like Victorian Plumbing, B&Q, or local Hereford showrooms, and we handle the fitting. We're happy to advise on what will work best for your space and budget.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Will I be able to use my toilet during the renovation?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We do our best to keep the toilet connected and usable for as long as possible. If it needs to be disconnected, we minimise the downtime and always reconnect it at the end of each day where feasible. If you have a second bathroom, that makes the process even easier.
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
            <Link href="/plumbing">
              <Button variant="outline" className="border-accent/30 hover:bg-accent/10">Plumbing</Button>
            </Link>
            <Link href="/flooring">
              <Button variant="outline" className="border-accent/30 hover:bg-accent/10">Flooring</Button>
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
              Ready for Your Bathroom Transformation?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get a free, no-obligation quote for your bathroom renovation
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
