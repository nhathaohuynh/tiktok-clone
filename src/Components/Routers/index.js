//  ==== Layout ====
import { HeaderOnly } from '../Layout';

import Home from '../Pages/Home';
import Following from '../Pages/Following';
import Profile from '../Pages/Profile';
import Upload from '../Pages/Upload';

// public routers
const publicRouters = [
    { path: '/', component: <Home /> },
    { path: '/following', component: <Following /> },
    { path: '/profile', component: <Profile /> },
    { path: '/upload', component: <Upload />, layout: HeaderOnly },
];

// private routers
const privateRouters = [];

export { publicRouters, privateRouters };
