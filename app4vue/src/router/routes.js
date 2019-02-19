// Views
const Test = resolve => {
    require.ensure(["../pages/Test.vue"], () => {
        resolve(require("../pages/Test.vue"));
    });
};

const Test2 = resolve => {
    require.ensure(["../pages/Test2.vue"], () => {
        resolve(require("../pages/Test2.vue"));
    });
};

const Root = resolve => {
    require.ensure(["../pages/Root.vue"], () => {
        resolve(require("../pages/Root.vue"));
    });
};

export const routes = [
    {
        path: "/",
        name: "root",
        component: Root,
    },
    {
        path: "/test",
        name: "test",
        component: Test,
    },
    {
        path: "/test2",
        name: "test2",
        component: Test2,
    }
];
