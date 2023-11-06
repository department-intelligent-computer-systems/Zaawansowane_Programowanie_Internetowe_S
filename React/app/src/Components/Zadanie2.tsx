import { useState } from 'react';

export const Zadanie2 = () => {

    let links = [
        { id: 1, title: 'Youtube', color: 'red', url: 'https://www.youtube.com/' },
        { id: 2, title: 'Google', color: 'white', url: 'https://www.google.pl/?hl=pl' },
        { id: 3, title: 'Facebook', color: 'blue', url: 'https://www.facebook.com/?locale=pl_PL' }
    ];

    const listLinks = links.map((link, index) =>
        <li key={link.id}><a href="link.url"> {link.title}</a></li>
    );

    function changeColor(color: string) {
        document.body.style.background = color;
    }


    return (
        <>
            <h1>Zadanie 2</h1>
            <ul>{listLinks}</ul>
        </>
    );
}