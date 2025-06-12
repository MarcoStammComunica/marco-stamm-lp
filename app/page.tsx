export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-6xl font-bold text-center mb-6">
          Marco Stamm Comunicação
        </h1>
        <p className="text-xl text-center mb-8">
          Consultoria em Comunicação para Gestão Pública
        </p>
        <div className="text-center">
          <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-xl font-bold">
            Entre em Contato
          </button>
        </div>
      </div>
    </div>
  )
}