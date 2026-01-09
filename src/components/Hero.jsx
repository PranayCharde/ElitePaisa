import { motion } from "framer-motion";
import { Button } from "@/components/ui/button.jsx";
import { ArrowRight, Shield, Clock, Percent } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
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
              Your Financial Dreams,{" "}
              <span className="text-gradient-gold">Our Commitment</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Get instant loans with competitive rates. From personal to business loans, 
              we make financing accessible, simple, and fast.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/apply">
                <Button 
                  size="lg" 
                  className="bg-gold hover:bg-gold-dark text-navy-deep font-semibold px-8 py-6 text-lg shadow-elevated hover:shadow-2xl transition-all duration-300 animate-pulse-glow"
                >
                  Apply for Loan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/emi-calculator">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg"
                >
                  Calculate EMI
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/10"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-2 justify-center lg:justify-start text-gold mb-1">
                  <Percent className="w-5 h-5" />
                  <span className="font-display text-2xl font-bold text-primary-foreground">8.5%</span>
                </div>
                <span className="text-sm text-primary-foreground/60">Starting Rate</span>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-2 justify-center lg:justify-start text-gold mb-1">
                  <Clock className="w-5 h-5" />
                  <span className="font-display text-2xl font-bold text-primary-foreground">24hrs</span>
                </div>
                <span className="text-sm text-primary-foreground/60">Quick Approval</span>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-2 justify-center lg:justify-start text-gold mb-1">
                  <Shield className="w-5 h-5" />
                  <span className="font-display text-2xl font-bold text-primary-foreground">100%</span>
                </div>
                <span className="text-sm text-primary-foreground/60">Secure Process</span>
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
                  <h3 className="text-primary-foreground/80 text-lg mb-2">Quick Loan Amount</h3>
                  <div className="font-display text-5xl font-bold text-gold">₹50 Lakhs</div>
                  <p className="text-primary-foreground/60 mt-2">Maximum loan amount</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-primary-foreground/5 rounded-xl">
                    <span className="text-primary-foreground/80">Loan Type</span>
                    <span className="text-gold font-semibold">Personal Loan</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-primary-foreground/5 rounded-xl">
                    <span className="text-primary-foreground/80">Tenure</span>
                    <span className="text-gold font-semibold">Up to 7 Years</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-primary-foreground/5 rounded-xl">
                    <span className="text-primary-foreground/80">Processing Fee</span>
                    <span className="text-gold font-semibold">0.5% onwards</span>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-gold hover:bg-gold-dark text-navy-deep font-semibold py-6">
                  Check Eligibility
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
  );
};

export default Hero;
