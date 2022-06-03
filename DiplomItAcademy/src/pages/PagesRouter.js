import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PageHome from './Page_Home';
import PageAbout from './Page_About';
import PageCategory from './Page_Category';

class PagesRouter extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<PageHome/>} />
                <Route path="/about" element={<PageAbout />} />
                <Route path="/category/:id" element={<PageCategory  />} />
            </Routes>
        );
    }
};

export default PagesRouter;