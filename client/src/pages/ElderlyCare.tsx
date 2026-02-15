/**
 * Design Philosophy: Trust, Safety, and Compassion
 * - Warm, reassuring tone for elderly and their families
 * - Clear safety benefits and trust signals
 * - Professional credentials prominently displayed
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ElderlyHead from "@/components/ElderlyHead";
import {
  BadgeCheck,
  Check,
  Clock,
  Heart,
  Home as HomeIcon,
  Key,
  Lightbulb,
  Phone,
  Shield,
  Star,
  Users,
} from "lucide-react";

export default function ElderlyCare() {
  return (
    <div className="min-h-screen flex flex-col">
      <ElderlyHead />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent font-semibold text-sm mb-6">
              TRUSTED BY LOCAL FAMILIES • PROFESSIONAL SERVICE
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Home Safety & Mobility Adaptations for Seniors in Hereford
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8">
              Stay safe and independent in the home you love. Professional installations by experienced, caring handymen.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6">
                Book Free Safety Check
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
              <Heart className="w-5 h-5 text-accent" />
              <span className="font-semibold">Patient & Caring</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-accent fill-accent" />
              <span className="font-semibold">Trusted by 200+ Families</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-accent" />
              <span className="font-semibold">Same-Day Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Professional Grab Rail Installation & Bathroom Safety Fitting
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Small changes that make a big difference to your independence and peace of mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Grab Rails */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <HomeIcon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Grab Rail Installation</h3>
                <p className="text-muted-foreground mb-4">
                  Professionally fitted grab rails for bathrooms, stairs, and hallways. Securely mounted to studs for maximum safety.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Bathroom grab rails
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Staircase handrails
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Toilet support rails
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Shower grab bars
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-accent">[PLACEHOLDER IMAGE: Grab Rail Installation]</p>
                </div>
              </CardContent>
            </Card>

            {/* Key Safes */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Key className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Key Safe Installation</h3>
                <p className="text-muted-foreground mb-4">
                  Secure access for carers, family members, and emergency services. Wall-mounted key safes for peace of mind.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Secure wall mounting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Carer-approved models
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Weatherproof options
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Emergency service compatible
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-accent">[PLACEHOLDER IMAGE: Key Safe Installation]</p>
                </div>
              </CardContent>
            </Card>

            {/* Mobility Ramps */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <HomeIcon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Outdoor Mobility Solutions</h3>
                <p className="text-muted-foreground mb-4">
                  Ramps, motion sensor lights, and handrails to make outdoor access safer and easier.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Threshold ramps
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Motion sensor lighting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Outdoor handrails
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Non-slip surfaces
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-accent">[PLACEHOLDER IMAGE: Outdoor Mobility]</p>
                </div>
              </CardContent>
            </Card>

            {/* Bathroom Modifications */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <HomeIcon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Bathroom Modifications</h3>
                <p className="text-muted-foreground mb-4">
                  Walk-in shower seats, raised toilet seats, and lever tap installations for easier use.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Walk-in shower seats
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Lever tap replacement
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
                  <p className="text-sm font-semibold text-accent">[PLACEHOLDER IMAGE: Bathroom Modifications]</p>
                </div>
              </CardContent>
            </Card>

            {/* Smart Safety Tech */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Smart Safety Technology</h3>
                <p className="text-muted-foreground mb-4">
                  Video doorbells, motion sensors, and smart lighting for added security and convenience.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Ring video doorbells
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Motion sensor lights
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Smart locks
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Fall detection alerts
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-accent">[PLACEHOLDER IMAGE: Smart Safety Tech]</p>
                </div>
              </CardContent>
            </Card>

            {/* Door & Window Modifications */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <HomeIcon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Door & Window Ease</h3>
                <p className="text-muted-foreground mb-4">
                  Arthritis-friendly door handles, window openers, and automatic door closers.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Lever door handles
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Easy-grip window openers
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Automatic door closers
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Threshold adjustments
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-accent">[PLACEHOLDER IMAGE: Door Modifications]</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Safety Check Offer */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-accent/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                The "Peace of Mind" Safety Check: What We Look For
              </h2>
              <p className="text-xl text-muted-foreground">
                Our free home safety assessment identifies potential hazards and recommends practical solutions
              </p>
            </div>

            <Card className="bg-background shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">We Check For:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span>Trip hazards (loose carpets, thresholds)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span>Bathroom safety (slippery surfaces, grab rail needs)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span>Lighting levels (dark hallways, stairs)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span>Door and window accessibility</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span>Emergency access (key safe needs)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">You Receive:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span>Written safety report</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span>Prioritized recommendations</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span>Fixed-price quote for all work</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span>No obligation to proceed</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span>Free follow-up consultation</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border text-center">
                  <p className="text-lg font-semibold mb-4">
                    <span className="text-accent">FREE Safety Check</span> (Worth £45) when you book your first installation
                  </p>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    Book Your Free Safety Check
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Families Trust Us */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Trusted by Local Families: Professional & Caring Service
            </h2>
            <p className="text-xl text-muted-foreground">
              We understand the importance of trust when working with vulnerable adults
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BadgeCheck className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Professional Staff</h3>
                <p className="text-muted-foreground">
                  All our handymen are trained to work with elderly and vulnerable adults.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Patient & Caring</h3>
                <p className="text-muted-foreground">
                  Patient, respectful approach. We take time to explain our work and minimize disruption.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Family Liaison</h3>
                <p className="text-muted-foreground">
                  We work with adult children and carers to coordinate visits and provide updates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8">What Families Say</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "The grab rails were fitted perfectly and have given my mother so much more confidence in the bathroom. The handyman was patient and respectful."
                  </p>
                  <p className="font-semibold">— Sarah T., Tupsley</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "We needed a key safe fitted urgently for Dad's carers. They came the same day and it was installed professionally. Highly recommend."
                  </p>
                  <p className="font-semibold">— Michael R., Whitecross</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Make Your Home Safer?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Book a free safety check or call us to discuss your needs
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
                      Book Free Safety Check
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
                  <p className="text-sm text-muted-foreground">Mon-Sun 7am-9pm</p>
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
