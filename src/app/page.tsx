import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Introduction from "@/sections/Introduction";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <LogoTicker />
            <Introduction />
        </div>
    );
}
