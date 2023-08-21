import React from "react";
import { House, EnvelopeOpen, Fish, Cake, Broom, Dog } from "phosphor-react";

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
    title: "Pescetarian",
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
    title: "Cleanup",
    icon: <Broom size={32} />,
    link: "/broom",
  },
];
