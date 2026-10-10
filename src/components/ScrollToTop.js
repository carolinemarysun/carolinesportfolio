import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const location = useLocation();

    useLayoutEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        /*
         * Home.js handles hash navigation.
         *
         * Do not interfere with:
         * /#train-with-me
         */
        if (location.hash === '#train-with-me') {
            return;
        }

        const html = document.documentElement;
        const body = document.body;

        html.style.scrollBehavior = 'auto';
        body.style.scrollBehavior = 'auto';

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto',
        });

        const frame = requestAnimationFrame(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'auto',
            });
        });

        return () => {
            cancelAnimationFrame(frame);
        };

    }, [location.pathname, location.hash]);

    return null;
};

export default ScrollToTop;