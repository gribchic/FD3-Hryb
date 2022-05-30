import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PageAbout from './PageAbout';
import PageHome from './PageHome';


class PagesRouter extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="/qqq" element={<PageAbout />} />
            </Routes>
        );
    }
};

export default PagesRouter;