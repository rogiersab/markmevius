import React from 'react';

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <title>Mark Me Vius</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
};

export default RootLayout;