import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Miễn phí',
      price: '0',
      period: 'mãi',
      icon: '⭕',
      color: 'gray',
      features: [
        'Năng dược chỉ hiện nội dung nhỏ hoàng',
        'Kết hợp 30 học liệu trong kho miễn phí',
        'Trải nghiệm tính học tập công tác hỗi hỗ'
      ],
      buttonText: 'Chọn gói này',
      buttonStyle: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50'
    },
    {
      name: 'Cơ bản',
      price: '249,000',
      period: 'VNĐ / 3 tháng',
      icon: '⚡',
      color: 'blue',
      features: [
        'Truy cập nên đủ tối thiểu các phòng mỗi nơi dùng',
        'Thử dùng các nội dung 3D độ',
        'Độ tải của một trong tài liệu',
        'Có trí Ai trong một số fly phí người quan tâm'
      ],
      buttonText: 'Chọn gói này',
      buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
      popular: true
    },
    {
      name: 'Chuyên nghiệp (Pro)',
      price: '499,000',
      period: 'VNĐ / 3 tháng',
      icon: '👑',
      color: 'purple',
      highlight: true,
      features: [
        'Truy cập đủ lẫu đỏ tất chọn danh bộ thống lấy 9, 10, 11và 12',
        'Để xuất nó đúng của 9 gởi ý bài giảng',
        'Tận dược ở này để từ 9 lý chủ xổ',
        'Lời hình bảng nén họa món tốt',
      ],
      buttonText: 'Chọn gói này',
      buttonStyle: 'bg-purple-600 text-white hover:bg-purple-700'
    },
    {
      name: 'Trường học',
      price: '9,000,000',
      period: 'VNĐ / 1 năm',
      icon: '🎓',
      color: 'green',
      features: [
        'Quyền đao tuy ố vào những giáo viên một (22-25 giáo viên)',
        'Tạo kha phòng theo dõ',
        'Trợ viên lửa những đi được hoặc học nhỏ nội 3 nồi cơm',
        'Quản trị bộ cloud truyền ảnh đ giống tốt này',
        'Báo cáo về trường',
        'Phục tờn điếu nẫm người khác họp bạn'
      ],
      buttonText: 'Chọn gói này',
      buttonStyle: 'bg-green-600 text-white hover:bg-green-700'
    }
  ];
  
  return (
    <div className="p-8">
      <div className="text-center mb-12">
        <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
          PHÙ HỢP NHẤT
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Chọn gói dịch vụ phù hợp</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Nâng tầm trải nghiệm học tập của bạn với các các dịch vụ năng cùng với động
          đặc quyền tại Edu Tech
        </p>
      </div>
      
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-2xl p-6 border-2 transition-all hover:shadow-xl ${
              plan.highlight 
                ? 'border-purple-500 shadow-lg scale-105' 
                : 'border-gray-200'
            }`}
          >
            {plan.highlight && (
              <div className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                PHỔ BIẾN NHẤT
              </div>
            )}
            
            <div className="text-4xl mb-3">{plan.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
              <div className="text-sm text-gray-500">{plan.period}</div>
            </div>
            
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <Check className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className={`w-full py-3 rounded-lg font-medium transition-colors ${plan.buttonStyle}`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Bạn cần giải pháp riêng cho tổ chức?
        </h2>
        <p className="text-gray-600 mb-6">
          Chúng tôi cung cấc các gói dịch vụ tùy chỉnh dành cho các tổng chia và 
          cơ sở giáo dục với thỉ ký 9 thụ 24/7
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
          Liên hệ bộ phận tư vấn
        </button>
      </div>
    </div>
  );
}
