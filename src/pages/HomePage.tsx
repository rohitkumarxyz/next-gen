import React from 'react';
import HeroSection from '../components/HeroSection';
import ProgramsSection from '../components/ProgramsSection';
import RatingsSection from '../components/RatingsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FeaturesSection from '../components/FeaturesSection';
import AlumniSection from '../components/AlumniSection';
import LearningHubSection from '../components/LearningHubSection';
import FreeCoursesBanner from '../components/FreeCoursesBanner';
import AwardsSection from '../components/AwardsSection';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <ProgramsSection />
      <RatingsSection />
      <TestimonialsSection />
      <FeaturesSection />
      <AlumniSection />
      <LearningHubSection />
      <FreeCoursesBanner />
      <AwardsSection />
    </div>
  );
};

export default HomePage;
