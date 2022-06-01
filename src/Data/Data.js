// Sidebar imports 
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    // UilSignOutAlt
    UilMoneyWithdrawal,
    UilUsdSquare,

}
from "@iconscout/react-unicons"
export const SidebarData=[
    {
        icon:UilEstate,
        heading:"Dashboard"
    },
    {
        icon:UilClipboardAlt,
        heading:"Order"
    },
    {
        icon:UilUsersAlt,
        heading:"Customers"
    },
    {
        icon:UilPackage,
        heading:"Products"
    },
    {
        icon:UilChart,
        heading:"Analytics"
    }
]
export const CardsData=[
    {
        title:"Sales",
        color:{
            backGround:"linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow:"0 10px 20px 0 #e0c6f5",
        },
        barValue:70,
        value:"17,260",
        png: UilMoneyWithdrawal,
        series:[
            {name:"Sales",
            data:[10, 100, 50, 70, 80, 30, 40]}
        ],
    },
    {
        title:"Revenue",
        color:{
            backGround:"linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow:"0 10px 20px 0 #FDC0C7",
        },
        barValue:80,
        value:"14,270",
        png: UilUsdSquare,
        series:[
            { name:"Revenue",
            data:[31, 40, 28, 51, 42, 109, 100]}
        ],
    },
    {
        title:"Expenses",
        color:{
            backGround:"linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255, 202 , 113) -26.42%)",
            boxShadow:"0 10px 20px 0 #F9D59B",
        },
        barValue:60,
        value:"4,270",
        png: UilClipboardAlt,
        series:[
           { name:"Expenses",
            data:[10, 25, 15, 30, 12, 15, 20]}
        ],
    },
]













