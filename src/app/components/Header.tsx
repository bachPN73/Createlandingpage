import { Link } from 'react-router';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <div className="font-bold text-gray-900">Edu Tech</div>
            <div className="text-xs text-gray-600">Khoa học Tự nhiên</div>
          </div>
        </Link>
        
        <nav className="flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-gray-900">Hướng dẫn</a>
          <Link to="/dang-nhap" className="text-gray-700 hover:text-gray-900">Đăng nhập</Link>
          <Link to="/dang-ky" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Đăng ký
          </Link>
        </nav>
      </div>
    </header>
  );
}