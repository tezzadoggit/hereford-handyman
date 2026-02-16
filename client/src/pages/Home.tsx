/**
 * Design Philosophy: Modern Professional with Trust-Building
 * - Split-screen hero (headline left, booking form right)
 * - Asymmetric service grid avoiding centered monotony
 * - Trust signals prominently displayed
 * - Fixed-rate pricing transparency
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  BadgeCheck,
  Calendar,
  Check,
  Clock,
  CreditCard,
  Hammer,
  Home as HomeIcon,
  Lightbulb,
  Shield,
  Sparkles,
  Star,
  Users,
  Wrench,
  Zap,
  Phone,
} from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const portfolioItems = [
    {
      src: "/images/work/blue-panelled-bedroom.jpg",
      title: "Blue Panelled Bedroom",
      category: "Painting",
      alt: "Newly painted blue panelled bedroom wall in a Hereford home.",
    },
    {
      src: "/images/work/bathroom-patterned-tiles.jpg",
      title: "Modern Bathroom Renovation",
      category: "Bathroom",
      alt: "Modern bathroom renovation with new tiling and fixtures in Hereford.",
    },
    {
      src: "/images/work/restored-floorboards.jpg",
      title: "Restored Period Flooring",
      category: "Flooring",
      alt: "Beautifully restored wooden parquet flooring in a period property.",
    },
    {
      src: "/images/work/navy-kitchen.jpg",
      title: "Navy Kitchen Installation",
      category: "Kitchen",
      alt: "Stylish navy blue kitchen installation with white countertops.",
    },
    {
      src: "/images/work/bespoke-dresser.jpg",
      title: "Bespoke Dresser Unit",
      category: "Carpentry",
      alt: "Custom-built white dresser unit, an example of our carpentry in Hereford.",
    },
    {
      src: "/images/work/period-property-renovation.jpg",
      title: "Period Property Renovation",
      category: "Painting",
      alt: "Painting and renovation work on a period property with wooden beams.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section - Centered */}
      <section className="relative bg-black text-primary-foreground overflow-hidden py-32 lg:py-48">
        <div className="absolute inset-0">
          <img
            src="/images/hereford-bridge.png"
            alt="The Old Bridge in Hereford"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
        </div>

        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-block px-6 py-2 bg-primary/20 backdrop-blur-md rounded-full text-primary font-bold text-sm uppercase tracking-widest border border-primary/20 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            ✓ No Call-Out Fees • £45/hr Flat Rate
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-8 tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            Reliable Property Maintenance in <span className="text-primary">Hereford</span>
          </h1>

          <p className="text-xl lg:text-2xl text-white/80 mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Your local, trusted handyman service. Simple pricing, professional results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-widest px-10 py-8 text-lg min-w-[200px] shadow-lg shadow-primary/20">
              <span className="mr-2">Get a Quote</span>
              <Sparkles className="w-5 h-5" />
            </Button>
            <a href="tel:07494273251">
              <Button size="lg" variant="outline" className="border-2 border-white/20 text-white hover:bg-white/10 font-bold uppercase tracking-wider px-10 py-8 text-lg min-w-[200px]">
                Call Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Trust Signals Bar */}
      <section className="bg-accent/10 py-6 border-y border-accent/20">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-center">
            <div className="flex items-center space-x-2">
              <BadgeCheck className="w-5 h-5 text-accent" />
              <span className="font-semibold">Local & Trusted</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-accent" />
              <span className="font-semibold">Fully Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <CreditCard className="w-5 h-5 text-accent" />
              <span className="font-semibold">No Call-Out Fee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-accent fill-accent" />
              <span className="font-semibold">5-Star Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Quote Section */}
      <section className="py-20 bg-muted/30 border-y border-border" id="quote">
        <div className="container max-w-5xl">
          <div className="bg-background rounded-2xl shadow-xl border border-primary/10 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-12 bg-black text-white flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-widest w-fit mb-6">
                  Free Estimates
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Tell us about your project</h2>
                <p className="text-white/70 mb-8 text-lg">
                  Whether it's a small repair or a room renovation, we'll get back to you within 24 hours with a fixed rate or estimate.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-primary mr-3" />
                    <span className="font-semibold">Fast Response Times</span>
                  </div>
                  <div className="flex items-center">
                    <CreditCard className="w-5 h-5 text-primary mr-3" />
                    <span className="font-semibold">No Hidden Costs</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-primary mr-3" />
                    <span className="font-semibold">Flexible Scheduling</span>
                  </div>
                </div>
              </div>

              <div className="p-10 lg:p-12">
                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = {
                    name: (form.elements.namedItem('name') as HTMLInputElement).value,
                    phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
                    service: (form.elements.namedItem('service') as HTMLInputElement).value,
                    details: (form.elements.namedItem('details') as HTMLTextAreaElement).value,
                  };

                  const submitBtn = form.querySelector('button[type="submit"]');
                  if (submitBtn) {
                    submitBtn.textContent = 'Sending...';
                    submitBtn.setAttribute('disabled', 'true');
                  }

                  fetch('/api/send-quote', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                  })
                    .then(async (res) => {
                      const result = await res.json();
                      if (res.ok) {
                        alert('Quote request sent! We will be in touch shortly.');
                        form.reset();
                      } else {
                        alert(`Failed to send: ${result.message} (${result.error || 'Unknown error'})`);
                      }
                    })
                    .catch((err) => {
                      alert('Error sending quote. Please try again or call us.');
                      console.error(err);
                    })
                    .finally(() => {
                      if (submitBtn) {
                        submitBtn.textContent = 'Get Quick Quote';
                        submitBtn.removeAttribute('disabled');
                      }
                    });
                }}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-bold">Name</Label>
                      <Input id="name" name="name" placeholder="John Smith" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-bold">Phone</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="07xxx xxx xxx" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="font-bold">Service Required</Label>
                    <Input id="service" name="service" placeholder="e.g. Painting, Plumbing, Carpentry..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="details" className="font-bold">Project Details</Label>
                    <Textarea id="details" name="details" placeholder="Tell us a bit more about what you need done..." rows={3} />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-black py-6 text-lg uppercase tracking-wide shadow-lg shadow-primary/20">
                    Get Quick Quote
                  </Button>

                  <div className="relative text-center">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-muted-foreground/20"></span>
                    </div>
                    <div className="relative">
                      <span className="bg-background px-2 text-xs text-muted-foreground uppercase tracking-widest font-bold">Or prefer to talk?</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <a href="tel:07494273251" className="w-full">
                      <Button variant="outline" type="button" className="w-full border-2 border-black/10 hover:border-primary/50 hover:bg-primary/5 font-bold uppercase tracking-wider py-6">
                        <Phone className="w-4 h-4 mr-2 text-black" />
                        Call Us
                      </Button>
                    </a>
                    <a href="https://wa.me/447494273251" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="outline" type="button" className="w-full border-2 border-green-500/20 hover:border-green-500/50 hover:bg-green-500/5 text-green-700 font-bold uppercase tracking-wider py-6">
                        <span className="mr-2">WhatsApp</span>
                      </Button>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Asymmetric Layout */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Our Core Handyman Services in Hereford
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We handle everything from small repairs to full renovations across Hereford, Tupsley, Holmer, and Belmont.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Painting & Decorating - Featured */}
            <Card className="lg:col-span-2 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <HomeIcon className="w-8 h-8 text-accent" />
                  </div>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                    POPULAR
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Painting & Decorating</h3>
                <p className="text-muted-foreground mb-4">
                  Professional interior and exterior painting services to refresh your home.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Full room painting
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Feature wall creation
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Woodwork and trim finishing
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Minor plaster repairs
                  </li>
                </ul>
                <Link href="/services/painting">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    View Painting Services
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* General Repairs */}
            <Card className="hover:shadow-lg transition-all border-border hover:border-accent/40">
              <CardContent className="p-6">
                <div className="p-3 bg-primary/10 rounded-lg mb-4 w-fit">
                  <Hammer className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">General Repairs</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  All your everyday handyman needs covered.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    Flat-pack furniture assembly
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    Hanging pictures & mirrors
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    Door & window repairs
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Carpentry */}
            <Card className="hover:shadow-lg transition-all border-border hover:border-accent/40">
              <CardContent className="p-6">
                <div className="p-3 bg-primary/10 rounded-lg mb-4 w-fit">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Carpentry</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Custom solutions and repairs in wood.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    Bespoke shelving & storage
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    Skirting board fitting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-primary" />
                    Laminate flooring installation
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Property Maintenance - B2B Focus */}
            <Card className="lg:col-span-2 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                    FOR BUSINESS
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Maintenance for Landlords & Agents</h3>
                <p className="text-muted-foreground mb-4">
                  Reliable, responsive property maintenance services for your Hereford rental portfolio.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 mr-2 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Priority Service</p>
                      <p className="text-xs text-muted-foreground">Fast response for urgent repairs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CreditCard className="w-5 h-5 mr-2 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Monthly Invoicing</p>
                      <p className="text-xs text-muted-foreground">Consolidated billing for all jobs</p>
                    </div>
                  </div>
                </div>
                <Link href="/b2b">
                  <Button className="w-full">
                    Explore Business Maintenance Packages
                    <Sparkles className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
