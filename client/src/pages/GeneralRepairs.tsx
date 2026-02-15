/**
 * General Repairs Service Page
 * - Door repairs, window repairs, wall repairs, shelving, picture hanging, odd jobs
 * - SEO targeted: "handyman Hereford", "property repairs Hereford"
 * - 5 real photos available from Dean's portfolio
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
import GeneralRepairsHead from "@/components/GeneralRepairsHead";
import {
  BadgeCheck,
  Check,
  Clock,
  DoorOpen,
  Frame,
  Hammer,
  Home as HomeIcon,
  Phone,
  Shield,
  Star,
  Wrench,
} from "lucide-react";
import { Link } from "wouter";

export default function GeneralRepairs() {
  return (
    <div className="min-h-screen flex flex-col">
      <GeneralRepairsHead />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent font-semibold text-sm mb-6">
              NO JOB TOO SMALL • FIXED RATE PRICING
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              General Repairs & Handyman Services in Hereford
            </h1>

            <p className="text-xl text-primary-foreground/90 mb-8">
              From squeaky doors to cracked walls, we handle all those odd jobs and repairs around your home. Your go-to handyman for Hereford and the surrounding villages.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6">
                Book a Handyman
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
              Property Repairs & Odd Jobs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Got a list of jobs you've been putting off? Give us the list and we'll work through it. No job too small, no task too odd.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Door Repairs */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <DoorOpen className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Door Repairs & Adjustments</h3>
                <p className="text-muted-foreground mb-4">
                  Sticking doors, broken hinges, damaged frames, and faulty locks. We fix, adjust, and rehang doors so they open and close smoothly.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Door planing & realignment
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Hinge replacement
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Lock & handle fitting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Draught proofing
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-accent">[PLACEHOLDER IMAGE: Door repair - adjusted and rehung]</p>
                </div>
              </CardContent>
            </Card>

            {/* Window Repairs */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <HomeIcon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Window Repairs</h3>
                <p className="text-muted-foreground mb-4">
                  Broken sash cords, stuck windows, damaged frames, and failed seals. We repair windows so they operate properly and keep the weather out.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Sash cord replacement
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Window handle fitting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Frame repair & filling
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Draught seal replacement
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-accent">[PLACEHOLDER IMAGE: Window repair work]</p>
                </div>
              </CardContent>
            </Card>

            {/* Wall Repairs */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Hammer className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Wall Repairs & Patching</h3>
                <p className="text-muted-foreground mb-4">
                  Holes, cracks, dents, and damaged plasterboard repaired to a smooth, paintable finish. Perfect preparation for redecorating.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Plasterboard patching
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Crack filling & repair
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Screw hole filling
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Artex removal patching
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-accent">[PLACEHOLDER IMAGE: Wall repair - smooth patched surface]</p>
                </div>
              </CardContent>
            </Card>

            {/* Shelving & Storage */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Shelving & Mounting</h3>
                <p className="text-muted-foreground mb-4">
                  Shelves, brackets, mirrors, TVs, and heavy items securely mounted. We find the studs and use the right fixings for your wall type.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Floating shelf installation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Bracket shelving
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Mirror & artwork hanging
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Curtain pole & blind fitting
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-accent">[PLACEHOLDER IMAGE: Floating shelves neatly mounted]</p>
                </div>
              </CardContent>
            </Card>

            {/* Picture Hanging */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Frame className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Picture & Art Hanging</h3>
                <p className="text-muted-foreground mb-4">
                  Gallery walls, heavy mirrors, and artwork hung perfectly level with the right fixings. We protect your walls and get it right first time.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Gallery wall layouts
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Heavy mirror mounting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Picture rail installation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Clock & decoration mounting
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-accent">[PLACEHOLDER IMAGE: Gallery wall arrangement]</p>
                </div>
              </CardContent>
            </Card>

            {/* Odd Jobs */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Odd Jobs & Miscellaneous</h3>
                <p className="text-muted-foreground mb-4">
                  Those random tasks that don't fit a category? We handle them all. If it needs fixing, building, or adjusting in your home, we can help.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Curtain pole & blind fitting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Cat flap installation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Letterbox replacement
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Baby gate fitting
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job List Section */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-accent/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Got a List of Jobs? We'll Work Through It
              </h2>
              <p className="text-xl text-muted-foreground">
                Most of our Hereford customers book us for a half or full day and give us a list. We work through everything efficiently.
              </p>
            </div>

            <Card className="bg-background shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Popular Job Lists Include:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span>Fix the sticking kitchen door</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span>Hang 3 pictures and a mirror</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span>Put up shelves in the study</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span>Repair the crack in the hallway wall</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span>Fit new curtain poles in two bedrooms</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Why Book a Full Day:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span>Best value per job when combined</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span>One visit, everything done</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span>No repeat call-out hassle</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span>Flexible -- add jobs on the day</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span>8 hours of work for just £320</span>
                      </li>
                    </ul>
                  </div>
                </div>
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
                General Repairs FAQs
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about handyman services in Hereford
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Is there a minimum booking time?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We have a minimum booking of 1 hour. Most small jobs (hanging pictures, fixing a door, fitting a shelf) take 30-60 minutes, so customers often combine a few tasks into one visit for the best value.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Can I give you a list of different jobs?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely -- that's our bread and butter. Send us your list and we'll estimate the time needed. We work through it systematically, and if we finish early, you only pay for the time used. If extra tasks come up on the day, we're flexible enough to add them.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Do you bring your own tools and materials?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We arrive with a full toolkit and common supplies (screws, wall plugs, filler, adhesive, brackets). For specific materials or parts, we can pick them up from local Hereford suppliers on the way, or you can have them ready. We never charge a markup on materials.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-base font-semibold">
                  What areas around Hereford do you cover?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We serve all of Hereford city (HR1-HR4) and surrounding villages including Lugwardine, Bartestree, Credenhill, Burghill, Mordiford, Fownhope, Stretton Sugwas, and further afield in Herefordshire by arrangement. No extra charge for travel within 10 miles of Hereford.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Are you available at weekends?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we offer Saturday appointments at the same £45/hr rate -- no weekend surcharge. Sunday availability is by arrangement. Evening slots can also be arranged for small jobs if that works better for your schedule.
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
            <Link href="/flat-pack-assembly">
              <Button variant="outline" className="border-accent/30 hover:bg-accent/10">Flat Pack Assembly</Button>
            </Link>
            <Link href="/plumbing">
              <Button variant="outline" className="border-accent/30 hover:bg-accent/10">Plumbing</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Got Jobs That Need Doing?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Send us your list and get a free estimate
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
