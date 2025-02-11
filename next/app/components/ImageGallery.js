'use client';

export default function ImageGallery({ photos }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
                    <img
                        src={`/${photo}`}
                        alt={`Cabinet d'avocat à Perpignan - ${photo.split('.')[0]}`}
                        className="w-full h-64 object-cover object-bottom transform transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-lg font-semibold">
                            {photo.split('.')[0].replace(/[-_]/g, ' ')}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
} 