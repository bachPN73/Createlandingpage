import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Library() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const materials = [
    {
      id: 1,
      title: 'Xuống không lưng',
      category: 'Hóa học',
      subject: 'HÓA HỌC',
      grade: 'MŨI LỚP 10',
      image: null,
    },
    {
      id: 2,
      title: 'Hệ phách 4x',
      category: 'Hóa học',
      subject: 'HÓA HỌC',
      grade: 'MŨI LỚP 10',
      image: null,
    },
    {
      id: 3,
      title: 'con muỗi',
      category: 'Sinh học',
      subject: 'SINH HỌC',
      grade: 'MŨI LỚP 10',
      image: import.meta.env.BASE_URL + 'figma:asset/99017d5f4c23249e7c89c7da25ec2081cc49ee62.png',
    },
    {
      id: 4,
      title: 'sọ tinh tinh',
      category: 'Sinh học',
      subject: 'SINH HỌC',
      grade: 'MŨI LỚP 10',
      image: 'https://images.unsplash.com/photo-1767486366936-c41b4f767eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW9sb2d5JTIwY2VsbCUyMG1pY3Jvc2NvcGV8ZW58MXx8fHwxNzczMzExOTY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      title: 'test',
      category: 'Vật lý',
      subject: 'VẬT LÝ',
      grade: 'MŨI LỚP 10',
      image: null,
    },
  ];
  
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Thư viện học liệu</h1>
        <p className="text-gray-600">
          Khám phá 5 mô hình 3D và infographic về Khoa học Tự nhiên
        </p>
      </div>
      
      {/* Search and Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Tìm kiếm học liệu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          <Filter size={16} className="text-gray-500" />
          <span className="text-sm text-gray-700 font-medium">Tác:</span>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Môn học</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Tất cả môn học</option>
              <option>Vật lý</option>
              <option>Hóa học</option>
              <option>Sinh học</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Loại</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Tất cả thể</option>
              <option>Mô hình 3D</option>
              <option>Infographic</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Lớp</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Tất cả lớp</option>
              <option>Lớp 10</option>
              <option>Lớp 11</option>
              <option>Lớp 12</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Results */}
      <div className="mb-4">
        <p className="text-gray-600">Tìm thấy <span className="font-bold">5</span> kết quả</p>
      </div>
      
      {/* Materials Grid */}
      <div className="grid md:grid-cols-5 gap-6">
        {materials.map((material) => (
          <div key={material.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
            <div className="relative aspect-[4/3] bg-gray-100">
              {material.image ? (
                material.image.includes('figma:asset') ? (
                  <div className="w-full h-full bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
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
                )
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="text-blue-300">
                    <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                    <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                    <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                    <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded">
                  {material.subject}
                </span>
                <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">
                  {material.grade}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm">{material.title}</h3>
              <p className="text-xs text-gray-500">{material.category}</p>
              <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-600">Dự phát cho lớp</span>
                <span className="text-xs font-bold text-gray-900">Xem ►</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
