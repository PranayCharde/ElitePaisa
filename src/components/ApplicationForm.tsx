import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Send, User, Mail, Phone, Briefcase, IndianRupee } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ApplicationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loanType: "",
    amount: "",
    employment: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Application Submitted!",
      description: "Our team will contact you within 24 hours.",
    });

    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      loanType: "",
      amount: "",
      employment: "",
    });
  };

  const benefits = [
    "Quick approval within 24 hours",
    "Minimal documentation required",
    "Competitive interest rates",
    "Flexible repayment options",
    "No hidden charges",
  ];

  return (
    <section id="apply" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold font-semibold mb-4 uppercase tracking-wider text-sm">
            Get Started
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Apply for Your <span className="text-gradient-gold">Loan Today</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fill in your details and our experts will get back to you with the best loan options.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-card shadow-elevated">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2 text-foreground">
                        <User className="w-4 h-4 text-muted-foreground" />
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="border-border focus:border-gold focus:ring-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2 text-foreground">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="border-border focus:border-gold focus:ring-gold"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2 text-foreground">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                        className="border-border focus:border-gold focus:ring-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="loanType" className="flex items-center gap-2 text-foreground">
                        <Briefcase className="w-4 h-4 text-muted-foreground" />
                        Loan Type
                      </Label>
                      <Select
                        value={formData.loanType}
                        onValueChange={(value) =>
                          setFormData({ ...formData, loanType: value })
                        }
                      >
                        <SelectTrigger className="border-border focus:border-gold focus:ring-gold">
                          <SelectValue placeholder="Select loan type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="personal">Personal Loan</SelectItem>
                          <SelectItem value="home">Home Loan</SelectItem>
                          <SelectItem value="business">Business Loan</SelectItem>
                          <SelectItem value="education">Education Loan</SelectItem>
                          <SelectItem value="vehicle">Vehicle Loan</SelectItem>
                          <SelectItem value="gold">Gold Loan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="amount" className="flex items-center gap-2 text-foreground">
                        <IndianRupee className="w-4 h-4 text-muted-foreground" />
                        Loan Amount Required
                      </Label>
                      <Input
                        id="amount"
                        type="text"
                        placeholder="₹5,00,000"
                        value={formData.amount}
                        onChange={(e) =>
                          setFormData({ ...formData, amount: e.target.value })
                        }
                        required
                        className="border-border focus:border-gold focus:ring-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employment" className="flex items-center gap-2 text-foreground">
                        <Briefcase className="w-4 h-4 text-muted-foreground" />
                        Employment Type
                      </Label>
                      <Select
                        value={formData.employment}
                        onValueChange={(value) =>
                          setFormData({ ...formData, employment: value })
                        }
                      >
                        <SelectTrigger className="border-border focus:border-gold focus:ring-gold">
                          <SelectValue placeholder="Select employment" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="salaried">Salaried</SelectItem>
                          <SelectItem value="self-employed">Self Employed</SelectItem>
                          <SelectItem value="business">Business Owner</SelectItem>
                          <SelectItem value="professional">Professional</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold hover:bg-gold-dark text-navy-deep font-semibold py-6 text-lg"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Application
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    By submitting, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-primary rounded-3xl p-8 md:p-12">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-8">
                Why Choose <span className="text-gold">Elite Paisa?</span>
              </h3>

              <ul className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-primary-foreground text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-12 pt-8 border-t border-primary-foreground/10">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="font-display text-3xl font-bold text-gold mb-1">50K+</div>
                    <span className="text-primary-foreground/80 text-sm">Happy Customers</span>
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold text-gold mb-1">₹500Cr+</div>
                    <span className="text-primary-foreground/80 text-sm">Loans Disbursed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
