import { motion } from "framer-motion";
import { 
  User, 
  Home, 
  Briefcase, 
  GraduationCap, 
  Car, 
  Coins,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card.jsx";

const loanTypes = [
  {
    icon: User,
    title: "Personal Loan",
    description: "Quick personal loans for all your needs with minimal documentation.",
    rate: "10.5%",
    maxAmount: "₹40 Lakhs",
  },
  {
    icon: Home,
    title: "Home Loan",
    description: "Make your dream home a reality with affordable home loans.",
    rate: "8.5%",
    maxAmount: "₹5 Crores",
  },
  {
    icon: Briefcase,
    title: "Business Loan",
    description: "Fuel your business growth with flexible business financing.",
    rate: "12%",
    maxAmount: "₹2 Crores",
  },
  {
    icon: GraduationCap,
    title: "Education Loan",
    description: "Invest in your future with our education financing options.",
    rate: "9%",
    maxAmount: "₹75 Lakhs",
  },
  {
    icon: Car,
    title: "Vehicle Loan",
    description: "Drive your dream vehicle with easy car and bike loans.",
    rate: "9.5%",
    maxAmount: "₹1 Crore",
  },
  {
    icon: Coins,
    title: "Gold Loan",
    description: "Get instant cash against your gold at the best rates.",
    rate: "7%",
    maxAmount: "₹50 Lakhs",
  },
];

const LoanTypes = () => {
  return (
    <section id="loans" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold font-semibold mb-4 uppercase tracking-wider text-sm">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Loans Tailored For <span className="text-gradient-gold">Your Needs</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our wide range of loan products designed to meet your every financial requirement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loanTypes.map((loan, index) => (
            <motion.div
              key={loan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full bg-card hover:shadow-elevated transition-all duration-300 border-border hover:border-gold/30 cursor-pointer overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <loan.icon className="w-7 h-7 text-gold" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition-all" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                    {loan.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {loan.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="text-xs text-muted-foreground block">Interest Rate</span>
                      <span className="font-semibold text-gold">{loan.rate} p.a.</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground block">Max Amount</span>
                      <span className="font-semibold text-foreground">{loan.maxAmount}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanTypes;
