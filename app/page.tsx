export default function JunggoPhoneBox() {
  const products = [
    { name: "아이폰 15 Pro", price: "890,000원" },
    { name: "아이폰 14 Pro", price: "720,000원" },
    { name: "아이폰 13 Pro", price: "590,000원" },
    { name: "아이폰 13", price: "450,000원" },
    { name: "갤럭시 S24", price: "790,000원" },
    { name: "갤럭시 S23", price: "590,000원" },
    { name: "갤럭시 Z플립5", price: "680,000원" },
    { name: "갤럭시 Z폴드5", price: "1,090,000원" },
    { name: "아이폰 SE3", price: "290,000원" },
    { name: "갤럭시 A54", price: "250,000원" },
    { name: "아이폰 12", price: "390,000원" },
    { name: "갤럭시 S22", price: "450,000원" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 상단바 */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            중고폰<span className="text-red-500">박스</span>
          </h1>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#">중고폰 구매</a>
            <a href="#">중고폰 판매</a>
            <a href="#">아이폰 수리</a>
            <a href="#contact">문의하기</a>
          </nav>
        </div>
      </header>

      {/* 메인 배너 */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <div className="inline-block bg-red-500 px-4 py-2 rounded-full text-sm mb-5">
              프리미엄 중고폰 전문
            </div>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              믿을 수 있는
              <br />
              중고폰 거래 플랫폼
            </h2>

            <p className="text-xl text-gray-300">
              아이폰 · 갤럭시 구매, 판매, 수리를 한번에
            </p>
          </div>
        </div>
      </section>

      {/* 카테고리 */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-4">
          {[
            "아이폰",
            "갤럭시",
            "중고폰 판매",
            "아이폰 수리",
          ].map((item) => (
            <div
              key={item}
              className="border rounded-2xl p-6 text-center font-bold hover:shadow-lg cursor-pointer transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* 상품 목록 */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-bold">인기 상품</h3>

          <button className="border px-4 py-2 rounded-xl">
            전체보기
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded-3xl overflow-hidden hover:shadow-xl transition"
            >
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-3">📱</div>
                  <div className="text-gray-400">상품 이미지</div>
                </div>
              </div>

              <div className="p-5">
                <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded mb-3">
                  판매중
                </span>

                <h4 className="font-bold text-lg mb-2">
                  {product.name}
                </h4>

                <p className="text-gray-500 text-sm mb-4">
                  상태 최상 · 배터리 효율 우수
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">
                    {product.price}
                  </span>

                  <button className="border px-3 py-2 rounded-lg text-sm">
                    보기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 문의 */}
      <section
        id="contact"
        className="bg-black text-white py-20"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-4xl font-bold mb-4">
            빠른 상담
          </h3>

          <p className="text-gray-300 mb-8">
            중고폰 구매 · 판매 · 수리 문의
          </p>

          <div className="space-y-3 text-lg mb-8">
            <div>📞 010-5541-5587</div>
            <div>📍 인천 중고폰박스</div>
            <div>🕒 매일 10:00 ~ 22:00</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:01055415587"
              className="bg-white text-black px-8 py-4 rounded-2xl font-bold text-center"
            >
              📞 전화 상담
            </a>

            <a
              href="https://open.kakao.com/o/s2vBY4xi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold text-center"
            >
              💬 카카오톡 상담
            </a>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="border-t py-8 text-center text-gray-500">
        © 2026 중고폰박스. All Rights Reserved.
      </footer>
    </div>
  );
}