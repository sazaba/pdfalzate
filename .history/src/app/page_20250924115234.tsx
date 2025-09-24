import React from 'react'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import WhatYouGet from "./components/WhatYouGet";
import Bonuses from "@/components/sections/Bonuses";
import Testimonials from "@/components/sections/Testimonials";
import Guarantee from "@/components/sections/Guarantee";
import FAQ from "@/components/sections/FAQ";
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