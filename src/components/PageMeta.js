import { useEffect } from 'react';

const PageMeta = ({ title }) => {
    useEffect(() => {
        // Set the document title
        document.title = title;

        // Create a link element for the favicon
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = './images/global/sun-icon.png';
        link.type = 'image/png';

        // Append the link element to the head
        document.head.appendChild(link);

        // Clean up the effect (optional)
        return () => {
            document.head.removeChild(link);
        };
    }, [title]);

    return null; // This component does not render anything
};

export default PageMeta;
