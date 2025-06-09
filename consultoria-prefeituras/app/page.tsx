import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Target, Shield, Clock, Award } from "lucide-react"
import Link from "next/link"
import { MateriasCarrossel } from "@/components/materias-carrossel"
import { ContactButton } from "@/components/contact-button"

export default function MarcoStammLP() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-700 to-purple-800 text-white py-4 md:py-4 sticky top-0 z-50 min-h-[60px]">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-lg md:text-xl font-bold">Marco Stamm</div>
          <Button
            className="bg-green-500 hover:bg-green-600 text-purple-900 font-semibold text-sm md:text-base px-4 py-2 md:px-6 md:py-3 shadow-lg"
            asChild
          >
            <Link href="#contato">Falar Agora</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-amber-50 py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 md:space-y-8">
              <Badge className="bg-purple-700 text-white hover:bg-purple-800 text-sm md:text-base px-4 py-2 shadow-md">
                Comunicação de confiança para Prefeituras
              </Badge>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight px-2">
                Sua equipe pode produzir <span className="text-purple-700">comunicação profissional</span> sem contratar
                ninguém
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed px-2">
                Transformo quem você já confia em uma estrutura de comunicação que funciona de verdade — produz com
                eficiência, dá visibilidade à sua gestão e evita crise
              </p>
              <div className="flex flex-col gap-4 justify-center px-4">
                <Button
                  size="lg"
                  className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 text-lg w-full sm:w-auto min-h-[44px] shadow-lg"
                  asChild
                >
                  <Link href="#solucao">Como Funciona</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-700 text-purple-700 bg-white hover:bg-purple-700 hover:text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg w-full sm:w-auto shadow-md transition-all duration-300"
                  asChild
                >
                  <Link href="#depoimentos">Ver Resultados</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema/Dor */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              A dor que você sente — e não sabe nomear
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Prefeito, você acordou hoje pensando em obras, saúde, educação. Mas aí chegam as cobranças: "Por que não
              saiu na imprensa?", "A oposição está falando mal nas redes", "O cidadão reclama que não sabe o que a
              prefeitura faz".
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              "Você nomeou pessoas de confiança, mas elas não sabem fazer comunicação profissional de verdade",
              "Sua equipe confunde divulgação pessoal com comunicação institucional da prefeitura",
              "Você está gastando com mídia paga sem orientação e pode estar correndo risco jurídico grave",
              "A imprensa local não existe ou não te dá cobertura adequada para sua gestão municipal",
              "Você não tem tempo para ensinar comunicação — tem uma cidade inteira para administrar",
              "Sua gestão boa não chega ao cidadão da forma correta e transparente que deveria",
            ].map((problema, index) => (
              <Card key={index} className="border-l-4 border-l-purple-700">
                <CardContent className="p-6">
                  <p className="text-gray-700">{problema}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl font-semibold text-purple-800">
              O resultado? Você trabalha dobrado: administra a cidade e ainda precisa se preocupar com comunicação.
              <span className="text-gray-900"> Isso não deveria ser assim.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section id="solucao" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Como eu resolvo — com a equipe que você já confia
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Não precisa contratar ninguém novo. Trabalho com a equipe que você já tem.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Users className="w-8 h-8 text-purple-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Aproveitamos sua equipe atual</h3>
                    <p className="text-gray-600">
                      Aquela pessoa que você nomeou por confiança? Eu transformo ela em um profissional de comunicação
                      competente. O cinegrafista que só filma? Vai aprender a produzir conteúdo estratégico.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-8 h-8 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Resultados em 30 dias</h3>
                    <p className="text-gray-600">
                      Minha abordagem é prática e direta: pego sua equipe atual e ensino tudo que precisa saber. Em 30
                      dias, você terá uma estrutura de comunicação própria e eficaz.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Suporte contínuo</h3>
                    <p className="text-gray-600">
                      Após o treinamento inicial, continuo mentorando sua equipe com suporte constante. Em situações de
                      crise grave ou decisões estratégicas complexas, atuo diretamente ao seu lado.
                    </p>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-purple-50 to-amber-50 border-purple-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-purple-900 mb-6">O que você vai ter em 30 dias:</h3>
                  <div className="space-y-4">
                    {[
                      "Equipe que produz conteúdo sem você precisar revisar",
                      "Comunicação que chega ao cidadão sem depender da imprensa local",
                      "Você dormindo tranquilo sabendo que não vai ter crise por post errado",
                    ].map((beneficio, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                        <p className="text-gray-700 font-medium">{beneficio}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Entregáveis */}
      <section className="py-12 md:py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">O que está incluído</h2>
            <p className="text-xl text-gray-600">Tudo que você precisa para ter uma comunicação profissional</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Diagnóstico completo",
                description:
                  "Análise detalhada da situação atual da sua comunicação e identificação de pontos críticos",
              },
              {
                icon: Users,
                title: "Equipe treinada",
                description: "Capacitação completa aproveitando quem já está no seu gabinete de confiança",
              },
              {
                icon: Award,
                title: "Mídia training personalizado",
                description: "Treinamento específico para você, secretários e atendentes da sua prefeitura",
              },
              {
                icon: CheckCircle,
                title: "Manual prático",
                description: "Guia completo sobre uso correto da comunicação institucional na gestão pública",
              },
              {
                icon: Target,
                title: "Agente de IA personalizado",
                description: "Ferramenta com linguagem jornalística profissional treinada para comunicação pública",
              },
              {
                icon: Users,
                title: "Mentoria contínua",
                description: "Suporte direto comigo para crises, pautas urgentes e decisões estratégicas importantes",
              },
            ].map((item, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-12 h-12 text-purple-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-amber-100 to-purple-100 border-amber-300 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bônus Exclusivos:</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <strong>Orientação legal para licitação de agência</strong> — Como contratar serviços de
                      comunicação dentro da lei
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <strong>Relacionamento com a imprensa</strong> — Estratégias para melhorar a cobertura
                      jornalística da sua gestão
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Por que funciona */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Por que meu método funciona
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-purple-200">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-purple-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Experiência Real</h3>
                  <p className="text-gray-600">
                    Mais de 20 anos em veículos nacionais, agências e gabinetes públicos. Sei exatamente o que funciona
                    na prática e o que é perda de tempo.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Foco no Essencial</h3>
                  <p className="text-gray-600">
                    Nada de jargão técnico ou ferramentas mirabolantes que complicam tudo. Só o que realmente importa
                    para uma prefeitura do interior funcionar bem.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Trabalho com Pessoas</h3>
                  <p className="text-gray-600">
                    Sua equipe vai aprender fazendo, com orientação prática direta. Suporte constante para garantir que
                    tudo funcione perfeitamente.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experiência Comprovada - Carrossel */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Dos grandes jornais para a sua prefeitura: experiência comprovada
            </h2>
            <p className="text-xl text-gray-600">
              Mais de 20 anos cobrindo política, eleições e grandes eventos. Sei o que funciona na prática — e o que é
              perda de tempo.
            </p>
          </div>

          <MateriasCarrossel />
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Resultados Comprovados</h2>
            <p className="text-xl text-gray-600">Veja o que prefeitos e gestores falam sobre o trabalho</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white border-l-4 border-l-purple-500">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    "Conheci o Marco ainda na pré-campanha, quando eu nem sabia se eu seria candidato. Fiz um mídia
                    training e fui pra campanha, vitoriosa. Após a eleição, o desafio era montar a equipe de comunicação
                    num primeiro mandato, em uma cidade do interior, onde faltam jornalistas e mão de obra qualificada.
                    Entrei em contato com o Marco e em menos de um mês ele organizou a minha estrutura de comunicação."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-700 font-bold text-lg">RB</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Rodrigo Benassi</p>
                    <p className="text-gray-600">Prefeito de Colíder/MT</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-l-4 border-l-amber-500">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    "Eu conheci o Marco quando ele trabalhava na imprensa. Tive necessidade de contratar um jornalista
                    para o meu gabinete e o convidei. Foi um período em que pude me concentrar no mandato, sabendo que a
                    comunicação estava profissional e estratégica na contenção de possíveis crises, que conseguimos
                    evitar ou reduzir o impacto."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-amber-700 font-bold text-lg">DD</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Dilmar Dal Bosco</p>
                    <p className="text-gray-600">Deputado Estadual</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sobre Marco */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Marco Stamm</h2>
              <p className="text-xl text-gray-600">
                Jornalista com mais de 20 anos de experiência em comunicação pública e privada
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900">Experiência Profissional</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700 flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      Repórter dos jornais O Globo e Lance!, na TV Globo
                    </p>
                    <p className="text-gray-700 flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      Coordenador de comunicação em gabinete na Assembleia Legislativa
                    </p>
                    <p className="text-gray-700 flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      Jornalista concursado há 15 anos na Câmara Municipal de Sinop
                    </p>
                    <p className="text-gray-700 flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      Cobriu eleições, Copa do Mundo e Olimpíadas
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900">Formação Acadêmica</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700 flex items-start">
                      <Award className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      Graduação em Jornalismo e Letras
                    </p>
                    <p className="text-gray-700 flex items-start">
                      <Award className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      Pós-graduado em Comunicação em Crises nas Organizações
                    </p>
                    <p className="text-gray-700 flex items-start">
                      <Award className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      Mestrando em Marketing Digital
                    </p>
                    <p className="text-gray-700 flex items-start">
                      <Award className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      Especialização em Growth Marketing e Martech
                    </p>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-purple-50 to-amber-50 border-purple-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-purple-900 mb-6">Minha Especialidade</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Sei exatamente como a comunicação funciona nos dois lados: na imprensa e no poder público. Conheço
                    as dores, os prazos e as limitações do gestor público.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Hoje me dedico exclusivamente a resolver o problema de comunicação de prefeituras do interior. Não
                    trabalho apenas com teoria — trabalho com resultados práticos e mentoria contínua.
                  </p>
                  <p className="text-purple-800 font-semibold">
                    Minha especialidade é transformar equipes sem formação em comunicação em estruturas profissionais e
                    eficazes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="py-12 md:py-20 bg-gradient-to-r from-purple-700 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Pronto para ter uma equipe de comunicação que funciona?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Sua gestão merece ser conhecida. Sua equipe pode aprender. E você pode dormir tranquilo sabendo que a
              comunicação está profissional.
            </p>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
              <p className="text-2xl font-semibold mb-4">
                São apenas <span className="text-amber-300">30 dias</span> para transformar completamente como sua
                prefeitura se comunica.
              </p>
            </div>

            <div className="flex flex-col gap-4 justify-center px-6">
              <ContactButton
                href="https://wa.me/5551993925730?text=Ol%C3%A1%20Marco%2C%20quero%20saber%20mais%20sobre%20o%20treinamento%20de%20comunica%C3%A7%C3%A3o%20para%20minha%20equipe"
                className="bg-green-500 hover:bg-green-600 text-purple-900 font-semibold px-8 py-4 text-lg w-full sm:w-auto min-h-[44px] touch-manipulation shadow-lg"
                action="click"
                category="contato"
                label="whatsapp_cta"
              >
                Falar no WhatsApp
              </ContactButton>
              <ContactButton
                href="mailto:marco.stammm@gmail.com"
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-purple-800 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg w-full sm:w-auto shadow-lg transition-all duration-300"
                action="click"
                category="contato"
                label="email_cta"
              >
                Enviar E-mail
              </ContactButton>
            </div>

            <p className="text-sm opacity-75 mt-6">Resposta em até 24 horas • Consulta inicial gratuita</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold mb-4">Marco Stamm</h3>
              <p className="text-gray-400">
                Especialista em comunicação para prefeituras do interior. Transformando equipes em estruturas
                profissionais há mais de 20 anos.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <p>
                  <ContactButton
                    href="https://wa.me/5551993925730"
                    variant="link"
                    className="text-gray-400 hover:text-white p-0 h-auto"
                    action="click"
                    category="contato"
                    label="whatsapp_footer"
                  >
                    WhatsApp: (51) 99392-5730
                  </ContactButton>
                </p>
                <p>
                  <ContactButton
                    href="mailto:marco.stammm@gmail.com"
                    variant="link"
                    className="text-gray-400 hover:text-white p-0 h-auto"
                    action="click"
                    category="contato"
                    label="email_footer"
                  >
                    E-mail: marco.stammm@gmail.com
                  </ContactButton>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Especialidades</h4>
              <div className="space-y-2 text-gray-400">
                <p>• Comunicação Pública</p>
                <p>• Treinamento de Equipes</p>
                <p>• Gestão de Crises</p>
                <p>• Mídia Training</p>
                <p>• Marketing Digital</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Marco Stamm. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
