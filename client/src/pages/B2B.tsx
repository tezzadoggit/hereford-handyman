/**
 * Design Philosophy: B2B Professional Trust-Building
 * - Emphasize reliability, systems, and professionalism
 * - Retainer package as hero offering
 * - Case studies and ROI focus
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import B2BHead from "@/components/B2BHead";
import {
  BadgeCheck,
  Building2,
  Calendar,
  Check,
  Clock,
  CreditCard,
  FileText,
  Home as HomeIcon,
  Mail,
  Phone,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";

export default function B2B() {
  return (
    <div className="min-h-screen flex flex-col">
      <B2BHead />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Building2 className="absolute -right-20 -bottom-20 w-96 h-96 text-primary rotate-12" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur rounded-full text-primary font-bold text-xs uppercase tracking-widest border border-primary/20 mb-8">
              FOR LANDLORDS, LETTING AGENTS & PROPERTY MANAGERS
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-8 tracking-tighter">
              Priority Maintenance for <span className="text-primary italic">Hereford Property Professionals</span>
            </h1>

            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-medium">
              Priority retainer packages designed for property professionals managing volume in Hereford. Fix it fast, fix it once.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-widest px-10 py-8 text-lg">
                Get Your Retainer Quote
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/20 text-white hover:bg-white/10 font-bold uppercase tracking-wider px-10 py-8 text-lg">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              We Know Your Pain Points
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <Card>
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">😤</div>
                  <h3 className="font-bold mb-2">Phone Tag Hell</h3>
                  <p className="text-sm text-muted-foreground">
                    Your usual tradesperson doesn't pick up when a tenant reports a leak
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">💸</div>
                  <h3 className="font-bold mb-2">Quote Chasing</h3>
                  <p className="text-sm text-muted-foreground">
                    Waiting weeks for estimates while the problem gets worse
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">📄</div>
                  <h3 className="font-bold mb-2">Invoice Chaos</h3>
                  <p className="text-sm text-muted-foreground">
                    Cash-in-hand receipts and crumpled paper invoices
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section >

      {/* Priority Retainer Package */}
      < section className="py-20 bg-gradient-to-br from-accent/5 to-accent/10" >
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Our Commercial Retainer: £40/hr Flat Rate for Priority Partners
              </h2>
              <p className="text-xl text-muted-foreground">
                A system, not just a person. Guaranteed response times and transparent pricing.
              </p>
            </div>

            <Card className="bg-background shadow-2xl border-2 border-accent/20">
              <CardContent className="p-12">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left: Package Details */}
                  <div>
                    <div className="inline-block px-6 py-3 bg-accent/10 rounded-full mb-6">
                      <span className="text-4xl font-bold text-accent">£200</span>
                      <span className="text-xl text-muted-foreground">/month</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-6">What's Included:</h3>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                          <Clock className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold">48-Hour Response Guarantee</p>
                          <p className="text-sm text-muted-foreground">For up to 5 priority properties per month</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold">Discounted Labor Rate</p>
                          <p className="text-sm text-muted-foreground">£40/hr (down from standard £45/hr)</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold">Online Booking Portal</p>
                          <p className="text-sm text-muted-foreground">Log jobs instantly, no phone calls needed</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                          <FileText className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold">Consolidated Monthly Invoicing</p>
                          <p className="text-sm text-muted-foreground">One invoice per month, digital payment</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                          <BadgeCheck className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold">Trusted Professionals</p>
                          <p className="text-sm text-muted-foreground">Essential for care homes and HMOs</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                          <Shield className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold">Fully Insured</p>
                          <p className="text-sm text-muted-foreground">Public liability coverage included</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Contact Form */}
                  <div className="bg-muted/30 p-8 rounded-lg">
                    <h3 className="text-xl font-bold mb-6">Get Your Custom Quote</h3>
                    <form className="space-y-4">
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" placeholder="ABC Lettings" />
                      </div>
                      <div>
                        <Label htmlFor="contact">Your Name</Label>
                        <Input id="contact" placeholder="John Smith" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@abclettings.co.uk" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" placeholder="01432 000 000" />
                      </div>
                      <div>
                        <Label htmlFor="properties">Number of Properties</Label>
                        <Input id="properties" placeholder="e.g., 50-100" />
                      </div>
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6">
                        Request Retainer Quote
                      </Button>
                    </form>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section >

      {/* Target Clients */}
      < section className="py-20 bg-background" >
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Professional Staff for Care Homes and Vulnerable Tenant Visits
            </h2>
            <p className="text-xl text-muted-foreground">
              Property professionals with high maintenance anxiety
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Independent Letting Agencies</h3>
                <p className="text-sm text-muted-foreground">
                  Managing 50-200 listings without full-time facilities staff
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HomeIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">HMO Landlords</h3>
                <p className="text-sm text-muted-foreground">
                  High wear and tear requiring quick turnaround times
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Care Homes</h3>
                <p className="text-sm text-muted-foreground">
                  Compliance-focused facilities needing trusted professionals
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HomeIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Holiday Let Managers</h3>
                <p className="text-sm text-muted-foreground">
                  AirBnB properties where speed prevents bad reviews
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section >

      {/* Why Us vs Competition */}
      < section className="py-20 bg-muted/30" >
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center">
              Why Property Managers Choose Us
            </h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Check className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">No More Phone Tag</h3>
                      <p className="text-muted-foreground">
                        Book jobs online 24/7 through our portal. No voicemails, no waiting for callbacks. Your tenant reports a leak at 11pm? Log it instantly and we'll respond within 48 hours.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Check className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Fixed Pricing, No Surprises</h3>
                      <p className="text-muted-foreground">
                        We don't do "I'll come round and give you a quote." You know the rate upfront: £40/hr for retainer clients. Materials at cost. No hidden fees, no call-out charges.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Check className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Consolidated Billing</h3>
                      <p className="text-muted-foreground">
                        One monthly invoice covering all properties. Digital payment options. No cash-in-hand, no crumpled receipts. Perfect for your accounting team.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Check className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Compliance-Ready</h3>
                      <p className="text-muted-foreground">
                        All our handymen are fully insured. Essential for care homes and HMOs. We understand your compliance requirements.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section >

      {/* CTA Section */}
      < section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground" >
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Automate Your Maintenance?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Let's discuss how our retainer package can save you time and headaches
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-background/95">
                <CardContent className="p-6">
                  <Mail className="w-8 h-8 text-accent mb-3 mx-auto" />
                  <h3 className="font-bold mb-2">Email Us</h3>
                  <a href="mailto:b2b@herefordhandyman.co.uk" className="text-sm text-primary hover:underline">
                    b2b@herefordhandyman.co.uk
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-background/95">
                <CardContent className="p-6">
                  <Phone className="w-8 h-8 text-accent mb-3 mx-auto" />
                  <h3 className="font-bold mb-2">Call Us</h3>
                  <a href="tel:01432000000" className="text-sm text-primary hover:underline">
                    01432 000 000
                  </a>
                </CardContent>
              </Card>
            </div>

            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6">
              Schedule a 10-Minute Coffee Chat
            </Button>
          </div>
        </div>
      </section >

      <Footer />
    </div >
  );
}
