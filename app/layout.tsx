import '@/assets/styles/globals.css';
import React from 'react';

export const metadata = {
   title: 'PropertyPulse | Find The Perfect Rental',
   description: 'Find your dream rental property',
   keywords: 'rental, find rentals, find properties',
};

export default function RootLayout(
   {children}:{children: React.ReactNode}
) {
   return (
      <html lang='en'>
         <body>
            <main>{children}</main>
         </body>
      </html>
   );
};