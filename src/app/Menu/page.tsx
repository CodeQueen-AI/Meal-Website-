import React from 'react';
import './page.css';  

const MenuData = [
    {
        id: "1",
        title: "Pizza",
        link: "/",
        price: "$30.0",
        imageSrc: '/Pizza icon.png'
    },
    {
        id: "2",
        title: "French Fries",
        link: "/",
        price: "$40.0",
        imageSrc: '/french fries ion.png'
    },
    {
        id: "3",
        title: "Golgappa",
        link: "/",
        price: "$50.0",
        imageSrc: '/golgappa icon.png'
    },
    {
        id: "4",
        title: "sandwich",
        link: "/",
        price: "$2.00",
        imageSrc: '/sandwhich icon.png'
    },
];

function Menu() {
    return (
        <section className="menu-section">
            <div className="container">
                <h1 className="menu-title">
                    Our Menu
                </h1>
                <div className="menu-grid">
                    {MenuData.map((menu) => (
                        <div key={menu.id} className="menu-item">
                            <img
                                src={menu.imageSrc}
                                alt={menu.title}
                                className="menu-image"
                            />
                            <div className="menu-text">
                                <h1 className="menu-item-title">{menu.title}</h1>
                                <p className="menu-item-price">{menu.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Menu;
