export default function JunggoPhoneBox() {
  const categories = {
    '중고폰 구매': ['아이폰', '갤럭시'],
    '중고폰 판매': ['아이폰', '갤럭시'],
    '아이폰 수리': ['액정수리', '배터리교체'],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">중고폰박스</h1>
            <p className="text-sm text-gray-500">중고폰 구매 · 판매 · 아이폰 수리</p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#buy" className="hover:text-black text-gray-600">중고폰 구매</a>
            <a href="#sell" className="hover:text-black text-gray-600">중고폰 판매</a>
            <a href="#repair" className="hover:text-black text-gray-600">아이폰 수리</a>
            <a href="#contact" className="hover:text-black text-gray-600">문의하기</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-black text-white text-sm mb-5">
              프리미엄 중고폰 전문
            </span>

            <h2 className="text-5xl font-bold leading-tight mb-6">
              믿을 수 있는
              <br />
              중고폰 거래 플랫폼
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              아이폰 · 갤럭시 중고폰 구매 및 판매,
              <br />
              아이폰 수리까지 한 번에.
            </p>

            <div className="flex gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-2xl font-medium hover:opacity-90 transition">
                구매하기
              </button>

              <button className="border px-6 py-3 rounded-2xl font-medium hover:bg-gray-100 transition">
                판매문의
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-3xl border p-6 shadow-sm">
              <div className="text-sm text-gray-500 mb-2">BEST</div>
              <div className="text-2xl font-bold mb-4">iPhone</div>
              <div className="h-44 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
                상품 이미지
              </div>
            </div>

            <div className="bg-white rounded-3xl border p-6 shadow-sm mt-10">
              <div className="text-sm text-gray-500 mb-2">HOT</div>
              <div className="text-2xl font-bold mb-4">Galaxy</div>
              <div className="h-44 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
                상품 이미지
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-2">카테고리</h3>
            <p className="text-gray-500">원하는 서비스를 빠르게 선택하세요.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(categories).map(([title, items]) => (
            <div
              key={title}
              className="border rounded-3xl p-8 hover:shadow-lg transition bg-white"
            >
              <h4 className="text-2xl font-bold mb-6">{title}</h4>

              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item}
                    className="border rounded-2xl px-5 py-4 hover:bg-gray-50 cursor-pointer transition"
                  >
                    <div className="font-medium">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Section */}
      <section className="bg-gray-50 py-20 border-t border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h3 className="text-3xl font-bold mb-2">인기 상품</h3>
              <p className="text-gray-500">실시간 인기 중고폰</p>
            </div>

            <button className="text-sm font-medium border px-4 py-2 rounded-xl hover:bg-white transition">
              전체보기
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-3xl border overflow-hidden hover:shadow-lg transition"
              >
                <div className="h-64 bg-gray-100 flex items-center justify-center text-gray-400">
                  상품 이미지
                </div>

                <div className="p-5">
                  <div className="text-sm text-gray-500 mb-2">중고폰</div>
                  <h4 className="font-bold text-lg mb-2">아이폰 15 Pro</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    상태 최상 · 배터리 효율 우수
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">890,000원</span>
                    <button className="text-sm border px-3 py-2 rounded-xl hover:bg-gray-100 transition">
                      자세히
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-black text-white rounded-[32px] p-10 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h3 className="text-4xl font-bold mb-4">빠른 문의</h3>
            <p className="text-gray-300 leading-relaxed">
              중고폰 구매, 판매, 수리 문의를 빠르게 도와드립니다.
            </p>
          </div>

          <div className="space-y-3 text-lg">
            <div>📞 010-1234-5678</div>
            <div>📍 인천 중고폰박스</div>
            <div>🕒 매일 10:00 - 22:00</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-sm text-gray-500">
        © 2026 중고폰박스. All rights reserved.
      </footer>
    </div>
  );
}
