import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calculator, 
  DollarSign, 
  Percent, 
  Calendar,
  BarChart3,
  TrendingUp,
  PiggyBank,
  Home
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState<number>(1000000);
  const [interestRate, setInterestRate] = useState<number>(10.5);
  const [loanTenure, setLoanTenure] = useState<number>(10);
  const [emi, setEmi] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  // Calculate EMI whenever inputs change
  useEffect(() => {
    const calculateEMI = () => {
      const monthlyRate = interestRate / 12 / 100;
      const months = loanTenure * 12;

      if (monthlyRate === 0) {
        const emi = loanAmount / months;
        setEmi(emi);
        setTotalAmount(loanAmount);
        setTotalInterest(0);
        return;
      }

      const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                  (Math.pow(1 + monthlyRate, months) - 1);
      
      setEmi(emi);
      const total = emi * months;
      setTotalAmount(total);
      setTotalInterest(total - loanAmount);
    };

    calculateEMI();
  }, [loanAmount, interestRate, loanTenure]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setLoanAmount(value);
  };

  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setInterestRate(value);
  };

  const handleTenureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setLoanTenure(value);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section for EMI Calculator Page */}
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
              <span className="text-gold text-sm font-medium">Plan Your Finances</span>
            </motion.div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              EMI <span className="text-gradient-gold">Calculator</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Calculate your monthly EMI payments and plan your finances effectively. 
              Our calculator helps you understand your loan obligations before applying.
            </p>
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

      {/* Calculator Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Calculator Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-card border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="w-6 h-6 text-gold" />
                      Loan EMI Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="loanAmount" className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          Loan Amount
                        </Label>
                        <span className="text-gold font-semibold">{formatCurrency(loanAmount)}</span>
                      </div>
                      <Input
                        id="loanAmount"
                        type="range"
                        min="100000"
                        max="50000000"
                        step="100000"
                        value={loanAmount}
                        onChange={handleAmountChange}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>₹1L</span>
                        <span>₹5Cr</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="interestRate" className="flex items-center gap-2">
                          <Percent className="w-4 h-4" />
                          Interest Rate (% p.a.)
                        </Label>
                        <span className="text-gold font-semibold">{interestRate}%</span>
                      </div>
                      <Input
                        id="interestRate"
                        type="range"
                        min="5"
                        max="20"
                        step="0.1"
                        value={interestRate}
                        onChange={handleRateChange}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>5%</span>
                        <span>20%</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="loanTenure" className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Loan Tenure (Years)
                        </Label>
                        <span className="text-gold font-semibold">{loanTenure} years</span>
                      </div>
                      <Input
                        id="loanTenure"
                        type="range"
                        min="1"
                        max="30"
                        value={loanTenure}
                        onChange={handleTenureChange}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>1 year</span>
                        <span>30 years</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Results Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="shadow-card border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="w-6 h-6 text-gold" />
                      Loan Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-muted p-4 rounded-lg">
                          <div className="text-sm text-muted-foreground">Monthly EMI</div>
                          <div className="font-display text-2xl font-bold text-gold mt-1">{formatCurrency(emi)}</div>
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                          <div className="text-sm text-muted-foreground">Total Interest</div>
                          <div className="font-display text-2xl font-bold text-gold mt-1">{formatCurrency(totalInterest)}</div>
                        </div>
                      </div>

                      <div className="bg-primary/5 p-4 rounded-lg border border-border">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-sm text-muted-foreground">Total Amount Payable</div>
                            <div className="font-display text-2xl font-bold text-primary mt-1">{formatCurrency(totalAmount)}</div>
                          </div>
                          <TrendingUp className="w-8 h-8 text-gold" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-semibold">Loan Breakdown</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Principal Amount</span>
                            <span className="font-medium">{formatCurrency(loanAmount)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Total Interest</span>
                            <span className="font-medium text-gold">{formatCurrency(totalInterest)}</span>
                          </div>
                          <div className="border-t border-border pt-3 flex justify-between font-semibold">
                            <span>Total Amount</span>
                            <span>{formatCurrency(totalAmount)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <motion.div 
                  className="mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Button className="w-full bg-gold hover:bg-gold-dark text-navy-deep font-semibold py-6">
                    Apply for Loan
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How EMI Calculator Works */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="font-display text-3xl md:text-4xl font-bold text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              How Our EMI <span className="text-gold">Calculator Works</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <PiggyBank className="w-8 h-8" />,
                title: "Enter Loan Details",
                description: "Specify your desired loan amount, interest rate, and tenure to calculate your EMI."
              },
              {
                icon: <Calculator className="w-8 h-8" />,
                title: "Instant Calculation",
                description: "Our calculator instantly computes your monthly EMI and total interest payable."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Plan Your Budget",
                description: "Use the results to plan your monthly budget and choose the most suitable loan option."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-xl border border-border text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="text-gold mb-4 flex justify-center">{step.icon}</div>
                <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EMICalculator;