/**
 * Smart Home Installation Page
 * - Ring doorbell installation
 * - Smart lighting & switches
 * - Smart thermostats
 * - Smart locks & security
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  Check,
  DoorOpen,
  Home as HomeIcon,
  Lightbulb,
  Lock,
  Shield,
  Smartphone,
  Thermometer,
  Video,
  Wifi,
} from "lucide-react";
import { useEffect } from "react";

export default function SmartHome() {
  useEffect(() => {
    document.title = 'Smart Home Installation Hereford | Ring Doorbell & Home Automation';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Professional smart home installation in Hereford. Ring doorbell, smart lighting, thermostats, locks & home automation. Expert setup and configuration.');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent font-semibold text-sm mb-6">
              SMART HOME EXPERTS • PROFESSIONAL INSTALLATION
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Smart Home Installation Services in Hereford
            </h1>

            <p className="text-xl text-primary-foreground/90 mb-8">
              Transform your house into a smart home. Ring doorbell, smart lighting, thermostats, and complete home automation solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Get Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground">
                Call: 07494 273 251
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Go Smart?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional installation ensures your smart home devices work perfectly from day one
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Enhanced Security</h3>
                <p className="text-muted-foreground">
                  See who's at your door from anywhere. Smart locks and video doorbells keep your home secure.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Control from Anywhere</h3>
                <p className="text-muted-foreground">
                  Control lights, heating, and security from your phone, whether at home or away.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Thermometer className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Energy Savings</h3>
                <p className="text-muted-foreground">
                  Smart thermostats and lighting reduce energy bills by optimizing usage automatically.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Smart Home Services</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Video className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Ring Doorbell Installation</h3>
                    <p className="text-muted-foreground mb-3">
                      Professional Ring doorbell installation including wiring, WiFi setup, and app configuration. See and speak to visitors from anywhere.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 text-sm text-accent">
                        <Check className="w-4 h-4" /> Hardwired or battery
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-accent">
                        <Check className="w-4 h-4" /> Motion detection setup
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-accent">
                        <Check className="w-4 h-4" /> Full app training
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Smart Lighting & Switches</h3>
                    <p className="text-muted-foreground mb-3">
                      Install smart bulbs, switches, and dimmers. Control lighting by voice, schedule, or app. Perfect for mood lighting and energy savings.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 text-sm text-accent">
                        <Check className="w-4 h-4" /> Philips Hue
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-accent">
                        <Check className="w-4 h-4" /> Smart switches
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-accent">
                        <Check className="w-4 h-4" /> Voice control
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Thermometer className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Smart Thermostats</h3>
                    <p className="text-muted-foreground mb-3">
                      Professional installation of Nest, Hive, or Tado thermostats. Control heating remotely and save up to 30% on energy bills.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 text-sm text-accent">
                        <Check className="w-4 h-4" /> Boiler compatibility check
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-accent">
                        <Check className="w-4 h-4" /> App setup
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-accent">
                        <Check className="w-4 h-4" /> Schedule programming
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Smart Locks & Access</h3>
                    <p className="text-muted-foreground mb-3">
                      Keyless entry with smart locks. Grant temporary access to guests, cleaners, or tradespeople from your phone.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 text-sm text-accent">
                        <Check className="w-4 h-4" /> Yale & August locks
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-accent">
                        <Check className="w-4 h-4" /> Code management
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-accent">
                        <Check className="w-4 h-4" /> Door sensor integration
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HomeIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Complete Home Automation</h3>
                    <p className="text-muted-foreground mb-3">
                      Integrate all your smart devices. Create routines: "Good morning" opens blinds, turns on lights, starts coffee. We make it simple.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 text-sm text-accent">
                        <Check className="w-4 h-4" /> Alexa & Google Home
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-accent">
                        <Check className="w-4 h-4" /> Smart plugs & sensors
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-accent">
                        <Check className="w-4 h-4" /> Routine setup
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wifi className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">WiFi & Network Setup</h3>
                    <p className="text-muted-foreground mb-3">
                      Ensure your WiFi network can handle all your smart devices. Mesh network installation for whole-home coverage.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 text-sm text-accent">
                        <Check className="w-4 h-4" /> Mesh networks
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-accent">
                        <Check className="w-4 h-4" /> Device optimization
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-accent">
                        <Check className="w-4 h-4" /> Security setup
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Hereford Handyman for Smart Home Installation?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-accent mb-2">Fixed</div>
                <div className="text-sm text-muted-foreground">Transparent pricing, no surprises</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-accent mb-2">Expert</div>
                <div className="text-sm text-muted-foreground">Trained in all major smart home brands</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-accent mb-2">Training</div>
                <div className="text-sm text-muted-foreground">Full app & voice control walkthrough</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-accent mb-2">Support</div>
                <div className="text-sm text-muted-foreground">Ongoing help if you need it</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Make Your Home Smarter?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get a free quote for smart home installation in Hereford. Ring doorbell, smart lighting, thermostats & more.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Get Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground">
                Call: 07494 273 251
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
