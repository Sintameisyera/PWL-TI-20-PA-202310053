import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layouts from '../layouts/Layouts'
import Home from '../modules/component/Homes/Home'
import Explore from '../modules/component/Explore/Explore'
import Messages from '../modules/component/Messages/Messages'
import Feeds from '../modules/component/Explore/widgets/Feeds'
import Reels from '../modules/component/Explore/widgets/Reels'
import FYP from '../modules/component/Explore/widgets/FYP'
import Profiles from '../modules/component/Profiles/Profiles'
import Login from '../modules/component/Login/Login'
import Error from '../layouts/component/404/Error'

export default function AppRoute() {

    const domain = [
        {
            path: 'login',
            element: <Login />
        },
        {
            path: 'home',
            element: <Home />,
        },
        {
            path: 'explore',
            element: <Explore />,
            subDomain: [
                {
                    path: 'feeds',
                    element: <Feeds />,
                },
                {
                    path: 'reels',
                    element: <Reels />,
                },
                {
                    path: 'fyp',
                    element: <FYP />,
                },
            ],
        },
        {
            path: 'messages',
            element: <Messages />,
        },
        {
            path: 'profile',
            element: <Profiles />,
        }
    ]


    return (
        <Routes>
            <Route index element={<Login />} />
            {domain.map(route => (
                <Route
                    path={route.path}
                    element={<Layouts>{route.element}</Layouts>}
                    >
                    {route.subDomain && route.subDomain.map(subRoute => (
                        <Route
                            path={subRoute.path}
                            element={subRoute.element}
                        />
                    ))}
                </Route>
            ))}
            <Route path='*' element={<Layouts><Error /></Layouts>} />
        </Routes >
    )
}

export { AppRoute };