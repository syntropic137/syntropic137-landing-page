import Nav from "./components/Nav";
import Hero from "./components/Hero";
import WhySyntropic from "./components/WhySyntropic";
import CreateAgent from "./components/CreateAgent";
import Architecture from "./components/Architecture";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Nav />
      <main id="main-content">
        <Hero />
        <hr className="section-divider" />
        <WhySyntropic />
        <hr className="section-divider" />
        <CreateAgent />
        <hr className="section-divider" />
        <Architecture />
      </main>
      <Footer />
    </>
  );
}
