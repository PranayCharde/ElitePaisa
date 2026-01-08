import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section for About Page */}
      <section className="relative min-h-screen gradient-hero overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gold/20 px-4 py-2 rounded-full mb-6"
              >
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                <span className="text-gold text-sm font-medium">Trusted by 50,000+ customers</span>
              </motion.div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                About <span className="text-gradient-gold">ElitePaisa</span>
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
                We are India's leading financial services platform, dedicated to making loans accessible, 
                simple, and fast for everyone. Our mission is to bridge the gap between financial needs and solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gold hover:bg-gold-dark text-navy-deep font-semibold px-8 py-6 text-lg shadow-elevated hover:shadow-2xl transition-all duration-300 animate-pulse-glow"
                >
                  Learn More
                </Button>
                <Button 
                  size="lg"
                  variant="outline" 
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg"
                >
                  Our Story
                </Button>
              </div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-primary-foreground/10"
              >
                <div className="text-center lg:text-left">
                  <div className="flex items-center gap-2 justify-center lg:justify-start text-gold mb-1">
                    <Users className="w-5 h-5" />
                    <span className="font-display text-2xl font-bold text-primary-foreground">50K+</span>
                  </div>
                  <span className="text-sm text-primary-foreground/60">Happy Customers</span>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center gap-2 justify-center lg:justify-start text-gold mb-1">
                    <Award className="w-5 h-5" />
                    <span className="font-display text-2xl font-bold text-primary-foreground">5+</span>
                  </div>
                  <span className="text-sm text-primary-foreground/60">Years Experience</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gold/20 rounded-3xl blur-2xl" />
                <div className="relative bg-card/10 backdrop-blur-lg rounded-3xl p-8 border border-primary-foreground/10">
                  <div className="text-center mb-8">
                    <h3 className="text-primary-foreground/80 text-lg mb-2">Our Mission</h3>
                    <div className="font-display text-3xl font-bold text-gold">Financial Inclusion</div>
                    <p className="text-primary-foreground/60 mt-2">Making loans accessible to all</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-primary-foreground/5 rounded-xl">
                      <span className="text-primary-foreground/80">Loans Disbursed</span>
                      <span className="text-gold font-semibold">₹2,000 Crores+</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-primary-foreground/5 rounded-xl">
                      <span className="text-primary-foreground/80">Approval Rate</span>
                      <span className="text-gold font-semibold">95%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-primary-foreground/5 rounded-xl">
                      <span className="text-primary-foreground/80">Processing Time</span>
                      <span className="text-gold font-semibold">24 Hours</span>
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-gold hover:bg-gold-dark text-navy-deep font-semibold py-6">
                    Contact Us
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="hsl(210 25% 98%)"
            />
          </svg>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              className="font-display text-3xl md:text-4xl font-bold text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our <span className="text-gold">Story</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Founded in 2019, ElitePaisa began with a simple mission: to make financial services accessible 
              to everyone, regardless of their background or financial history. We recognized that many 
              individuals and businesses struggle to access traditional loans due to complex procedures 
              and stringent requirements.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Trust & Security",
                description: "We prioritize the safety of our customers' data and transactions with the highest security standards."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Quick Processing",
                description: "Our streamlined process ensures that your loan application is processed in the shortest time possible."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Customer Focus",
                description: "We put our customers first, offering personalized solutions and dedicated support throughout the journey."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border shadow-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index }}
              >
                <div className="text-gold mb-4">{item.icon}</div>
                <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              className="font-display text-3xl md:text-4xl font-bold text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our <span className="text-gold">Values</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Integrity",
                description: "We maintain the highest standards of honesty and transparency in all our dealings."
              },
              {
                title: "Innovation",
                description: "We continuously innovate to provide better financial solutions to our customers."
              },
              {
                title: "Accessibility",
                description: "We believe financial services should be available to everyone, everywhere."
              },
              {
                title: "Excellence",
                description: "We strive for excellence in every aspect of our service delivery."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-xl border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <h3 className="font-display text-xl font-bold text-gold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;