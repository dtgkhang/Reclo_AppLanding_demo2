import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import Drawer from '../Mobile/Drawer';
// import BlogHomeOne from './BlogHomeOne';
// import FaqHomeOne from './FaqHomeOne';
import FeaturesHomeOne from './FeaturesHomeOne';
import FooterHomeOne from './FooterHomeOne';
import HeroHomeOne from './HeroHomeOne';
import HomeOneHeader from './HomeOneHeader';
// import PricingHomeOne from './PricingHomeOne';
import ProjectHomeOne from './ProjectHomeOne';
import ServicesHomeOne from './ServicesHomeOne';
import TeamHomeOne from './TeamHomeOne';
import TestimonialHomeOne from './TestimonialHomeOne';
// import TrafficHomeOne from './TrafficHomeOne';
import FeaturesHomeTwo from './FeaturesHomeTwo';

function HomeOne() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HomeOneHeader action={drawerAction.toggle} />
            <HeroHomeOne />
            <ServicesHomeOne />
            <FeaturesHomeOne />
            <TeamHomeOne />
            {/* <TrafficHomeOne /> */}
            <TestimonialHomeOne />
            <FeaturesHomeTwo />
            {/* <PricingHomeOne /> */}
            {/* <FaqHomeOne /> */}
            {/* <BlogHomeOne /> */}
            <ProjectHomeOne />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default HomeOne;
