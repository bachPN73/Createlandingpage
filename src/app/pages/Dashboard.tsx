import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Dashboard() {
  const learningMaterials = [
    {
      id: 1,
      title: 'Xuống không lưng',
      category: 'Hóa học',
      subject: 'Hóa',
      grade: '10',
      image: 'https://images.unsplash.com/photo-1682391427624-61a45b5c7797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdG9tJTIwbW9sZWN1bGUlMjBzY2llbmNlfGVufDF8fHx8MTc3MzMxMTk2NXww&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'MIỄN PHÍ'
    },
    {
      id: 2,
      title: 'Hệ phách 4x',
      category: 'Hóa học',
      subject: 'Hóa',
      grade: '11',
      image: 'https://images.unsplash.com/photo-1759866042499-d0b3e9d87ceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaXN0cnklMjBiZWFrZXIlMjBmbGFza3xlbnwxfHx8fDE3NzMzMTE5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'MIỄN PHÍ'
    },
    {
      id: 3,
      title: 'con muỗi',
      category: 'Sinh học',
      subject: 'Sinh',
      grade: '10',
      image: import.meta.env.BASE_URL + 'figma:asset/99017d5f4c23249e7c89c7da25ec2081cc49ee62.png',
      badge: 'MIỄN PHÍ'
    },
    {
      id: 4,
      title: 'sọ tinh tinh',
      category: 'Sinh học',
      subject: 'Sinh',
      grade: '10',
      image: 'https://images.unsplash.com/photo-1767486366936-c41b4f767eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW9sb2d5JTIwY2VsbCUyMG1pY3Jvc2NvcGV8ZW58MXx8fHwxNzczMzExOTY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'MIỄN PHÍ'
    },
  ];

  return (
    <div className="p-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-blue-900 rounded-3xl p-8 mb-8 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-white mb-2">
            Chào <span className="text-blue-300">Học sinh</span>,
          </h1>
          <p className="text-blue-100 mb-6">
            Chúc bạn một ngày học tập hiệu quả. Cùng khám phá không gian tri thức Edu Tech nhé!
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl">
            <div className="bg-purple-600/30 backdrop-blur-sm rounded-xl p-4 border border-purple-400/30">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-purple-200">Gói đăng ký hiện tại</div>
                  <div className="text-lg font-bold text-white">Cơ bản (Free)</div>
                </div>
              </div>
            </div>
            
            <div className="bg-teal-600/30 backdrop-blur-sm rounded-xl p-4 border border-teal-400/30">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M12 2v20M2 12h20"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-teal-200">Trải nghiệm gói Pro</div>
                  <div className="text-lg font-bold text-white">Vĩnh viễn</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute right-20 top-8 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl"></div>
      </div>
      
      {/* Quick Access */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-2">Tìm kiếm với AI</h3>
              <p className="text-sm text-gray-600 mb-3">
                Thông dùng từ tìm kiếm tự do: vd. lớp 10, lớp 11, lớp 12 để sẽ giới hạn kết quả Toán lý ai chi vật ly cho mật mó.
              </p>
              <button className="text-sm font-medium text-purple-600 hover:text-purple-700 flex items-center gap-1">
                Khám phá
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M3 9h18M9 21V9"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-2">Thư Viện Trực Quan</h3>
              <p className="text-sm text-gray-600 mb-3">
                Duyệt qua tất cả các giao diện 3D, infographic, xin chống của theo mỗi thử mục lục ủy ban.
              </p>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
                Xem thư viện
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subject Pills */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Khám phá bộ môn</h2>
        <div className="flex gap-4">
          <button className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all group">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-600 group-hover:text-white">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-500">3 học liệu</div>
              <div className="font-bold text-gray-900">Vật lý</div>
            </div>
          </button>
          
          <button className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl border border-gray-200 hover:border-green-500 hover:shadow-md transition-all group">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-600 group-hover:text-white">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-500">4 học liệu</div>
              <div className="font-bold text-gray-900">Hóa học</div>
            </div>
          </button>
          
          <button className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl border border-gray-200 hover:border-orange-500 hover:shadow-md transition-all group">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-orange-600 group-hover:text-white">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6v6l3 3" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-500">4 học liệu</div>
              <div className="font-bold text-gray-900">Sinh học</div>
            </div>
          </button>
        </div>
      </div>
      
      {/* Learning Materials */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Tiếp tục học tập</h2>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            Xem tất cả
          </button>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {learningMaterials.map((material) => (
            <div key={material.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="relative aspect-video bg-gray-100">
                {material.image.includes('figma:asset') ? (
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
                      <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                ) : (
                  <ImageWithFallback 
                    src={material.image} 
                    alt={material.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                )}
                <div className="absolute top-2 left-2">
                  <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {material.badge}
                  </span>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {material.grade}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-1">{material.title}</h3>
                <p className="text-sm text-gray-500">{material.category}</p>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-600">Dành cho lớp {material.grade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
