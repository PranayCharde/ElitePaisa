import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Business Owner",
    content:
      "Elite Paisa helped me expand my business with a quick loan approval. The process was seamless and the interest rates were very competitive.",
    rating: 5,
    avatar: "RS",
  },
  {
    name: "Priya Patel",
    role: "IT Professional",
    content:
      "I got my home loan approved within 48 hours! The team was very helpful and guided me through every step of the process.",
    rating: 5,
    avatar: "PP",
  },
  {
    name: "Amit Kumar",
    role: "Doctor",
    content:
      "The EMI calculator helped me plan my finances perfectly. Highly recommend Elite Paisa for anyone looking for hassle-free loans.",
    rating: 5,
    avatar: "AK",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold font-semibold mb-4 uppercase tracking-wider text-sm">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-gradient-gold">Customers Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who trusted Elite Paisa for their financial needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full bg-card shadow-card hover:shadow-elevated transition-shadow duration-300">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-gold/30 mb-4" />

                  <p className="text-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                      <span className="font-semibold text-gold">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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

export default Testimonials;
