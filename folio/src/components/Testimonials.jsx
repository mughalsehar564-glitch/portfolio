import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const reviews = [
  {
    name: 'Ayesha Khan',
    role: 'CEO at TechFlow',
    text: 'Sehar is an exceptional developer who transformed our vision into a stunning reality. The attention to detail and animation quality is top-notch.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=john',
  },
  {
    name: 'Saima Hussain',
    role: 'Product Designer',
    text: 'Working with Sehar was a breeze. The final product exceeded our expectations in terms of both performance and design aesthetics.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    name: 'Abubakar umer',
    role: 'Startup Founder',
    text: 'The most impressive portfolio I have ever seen. Sehar has a unique talent for creating cinematic web experiences.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=mike',
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neonBlue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Client <span className="text-neonBlue">Reviews</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            Don't just take my word for it. Here's what my clients have to say.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass section-card p-8 md:p-10 rounded-3xl relative group"
            >
              <FaQuoteLeft className="absolute top-8 right-10 text-4xl text-neonBlue/10 group-hover:text-neonBlue/20 transition-colors" />
              
              <div className="flex gap-1 mb-6 text-neonBlue">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-gray-300 italic mb-10 leading-relaxed relative z-10 text-sm md:text-base">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-neonBlue/30">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
