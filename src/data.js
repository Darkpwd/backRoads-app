import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
import tour5 from './images/tour-5.jpeg';
import tour6 from './images/tour-6.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://instagram.com', icon: 'fab fa-instagram' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },

  {
    id: 2,
    icon: 'fas fa-wallet fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2025',
    price: '$2100',
    title: 'Tibet Adventure',
    days: '6 days',
    location: 'China',
    info: 'Explore the breathtaking landscapes of Tibet, from its vast plateaus to the magnificent temples.',
  },
  {
    id: 2,
    image: tour2,
    date: 'september 12th, 2025',
    price: '$1800',
    title: 'Best of Japan',
    days: '10 days',
    location: 'Japan',
    info: 'Experience the cultural beauty of Japan, from the bustling streets of Tokyo to the peaceful temples of Kyoto.',
  },
  {
    id: 3,
    image: tour3,
    date: 'october 5th, 2025',
    price: '$2500',
    title: 'Safari in Kenya',
    days: '7 days',
    location: 'Kenya',
    info: 'Go on a thrilling safari in Kenya, witnessing the incredible wildlife and stunning African landscapes.',
  },
  {
    id: 4,
    image: tour4,
    date: 'november 20th, 2025',
    price: '$2200',
    title: 'Brazilian Beaches',
    days: '8 days',
    location: 'Brazil',
    info: 'Relax on the stunning beaches of Brazil, from Rio de Janeiro to the pristine shores of the Northeast.',
  },
  {
    id: 5,
    image: tour5,
    date: 'december 15th, 2025',
    price: '$3000',
    title: 'Antarctic Expedition',
    days: '12 days',
    location: 'Antarctica',
    info: 'Embark on an extraordinary journey to Antarctica, where you will witness pristine glaciers and diverse wildlife.',
  },
  {
    id: 6,
    image: tour6,
    date: 'january 10th, 2026',
    price: '$1900',
    title: 'Egyptian Wonders',
    days: '9 days',
    location: 'Egypt',
    info: 'Discover the ancient wonders of Egypt, from the Great Pyramids of Giza to the treasures of Luxor.',
  },
];

export const footerLinks = [
  { id: 1, icon: 'fa-facebook' },
  { id: 2, icon: 'fa-twitter' },
  { id: 3, icon: 'fa-instagram' },
];
