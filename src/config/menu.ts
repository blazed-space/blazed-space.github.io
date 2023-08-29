import { Menu, MenuItem } from "../lib/types/site";

const mainMenu = {
    _id: "root",
    nav: [
        {
            label: "Home",
            href: "/#/"
        },
        {
            label: "About",
            href: "/#/about"
        },
        {
            label: "Contribute",
            href: "/#/contribute"
        },
        {
            label: "Research",
            href: "/#/journal"
        }
    ] as MenuItem[]
} as Menu;

export {
    mainMenu
};