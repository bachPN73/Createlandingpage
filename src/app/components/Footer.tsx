export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="font-bold text-gray-900">Edu Tech</div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Nền tảng học liệu 3D và tương tác hàng đầu cho học sinh THPT chuyên ngành học tự nhiên tại Việt Nam.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4">HƯỚNG DẪN</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Tài liệu học tập</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Cách dùng Mô hình 3D</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Bảng giá</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4">PHÁP LÝ</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Điều khoản dịch vụ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Chính sách bảo mật</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Liên hệ hỗ trợ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4">POWERED BY</h3>
            <div className="text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900 block mb-1">GAIRA.AI</a>
              <a href="#" className="hover:text-gray-900 block">REACT 18/BAMBOOFOX</a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © 2026 Edu Tech Vietnam. Build for high performance.
          </p>
        </div>
      </div>
    </footer>
  );
}
