export default function BuyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-5 py-20">

        <h1 className="text-5xl font-bold mb-4">
          중고폰 매입
        </h1>

        <p className="text-gray-500 text-lg mb-10">
          사용하던 휴대폰 최고가 매입
        </p>

        <div className="bg-gray-100 rounded-3xl p-10">
          <h2 className="text-2xl font-bold mb-4">
            매입 문의
          </h2>

          <p className="mb-6">
            기종명 / 상태 / 용량을 보내주시면
            빠르게 견적 안내드립니다.
          </p>

          <a
            href="https://open.kakao.com/o/s2vBY4xi"
            target="_blank"
            className="bg-yellow-400 px-8 py-4 rounded-2xl font-bold inline-block"
          >
            카카오톡 문의
          </a>
        </div>

      </div>
    </div>
  );
}