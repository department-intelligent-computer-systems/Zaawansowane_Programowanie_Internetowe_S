import React, { useState } from 'react';

interface Link {
    id: number;
    name:string;
    url: string;
    color: string;
    selected: boolean;
}
const Zad3: React.FC = () => {
const [favoriteLinks, setFavoriteLinks] = useState<Link[]>([
{ id: 1, name: 'Google', url: 'https://www.google.com', color: 'white', selected:false },
{ id: 2, name: 'GitHub', url: 'https://www.github.com', color: 'white', selected:false },
{ id: 3, name: 'React', url: 'https://reactjs.org', color: 'white', selected:false },
]);

const handleLinkClick = (id: number) => {
setFavoriteLinks((prevLinks) => prevLinks.map((link) => link.id === id ? { ...link, color: getRandomColor() } : {...link,selected:false}
)
);
};

const getRandomColor = (): string => {
const colors = ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99', '#c2c2f0'];
return colors[Math.floor(Math.random() * colors.length)];
};

return (
<div>
    <h1>Ulubione linki</h1>
    <ul>
        {favoriteLinks.map((link)=>(
            <li key={link.id} style={{backgroundColor:link.color?link.color:'white'}}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                </a>
                <button onClick={()=> handleLinkClick(link.id)}>Zmien kolor</button>
            </li>
        ))}
    </ul>
</div>
);
}
export default Zad3;