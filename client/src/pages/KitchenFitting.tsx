/**
 * Kitchen Fitting Service Page
 * - Full kitchen installation, worktop fitting, cabinet assembly, splashbacks
 * - SEO targeted: "kitchen fitter Hereford", "kitchen installation Hereford"
 * - 6 real photos available from Dean's portfolio
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
import KitchenFittingHead from "@/components/KitchenFittingHead";
import {
  BadgeCheck,
  Check,
  ChefHat,
  Clock,
  Hammer,
  Layers,
  LayoutGrid,
  Phone,
  Ruler,
  Shield,
  Star,
  Wrench,
} from "lucide-react";
import { Link } from "wouter";

export default function KitchenFitting() {
  return (
    <div className="min-h-screen flex flex-col">
      <KitchenFittingHead />
      <Header />

      {/* Hero Section */}
      <section className="relative text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/deans-work/navy-kitchen.jpg"
            alt="Navy kitchen with oak worktop fitted by Hereford Handyman"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/75"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent font-semibold text-sm mb-6">
              PROFESSIONAL KITCHEN INSTALLATION • FULLY INSURED
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Professional Kitchen Fitter in Hereford
            </h1>

            <p className="text-xl text-primary-foreground/90 mb-8">
              Expert kitchen installation from flat-pack assembly to bespoke Shaker kitchens. Worktops, cabinets, splashbacks, and plumbing all handled by one tradesman.
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
              Complete Kitchen Installation Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From IKEA flat-packs to fully bespoke kitchens, we handle every aspect of your kitchen renovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Full Kitchen Installation */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <ChefHat className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Full Kitchen Installation</h3>
                <p className="text-muted-foreground mb-4">
                  Complete kitchen fitting from scratch. We remove the old kitchen, prepare walls and floors, and install your new one to perfection.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Old kitchen removal
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Wall & floor preparation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Full unit installation
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Plumbing & electrical connections
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <img src="/images/deans-work/white-shaker-kitchen-wide.jpg" alt="Shaker kitchen installed by Hereford Handyman" className="rounded-lg w-full h-40 object-cover" />
                </div>
              </CardContent>
            </Card>

            {/* Worktop Fitting */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Ruler className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Worktop Fitting</h3>
                <p className="text-muted-foreground mb-4">
                  Precision worktop cutting and fitting for all materials including laminate, solid wood, and composite. Sink cut-outs and edge profiling included.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Laminate worktops
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Solid wood worktops
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Sink & hob cut-outs
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Joining & edging
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <img src="/images/deans-work/navy-kitchen.jpg" alt="Navy kitchen with oak worktop fitted by Hereford Handyman" className="rounded-lg w-full h-40 object-cover" />
                </div>
              </CardContent>
            </Card>

            {/* Cabinet Assembly */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <LayoutGrid className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cabinet Assembly & Fitting</h3>
                <p className="text-muted-foreground mb-4">
                  Expert assembly of flat-pack kitchen units from IKEA, Howdens, Wren, and B&Q. Perfectly level, perfectly aligned, every time.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Flat-pack assembly
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Wall & base unit fixing
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Door alignment & adjustment
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Soft-close hinge fitting
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <img src="/images/deans-work/navy-kitchen-worktops.jpg" alt="Kitchen island with wine rack fitted by Hereford Handyman" className="rounded-lg w-full h-40 object-cover" />
                </div>
              </CardContent>
            </Card>

            {/* Splashbacks & Tiling */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Layers className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Splashbacks & Tiling</h3>
                <p className="text-muted-foreground mb-4">
                  Tile, glass, and acrylic splashbacks fitted to protect your walls and complete the kitchen look. Metro tiles, mosaics, and more.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Metro tile splashbacks
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Glass splashbacks
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Mosaic tile fitting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Grouting & sealing
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <img src="/images/deans-work/white-shaker-kitchen.jpg" alt="Full kitchen with splashback fitted by Hereford Handyman" className="rounded-lg w-full h-40 object-cover" />
                </div>
              </CardContent>
            </Card>

            {/* Appliance Installation */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Appliance Installation</h3>
                <p className="text-muted-foreground mb-4">
                  Integrated and freestanding appliance installation. Dishwashers, washing machines, ovens, and extractors connected and tested.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Integrated oven fitting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Dishwasher connection
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Extractor hood fitting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Hob installation
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <img src="/images/deans-work/bespoke-dresser.jpg" alt="Plate rack cabinet in kitchen fitted by Hereford Handyman" className="rounded-lg w-full h-40 object-cover" />
                </div>
              </CardContent>
            </Card>

            {/* Kitchen Islands */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Hammer className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Kitchen Islands & Breakfast Bars</h3>
                <p className="text-muted-foreground mb-4">
                  Freestanding and fixed kitchen islands built or assembled to create the centrepiece of your kitchen. Including plumbing and electrics if needed.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Island unit assembly
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Breakfast bar fitting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Plumbing for island sinks
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Power socket integration
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <img src="/images/deans-work/navy-kitchen-worktops.jpg" alt="Kitchen island with wine rack and breakfast bar" className="rounded-lg w-full h-40 object-cover" />
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
              Why Choose Hereford Handyman for Kitchen Fitting?
            </h2>
            <p className="text-xl text-muted-foreground">
              One tradesman for the entire job -- no coordination headaches
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Multi-Skilled Fitter</h3>
                <p className="text-muted-foreground">
                  Carpentry, plumbing, tiling, and electrical all handled by one person. No waiting for multiple trades to coordinate schedules.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Minimal Disruption</h3>
                <p className="text-muted-foreground">
                  We know being without a kitchen is stressful. We work efficiently to get your new kitchen fitted and functional as quickly as possible.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Showroom Finish</h3>
                <p className="text-muted-foreground">
                  Every door aligned, every worktop joint seamless, every tile perfectly level. We don't leave until you're completely satisfied with the result.
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
              Recent Kitchen Projects in Hereford
            </h2>
            <p className="text-xl text-muted-foreground">
              Real kitchen installations from homes across Herefordshire
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Navy Kitchen with Oak Worktop", desc: "Bespoke navy kitchen installation with solid oak worktops", img: "/images/deans-work/navy-kitchen.jpg", alt: "Navy kitchen with oak worktop" },
              { title: "Kitchen Island with Wine Rack", desc: "Central island unit with integrated wine storage and prep space", img: "/images/deans-work/navy-kitchen-worktops.jpg", alt: "Kitchen island with wine rack" },
              { title: "Shaker Kitchen Installation", desc: "Classic shaker-style kitchen fitted from scratch", img: "/images/deans-work/white-shaker-kitchen-wide.jpg", alt: "Shaker kitchen fitted by Hereford Handyman" },
              { title: "Full Kitchen with Plate Rack", desc: "Complete kitchen installation with bespoke plate rack cabinet", img: "/images/deans-work/bespoke-dresser.jpg", alt: "Kitchen with plate rack cabinet" },
              { title: "Kitchen Overview", desc: "Fully fitted kitchen with coordinated units, worktops, and splashback", img: "/images/deans-work/white-shaker-kitchen.jpg", alt: "Full kitchen installation in Hereford" },
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
                Kitchen Fitting FAQs
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about kitchen installation in Hereford
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-base font-semibold">
                  How long does a full kitchen installation take?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A typical kitchen installation takes 3-5 days depending on the size and complexity. This includes removing the old kitchen, preparing surfaces, fitting all units, worktops, appliances, tiling, and final adjustments. We provide a detailed timeline before starting.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Can you fit IKEA and other flat-pack kitchens?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely. We regularly fit kitchens from IKEA, Howdens, Wren, B&Q, and Wickes. We assemble all units, fit worktops, connect plumbing, and handle everything to give you a professional finish -- often better than what the kitchen company's own fitters deliver.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Do you handle the plumbing and electrics?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we handle basic plumbing connections (sink, dishwasher, washing machine) and like-for-like electrical connections. For major plumbing re-routes or new electrical circuits, we work with trusted local Hereford specialists and coordinate the entire project for you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-base font-semibold">
                  How much does kitchen fitting cost in Hereford?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  At our fixed rate of £45/hr, labour for a standard kitchen installation typically ranges from £1,200-£2,000 depending on the size and specification. We provide a detailed written quote after assessing your kitchen, so you know the exact cost before we start.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Will I be without a kitchen during the work?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We try to minimise downtime. We typically disconnect the old kitchen and begin fitting the same day. Where possible, we reconnect the sink and cooker at the end of each day so you have basic facilities. We'll advise on the best approach for your specific kitchen layout.
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
              Ready for Your Dream Kitchen?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get a free, no-obligation quote for your kitchen installation
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
