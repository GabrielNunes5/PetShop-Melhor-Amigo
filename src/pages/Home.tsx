import { Link } from 'react-router-dom';
import { Scissors, ShowerHead, Cookie } from 'lucide-react';

function Home() {
  return (
    <div className="space-y-16 py-6">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:h-[500px]">
        <div className="absolute inset-0">
          <img
            src="https://img.freepik.com/fotos-gratis/cao-bonito-do-grupo-de-cachorro-beagle-sentado-e-ofegante_1150-18198.jpg"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center md:items-start md:text-left">
          <div className="text-white px-2">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 mt-4">
              Bem-vindo ao Melhor Amigo
            </h1>
            <p className="text-lg md:text-2xl mb-4">
              Cuidando do seu pet com amor e dedicação
            </p>
            <p className="text-lg mb-6 md:mb-8 leading-relaxed">
              No Petshop Melhor Amigo, nós entendemos que seu animal de estimação é mais 
              do que apenas um bichinho, é um membro especial da sua família. Com isso em 
              mente, estamos comprometidos em fornecer cuidados excepcionais e serviços de 
              alta qualidade para garantir que seu melhor amigo tenha uma vida feliz e saudável.
            </p>
            <Link
              to="/produtos"
              className="bg-green-600 text-white px-4 py-2 md:px-8 md:py-3 rounded-lg hover:bg-green-700 transition-colors text-sm md:text-base"
            >
              Conheça Nossos Produtos
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
        <p className="text-xl mb-8 leading-relaxed text-center">Com uma equipe dedicada e apaixonada por animais, nossos profissionais  treinados estão prontos para oferecer os melhores cuidados para o seu pet. Desde serviços de tosa profissional, onde deixaremos seu animalzinho com um visual impecável, até a limpeza e higienização completa, proporcionamos um ambiente seguro e tranquilo para que seu amigo se sinta confortável durante todo o processo.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg shadow-lg">
            <Scissors className="h-12 w-12 mx-auto mb-4 text-green-600" />
            <h3 className="text-xl font-semibold mb-2">Tosa</h3>
            <p className="text-gray-600">Tosa profissional com equipamentos de última geração</p>
          </div>
          <div className="text-center p-6 rounded-lg shadow-lg">
            <ShowerHead className="h-12 w-12 mx-auto mb-4 text-green-600" />
            <h3 className="text-xl font-semibold mb-2">Banho</h3>
            <p className="text-gray-600">Banho relaxante com produtos especializados</p>
          </div>
          <div className="text-center p-6 rounded-lg shadow-lg">
            <Cookie className="h-12 w-12 mx-auto mb-4 text-green-600" />
            <h3 className="text-xl font-semibold mb-2">Produtos</h3>
            <p className="text-gray-600">Rações e acessórios das melhores marcas</p>
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Promoção do Mês</h2>
            <div className="text-center">
              <p className="text-xl mb-4">
                Pacote Completo: Banho + Tosa + Hidratação
              </p>
              <p className="text-green-600 text-3xl font-bold mb-4">R$ 89,90</p>
              <Link
                to="/contato"
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Agende Agora
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;