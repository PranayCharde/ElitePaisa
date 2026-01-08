import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  User, 
  Mail, 
  Phone, 
  Home, 
  Briefcase, 
  Wallet, 
  Calendar,
  IndianRupee,
  Building,
  FileText,
  CheckCircle,
  Shield,
  Clock,
  Award
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    loanType: '',
    loanAmount: '',
    employmentType: '',
    annualIncome: '',
    companyName: '',
    city: '',
    pincode: '',
    purpose: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user selects
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';
    if (!formData.loanType) newErrors.loanType = 'Loan type is required';
    if (!formData.loanAmount) newErrors.loanAmount = 'Loan amount is required';
    if (!formData.employmentType) newErrors.employmentType = 'Employment type is required';
    if (!formData.annualIncome) newErrors.annualIncome = 'Annual income is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required';
    else if (!/^\d{6}$/.test(formData.pincode)) newErrors.pincode = 'Pincode must be 6 digits';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after submission
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          loanType: '',
          loanAmount: '',
          employmentType: '',
          annualIncome: '',
          companyName: '',
          city: '',
          pincode: '',
          purpose: ''
        });
      }, 3000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Success Section */}
        <section className="relative min-h-screen gradient-hero overflow-hidden flex items-center">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10 mx-auto px-4 py-20">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-12 h-12 text-gold" />
              </motion.div>

              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Application <span className="text-gradient-gold">Submitted!</span>
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
                Thank you for your application. Our team will review your details and contact you within 24 hours.
              </p>

              <div className="bg-card/20 backdrop-blur-lg rounded-2xl p-8 border border-primary-foreground/10">
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h3 className="text-primary-foreground/80 mb-2">Application ID</h3>
                    <p className="text-xl font-semibold text-gold">ELITE-{Date.now().toString().slice(-6)}</p>
                  </div>
                  <div>
                    <h3 className="text-primary-foreground/80 mb-2">Expected Response</h3>
                    <p className="text-xl font-semibold text-gold">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <Button 
                className="mt-8 bg-gold hover:bg-gold-dark text-navy-deep font-semibold px-8 py-6 text-lg shadow-elevated hover:shadow-2xl transition-all duration-300"
                onClick={() => setIsSubmitted(false)}
              >
                Apply for Another Loan
              </Button>
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

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section for Apply Now Page */}
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
              <span className="text-gold text-sm font-medium">Get Approved in 24 Hours</span>
            </motion.div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Apply for <span className="text-gradient-gold">Loan Now</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get your loan approved quickly with our simple online application process. 
              Fill out the form below and our experts will contact you shortly.
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

      {/* Application Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-6 h-6 text-gold" />
                  Personal Loan Application
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={errors.firstName ? "border-red-500" : ""}
                      />
                      {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={errors.lastName ? "border-red-500" : ""}
                      />
                      {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="loanType" className="flex items-center gap-2">
                        <Wallet className="w-4 h-4" />
                        Loan Type
                      </Label>
                      <Select value={formData.loanType} onValueChange={(value) => handleSelectChange('loanType', value)}>
                        <SelectTrigger className={errors.loanType ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select loan type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="personal">Personal Loan</SelectItem>
                          <SelectItem value="home">Home Loan</SelectItem>
                          <SelectItem value="vehicle">Vehicle Loan</SelectItem>
                          <SelectItem value="business">Business Loan</SelectItem>
                          <SelectItem value="education">Education Loan</SelectItem>
                          <SelectItem value="gold">Gold Loan</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.loanType && <p className="text-red-500 text-sm">{errors.loanType}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="loanAmount" className="flex items-center gap-2">
                        <IndianRupee className="w-4 h-4" />
                        Loan Amount
                      </Label>
                      <Input
                        id="loanAmount"
                        name="loanAmount"
                        type="number"
                        placeholder="Enter loan amount"
                        value={formData.loanAmount}
                        onChange={handleChange}
                        className={errors.loanAmount ? "border-red-500" : ""}
                      />
                      {errors.loanAmount && <p className="text-red-500 text-sm">{errors.loanAmount}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="employmentType" className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        Employment Type
                      </Label>
                      <Select value={formData.employmentType} onValueChange={(value) => handleSelectChange('employmentType', value)}>
                        <SelectTrigger className={errors.employmentType ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select employment type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="salaried">Salaried Employee</SelectItem>
                          <SelectItem value="self-employed">Self Employed</SelectItem>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="retired">Retired</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.employmentType && <p className="text-red-500 text-sm">{errors.employmentType}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="annualIncome" className="flex items-center gap-2">
                        <IndianRupee className="w-4 h-4" />
                        Annual Income
                      </Label>
                      <Input
                        id="annualIncome"
                        name="annualIncome"
                        type="number"
                        placeholder="Enter annual income"
                        value={formData.annualIncome}
                        onChange={handleChange}
                        className={errors.annualIncome ? "border-red-500" : ""}
                      />
                      {errors.annualIncome && <p className="text-red-500 text-sm">{errors.annualIncome}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      Company Name (Optional)
                    </Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      placeholder="Enter company name"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="flex items-center gap-2">
                        <Home className="w-4 h-4" />
                        City
                      </Label>
                      <Input
                        id="city"
                        name="city"
                        placeholder="Enter your city"
                        value={formData.city}
                        onChange={handleChange}
                        className={errors.city ? "border-red-500" : ""}
                      />
                      {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pincode" className="flex items-center gap-2">
                        <Home className="w-4 h-4" />
                        Pincode
                      </Label>
                      <Input
                        id="pincode"
                        name="pincode"
                        placeholder="Enter your pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        className={errors.pincode ? "border-red-500" : ""}
                      />
                      {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="purpose" className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Purpose of Loan
                    </Label>
                    <Textarea
                      id="purpose"
                      name="purpose"
                      placeholder="Describe the purpose of your loan"
                      value={formData.purpose}
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full bg-gold hover:bg-gold-dark text-navy-deep font-semibold py-6 text-lg shadow-elevated hover:shadow-2xl transition-all duration-300"
                    >
                      Submit Application
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Benefits */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="font-display text-3xl md:text-4xl font-bold text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Apply with <span className="text-gold">ElitePaisa</span>?
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "100% Secure Process",
                description: "Your data is protected with bank-grade security and encryption."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Quick Approval",
                description: "Get approved in as little as 24 hours with our streamlined process."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Best Interest Rates",
                description: "Enjoy competitive rates starting from 8.5% p.a. for eligible applicants."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-xl border border-border text-center"
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

export default ApplyNow;