import React from 'react';
import { useThemeStyles } from '../hooks/useThemeStyles';
import { Code, Palette, Users, Zap, Heart, Star } from 'lucide-react';

const About: React.FC = () => {
  const styles = useThemeStyles();

  const technologies = [
    { name: 'React 18', icon: Code },
    { name: 'TypeScript', icon: Zap },
    { name: 'Tailwind CSS', icon: Palette },
    { name: 'React Router', icon: Users },
    { name: 'Context API', icon: Heart },
    { name: 'Local Storage', icon: Star },
  ];

  return (
    <div className={styles.layout}>
      <h1 className={styles.typography.h1}>
        About ThemeForge
      </h1>

      <div className={styles.card.content}>
        <h2 className={styles.typography.h2}>
          Our Mission
        </h2>
        <p className={`${styles.typography.bodySecondary} text-lg mb-6`}>
          ThemeForge represents the pinnacle of modern web design flexibility. We believe that user experience
          should be personal, adaptive, and engaging. Our mission is to demonstrate how thoughtful design
          can transform not just the appearance of an application, but the entire user journey.
        </p>
        <p className={styles.typography.bodySecondary}>
          Through our innovative multi-theme architecture, we showcase how a single application can provide
          completely different experiences while maintaining consistent functionality and performance across
          all variations.
        </p>
      </div>

      <div className={styles.card.content}>
        <h2 className={styles.typography.h2}>
          Technical Excellence
        </h2>
        <p className={`${styles.typography.bodySecondary} mb-6`}>
          Built with cutting-edge technologies and best practices, ThemeForge demonstrates enterprise-level
          React development with TypeScript, responsive design, and accessibility standards. Our implementation
          includes advanced features like theme persistence, smooth animations, and optimized performance.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {technologies.map((tech, index) => (
            <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${styles.utils.border}`}>
              <tech.icon className="w-6 h-6 text-current" />
              <span className="font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.card.content}>
        <h2 className={styles.typography.h2}>
          Design Philosophy
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className={`text-lg font-semibold mb-2 ${styles.typography.h3}`}>
              Theme 1: Minimalist Elegance
            </h3>
            <p className={styles.typography.bodySecondary}>
              Clean lines, thoughtful spacing, and a focus on content readability. This theme embodies
              the "less is more" philosophy with subtle interactions and professional typography.
            </p>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-2 ${styles.typography.h3}`}>
              Theme 2: Professional Power
            </h3>
            <p className={styles.typography.bodySecondary}>
              Dark mode sophistication with sidebar navigation and serif typography. Designed for
              productivity and extended use with careful attention to contrast and hierarchy.
            </p>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-2 ${styles.typography.h3}`}>
              Theme 3: Playful Innovation
            </h3>
            <p className={styles.typography.bodySecondary}>
              Vibrant colors, custom typography, and delightful animations. This theme pushes creative
              boundaries while maintaining usability and accessibility standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About