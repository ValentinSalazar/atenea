import { VideoBackground } from "./VideoBackground"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { AnimatedRouter } from './router/AnimatedRouter'

export const Atenea = () => {
    return(
        <main className="p-5 h-screen overflow-hidden font-poppins">
            <VideoBackground />
            <Navbar />
            <AnimatedRouter />
            <Footer />
        </main>
    )
}