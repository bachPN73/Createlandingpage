export function HeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
              <span className="text-blue-600">🚀</span>
              <span className="text-sm font-medium text-blue-600">NỀN TẢNG HỌC TẬP THPT VIỆT NAM</span>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Khoa học Tự nhiên
            </h1>
            <h2 className="text-5xl font-bold text-blue-600 mb-6">
              Tương tác & Sống động
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Biến những bài giảng nhàm chán thành trải nghiệm thị giác tuyệt vời với mô hình 3D và infographic. Tiếp thu kiến thức Vật lý, Hóa học, Sinh học một cách tự nhiên nhất.
            </p>
            
            <div className="flex gap-4 mb-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-medium">
                Bắt đầu miễn phí
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="bg-white text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium border border-gray-200">
                Tìm hiểu thêm
              </button>
            </div>
            
            <div>
              <div className="text-sm text-gray-500 mb-3 font-medium">KHÁM PHÁ:</div>
              <div className="flex gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <circle cx="8" cy="8" r="6"/>
                  </svg>
                  Vật lý
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full text-sm">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <circle cx="8" cy="8" r="6"/>
                  </svg>
                  Hóa học
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-full text-sm">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <circle cx="8" cy="8" r="6"/>
                  </svg>
                  Sinh học
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gray-900">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
