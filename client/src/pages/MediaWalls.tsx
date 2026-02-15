/**
 * Design Philosophy: Modern Lifestyle & Aspiration
 * - Showcase transformation potential
 * - High-end aesthetic with portfolio focus
 * - Emphasize professional installation value
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MediaWallsHead from "@/components/MediaWallsHead";
import {
  Check,
  Flame,
  Home as HomeIcon,
  Lightbulb,
  Monitor,
  Sparkles,
  Tv,
  Wifi,
  Zap,
} from "lucide-react";

export default function MediaWalls() {
  return (
    <div className="min-h-screen flex flex-col">
      <MediaWallsHead />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent font-semibold text-sm mb-6">
              BESPOKE INSTALLATIONS • PROFESSIONAL CABLE MANAGEMENT
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Bespoke Media Wall Build & Smart Home Installation Services
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8">
              Transform your living room with stunning media walls, floating TVs, and integrated smart home technology
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6">
                View Our Portfolio
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-lg px-8 py-6">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Custom Media Walls: Floating TV & Electric Fire Installation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to completion, we create stunning focal points for your home
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Floating TV Walls */}
            <Card className="hover:shadow-xl transition-all border-2 border-accent/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Tv className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Floating TV Walls</h3>
                <p className="text-muted-foreground mb-6">
                  Sleek, minimalist TV mounting with hidden cables and integrated storage. Perfect for modern living rooms.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                    <span>Professional TV mounting (all sizes up to 85")</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                    <span>Complete cable concealment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                    <span>Integrated LED backlighting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                    <span>Floating shelves and storage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                    <span>Sound bar integration</span>
                  </li>
                </ul>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-accent">[PLACEHOLDER IMAGE: Floating TV Wall Installation]</p>
                </div>
              </CardContent>
            </Card>

            {/* Electric Fire Packages */}
            <Card className="hover:shadow-xl transition-all border-2 border-accent/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Flame className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Electric Fire & TV Packages</h3>
                <p className="text-muted-foreground mb-6">
                  Create a stunning focal point with integrated electric fires beneath your wall-mounted TV.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                    <span>Electric fire installation & wiring</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                    <span>TV mounting above fireplace</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                    <span>Heat-safe TV positioning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                    <span>Remote control integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                    <span>Ambient lighting effects</span>
                  </li>
                </ul>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-accent">[PLACEHOLDER IMAGE: Electric Fire & TV Package]</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Slat Wall Panels */}
          <div className="max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-2 border-accent/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <Sparkles className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Acoustic Slat Wall Panels & Cable Management Solutions</h3>
                    <p className="text-muted-foreground mb-6">
                      The hottest trend in interior design. Acoustic slat panels add texture, warmth, and sound dampening to your media wall.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span>Premium oak, walnut, or painted finishes</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span>Acoustic sound dampening properties</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span>Hidden cable routing channels</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span>Full wall or feature panel options</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span>Integrated LED strip lighting</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <p className="text-sm font-semibold text-accent mb-4">[PLACEHOLDER IMAGE: Acoustic Slat Wall Panel Installation]</p>
                    <p className="text-sm text-muted-foreground">
                      Slat walls create depth and visual interest while hiding all your cables and equipment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Smart Home Integration */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Smart Home Setup: Ring Doorbells, Nest Thermostats & Smart Locks
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete your modern home with professionally installed smart technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Video Doorbells */}
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Monitor className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Video Doorbells</h3>
                <p className="text-muted-foreground mb-4">
                  Ring, Nest, and Arlo doorbell installation with app setup and configuration.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    Professional wiring
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    WiFi optimization
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    App setup & training
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-primary">[PLACEHOLDER: Video Doorbell]</p>
                </div>
              </CardContent>
            </Card>

            {/* Smart Thermostats */}
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Smart Thermostats</h3>
                <p className="text-muted-foreground mb-4">
                  Nest, Hive, and Tado thermostat installation to reduce energy bills.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    Boiler compatibility check
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    Professional wiring
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    Schedule programming
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-primary">[PLACEHOLDER: Smart Thermostat]</p>
                </div>
              </CardContent>
            </Card>

            {/* Smart Locks */}
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <HomeIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Smart Locks</h3>
                <p className="text-muted-foreground mb-4">
                  Yale, August, and Nuki smart lock installation for keyless entry.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    Door compatibility check
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    Secure installation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    Multi-user setup
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-primary">[PLACEHOLDER: Smart Lock]</p>
                </div>
              </CardContent>
            </Card>

            {/* Smart Lighting */}
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Smart Lighting</h3>
                <p className="text-muted-foreground mb-4">
                  Philips Hue, LIFX, and smart switch installation for mood lighting.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    LED strip installation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    Smart switch wiring
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    Scene programming
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-primary">[PLACEHOLDER: Smart Lighting]</p>
                </div>
              </CardContent>
            </Card>

            {/* Home Cinema */}
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Tv className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Home Cinema Setup</h3>
                <p className="text-muted-foreground mb-4">
                  Complete home cinema installation with surround sound and projector mounting.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    Projector mounting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    Surround sound wiring
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    Cable management
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-primary">[PLACEHOLDER: Home Cinema]</p>
                </div>
              </CardContent>
            </Card>

            {/* WiFi Optimization */}
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Wifi className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">WiFi Mesh Systems</h3>
                <p className="text-muted-foreground mb-4">
                  Eliminate dead zones with professionally installed mesh WiFi systems.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    Site survey
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    Optimal node placement
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    Network configuration
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-primary">[PLACEHOLDER: WiFi Mesh]</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Hire a Pro */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Why Hire a Pro? Safe Mounting & Electrical Integration
              </h2>
              <p className="text-xl text-muted-foreground">
                DIY media walls often end in disaster. Here's why professional installation matters.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-destructive">❌ DIY Risks</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>TV falls due to improper mounting (not secured to studs)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Visible cables and messy wiring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Electrical hazards from exposed wiring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Damage to walls from trial and error</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Poor cable management ruins the aesthetic</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-accent/5 border-2 border-accent/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-accent">✓ Professional Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                      <span>Secure mounting to wall studs (holds up to 100kg)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                      <span>Completely hidden cables (in-wall routing)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                      <span>Safe electrical work (certified electrician)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                      <span>Perfect first time (no wall damage)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                      <span>Showroom-quality finish</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-accent/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Recent Projects: See Our Media Wall Transformations in Hereford
            </h2>
            <p className="text-xl text-muted-foreground">
              Real installations from local Hereford homes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="hover:shadow-xl transition-all">
                <CardContent className="p-4">
                  <div className="bg-muted/50 rounded-lg p-8 mb-4 flex items-center justify-center min-h-[200px]">
                    <p className="text-sm font-semibold text-muted-foreground text-center">
                      [PLACEHOLDER: Portfolio Image {i}]
                    </p>
                  </div>
                  <h4 className="font-bold mb-2">Project {i}</h4>
                  <p className="text-sm text-muted-foreground">
                    {i === 1 && "Floating TV wall with LED backlighting"}
                    {i === 2 && "Electric fire & TV package with slat panels"}
                    {i === 3 && "Full wall acoustic slat installation"}
                    {i === 4 && "Modern media wall with hidden storage"}
                    {i === 5 && "Home cinema with surround sound"}
                    {i === 6 && "Smart home integration package"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your Living Room?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Get a free quote for your media wall or smart home project
              </p>
            </div>

            <Card className="bg-background/95">
              <CardContent className="p-8">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" placeholder="John Smith" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="01432 000 000" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="project">Project Details</Label>
                    <Textarea 
                      id="project" 
                      placeholder="Tell us about your media wall or smart home project..."
                      rows={4}
                    />
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg">
                    Get Your Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
