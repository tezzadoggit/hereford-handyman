/**
 * Mesh Networks Page
 * - Professional WiFi mesh network installation
 * - Node installation and configuration
 * - Whole-home coverage solutions
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  Check,
  Home as HomeIcon,
  MapPin,
  Network,
  Signal,
  Wifi,
  Zap,
} from "lucide-react";
import { useEffect } from "react";

export default function MeshNetworks() {
  useEffect(() => {
    document.title = 'Mesh Network Installation Hereford | WiFi Coverage Solutions';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Professional mesh network installation in Hereford. Eliminate WiFi dead zones with whole-home coverage. Expert node installation and configuration.');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent font-semibold text-sm mb-6">
              WHOLE-HOME WiFi COVERAGE • PROFESSIONAL INSTALLATION
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Mesh Network Installation Services in Hereford
            </h1>

            <p className="text-xl text-primary-foreground/90 mb-8">
              Eliminate WiFi dead zones with professional mesh network installation. Complete coverage for every room in your home.
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
            <h2 className="text-4xl font-bold mb-4">Why Install a Mesh Network?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional installation ensures optimal coverage and performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Signal className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Whole-Home Coverage</h3>
                <p className="text-muted-foreground">
                  WiFi in every room, no dead zones. Seamless connectivity throughout your property.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fast & Reliable</h3>
                <p className="text-muted-foreground">
                  Professional node placement for optimal speed and reliability in every corner.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Multiple Devices</h3>
                <p className="text-muted-foreground">
                  Support dozens of devices simultaneously without slowdown or lag.
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
            <h2 className="text-4xl font-bold mb-4">Our Mesh Network Services</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wifi className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Full Installation & Configuration</h3>
                    <p className="text-muted-foreground">
                      Complete mesh network setup including node installation, optimal placement, and full configuration for your home.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Professional Node Placement</h3>
                    <p className="text-muted-foreground">
                      Strategic positioning of mesh nodes for maximum coverage and performance throughout your property.
                    </p>
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
                    <h3 className="text-xl font-bold mb-2">Smart Home Integration</h3>
                    <p className="text-muted-foreground">
                      Connect and configure all your smart home devices to work seamlessly with your new mesh network.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for Whole-Home WiFi Coverage?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get a free quote for professional mesh network installation in Hereford
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
