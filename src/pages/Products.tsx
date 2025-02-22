import { Link } from 'react-router-dom';

const products = {
  services: [
    {
      id: 1,
      name: 'Banho',
      price: 'R$ 45,00',
      description: 'Banho completo com produtos especializados',
      image: 'https://labovet.com.br/wp-content/uploads/2023/07/banho-em-cachorro-saiba-qual-e-a-frequencia-ideal.jpg'
    },
    {
      id: 2,
      name: 'Tosa',
      price: 'R$ 55,00',
      description: 'Tosa higiênica ou na máquina',
      image: 'https://blog.cobasi.com.br/wp-content/uploads/2020/09/banho-tosa.png'
    }
  ],
  food: [
    {
      id: 3,
      name: 'Ração Premium',
      price: 'R$ 89,90/Kg',
      description: 'Ração de alta qualidade para cães adultos',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800'
    },
    {
      id: 4,
      name: 'Ração Filhotes',
      price: 'R$ 99,90/Kg',
      description: 'Ração especial para filhotes',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800'
    }
  ]
};

function ProductCard({ product }: { product: typeof products.services[0] }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-green-600 font-bold">{product.price}</span>
          <Link
            to="/contato"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
          >
            Solicitar
          </Link>
        </div>
      </div>
    </div>
  );
}

function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Nossos Produtos e Serviços</h1>
      <p className="text-xl mb-8">Sabemos que a alimentação é fundamental para a saúde do seu pet, por isso  oferecemos uma ampla variedade de rações de alta qualidade e alimentos balanceados, adaptados às necessidades individuais de cada animal. Nossos especialistas estão disponíveis para fornecer orientação personalizada e ajudá-lo a escolher a melhor opção para o seu amiguinho. </p>
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Serviços de Banho e Tosa</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.services.map(service => (
            <ProductCard key={service.id} product={service} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-8">Rações</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.food.map(food => (
            <ProductCard key={food.id} product={food} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Products;