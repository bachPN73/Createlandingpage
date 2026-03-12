import { BookOpen, Sparkles, Box, Monitor, Wand2, FileText, Video } from 'lucide-react';

export function Guide() {
  const sections = [
    {
      icon: BookOpen,
      title: 'Thư viện học liệu',
      description: 'Khám phá hàng trăm giáo trình 3D và infographic',
      color: 'blue',
      features: [
        'Thay đổi được riêng FNF với tất cả thiết bị trình bày',
        'Sử dụng lọc tác để tìm kiếm nhớp với bộ môn, lớp học',
        'Tải những học hang chính vào máy điên',
        'Nhập vào lọp học để lớn trời lờu'
      ]
    },
    {
      icon: Sparkles,
      title: 'Find with AI',
      description: 'Tìm học liệu phù hợp bằng AI',
      color: 'green',
      features: [
        'Mô tả nội dung bạn cần mụch tìm gõ sự tâm cà bản tự nhiên',
        'Nhập vào khởi trước Enter đi lẽu đảu',
        'AI sẽ phân tích và gợi ý câ học liệu pháp hợp nhất',
        'Xem và và tái lọc để lấp pin kém bản'
      ]
    },
    {
      icon: Box,
      title: 'Xem mô hình 3D',
      description: 'Tương tác và hiểu rõ mô hình 3D',
      color: 'purple',
      features: [
        'Nhấp và xá một 3D để hành tối 3D của bạng tặc',
        'Kéo chuột để các mô hình',
        'Cuốn chuột để phòng lớn, nhỏ',
        'Nhấp đúp để tự động gắc phác bản đảc'
      ]
    },
    {
      icon: Monitor,
      title: 'Chế độ trình chiếu',
      description: 'Hiện đã toàn tiềm hiểm trên lớp học',
      color: 'orange',
      features: [
        'Mở học liệu bạn cần để chiếu chiếu',
        'Nhập nút "Chế độ trình chiếu" ở góc trên bên phải',
        'Sử dụng các bản liệu trên khu họa lớn vô cách',
        'Bấm ESC hoặc nút X để đất thoát'
      ]
    },
    {
      icon: Wand2,
      title: 'Mẹo sử dụng',
      description: 'Sử dụng tái bây để những tớt lịch tấn bị nhật',
      color: 'teal',
      subTitle: 'Tạm kiểm hiệu quả',
      subFeatures: [
        'Sử dụng từ khóa cụ thể (vd: "lớp 10 từ lý bành Nửu tê") Phồn mạ đế cải chí lược chứa nhật'
      ]
    },
    {
      icon: FileText,
      title: 'In tài liệu quan',
      description: 'Xuất tớ "Tép lớn, tố liệu" tải biết một phần đỡi cương của',
      color: 'indigo',
      subTitle: 'Thư các về tập',
      subFeatures: [
        'Nếu gập các tâp từ vă bèn khuăng tích kiểm họi nữ sai lớp với chắc nghe soi được'
      ]
    }
  ];
  
  const colorClasses: Record<string, { bg: string; text: string; icon: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-700', icon: 'bg-blue-500' },
    green: { bg: 'bg-green-50', text: 'text-green-700', icon: 'bg-green-500' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-700', icon: 'bg-purple-500' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-700', icon: 'bg-orange-500' },
    teal: { bg: 'bg-teal-50', text: 'text-teal-700', icon: 'bg-teal-500' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-700', icon: 'bg-indigo-500' }
  };
  
  return (
    <div className="p-8">
      <div className="bg-blue-600 rounded-2xl p-8 mb-8 text-white">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
            <BookOpen className="text-blue-600" size={28} />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">Hướng dẫn sử dụng</h1>
            <p className="text-blue-100 mb-4">Trợ lỗi cách sử dụng Edu Tech</p>
            
            <div className="bg-blue-500/30 backdrop-blur-sm rounded-xl p-4 border border-blue-400/30">
              <h2 className="font-bold mb-2">Chào mừng đến với Edu Tech!</h2>
              <p className="text-sm text-blue-50">
                Edu Tech là nền khả học tập Khoa học Tự nhiên (Vật lý, Hóa học, Sinh học) cho học sinh 
                THPT Việt Nam. Nền tạo cung cá thư viện mô hình 3D và infographic trong tiết từ tiến mỗi 
                dùng bằng AI và sử dụng các đề trình chiếu cho quy lực tích trên lịch.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section, index) => {
          const Icon = section.icon;
          const colors = colorClasses[section.color];
          
          return (
            <div key={index} className={`${colors.bg} rounded-2xl p-6 border border-${section.color}-200`}>
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 ${colors.icon} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{section.title}</h3>
                  <p className="text-sm text-gray-600">{section.description}</p>
                </div>
              </div>
              
              {section.features && (
                <ul className="space-y-2">
                  {section.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className={`${colors.text} font-bold flex-shrink-0 mt-0.5`}>{idx + 1}.</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {section.subTitle && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-6 h-6 rounded ${colors.icon} flex items-center justify-center`}>
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm">{section.subTitle}</h4>
                  </div>
                  {section.subFeatures && section.subFeatures.map((feature, idx) => (
                    <p key={idx} className="text-sm text-gray-600 ml-8">{feature}</p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 bg-green-500 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-2">Cần hỗ trợ thêm?</h2>
        <p className="text-green-50 mb-4">
          Nếu bạn cần hỗi trốn gặp vấn đề hoặc cần sử dụng, hãy liên hệ với chúng tôi
        </p>
        <button className="bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors font-medium">
          Liên hệ hỗ trợ hỗ trợ
        </button>
      </div>
    </div>
  );
}
