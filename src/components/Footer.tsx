import { Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-green-600 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Melhor Amigo</h3>
            <p className="text-green-100">Cuidando do seu pet com amor e dedicação</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                (11) 1234-5678
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                contato@melhoramigo.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Rua dos Pets, 123 - São Paulo
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Horário</h3>
            <p className="text-green-100">Segunda a Sábado: 8h às 19h</p>
            <p className="text-green-100">Domingo: 9h às 15h</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-500 text-center text-green-100">
          <p>&copy; 2024 Petshop Melhor Amigo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;