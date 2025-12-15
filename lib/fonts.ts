import {Montserrat,Open_Sans,Nunito,Poppins,Work_Sans,Lora,Merriweather, Roboto,Inter,Courier_Prime,DM_Serif_Display } from "next/font/google";


const roboto = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400","500"]
});
const poppins = Poppins({
  weight:['400','600','700'],
  variable: "--font-heading",
  subsets: ["latin"]
})

const work_sans = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const inter = Inter({
    weight: ["400","500"],
  variable: "--font-body",
  subsets: ["latin"],
});
const dm_serif_display = DM_Serif_Display({
    weight: ["400"],
  variable: "--font-heading",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-body",
  subsets: ["latin"],
});

const merri = Merriweather({
  variable: "--font-heading",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight:['400','600','700'],
  variable: "--font-heading",
  subsets: ["latin"]
});

const openSans = Open_Sans({
  weight:['400','600','700'],
  variable: "--font-body",
  subsets: ["latin"]
});
const nunito = Nunito({
  weight:['400','600','700'],
  variable: "--font-heading",
  subsets: ["latin"]
});

const courier = Courier_Prime({
  weight:['400','700'],
  variable: "--font-heading",
  subsets:['latin']
})

const combo1 = {
    heading: inter,
    body: roboto 
}

const combo2 = {
    heading: dm_serif_display,
    body: inter
}

const combo3 = {
    heading: merri,
    body: work_sans 
}

const combo4 = {
    heading: nunito,
    body: openSans 
}

const combo5 = {
  heading:courier,
  body: lora
}

export {
    combo1,
    combo2,
    combo3,
    combo4,
    combo5
}