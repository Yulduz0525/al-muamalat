interface SubLink{
    title:string,
    path:string,
    order:number
}
export const NavbarDate :{
    icon:boolean;
    text: string;
    to:string,
    subRoutes:Array<SubLink> | null
}[]=[
    {
        icon:false,
        text:"Home",
        to:'/',
        subRoutes:null
    },
    {
        icon:true ,
        text:"Programs",
        to:"",
        subRoutes:[
            {
                title:"International educational programs",
                path:'/programs',
                order:1
            },
            {
                title:"Specialized courses",
                path:'/programs',
                order:2
            },
            {
                title:"Islamic Finance Literacy Course",
                path:'/programs',
                order:3
            },
            {
                title:"Certification program",
                path:'/programs',
                order:4
            },
        ]
    },
    {
        icon:false,
        text:"Finance tools",
        to:"/financetools",
        subRoutes:null
    },
    {
        icon:false,
        text:"Contact",
        to:"/contact",
        subRoutes:null
    },
]