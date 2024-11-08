import { FC } from "react";

export const NavbarDate :{
    icon: FC<any>|null;
    text: string;
    to:string
}[]=[
    {
        icon:null,
        text:"Home",
        to:'/'
    },
    {
        icon:null,
        text:"Programs",
        to:"/programs"
    },
    {
        icon:null,
        text:"Finance tools",
        to:"/financetools"
    },
    {
        icon:null,
        text:"Contact",
        to:"/contact"
    },
]