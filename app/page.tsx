export default function JunggoPhoneBox() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold">중고폰박스</h1>
          <p className="text-gray-500">
            중고폰 구매 · 판매 · 아이폰 수리
          </p>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            믿을 수 있는 중고폰 거래
          </h2>

          <p className="text-lg text-gray-600 mb-10">
            아이폰 · 갤럭시 중고폰 구매 및 판매,
            <br />
            아이폰 수리까지 한 번에.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:01055415587"
              className="bg-black text-white px-8 py-4 rounded-2xl font-semibold"
            >
              📞 전화 상담
            </a>

            <a
              href="https://open.kakao.com/o/s2vBY4xi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-semibold"
            >
              💬 카카오톡 상담
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-black text-white rounded-3xl p-10 text-center">
          <h3 className="text-4xl font-bold mb-6">
            빠른 문의
          </h3>

          <div className="space-y-3 text-lg mb-8">
            <div>📞 010-5541-5587</div>
            <div>📍 인천 중고폰박스</div>
            <div>🕒 매일 10:00 ~ 22:00</div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:01055415587"
              className="bg-white text-black px-6 py-3 rounded-2xl font-semibold"
            >
              전화 상담
            </a>

            <a
              href="https://open.kakao.com/o/s2vBY4xi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-semibold"
            >
              카카오톡 상담
            </a>
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