import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import WebDesignsBanner from "@/components/WebDesignsBanner";

export default function Home() {
    return (
        <main className="bg-[#121212]">
            <Navbar />

            {/* Hero Scrollytelling Section */}
            <div className="relative">
                <ScrollyCanvas>
                    <Overlay />
                </ScrollyCanvas>
            </div>

            {/* Detailed Content */}
            <div className="relative z-20 space-y-0">
                <About />
                <Skills />
                <Experience />
                <Projects />
                <WebDesignsBanner />
                <Certifications />
                <Education />
            </div>

            <Footer />
        </main>
    );
}
