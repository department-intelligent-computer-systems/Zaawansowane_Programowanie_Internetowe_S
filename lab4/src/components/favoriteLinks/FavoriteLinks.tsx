import React, { useState } from 'react'
import './FavoriteLinks.css'

type Link = {
    id: number;
    name: string;
    url: string;
}

const favoriteLinks: Link[] = [
    { id: 1, name: 'Google', url: 'https://www.google.com' },
    { id: 2, name: 'GitHub', url: 'https://www.github.com' },
    { id: 3, name: 'React', url: 'https://reactjs.org' },
];

const FavoriteLinks: React.FC = () => {

    const [selectedLinkId, setSelectedLinkId] = useState<number | null>(null);

    const handleLinkClick = (linkId: number) => {
        if (selectedLinkId === linkId) {
            setSelectedLinkId(null);
        } else {
            setSelectedLinkId(linkId);
        }
    };

    return (
        <div className="favorite-links">
            <header className="favorite-links__header">
                <ul>
                    {favoriteLinks.map(link => (
                        <li
                            key={link.id}
                            onClick={() => handleLinkClick(link.id)}
                            className={selectedLinkId === link.id ? 'selected-link' : ''}
                        >
                            <a href={link.url}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </header>
        </div>
    );
};
export default FavoriteLinks;