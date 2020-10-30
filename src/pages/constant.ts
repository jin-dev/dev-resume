export const VIEW_TYPE = {
    DESKTOP: 'desktop',
    MOBILE: 'mobile',
}

// eslint-disable-next-line
export let BASE_PATH = '/';

const generatePath = (path = '') => {
    if (BASE_PATH === '/') {
        return path;
    }

    if (path === '/') {
        return BASE_PATH;
    }
    return `${BASE_PATH}${path}`;
};

export const PATH = {
    DEFAULT: generatePath('/'), //Main
    NOT_FOUND: generatePath('/nout_found'), // for NOT_FOUND
    TEST_PAGE: generatePath('/test'), //Test component Page
    TEST_PAGE2: generatePath('/test2'), // Test component Page2
};