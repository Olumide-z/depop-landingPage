
import { NavbarItem, ProductProps } from "@/types";

export const navbarData: NavbarItem[] = [
    {id: 1, title: "Men Wears", link:"/"},
    {id: 2, title: "Women Wears", link:"/"},
    {id: 3, title: "Accessories", link:"/"},
    {id: 4, title: "About", link:"/"},
]

export const productData: ProductProps[] = [
    {
        id: 1, 
        name: 'Blue Long Sleeve', 
        picture1: '/image/5.webp', 
        picture2: '/image/6.webp',
         price: '12,000'
    },
    {
        id: 2, 
        name: 'Grey Long Sleeve', 
        picture1: '/image/8.webp', 
        picture2: '/image/7.webp',
         price: '12,000'
    }
]

