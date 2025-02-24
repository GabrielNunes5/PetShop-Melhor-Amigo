import { Link } from 'react-router-dom';

const products = {
  services: [
    {
      id: 1,
      name: 'Banho Relaxante',
      price: 'R$ 45,00',
      description: 'No Petshop Melhor Amigo, oferecemos banhos relaxantes para cães e gatos.Utilizamos produtos de qualidade, seguros e adequados para cada tipo de pelagem, garantindo uma limpeza profunda e refrescante. Nossos profissionais carinhosos proporcionam um ambiente tranquilo e seguro para que seu pet desfrute de um banho agradável, deixando-o com uma pelagem macia, brilhante e cheirosa',
      image: 'https://labovet.com.br/wp-content/uploads/2023/07/banho-em-cachorro-saiba-qual-e-a-frequencia-ideal.jpg'
    },
    {
      id: 2,
      name: 'Tosa Especializada',
      price: 'R$ 55,00',
      description: 'Proporcionamos serviços profissionais de tosa para cães de todas as raças.Nossos tosadores experientes e qualificados utilizam técnicas avançadas para garantir que seu pet tenha um visual impecável. Além de cortes de pelos personalizados, também realizamos higienização e cuidados especiais, como limpeza de ouvidos e corte de unhas, deixando seu cãozinho limpo e bem cuidado',
      image: 'https://blog.cobasi.com.br/wp-content/uploads/2020/09/banho-tosa.png'
    },
        {
      id: 3,
      name: 'Brinquedos Interativos',
      price: 'R$ 15,00',
      description: 'Valorizamos o enriquecimento e a diversão dos animais, por isso oferecemos uma variedade de brinquedos interativos.Esses brinquedos estimulam a mente e o corpo do seu pet, promovendo o exercício físico e mental.Desde brinquedos de mastigação duráveis até jogos interativos, temos opções para cães e gatos de todos os tamanhos e idades, garantindo horas de entretenimento e diversão saudável',
      image: 'https://www.falamart.com.br/wp-content/uploads/2024/11/brinquedos-para-pets.jpg'
    },
    {
      id: 4,
      name: 'Produtos de Higiene e Cuidados',
      price: 'R$ 25,00',
      description: 'Na nossa seleção de produtos, você encontrará uma gama de itens de higiene e cuidados para o seu pet.Isso inclui shampoos e condicionadores específicos para diferentes tipos de pelagem, escovas e pentes para manter os pelos desembaraçados e saudáveis, produtos de limpeza auricular e ocular, além de acessórios essenciais como coleiras, guias e comedouros.Tudo o que você precisa para manter seu animalzinho limpo, confortável e bem cuidado',
      image: 'https://venturavet.com.br/wp-content/uploads/2023/08/foto-post-blog-24-julho-1024x682-1.jpg'
    },
  ],
  food: [
    {
      id: 5,
      name: 'Ração Adulta Premium',
      price: 'R$ 89,90/Kg',
      description: 'No Petshop Melhor Amigo, oferecemos uma seleção de rações premium para cães e gatos.Essas rações são formuladas com ingredientes de alta qualidade, garantindo uma nutrição balanceada e adequada para o seu pet. Temos opções para diferentes idades, raças e necessidades específicas, proporcionando uma dieta saudável e saborosa para o seu melhor amigo',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800'
    },
    {
      id: 6,
      name: 'Ração Filhotes',
      price: 'R$ 99,90/Kg',
      description: 'Nossa ração para filhotes é especialmente formulada para atender às necessidades nutricionais dos cães em crescimento. Com ingredientes de alta qualidade, essa ração proporciona uma dieta balanceada e rica em nutrientes essenciais para o desenvolvimento saudável do seu filhote. Oferecemos opções para diferentes raças e tamanhos, garantindo que seu pet receba a melhor nutrição desde os primeiros meses de vida.',
      image: 'https://www.portaldodog.com.br/wp-content/uploads/2022/06/rac%CC%A7a%CC%83o-para-filhote-de-cachorro-boa-e-barata-2.jpg'
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