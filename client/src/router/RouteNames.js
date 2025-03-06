import HomeComponent from "../components/HomeComponent"

const RouteNames = [
    {
        name: "/",
        component: <HomeComponent />
    },

    {
        name: "/home",
        component: <HomeComponent />
    },

    {
        name: "/partners",
        component: <HomeComponent />
    },

    {
        name: "/objectives",
        component: <HomeComponent />
    },

    {
        name: "/activities",
        component: <HomeComponent />
    },
    
    {
        name: "/deliverables",
        component: <HomeComponent />
    },
    
    {
        name: "/materials",
        component: <HomeComponent />
    },

    {
        name: "/contactus",
        component: <HomeComponent />
    },
];

export const ROOT = {
    name: "/",
    component: <HomeComponent />
};

export const HOME = {
    name: "/",
    component: <HomeComponent />
};

export const PARTNERS = {
    name: "/partners",
    component: <HomeComponent />
};

export const OBJECTIVES = {
    name: "/objectives",
    component: <HomeComponent />
};

export const ACTIVITIES = {
    name: "/activities",
    component: <HomeComponent />
};

export const DELIVERABLES = {
    name: "/deliverables",
    component: <HomeComponent />
};

export const MATERIALS = {
    name: "/materials",
    component: <HomeComponent />
};

export const CONTACTUS = {
    name: "/contactus",
    component: <HomeComponent />
};

export default RouteNames;
