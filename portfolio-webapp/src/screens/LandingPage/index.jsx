import { 
  Header, Hero, SkillsSection, ProjectsSection, ServicesSection, ContactSection, Footer
} from '../../components';

function LandingPage() {
    return (
        <div className="LandingPage">
            <Header />
            <Hero />
            <SkillsSection />
            <ProjectsSection />
            <ServicesSection />
            <ContactSection />
            <Footer />
        </div>

    )
}

export default LandingPage;