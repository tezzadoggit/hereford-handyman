/**
 * Electrical Service Page
 * - Light fitting installation, socket replacement, smart home setup, TV mounting
 * - SEO targeted: "electrician Hereford", "light fitting installation Hereford"
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
import ElectricalHead from "@/components/ElectricalHead";
import {
  BadgeCheck,
  Check,
  Clock,
  Lightbulb,
  Monitor,
  Phone,
  Plug,
  Shield,
  Smartphone,
  Star,
  Tv,
  Wifi,
} from "lucide-react";
import { Link } from "wouter";

export default function Electrical() {
  return (
    <div className="min-h-screen flex flex-col">
      <ElectricalHead />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent font-semibold text-sm mb-6">
              SAFE INSTALLATIONS • FULLY INSURED
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Electrical Services in Hereford
            </h1>

            <p className="text-xl text-primary-foreground/90 mb-8">
              Professional light fitting, socket replacement, smart home installation, and TV mounting. Safe, tidy electrical work for homes across Hereford and Herefordshire.
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
              Domestic Electrical Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From changing a light fitting to setting up your entire smart home, we handle everyday electrical tasks safely
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Light Fitting Installation */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Light Fitting Installation</h3>
                <p className="text-muted-foreground mb-4">
                  Ceiling lights, pendant lights, wall lights, and spotlights fitted safely. We replace old fittings and install new ones with clean, tidy wiring.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Ceiling light replacement
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Pendant & chandelier hanging
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Spotlight installation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Dimmer switch fitting
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border bg-muted/30 rounded p-4">
                  <p className="text-sm text-muted-foreground text-center">Professional light fitting installation -- pendant lights, spotlights, wall sconces, and dimmers</p>
                </div>
              </CardContent>
            </Card>

            {/* Socket Replacement */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Plug className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Socket Replacement</h3>
                <p className="text-muted-foreground mb-4">
                  Replace cracked, yellowed, or outdated sockets with modern, safe alternatives. We swap like-for-like on existing circuits for a clean update.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Single & double socket swap
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    USB socket upgrades
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Switch replacement
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Faceplate upgrades
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border bg-muted/30 rounded p-4">
                  <p className="text-sm text-muted-foreground text-center">Modern socket replacements including USB-equipped and brushed chrome faceplates</p>
                </div>
              </CardContent>
            </Card>

            {/* Smart Home Setup */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Smart Home Setup</h3>
                <p className="text-muted-foreground mb-4">
                  Ring doorbells, Hive thermostats, smart bulbs, and automated lighting systems installed and configured. We set up the app on your phone too.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Ring & Nest doorbells
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Smart thermostat installation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Philips Hue & smart bulbs
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    App setup & configuration
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border bg-muted/30 rounded p-4">
                  <p className="text-sm text-muted-foreground text-center">Smart home technology -- doorbells, thermostats, lighting, and security systems</p>
                </div>
              </CardContent>
            </Card>

            {/* TV Mounting */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Tv className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">TV Wall Mounting</h3>
                <p className="text-muted-foreground mb-4">
                  TVs securely mounted to walls with hidden cables. We mount all sizes up to 85" and can run power and HDMI cables through the wall for a clean look.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Secure stud-mounted brackets
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Hidden cable routing
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Sound bar mounting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    HDMI & power in-wall
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border bg-muted/30 rounded p-4">
                  <p className="text-sm text-muted-foreground text-center">Professional TV mounting with concealed cables and sound bar integration</p>
                </div>
              </CardContent>
            </Card>

            {/* Outdoor & Security Lighting */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Monitor className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Outdoor & Security Lighting</h3>
                <p className="text-muted-foreground mb-4">
                  Security lights, motion sensors, and decorative outdoor lighting fitted safely. Improve security and kerb appeal for your Hereford property.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Security floodlights
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    PIR motion sensor lights
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Garden pathway lights
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    CCTV camera mounting
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border bg-muted/30 rounded p-4">
                  <p className="text-sm text-muted-foreground text-center">Security and outdoor lighting -- motion sensors, floodlights, and garden illumination</p>
                </div>
              </CardContent>
            </Card>

            {/* WiFi & Networking */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Wifi className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">WiFi & Network Setup</h3>
                <p className="text-muted-foreground mb-4">
                  Mesh WiFi systems, network points, and router positioning for full-house coverage. No more dead zones in your Hereford home.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Mesh WiFi installation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Router positioning
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Ethernet cable running
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    WiFi extender setup
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border bg-muted/30 rounded p-4">
                  <p className="text-sm text-muted-foreground text-center">Home networking -- mesh WiFi, Ethernet cabling, and coverage optimization</p>
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
              Why Choose Hereford Handyman for Electrical Work?
            </h2>
            <p className="text-xl text-muted-foreground">
              Safe, affordable electrical services for everyday home needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Safety First</h3>
                <p className="text-muted-foreground">
                  All electrical work carried out safely with proper isolation and testing. For notifiable work, we work with certified Part P electricians in Hereford.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Tidy Wiring</h3>
                <p className="text-muted-foreground">
                  Clean, hidden cable routing and neat connections. We take pride in making sure you can't see any of the wiring when we're finished.
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
                  £45/hr flat rate with no call-out fee. Most light fittings and socket swaps take under an hour, making this excellent value.
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
                Electrical FAQs
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about electrical services in Hereford
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Are you a qualified electrician?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We handle all common domestic electrical tasks including light fitting, socket swaps, and smart home installations. These are like-for-like replacements that don't require Part P certification. For new circuits, consumer unit changes, or rewiring, we partner with certified local electricians in Hereford.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-base font-semibold">
                  How much does it cost to install a light fitting?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A straightforward light fitting replacement takes 20-45 minutes at our £45/hr rate. Heavier fittings (chandeliers, multi-arm pendants) or spotlight installations may take longer. We always quote the expected time before starting.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Can you mount my TV on a plasterboard wall?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, but the approach depends on your TV's weight. For lighter TVs, specialist plasterboard fixings work well. For heavier TVs, we locate the studs behind the plasterboard and mount securely to those. We assess your wall and recommend the safest approach for your specific TV.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Can you set up my Ring doorbell?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely. We install Ring, Nest, Arlo, and other video doorbells regularly. We handle the physical mounting, wiring (if hardwired), WiFi connection, and app setup on your phone. We'll make sure you're comfortable using it before we leave.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Do you install outdoor lighting?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we fit outdoor security lights, PIR motion sensors, and decorative garden lighting. We use IP-rated weatherproof fittings suitable for the Herefordshire weather. For new outdoor circuits, we coordinate with a certified electrician to ensure compliance.
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
            <Link href="/media-walls">
              <Button variant="outline" className="border-accent/30 hover:bg-accent/10">Media Walls</Button>
            </Link>
            <Link href="/general-repairs">
              <Button variant="outline" className="border-accent/30 hover:bg-accent/10">General Repairs</Button>
            </Link>
            <Link href="/elderly-care">
              <Button variant="outline" className="border-accent/30 hover:bg-accent/10">Elderly Care Adaptations</Button>
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
              Need Electrical Work in Hereford?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get a free, no-obligation quote for your electrical project
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
