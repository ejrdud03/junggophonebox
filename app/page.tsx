"use client";

import { useEffect, useState } from "react";

export default function JunggoPhoneBox() {
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("전체");

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

  const filteredProducts = products.filter((item) => {
    const matchSearch = item.model
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "전체"
        ? true
        : category === "아이폰"
        ? item.model.includes("아이폰")
        : item.model.includes("갤럭시");

    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            중고폰박스
          </h1>

          <div className="hidden md:flex gap-6 text-sm">
            <a href="#products">시세표</a>
            <a href="#contact">문의하기</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-5 py-20 text-center">
          <h2 className="text-5xl font-bold mb-4">
            중고폰 시세표
          </h2>

          <p className="text-gray-300 text-lg">
            실시간 매입 시세 업데이트
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="products"
        className="max-w-7xl mx-auto px-5 py-16"
      >
        <h3 className="text-3xl font-bold mb-8">
          실시간 시세
        </h3>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="기종 검색"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-2xl px-4 py-3 flex-1"
          />

          <div className="flex gap-2">
            <button
              onClick={() => setCategory("전체")}
              className={`px-5 py-3 rounded-2xl ${
                category === "전체"
                  ? "bg-black text-white"
                  : "bg-white border"
              }`}
            >
              전체
            </button>

            <button
              onClick={() => setCategory("아이폰")}
              className={`px-5 py-3 rounded-2xl ${
                category === "아이폰"
                  ? "bg-black text-white"
                  : "bg-white border"
              }`}
            >
              아이폰
            </button>

            <button
              onClick={() => setCategory("갤럭시")}
              className={`px-5 py-3 rounded-2xl ${
                category === "갤럭시"
                  ? "bg-black text-white"
                  : "bg-white border"
              }`}
            >
              갤럭시
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {filteredProducts.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                {item.image ? (
                  <img
                    src={`/phones/${item.image}`}
                    alt={item.model}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                ) : (
                  <span className="text-gray-400">
                    상품 이미지
                  </span>
                )}
              </div>

              <div className="p-5">

                <div className="text-xs text-gray-500 mb-2">
                  {item.status}
                </div>

                <h4 className="font-bold text-lg mb-3">
                  {item.model}
                </h4>

                <div className="text-2xl font-bold text-red-600">
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
        <div className="bg-black text-white rounded-3xl p-10 text-center">

          <h3 className="text-4xl font-bold mb-4">
            빠른 문의
          </h3>

          <p className="mb-8 text-gray-300">
            중고폰 매입 / 판매 상담
          </p>

          <div className="space-y-3 mb-8">
            <div>📞 010-5541-5587</div>
            <div>📍 인천 중고폰박스</div>
            <div>🕒 매일 10:00 ~ 22:00</div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">

            <a
              href="tel:01055415587"
              className="bg-white text-black px-8 py-4 rounded-2xl font-bold"
            >
              📞 전화 상담
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