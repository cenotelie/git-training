import { MdOutlineHome, MdOutlineCalendarViewDay, MdInsertDriveFile, MdOutlinePersonOutline } from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Accueil',
    path: '/',
    icon: <MdOutlineHome />,
    cName: 'nav-text'
  },
  {
    title: 'Films',
    path: '/movies',
    icon: <MdOutlineCalendarViewDay />,
    cName: 'nav-text',
    visibility: 'private'
  }
];