import {
  MdHome,
  MdExplore,
  MdSubscriptions,
  MdLibraryMusic,
  MdVideoLibrary,
  MdHistory,
  MdLocalMovies,
  MdVideogameAsset,
  MdSettings,
  MdFlag,
  MdHelp,
  MdFeedback,
  MdEventNote,
} from 'react-icons/md';
import { FaYoutube } from 'react-icons/fa';
import { AiFillBulb, AiFillTrophy } from 'react-icons/ai';
import { CgMediaLive } from 'react-icons/cg';
import { GiHanger } from 'react-icons/gi';

export const compactSidebar = [
  {
    title: 'Home',
    icon: <MdHome />,
  },
  {
    title: 'Explore',
    icon: <MdExplore />,
  },
  {
    title: 'Subscriptions',
    icon: <MdSubscriptions />,
  },
  {
    title: 'Originals',
    icon: <FaYoutube />,
  },
  {
    title: 'Music',
    icon: <MdLibraryMusic />,
  },
  {
    title: 'Library',
    icon: <MdVideoLibrary />,
  },
];

export const sidebarHome = [
  {
    title: 'Home',
    icon: <MdHome />,
  },
  {
    title: 'Explore',
    icon: <MdExplore />,
  },
  {
    title: 'Subscriptions',
    icon: <MdSubscriptions />,
  },
];

export const sidebarLibrary = [
  {
    title: 'Library',
    icon: <MdVideoLibrary />,
  },
  {
    title: 'History',
    icon: <MdHistory />,
  },
];

export const bestOfYoutube = [
  {
    title: 'Music',
    icon: <MdLibraryMusic />,
  },
  {
    title: 'Sports',
    icon: <AiFillTrophy />,
  },
  {
    title: 'Gaming',
    icon: <MdVideogameAsset />,
  },
  {
    title: 'Movies & Shows',
    icon: <MdLocalMovies />,
  },
  {
    title: 'News',
    icon: <MdEventNote />,
  },
  {
    title: 'Live',
    icon: <CgMediaLive />,
  },
  {
    title: 'Fashion & Beauty',
    icon: <GiHanger />,
  },
  {
    title: 'Learning',
    icon: <AiFillBulb />,
  },
];

export const moreFromYoutube = [
  {
    title: 'Youtube Premium',
    icon: <FaYoutube />,
  },
  {
    title: 'Live',
    icon: <CgMediaLive />,
  },
];

export const sidebarSettings = [
  {
    title: 'Settings',
    icon: <MdSettings />,
  },
  {
    title: 'Report history',
    icon: <MdFlag />,
  },
  {
    title: 'Help',
    icon: <MdHelp />,
  },
  {
    title: 'Send feedback',
    icon: <MdFeedback />,
  },
];
