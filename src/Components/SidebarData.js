import React from "react";
import { House, EnvelopeOpen, Fish, Cake, Dog, Jeep } from "phosphor-react";
import "../App.css";

export const SidebarData = [
  {
    title: "Home",
    icon: <House size={32} />,
    link: "/home",
  },
  {
    title: "Mailbox",
    icon: <EnvelopeOpen size={32} />,
    link: "/mail",
  },
  {
    title: "Dinner",
    icon: <Fish size={32} />,
    link: "/fish",
  },
  {
    title: "Baking",
    icon: <Cake size={32} />,
    link: "/cake",
  },
  {
    title: "Doggo",
    icon: <Dog size={32} />,
    link: "/dog",
  },
  {
    title: "Cars",
    icon: <Jeep size={32} />,
    link: "/jeep",
  },
];
