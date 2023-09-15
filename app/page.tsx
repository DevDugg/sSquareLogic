import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Nav from "@/components/nav/Nav";
import Service from "@/components/service/Service";

export default function Home() {
  return (
    <main className="main">
      <Nav />
      <div className="flex flex-col gap-[120px] pb-[120px]">
        <Hero />
        <Service />
      </div>
      <Footer />
    </main>
  );
}

