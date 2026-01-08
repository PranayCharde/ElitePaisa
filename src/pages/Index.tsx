import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LoanTypes from "@/components/LoanTypes";
import EMICalculator from "@/components/EMICalculator";
import ApplicationForm from "@/components/ApplicationForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

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
