
import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-100 to-blue-100 p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-green-800">Artes & Bytes</h1>
          <nav className="space-x-4">
            <a href="#loja" className="text-gray-700 hover:text-green-700">Loja</a>
            <a href="#sobre" className="text-gray-700 hover:text-green-700">Sobre</a>
            <a href="#blog" className="text-gray-700 hover:text-green-700">Blog</a>
            <a href="#contato" className="text-gray-700 hover:text-green-700">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero section */}
      <section className="py-16 text-center bg-green-50">
        <h2 className="text-4xl font-semibold mb-4">Conectando o feito à mão com o digital</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Descubra criações únicas, desde arte física até produtos digitais exclusivos. Feito com alma, pensado com tecnologia.
        </p>
      </section>

      {/* Loja */}
      <section id="loja" className="py-16 bg-white max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold mb-8">Loja</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Produtos */}
          <div className="border rounded-2xl shadow p-4">
            <div className="bg-gray-100 h-48 rounded mb-4" />
            <h4 className="font-semibold">Vela Aromática</h4>
            <p className="text-gray-600 text-sm">Feita à mão com ingredientes naturais para relaxar seu ambiente.</p>
            <p className="font-bold mt-2">R$ 45,00</p>
          </div>
          <div className="border rounded-2xl shadow p-4">
            <div className="bg-gray-100 h-48 rounded mb-4" />
            <h4 className="font-semibold">E-book: Guia do Artesão Digital</h4>
            <p className="text-gray-600 text-sm">Aprenda a criar e vender seus produtos artesanais no mundo digital.</p>
            <p className="font-bold mt-2">R$ 30,00</p>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-16 bg-green-50 text-center px-4">
        <h3 className="text-2xl font-bold mb-4">Sobre o Artes & Bytes</h3>
        <p className="max-w-2xl mx-auto text-gray-700">
          Somos apaixonados por transformar criatividade em experiências únicas. Unimos o artesanal com a inovação para levar até você produtos que contam histórias — no físico e no digital.
        </p>
      </section>

      {/* Blog */}
      <section id="blog" className="py-16 bg-white max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold mb-8">Blog</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-xl p-4 shadow">
            <h4 className="font-semibold">Como nasce um produto artesanal</h4>
            <p className="text-gray-600 text-sm">Conheça o processo criativo por trás de cada peça.</p>
          </div>
          <div className="border rounded-xl p-4 shadow">
            <h4 className="font-semibold">Dicas para vender produtos digitais</h4>
            <p className="text-gray-600 text-sm">Aprenda a transformar conhecimento em renda.</p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 bg-green-100 text-center px-4">
        <h3 className="text-2xl font-bold mb-4">Fale com a gente</h3>
        <p className="text-gray-700 mb-4">Tem dúvidas ou sugestões? Entre em contato pelo WhatsApp ou e-mail.</p>
        <p className="text-green-800 font-semibold">contato@artesbytes.com</p>
        <p className="text-green-800 font-semibold">(99) 99999-9999</p>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white text-center p-4">
        <p>&copy; 2025 Artes & Bytes. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
