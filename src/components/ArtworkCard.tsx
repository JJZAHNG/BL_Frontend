// src/components/ArtworkCard.tsx
// import React from "react";

type Artwork = {
    id: number;
    name: string;
    description: string;
    image: string;
    price: string;
    artist_name?: string;
};

interface Props {
    artwork: Artwork;
}

export default function ArtworkCard({artwork}: Props) {
    return (
        <div className="artwork-card">
            <img
                src={artwork.image}
                alt={artwork.name}
                className="artwork-image"
            />
            <h3 className="artwork-title">{artwork.name}</h3>
            <p className="artwork-price">{artwork.price} USD</p>
            {artwork.artist_name && (
                <p className="artwork-artist">By {artwork.artist_name}</p>
            )}
        </div>
    );
}
