import "./components/head/Head.css";
import Head from "./components/head/Head";
import Slider from "./components/slider/Slider";
import Destinos from "./components/destinos/Destinos";
import Servicos from "./components/servicos/Servicos";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Head />
      <section>
        <Slider />
      </section>
      <section>
        <Destinos />
      </section>
      <section>
        <Servicos />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
