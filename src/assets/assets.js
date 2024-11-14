import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'
import brand_img from './brand_img.png'
import resize from './resize.png'
import project_img_1 from './project_img_1.jpg'
import house11 from './house11.png'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import { p } from 'framer-motion/client'

export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
    resize,
    house11,
}

export const projectsData = [
    {
      title: "Skyline Haven",
      price: "",
      location: "Kathmandu",
      image: project_img_1
    },
    {
      title: "Vista Verde",
      price: "Npr 5.5 Cr",
      location: "Lalitpur",
      image: project_img_2
    },
    {
      title: "Serenity Suites",
      price: "Npr 5.5 Cr",
      location: "Bhaktapur",
      image: project_img_3
    },
    {
      title: "Central Square",
      price: "Npr 5.5 Cr",
      location: "Tanahun",
      image: project_img_4
    },
    {
      title: "Vista Verde",
      price: "Npr 5.5 Cr",
      location: "Dharan",
      image: project_img_5
    },
    {
      title: "Serenity Suites",
      price: "Npr 5.5 Cr",
      location: "Hetauda",
      image: project_img_6
    },
    
  ];

  export const testimonialsData = [
    {
        name: "Jethalal Gada",
        title: "Gada Electronics",
        image: profile_img_1,
        alt: "Portrait of Jethalal Gada",
        rating: 5,
        text: "At our initial meeting, they grasped my vision, locating the perfect property. Their unmatched dedication to detail and client satisfaction made the process seamless."

    },
    {
        name: "Patrakar Popatlal",
        title: "Senior Journalist",
        image: profile_img_2,
        alt: "Portrait of Patrakar Popatlal",
        rating: 4,
        text: "In our first encounter, they swiftly grasped my vision, securing the ideal property. Their unmatched attention to detail and unwavering commitment to client satisfaction made the experience truly exceptional."
    },
    {
        name: "Hansraj Hatthi",
        title: "MBBS Doctor",
        image: profile_img_3,
        alt: "Portrait of Hansraj Hatthi",
        rating: 5,
        text: "From our first meeting, they captured my vision flawlessly, guiding me to the perfect property. Their unparalleled dedication to detail and client satisfaction set them apart in the real estate realm."
    }
];