import { ImEarth, ImMobile } from "react-icons/im";
import { FiFigma } from "react-icons/fi";

import img1 from './public/imgs/projects/1.jpg'

import c1 from "./public/imgs/clients/c1.jpg"
import c2 from "./public/imgs/clients/c2.webp"
import c3 from "./public/imgs/clients/c3.jpg"
import c4 from "./public/imgs/clients/c4.jpg"
import img from './public/imgs/clients/c2.webp'


export const serviceList = [
  { id: 1, title: "website design", logo: <ImEarth /> },
  { id: 2, title: "mobile app", logo: <ImMobile /> },
  { id: 3, title: "ui  Design", logo: <FiFigma /> },
  { id: 4, title: "ux  Design", logo: <FiFigma /> },
];

export const clients = [
  {
    id: 1,
    name: "ibrahim mohammed",
    message: `you are very specillzed i loved you work
    and dealing with you you are very comfotable in comunication. i recommend you deal with her`,
    img:{img}
      },
  {
    id: 2,
    name: "kareem ahmed",
    message: `powerful designer with high good comunication Skills
. i recommend you deal with her`,
    img: {c2},
  },
  {
    id: 3,
    name: "ahmed ali",
    message: `amzing services ,
and dealing with you you are very comfotable in comunication. i recommend you deal with her`,
    img: {c3},
  },
  {
    id: 4,
    name: "amir hassan",
    message: `you are very specillzed i loved you work
and dealing with you you are very comfotable in comunication. i recommend you deal with her`,
    img: {c4},
  }
];
export const projects = [
  {id:1 ,title :'petty',desc:"",img:{img1},link:"https://www.behance.net/gallery/177710469/Petty-Responsive-Design"}
]
