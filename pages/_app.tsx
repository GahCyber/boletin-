import type { AppProps } from 'next/app';
import '../styles/global.scss';
import "../styles/tabelas.scss"
import React from 'react';  
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="layout">
      <main className="main-content">
        <Component {...pageProps} />
      </main>
      
    </div>
  );
}

export default MyApp;