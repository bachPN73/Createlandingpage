import { User, Mail, Lock, CreditCard } from 'lucide-react';

export function Profile() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Hồ sơ cá nhân</h1>
      
      {/* User Info Section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-2 mb-6">
          <User className="text-blue-600" size={20} />
          <h2 className="text-lg font-bold text-gray-900">Thông tin cơ bản</h2>
        </div>
        
        <div className="flex items-center gap-6 mb-6">
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
            P
          </div>
          <div>
            <div className="font-bold text-gray-900 text-xl mb-1">Phạm Ngọc Bách</div>
            <div className="text-gray-600">Học sinh</div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Họ tên đầy đủ</label>
            <input
              type="text"
              value="Phạm Ngọc Bách"
              readOnly
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Mail size={16} />
              Email
            </label>
            <input
              type="email"
              value="phamngocbach7@gmail.com"
              readOnly
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
            />
          </div>
        </div>
      </div>
      
      {/* Current Plan Section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-2 mb-6">
          <CreditCard className="text-green-600" size={20} />
          <h2 className="text-lg font-bold text-gray-900">Gói dịch vụ</h2>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="font-bold text-gray-900 text-lg mb-1">Bạn đang dùng gói Free</div>
              <div className="text-sm text-gray-600">Vẫn còn những gói tích cực</div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Nâng cấp
            </button>
          </div>
        </div>
      </div>
      
      {/* Security Section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-6">
          <Lock className="text-orange-600" size={20} />
          <h2 className="text-lg font-bold text-gray-900">Bảo mật</h2>
        </div>
        
        <button className="w-full flex items-center justify-between px-4 py-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <span className="text-gray-700">Đổi mật khẩu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
