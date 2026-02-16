/**
 * Painting & Decorating Service Page
 * - Interior & exterior painting, wallpapering, wall panelling, colour consultations
 * - SEO targeted: "painter decorator Hereford", "wallpapering Hereford"
 * - 25 real photos available from Dean's portfolio
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
import PaintingDecoratingHead from "@/components/PaintingDecoratingHead";
import {
  BadgeCheck,
  Brush,
  Check,
  Clock,
  Layers,
  Palette,
  Phone,
  Ruler,
  Shield,
  Star,
  Wallpaper,
} from "lucide-react";
import { Link } from "wouter";

export default function PaintingDecorating() {
  return (
    <div className="min-h-screen flex flex-col">
      <PaintingDecoratingHead />
      <Header />

      {/* Hero Section */}
      <section className="relative text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/portfolio/hero-02-study-blue.jpg"
            alt="Professional blue study painted by Hereford Handyman"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/75"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent font-semibold text-sm mb-6">
              PROFESSIONAL FINISH GUARANTEED • FULLY INSURED
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Professional Painter & Decorator in Hereford
            </h1>

            <p className="text-xl text-primary-foreground/90 mb-8">
              Transform your home with expert interior and exterior painting, wallpapering, and decorative wall panelling. Quality finishes throughout Hereford and Herefordshire.
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
              Complete Painting & Decorating Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From a single feature wall to a full house redecoration, we deliver flawless results every time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Interior Painting */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Brush className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Interior Painting</h3>
                <p className="text-muted-foreground mb-4">
                  Walls, ceilings, woodwork, and trim painted to a showroom standard. We use premium paints from Farrow & Ball, Dulux, and Little Greene.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Full room repaints
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Ceiling painting & coving
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Woodwork & skirting boards
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Feature wall creation
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <img
                    src="/images/deans-work/teal-bedroom-wide.jpg"
                    alt="Professionally painted teal bedroom in Hereford"
                    className="rounded-lg w-full h-64 object-cover"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Exterior Painting */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Palette className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Exterior Painting</h3>
                <p className="text-muted-foreground mb-4">
                  Weather-resistant exterior painting for Herefordshire homes. We prep thoroughly to ensure long-lasting results that withstand the local climate.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Front door & frame painting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Window frame & sill painting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Fascia & soffit painting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Garden fence & gate painting
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <img
                    src="/images/deans-work/white-hallway-landing.jpg"
                    alt="Freshly painted white hallway by Hereford Handyman"
                    className="rounded-lg w-full h-64 object-cover"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Wallpapering */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Wallpaper className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Wallpapering</h3>
                <p className="text-muted-foreground mb-4">
                  Expert wallpaper hanging for feature walls and full rooms. We handle tricky patterns, corners, and awkward spaces with precision.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Feature wall wallpapering
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Full room wallpapering
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Wallpaper stripping & prep
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Pattern matching expertise
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <img
                    src="/images/deans-work/floral-wallpaper-hallway.jpg"
                    alt="Floral wallpaper feature wall hung by Hereford Handyman"
                    className="rounded-lg w-full h-64 object-cover"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Wall Panelling */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Layers className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Wall Panelling</h3>
                <p className="text-muted-foreground mb-4">
                  On-trend wall panelling to add character and depth to any room. From classic Shaker-style panels to modern geometric designs.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Shaker-style panelling
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Half-height wainscoting
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Acoustic slat panels
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Geometric panel designs
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <img
                    src="/images/deans-work/blue-panelled-bedroom.jpg"
                    alt="Blue panelled bedroom with decorative wall panelling"
                    className="rounded-lg w-full h-64 object-cover"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Colour Consultations */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Palette className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Colour Consultations</h3>
                <p className="text-muted-foreground mb-4">
                  Not sure which colours to choose? We help you select the perfect palette that complements your furnishings and natural light.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Free colour advice with booking
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Sample pots tested on-site
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Trending colour guidance
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Period property expertise
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <img
                    src="/images/deans-work/wallpaper-bedroom.jpg"
                    alt="Coral bedroom with carefully chosen colour palette"
                    className="rounded-lg w-full h-64 object-cover"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Preparation & Repairs */}
            <Card className="hover:shadow-lg transition-all border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Ruler className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Surface Preparation</h3>
                <p className="text-muted-foreground mb-4">
                  Proper prep is the foundation of a quality finish. We fill, sand, prime, and repair before any paint touches the wall.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Crack filling & plastering
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Sanding & smoothing
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Primer application
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Wallpaper stripping
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <img
                    src="/images/deans-work/period-property-renovation.jpg"
                    alt="Period room renovation with exposed beams in Hereford"
                    className="rounded-lg w-full h-64 object-cover"
                    style={{ objectFit: 'cover' }}
                  />
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
              Why Choose Hereford Handyman for Painting & Decorating?
            </h2>
            <p className="text-xl text-muted-foreground">
              Quality results at honest, fixed-rate pricing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Materials Only</h3>
                <p className="text-muted-foreground">
                  We only use premium paints and materials from trusted brands. No cheap trade paint that fades or chips within months.
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
                  No surprises or hidden costs. Our flat rate of £45/hr means you know exactly what you're paying before we start.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Clean & Tidy Work</h3>
                <p className="text-muted-foreground">
                  We protect your floors, furniture, and fittings. You won't find paint drips or messy edges when we're finished.
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
              Recent Painting & Decorating Projects in Hereford
            </h2>
            <p className="text-xl text-muted-foreground">
              Real transformations from homes across Hereford, Tupsley, Whitecross, and surrounding villages
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Blue Panelled Bedroom", desc: "Full room panelling and painting to a showroom finish", area: "Herefordshire", img: "/images/deans-work/blue-panelled-bedroom.jpg", alt: "Blue panelled bedroom painted by Hereford Handyman" },
              { title: "Blue Study & Office", desc: "Rich blue walls with crisp white trim and woodwork", area: "Herefordshire", img: "/images/deans-work/blue-home-office.jpg", alt: "Blue study office painted by Hereford Handyman" },
              { title: "Floral Feature Wallpaper", desc: "Statement floral wallpaper hung with precision pattern matching", area: "Herefordshire", img: "/images/deans-work/floral-wallpaper-hallway.jpg", alt: "Floral wallpaper feature wall in Hereford home" },
              { title: "Gold Damask Wallpaper", desc: "Elegant damask wallpaper creating a luxurious bedroom atmosphere", area: "Herefordshire", img: "/images/deans-work/gold-damask-wallpaper.jpg", alt: "Gold damask wallpaper installed by Hereford Handyman" },
              { title: "Coral Bedroom Redecoration", desc: "Warm coral tones creating a welcoming bedroom retreat", area: "Herefordshire", img: "/images/deans-work/wallpaper-bedroom.jpg", alt: "Coral bedroom decorated by Hereford Handyman" },
              { title: "Period Room with Beams", desc: "Character property renovation respecting original features", area: "Herefordshire", img: "/images/deans-work/period-property-renovation.jpg", alt: "Period room renovation with exposed beams" },
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
                  <p className="text-xs font-semibold text-accent">{project.area}</p>
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
                Painting & Decorating FAQs
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions from Hereford homeowners
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-base font-semibold">
                  How much does it cost to paint a room in Hereford?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We charge a flat rate of £45/hr. A standard single room (walls and ceiling) typically takes 6-8 hours depending on preparation needed. This includes masking, preparation, two coats, and cleanup. We always provide a fixed estimate before starting so there are no surprises.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Do you supply the paint or should I buy it?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Either option works. We can supply premium paint at trade prices (Dulux, Farrow & Ball, Little Greene) and add it to your quote, or you can purchase your own. We're happy to advise on quantities and the best products for your specific walls and rooms.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-base font-semibold">
                  How long does wallpapering a feature wall take?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A single feature wall typically takes 3-5 hours including surface preparation, paste application, hanging, and pattern matching. Complex patterns or textured wallpapers may take slightly longer. We always strip and prep the surface properly first for the best adhesion.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-base font-semibold">
                  Can you paint the outside of my house?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we handle exterior painting including front doors, window frames, sills, fascia boards, soffits, and garden fences. We use weather-resistant, UV-stable paints designed for the Herefordshire climate. We can also advise on the best time of year for exterior work.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-base font-semibold">
                  What areas around Hereford do you cover?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We cover all of Hereford city including Tupsley, Whitecross, Holmer, Bobblestock, Belmont, and Kings Acre. We also serve surrounding Herefordshire villages including Lugwardine, Bartestree, Credenhill, Burghill, and Mordiford. Contact us to confirm coverage for your area.
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
            <Link href="/flooring">
              <Button variant="outline" className="border-accent/30 hover:bg-accent/10">Flooring</Button>
            </Link>
            <Link href="/general-repairs">
              <Button variant="outline" className="border-accent/30 hover:bg-accent/10">General Repairs</Button>
            </Link>
            <Link href="/media-walls">
              <Button variant="outline" className="border-accent/30 hover:bg-accent/10">Media Walls</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Rooms?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get a free, no-obligation quote for your painting or decorating project
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
