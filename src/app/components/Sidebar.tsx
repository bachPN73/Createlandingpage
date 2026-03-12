import { Link, useLocation } from 'react-router';
import { Home, BookOpen, Sparkles, User, CreditCard, BookOpenCheck } from 'lucide-react';

export function Sidebar() {
  const location = useLocation();
  
  const navItems = [
    { path: '/dashboard', icon: Home, label: 'Trang chủ' },
    { path: '/thu-vien', icon: BookOpen, label: 'Thư viện' },
    { path: '/find-with-ai', icon: Sparkles, label: 'Find with AI' },
    { path: '/tai-khoan', icon: User, label: 'Tài khoản' },
    { path: '/goi-dich-vu', icon: CreditCard, label: 'Gói dịch vụ' },
    { path: '/huong-dan', icon: BookOpenCheck, label: 'Hướng dẫn' },
  ];
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <aside className="fixed left-0 top-0 h-screen w-[240px] bg-blue-700 text-white flex flex-col">
      <div className="p-6 border-b border-blue-600">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-bold">Edu Tech</span>
        </div>
        <div className="text-xs text-blue-200">Khoa học Tự nhiên</div>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                active 
                  ? 'bg-blue-600 text-white' 
                  : 'text-blue-100 hover:bg-blue-600/50'
              }`}
            >
              <Icon size={20} />
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-blue-600">
        <div className="flex items-center gap-3 p-3 bg-blue-600 rounded-lg">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
            P
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium truncate">Phạm Ngọc Bách</div>
            <div className="text-xs text-blue-200">Học sinh</div>
          </div>
        </div>
        <button className="w-full mt-3 text-sm text-blue-200 hover:text-white flex items-center gap-2 px-3 py-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Đăng xuất
        </button>
      </div>
    </aside>
  );
}
