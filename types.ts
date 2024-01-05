import React from "react";

export interface NavbarItem {
    id: number;
    title: string;
    link: string;
  }
  
export interface NavbarIcon {
    id: number;
    icon: JSX.Element;
    link: string;
};

export interface TooltipsProps {
  text?: string;
  children?: JSX.Element;
}

export interface ProductProps {
  id: number, 
  name: string, 
  picture1: string, 
  picture2: string,
  price: string
}[]