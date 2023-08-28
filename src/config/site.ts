import { Brand, Config, Social } from "./../lib/types/app";

const config = {
    name: "Blazed Space R&D",
    fbAppId: "",
    description: "R&D Division of Blazed Labs LLC."
} as Config;

const social = {
    facebook: "https://www.facebook.com/blazedlabs",
    instagram: "https://www.instagram.com/blazed_labs/",
    github: "https://github.com/blazed-labs",
    twitter: "https://twitter.com/BlazedLabs",
    youtube: "https://www.youtube.com/@blazed-space"
} as Social

const brand = {
    logo: "/images/beaker-dark.svg",
    company: "Blazed Labs LLC",
    email: "hello@blazed.space"
} as Brand;

export {
    config, brand, social
};