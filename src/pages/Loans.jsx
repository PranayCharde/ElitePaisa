import { motion } from "framer-motion";
import { Button } from "@/components/ui/button.jsx";
import { 
  Home, 
  Car, 
  Briefcase, 
  GraduationCap, 
  Users, 
  PiggyBank, 
  DollarSign, 
  CheckCircle 
} from "lucide-react";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";

const Loans = () => {
  const loanTypes = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Home Loan",
      description: "Get your dream home with our competitive home loan rates starting from 8.5% p.a.",
      features: ["Low interest rates", "Flexible tenure", "Quick approval", "Minimal documentation"],
      rate: "8.5%",
      tenure: "Up to 30 years"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Vehicle Loan",
      description: "Drive away in your dream car with our easy vehicle financing solutions.",
      features: ["Instant approval", "Flexible EMI", "Low down payment", "No hidden charges"],
      rate: "9.2%",
      tenure: "Up to 7 years"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Business Loan",
      description: "Fuel your business growth with our unsecured business loans up to ₹50 Lakhs.",
      features: ["No collateral required", "Quick disbursal", "Flexible repayment", "Hassle-free process"],
      rate: "11.5%",
      tenure: "Up to 5 years"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education Loan",
      description: "Invest in your future with our education loans covering tuition and living expenses.",
      features: ["Up to 100% funding", "Moratorium period", "Tax benefits", "Multiple course coverage"],
      rate: "9.8%",
      tenure: "Up to 15 years"
    },
    {
      icon: <PiggyBank className="w-8 h-8" />,
      title: "Personal Loan",
      description: "Get instant personal loans for any emergency or personal need without paperwork.",
      features: ["Instant approval", "Minimal documentation", "Flexible tenure", "Competitive rates"],
      rate: "12.0%",
      tenure: "Up to 5 years"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Gold Loan",
      description: "Get instant cash against your gold with our secure and transparent gold loan service.",
      features: ["Low interest rates", "90% loan value", "Quick disbursal", "Safe storage"],
      rate: "7.5%",
      tenure: "Up to 3 years"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section for Loans Page */}
      <section className="relative min-h-screen gradient-hero overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gold/20 px-4 py-2 rounded-full mb-6 mx-auto"
            >
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-gold text-sm font-medium">Choose Your Perfect Loan</span>
            </motion.div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Comprehensive <span className="text-gradient-gold">Loan Solutions</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              We offer a wide range of loan products tailored to meet your financial needs. 
              From personal to business loans, we make financing accessible, simple, and fast.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold-dark text-navy-deep font-semibold px-8 py-6 text-lg shadow-elevated hover:shadow-2xl transition-all duration-300 animate-pulse-glow"
              >
                Compare Loans
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg"
              >
                Check Eligibility
              </Button>
            </div>
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

      {/* Loan Types Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="font-display text-3xl md:text-4xl font-bold text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our <span className="text-gold">Loan Products</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Choose from our wide range of loan products designed to meet your specific financial needs.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanTypes.map((loan, index) => (
              <motion.div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border shadow-card hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="text-gold mb-4">{loan.icon}</div>
                <h3 className="font-display text-xl font-bold mb-3">{loan.title}</h3>
                <p className="text-muted-foreground mb-4">{loan.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Interest Rate:</span>
                    <span className="font-semibold text-gold">{loan.rate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tenure:</span>
                    <span className="font-semibold text-gold">{loan.tenure}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {loan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-gold hover:bg-gold-dark text-navy-deep font-semibold">
                  Apply Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="font-display text-3xl md:text-4xl font-bold text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Choose <span className="text-gold">ElitePaisa</span>?
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Trusted by 50,000+",
                description: "Join thousands of satisfied customers who have achieved their financial goals."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Quick Approval",
                description: "Get approved in as little as 24 hours with our streamlined process."
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Competitive Rates",
                description: "Enjoy some of the lowest interest rates in the market."
              },
              {
                icon: <PiggyBank className="w-8 h-8" />,
                title: "Flexible Tenure",
                description: "Choose repayment tenure that suits your financial capacity."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="text-gold mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="font-display text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Loans;