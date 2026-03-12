export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tính năng nổi bật</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Công cụ học tập tiện đại giúp học sinh và giáo viên đễ dàng tiếp cận kiến thức mang nhiều chong
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-blue-100">
            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Thư viện phong phú</h3>
            <p className="text-gray-600 leading-relaxed">
              Hàng trăm mô hình 3D và infographic về Vật lý, Hóa học, Sinh học
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-green-100">
            <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Find with AI</h3>
            <p className="text-gray-600 leading-relaxed">
              Tìm kiếm học liệu phù hợp bằng AI dễ mở tả văn bản
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-purple-100">
            <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.5 4.21L12 6.81L16.5 4.21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.5 19.79V14.6L3 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12L16.5 14.6V19.79" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.27 6.96L12 12.01L20.73 6.96" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22.08V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Chế độ trình chiếu</h3>
            <p className="text-gray-600 leading-relaxed">
              Hiển thị toàn màn hình cho dạy học trên lớp
            </p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Sẵn sàng bứt phá kiến thức?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Tham gia Edu Tech và khám phá cách học Khoa học Tự nhiên hiện đại, tương tác và hiệu quả nhất ngay hôm nay
            </p>
            <button className="bg-white text-blue-600 px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg">
              Đăng ký miễn phí
            </button>
            <p className="text-sm text-gray-400 mt-4">
              NO CARD REQUIRED • INSTANT ACCESS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
