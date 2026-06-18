"use client";

import { useEffect, useState } from "react";

export default function JunggoPhoneBox() {
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSPqX3DVJo0bVOOecEmI0yP62QpS55isyRXQ_8O4Eq4X1WYeOcGzZPRN3eQJPXDHr_7PrI6QAM8JIY6/pub?gid=0&single=true&output=csv"
      );

      const text = await res.text();

      const rows = text.split("\n").slice(1);

      const data = rows
        .filter((row) => row.trim())
        .map((row) => {
          const cols = row.split(",");

          return {
            model: cols[0],
            price: cols[1],
            status: cols[2],
            image: cols[3],
          };
        });

      setProducts(data);
    };

    loadData();
  }, []);

  const filteredProducts = products.filter((item) =>
    item.model?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

          <a href="/" className="text-2xl font-bold">
            중고폰박스
          </a>

          <div className="flex gap-6 text-sm font-medium">
            <a href="/buy">매입</a>
            <a href="/sell">판매</a>
            <a href="#products">시세표</a>
            <a href="#contact">문의하기</a>
          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-5 py-24 text-center">

          <div className="inline-block bg-white text-black px-4 py-2 rounded-full mb-6 font-semibold">
            인천 중고폰 전문업체
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            중고폰 시세표
          </h1>

          <p className="text-xl text-gray-300 mb-10">
            아이폰 · 갤럭시 실시간 시세 확인
          </p>

          <div className="max-w-xl mx-auto">
            <input
              type="text"
              placeholder="기종 검색 (예: 아이폰15, 갤럭시S24)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl text-black border"
            />
          </div>

        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="products"
        className="max-w-7xl mx-auto px-5 py-20"
      >
        <div className="flex justify-between items-center mb-10">

          <div>
            <h2 className="text-4xl font-bold">
              실시간 시세
            </h2>

            <p className="text-gray-500 mt-2">
              구글 시트와 연동된 최신 가격
            </p>
          </div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {filteredProducts.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition"
            >

              <div className="h-64 bg-gray-100">

                <img
                  src={`/phones/${item.image}`}
                  alt={item.model}
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="p-6">

                <div className="text-sm text-gray-500 mb-2">
                  {item.status}
                </div>

                <h3 className="text-xl font-bold mb-4">
                  {item.model}
                </h3>

                <div className="text-3xl font-bold">
                  {Number(item.price).toLocaleString()}원
                </div>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-5 py-20"
      >
        <div className="bg-black text-white rounded-[40px] p-12 text-center">

          <h2 className="text-5xl font-bold mb-5">
            빠른 문의
          </h2>

          <p className="text-gray-300 mb-10">
            중고폰 매입 · 판매 상담
          </p>

          <div className="space-y-4 text-lg mb-10">
            <div>📞 010-5541-5587</div>
            <div>📍 인천 중고폰박스</div>
            <div>🕒 매일 10:00 ~ 22:00</div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">

            <a
              href="tel:01055415587"
              className="bg-white text-black px-8 py-4 rounded-2xl font-bold"
            >
              📞 전화상담
            </a>

            <a
              href="https://open.kakao.com/o/s2vBY4xi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold"
            >
              💬 카카오톡 상담
            </a>

          </div>

        </div>
      </section>

      {/* FLOATING BUTTON */}
      <a
        href="https://open.kakao.com/o/s2vBY4xi"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-yellow-400 text-black px-6 py-4 rounded-full shadow-2xl font-bold z-50"
      >
        💬 상담하기
      </a>

    </div>
  );
}