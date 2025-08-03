import React from "react";
import { motion } from "framer-motion";
import { useAppSelector } from "../store/helpers";
import { Users, MapPin, Calendar, Award } from "lucide-react";

export const AboutPage: React.FC = () => {
  const { styles } = useAppSelector((state) => state.theme);

  const stats = [
    { icon: Users, label: "Happy Customers", value: "50,000+" },
    { icon: Award, label: "Awards Won", value: "25+" },
    { icon: MapPin, label: "Countries Served", value: "30+" },
    { icon: Calendar, label: "Years in Business", value: "8+" },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <h1 className={styles.about.title}>About Hipster Inc.</h1>
        <div className="max-w-3xl mx-auto">
          <p className={styles.about.paragraph}>
            We are a passionate team dedicated to bringing you unique and
            stylish products that reflect your personality and lifestyle.
          </p>
          <p className={styles.about.paragraph}>
            Founded in 2016 and headquartered in Singapore, we believe in
            quality, craftsmanship, and creating meaningful connections with our
            customers worldwide.
          </p>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="text-center space-y-2"
            >
              <div className="flex justify-center">
                <IconComponent className="w-8 h-8 text-blue-600" />
              </div>
              <div
                className={`text-2xl font-bold ${styles.layout.text}`}
              >
                {stat.value}
              </div>
              <div className="text-sm">{stat.label}</div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
