import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        // Stop browser from restoring the previous page's scroll position
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        const html = document.documentElement;
        const body = document.body;

        // Force route changes to scroll instantly
        html.style.scrollBehavior = 'auto';
        body.style.scrollBehavior = 'auto';

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        });

        // Run again after the route has rendered
        requestAnimationFrame(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'auto'
            });
        });

        return () => {};
    }, [pathname]);

    return null;
};

export default ScrollToTop;