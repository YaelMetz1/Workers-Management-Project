import * as React from 'react';
import Navbar from './shared/navbar/Navbar';
import Footer from './shared/footer/Footer';


export default function BaseLayout(props: any) {
  return (
    <div>
        <Navbar/>
        <main>{props.children}</main>
        <Footer/>
    </div>
  );
}