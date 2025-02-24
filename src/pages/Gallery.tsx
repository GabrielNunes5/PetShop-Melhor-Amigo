import { useState } from 'react';

const photos = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800',
    caption: 'Max após o banho'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800',
    caption: 'Luna toda elegante'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800',
    caption: 'Thor aproveitando o day care'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=800',
    caption: 'Bella após a tosa'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&w=800',
    caption: 'Nina relaxando'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=800',
    caption: 'Bob todo feliz'
  },
  {
    id: 7,
    url: './src/assets/melhor.jpg',
    caption: 'Lorem ipsum dolor sit amet consectetur'
  },
  {
    id: 8,
    url: './src/assets/pet-shop.jpg',
    caption: 'Lorem ipsum dolor sit amet consectetur'
  },
  {
    id: 8,
    url: './src/assets/familia-comprando.jpg',
    caption: 'Lorem ipsum dolor sit amet consectetur'
  }
];

function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Galeria de Fotos</h1>
      <p className="text-xl mb-8">Nossa galeria de fotos é o reflexo do nosso amor e cuidado pelos animais. Aqui, você poderá ver alguns dos adoráveis clientes que já passaram pelo nosso petshop. É um verdadeiro prazer atender a cada um deles e contribuir para o seu bem-estar e felicidade.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map(photo => (
          <div
            key={photo.id}
            className="cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <p className="text-gray-700">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for enlarged photo */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden">
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.caption}
              className="w-full h-auto"
            />
            <div className="p-4">
              <p className="text-xl">{selectedPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;