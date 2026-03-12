import { useState } from 'react';
import { Sparkles, Search } from 'lucide-react';

export function FindWithAI() {
  const [searchText, setSearchText] = useState('');
  
  const suggestions = [
    'Câu trúc nguyên tử và electron',
    'Chu trình liên kết vị kitamin',
    'Điện và chuyển động Newton',
    'Thang di lấp muối khải học'
  ];
  
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-2xl mb-4">
          <Sparkles className="text-white" size={32} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Find with AI</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Mô tả nội dung bạn muốn tìm kiếm, AI sẽ gợi ý các nội dung 3D và infographic phù hợp nhất
        </p>
      </div>
      
      <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 mb-6">
        <textarea
          placeholder="Ví dụ: Tôi muốn tìm mô hình 3D về cấu trúc nguyên tử và các electron quay quanh hạt nhân..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          rows={6}
          className="w-full resize-none focus:outline-none text-gray-700 placeholder:text-gray-400"
        />
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-gray-500">0 / 250 ký tự</span>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2 font-medium">
            <Search size={18} />
            Tìm kiếm
          </button>
        </div>
      </div>
      
      <div>
        <div className="text-sm text-gray-600 mb-3 font-medium">Gợi ý nội dung</div>
        <div className="flex flex-wrap gap-2">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => setSearchText(suggestion)}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors border border-gray-200"
            >
              {suggestion}
            </button>
          ))}
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            Gợi ý trợ quang học 3 lớp vật lý
          </p>
        </div>
      </div>
    </div>
  );
}
