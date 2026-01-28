import React from 'react';

interface ArtifactImageProps {
    src: string;
    alt: string;
    caption?: string;
}

const ArtifactImage: React.FC<ArtifactImageProps> = ({ src, alt, caption }) => {
    return (
        <figure className="relative w-full max-w-3xl mx-auto my-16 md:my-24">
            {/* The Image Container */}
            <div className="relative overflow-hidden hairline rounded-sm bg-emerald-950/50">
                {/* Subtle Gradient Overlay for Depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-950/80 pointer-events-none z-10"></div>

                <img
                    src={src}
                    alt={alt}
                    className="w-full h-auto object-cover opacity-80 grayscale contrast-125"
                    loading="lazy"
                />
            </div>

            {/* Optional Caption */}
            {caption && (
                <figcaption className="mt-6 text-center">
                    <p className="text-meta !text-[9px] !text-white/30">{caption}</p>
                </figcaption>
            )}
        </figure>
    );
};

export default ArtifactImage;
