/**
 * Plumbing Service Page
 * - Tap replacement, toilet fitting, radiator installation, leak repairs, basic plumbing
 * - SEO targeted: "plumber Hereford", "plumbing repairs Hereford"
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
import PlumbingHead from "@/components/PlumbingHead";
import {
  BadgeCheck,
  Check,
  Clock,
  Droplets,
  Heater,
  Phone,
  PipetteIcon,
  Shield,
  ShowerHead,
  Star,
  Wrench,
} from "lucide-react";
import { Link } from "wouter";

export default function Plumbing() {
  return (
    <div className="min-h-screen flex flex-col">
      <PlumbingHead />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent font-semibold text-sm mb-6">
              RELIABLE PLUMBING • FIXED RATE PRICING
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Reliable Plumber in Hereford
            </h1>

            <p className="text-xl text-primary-foreground/90 mb-8">
              From dripping taps to radiator installations, we handle all your domestic plumbing needs. Fast, affordable, and done right first time across Hereford and Herefordshire.
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
              Domestic Plumbing Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No job too small. From a leaking tap to a full radiator installation, we cover all household plumbing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tap Replacement */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Droplets className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Tap Replacement & Repair</h3>
                <p className="text-muted-foreground mb-4">
                  Dripping taps waste water and money. We repair or replace kitchen and bathroom taps quickly and cleanly, including mixer taps and monoblocs.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Kitchen tap replacement
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Bathroom tap fitting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Washer & cartridge repair
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Outdoor tap installation
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Toilet Fitting */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Toilet Fitting & Repair</h3>
                <p className="text-muted-foreground mb-4">
                  New toilet installation, cistern repairs, and flush mechanism replacement. We fit close-coupled, wall-hung, and back-to-wall toilets.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    New toilet installation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Cistern repair
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Flush mechanism replacement
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Toilet seat replacement
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Radiator Installation */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Heater className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Radiator Installation</h3>
                <p className="text-muted-foreground mb-4">
                  New radiators fitted, old radiators replaced, and towel rails installed. We balance your system for even heat distribution throughout your home.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    New radiator fitting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Radiator replacement
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Towel rail installation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    TRV valve fitting
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Leak Repairs */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <PipetteIcon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Leak Repairs</h3>
                <p className="text-muted-foreground mb-4">
                  Leaking pipes, joints, and fittings repaired before they cause damage. We trace the source, fix the problem, and test to ensure it's watertight.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Pipe leak repairs
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Joint & fitting repairs
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Overflow pipe fixes
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Under-sink leak repair
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Shower Installation */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <ShowerHead className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Shower Plumbing</h3>
                <p className="text-muted-foreground mb-4">
                  Shower installation, replacement, and repair. Electric showers, mixer showers, and thermostatic showers fitted and connected properly.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Electric shower fitting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Mixer valve replacement
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Shower hose & head replacement
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Waste trap clearing
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Appliance Connections */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Appliance Connections</h3>
                <p className="text-muted-foreground mb-4">
                  Washing machines, dishwashers, and other water-fed appliances connected and tested. Including isolation valves for easy future maintenance.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Washing machine plumbing
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Dishwasher connection
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Isolation valve fitting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Waste pipe installation
                  </li>
                </ul>
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
              Why Choose Hereford Handyman for Plumbing?
            </h2>
            <p className="text-xl text-muted-foreground">
              Affordable, reliable plumbing without the emergency call-out fees
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">No Call-Out Fee</h3>
                <p className="text-muted-foreground">
                  Unlike dedicated plumbers who charge £60-80 just to turn up, our flat rate of £45/hr starts when the work begins. No call-out charges.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Multi-Skilled</h3>
                <p className="text-muted-foreground">
                  Need the taps fitted AND the tiles fixed? We do both in one visit. No need to book separate plumbing and handyman appointments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fully Insured</h3>
                <p className="text-muted-foreground">
                  Complete public liability insurance for your peace of mind. If anything goes wrong (it won't), you're fully covered.
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
                Plumbing FAQs
              </h2>
              <p className="text-xl text-muted-foreground">
                Common plumbing questions from Hereford homeowners
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Are you a qualified plumber?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We handle all standard domestic plumbing tasks -- taps, toilets, radiators, waste connections, and leak repairs. For Gas Safe registered work (boiler installation, gas pipe work), we partner with certified local gas engineers in Hereford and can coordinate the project for you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-base font-semibold">
                  How much does it cost to replace a tap?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A straightforward tap replacement typically takes 30-60 minutes at our £45/hr rate. If the isolation valve needs replacing or pipework needs adjusting, it may take a little longer. We always let you know the estimated time before starting.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Can you fit a new radiator where there isn't one?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we can extend your central heating system to add radiators in new locations. This involves running new pipework from the nearest connection point, fitting the radiator, and balancing the system. We'll assess the best approach and provide a clear quote.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Do you carry spare parts?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We carry common plumbing spares (washers, valves, connectors, PTFE tape) to fix most small jobs in one visit. For specific taps, toilets, or radiators, we can source from local Hereford suppliers (Plumb Center, Screwfix) often on the same day.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Do you cover emergency plumbing?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We aim to respond quickly to urgent plumbing needs across Hereford. While we're not a 24/7 emergency service, we can often attend same-day or next-day for urgent leaks and plumbing failures. Call us and we'll do our best to help promptly.
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
            <Link href="/bathroom-renovations">
              <Button variant="outline" className="border-accent/30 hover:bg-accent/10">Bathroom Renovations</Button>
            </Link>
            <Link href="/kitchen-fitting">
              <Button variant="outline" className="border-accent/30 hover:bg-accent/10">Kitchen Fitting</Button>
            </Link>
            <Link href="/general-repairs">
              <Button variant="outline" className="border-accent/30 hover:bg-accent/10">General Repairs</Button>
            </Link>
            <Link href="/elderly-care">
              <Button variant="outline" className="border-accent/30 hover:bg-accent/10">Elderly Care Adaptations</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Need a Plumber in Hereford?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get a free, no-obligation quote or call for same-day availability
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
