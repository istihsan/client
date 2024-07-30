import React from "react";
import Navbar from "./components/main/navbar";
import CategoriesMain from "./components/categories/categoriesMain";
import Footer from './components/main/footer';

export default function Categories (){
    return (
        <>
            <Navbar />
            <div style={{ marginTop: '64px' }}>
            <CategoriesMain />
            <Footer />
            </div>
        </>
    );
}