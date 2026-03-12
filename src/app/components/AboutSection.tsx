import heroImage1 from "figma:asset/cdcca6cd5cbfbd1707419a33fadc940be91a0688.png";

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={heroImage1} 
                  alt="Classroom learning" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
                <img 
                  src={heroImage1} 
                  alt="Digital platform" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
          
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6">
              <span className="text-green-600">✓</span>
              <span className="text-sm font-medium text-green-600">VỀ CHÚNG TÔI</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Edu Tech - Sứ mệnh chuyển đổi số giáo dục
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Được thành lập với mong muốn mang công nghệ 3D và AI tiên tiến vào các lớp học phổ thông, Edu Tech tự hào là nền tảng giáo dục trong việc cung cấp học liệu chất lược quan tại Việt Nam.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3L4 9L12 15L20 9L12 3Z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 15L12 21L20 15" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Tầm nhìn</h3>
                  <p className="text-gray-600">
                    Trở thành bạch khoa toàn thư 3D lớn nhất cho giáo dục trung học tại Việt Nam.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Giá trị cốt lõi</h3>
                  <p className="text-gray-600">
                    Lấy học sinh làm trung tâm, giáo dục không giới hạn sự sáng tạo và tương tác.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
