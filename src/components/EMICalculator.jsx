import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider.jsx";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { Calculator, IndianRupee, Percent, Calendar } from "lucide-react";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(24);

  const { emi, totalInterest, totalAmount } = useMemo(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure;

    if (monthlyRate === 0) {
      return {
        emi: principal / months,
        totalInterest: 0,
        totalAmount: principal,
      };
    }

    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalAmount = emi * months;
    const totalInterest = totalAmount - principal;

    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount),
    };
  }, [loanAmount, interestRate, tenure]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const principalPercent = (loanAmount / totalAmount) * 100;

  return (
    <section id="calculator" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold font-semibold mb-4 uppercase tracking-wider text-sm">
            Financial Planning
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            EMI <span className="text-gradient-gold">Calculator</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Plan your finances with our easy-to-use EMI calculator. Know your monthly payments before you apply.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-card shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Loan Details
                  </h3>
                </div>

                {/* Loan Amount */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <IndianRupee className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">Loan Amount</span>
                    </div>
                    <span className="text-lg font-bold text-gold">
                      {formatCurrency(loanAmount)}
                    </span>
                  </div>
                  <Slider
                    value={[loanAmount]}
                    onValueChange={(value) => setLoanAmount(value[0])}
                    min={50000}
                    max={10000000}
                    step={10000}
                    className="[&_[role=slider]]:bg-gold [&_[role=slider]]:border-gold [&_.bg-primary]:bg-gold"
                  />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>₹50K</span>
                    <span>₹1 Crore</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Percent className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">Interest Rate (p.a.)</span>
                    </div>
                    <span className="text-lg font-bold text-gold">{interestRate}%</span>
                  </div>
                  <Slider
                    value={[interestRate]}
                    onValueChange={(value) => setInterestRate(value[0])}
                    min={5}
                    max={24}
                    step={0.5}
                    className="[&_[role=slider]]:bg-gold [&_[role=slider]]:border-gold [&_.bg-primary]:bg-gold"
                  />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>5%</span>
                    <span>24%</span>
                  </div>
                </div>

                {/* Tenure */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">Loan Tenure</span>
                    </div>
                    <span className="text-lg font-bold text-gold">{tenure} months</span>
                  </div>
                  <Slider
                    value={[tenure]}
                    onValueChange={(value) => setTenure(value[0])}
                    min={6}
                    max={84}
                    step={6}
                    className="[&_[role=slider]]:bg-gold [&_[role=slider]]:border-gold [&_.bg-primary]:bg-gold"
                  />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>6 months</span>
                    <span>7 years</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Result Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-primary shadow-elevated h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-8">
                  Your EMI Breakdown
                </h3>

                {/* EMI Display */}
                <div className="text-center py-8 mb-8 rounded-2xl bg-primary-foreground/10">
                  <span className="text-primary-foreground/80 text-sm block mb-2">
                    Monthly EMI
                  </span>
                  <span className="font-display text-4xl md:text-5xl font-bold text-gold">
                    {formatCurrency(emi)}
                  </span>
                </div>

                {/* Breakdown Chart */}
                <div className="mb-8">
                  <div className="h-4 rounded-full overflow-hidden bg-primary-foreground/20">
                    <div
                      className="h-full bg-gold transition-all duration-500"
                      style={{ width: `${principalPercent}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gold" />
                      <span className="text-primary-foreground/80">Principal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary-foreground/20" />
                      <span className="text-primary-foreground/80">Interest</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="space-y-4 mt-auto">
                  <div className="flex justify-between items-center p-4 rounded-xl bg-primary-foreground/5">
                    <span className="text-primary-foreground/80">Principal Amount</span>
                    <span className="font-semibold text-primary-foreground">
                      {formatCurrency(loanAmount)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-xl bg-primary-foreground/5">
                    <span className="text-primary-foreground/80">Total Interest</span>
                    <span className="font-semibold text-gold">
                      {formatCurrency(totalInterest)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-xl bg-gold/20">
                    <span className="text-primary-foreground font-medium">Total Payable</span>
                    <span className="font-bold text-gold text-lg">
                      {formatCurrency(totalAmount)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EMICalculator;
