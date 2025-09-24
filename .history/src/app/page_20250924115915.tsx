import React from 'react'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import WhatYouGet from "./components/WhatYouGet";
import Bonuses from "./components/Bonuses";
import Testimonials from "./components/Testimonials";
import Guarantee from "./components/Guarantee";
import FAQ from "./components/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";


export default function Page() {
return (
<main>
<Navbar />
<Hero />
<TrustBar />
<WhatYouGet />
<Bonuses />
<Testimonials />
<Guarantee />
<FAQ />
<CTA />
<Footer />
</main>
);
}

export default page