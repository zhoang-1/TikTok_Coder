import { faHouse, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons';
import { faCompass, faUser } from '@fortawesome/free-regular-svg-icons';

export const navbar = [
    {
        name: 'Dành cho bạn',
        link: 'danh-cho-ban',
        icon: faHouse,
        parent: [],
    },
    {
        name: 'Đang Follow',
        link: 'dang-follow',
        icon: faUserGroup,
        parent: [],
    },
    {
        name: 'Khám phá',
        link: 'kham-pha',
        icon: faCompass,
        parent: [],
    },
    {
        name: 'LIVE',
        link: 'live',
        icon: faVideo,
        parent: [],
    },
    {
        name: 'Hồ sơ',
        link: 'ho-so',
        icon: faUser,
        parent: [],
    },
];
