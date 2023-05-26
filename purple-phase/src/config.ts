export const remplissageScrollsnap = "Voilà donc ce qu'est un SrollSnap mon cher Boris"

export const company = {
  name: "Aux 3 Forges",
  shortname: "3Forges",
  address: "",
  geo : {
    lon: "",
    lat: ""
  },
  contact: {
    email: "info@3forges.io",
    phone: "0677777777" 
  },
  social: {
    discord: `${process.env.FORGES_DISCORD}`,
    facebook: `${process.env.FORGES_FACEBOOK}`,
    instagram: `${process.env.FORGES_INSTA}`,
    twitter: `${process.env.FORGES_TWITTER}`,
  }
}
interface ForgesMenu {
    title: string;
    url: string;
}

export const Navigation: ForgesMenu[] = [
    {
        title: "Home",
        url: "/"
    },
    {
        title: "About",
        url: "/about"
    },
    {
        title: "portfolio",
        url: "/portfolio"
    },
    {
        title: "contact",
        url: "/contact"
    },
    {
        title: "Github",
        url: "/github"
    }
]