import Navbar from "@/components/Navbar.jsx";
import Hero from "@/components/Hero.jsx";
import LoanTypes from "@/components/LoanTypes.jsx";
import EMICalculator from "@/components/EMICalculator.jsx";
import ApplicationForm from "@/components/ApplicationForm.jsx";
import Testimonials from "@/components/Testimonials.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import Footer from "@/components/Footer.jsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <LoanTypes />
      <EMICalculator />
      <Testimonials />
      <ApplicationForm />
      <Footer />
    </div>
  );
};

export default Index;
