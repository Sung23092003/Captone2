import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import HomePage_slider1 from './HomePage_slider2.png'
import HomePage_slider2 from './HomePage_slider1.png'
import HomePage_slider3 from './HomePage_slider1.png'
import profile_pic from './profile_sontung.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo_Hospital.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    HomePage_slider1,
    HomePage_slider2,
    HomePage_slider3,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Bác sĩ đa khoa',
        image: General_physician
    },
    {
        speciality: 'Bác sĩ phụ khoa',
        image: Gynecologist
    },
    {
        speciality: 'Bác sĩ da liễu',
        image: Dermatologist
    },
    {
        speciality: 'Bác sĩ nhi khoa',
        image: Pediatricians
    },
    {
        speciality: 'Bác sĩ thần kinh',
        image: Neurologist
    },
    {
        speciality: 'Bác sĩ tiêu hóa',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Tran Van Bien',
        image: doc1,
        speciality: 'Bác sĩ đa khoa',
        degree: 'MBBS',
        experience: '4 năm',
        about: 'Bác sĩ Nguyễn Văn A cam kết cung cấp dịch vụ y tế toàn diện, tập trung vào y học dự phòng, chẩn đoán sớm và các chiến lược điều trị hiệu quả.',
        fees: 50,
        address: {
            line1: '17 Nguyễn Trãi',
            line2: 'Quận 1, TP. Hồ Chí Minh'
        }
    },
    {
        _id: 'doc2',
        name: 'Bác sĩ Lê Thị B',
        image: doc2,
        speciality: 'Bác sĩ phụ khoa',
        degree: 'MBBS',
        experience: '3 Năm',
        about: 'Bác sĩ Lê Thị B cam kết cung cấp dịch vụ y tế toàn diện, tập trung vào y học dự phòng, chẩn đoán sớm và các chiến lược điều trị hiệu quả.',
        fees: 60,
        address: {
            line1: '27 Lý Thường Kiệt',
            line2: 'Quận Hoàn Kiếm, Hà Nội'
        }
    },
    {
        _id: 'doc3',
        name: 'Bác sĩ Phạm Minh C',
        image: doc3,
        speciality: 'Bác sĩ da liễu',
        degree: 'MBBS',
        experience: '1 năm',
        about: 'Bác sĩ Phạm Minh C cam kết cung cấp dịch vụ y tế toàn diện, tập trung vào y học dự phòng, chẩn đoán sớm và các chiến lược điều trị hiệu quả.',
        fees: 30,
        address: {
            line1: '37 Đinh Tiên Hoàng',
            line2: 'Quận Bình Thạnh, TP. Hồ Chí Minh'
        }
    },
    {
        _id: 'doc4',
        name: 'Bác sĩ Trần Thanh D',
        image: doc4,
        speciality: 'Bác sĩ nhi khoa',
        degree: 'MBBS',
        experience: '2 năm',
        about: 'Bác sĩ Trần Thanh D cam kết cung cấp dịch vụ y tế toàn diện, tập trung vào y học dự phòng, chẩn đoán sớm và các chiến lược điều trị hiệu quả.',
        fees: 40,
        address: {
            line1: '47 Hùng Vương',
            line2: 'Quận Hải Châu, Đà Nẵng'
        }
    },
    {
        _id: 'doc5',
        name: 'Bác sĩ Võ Thị E',
        image: doc5,
        speciality: 'Bác sĩ thần kinh',
        degree: 'MBBS',
        experience: '4 năm',
        about: 'Bác sĩ Võ Thị E cam kết cung cấp dịch vụ y tế toàn diện, tập trung vào y học dự phòng, chẩn đoán sớm và các chiến lược điều trị hiệu quả.',
        fees: 50,
        address: {
            line1: '57 Trần Hưng Đạo',
            line2: 'Quận Ninh Kiều, Cần Thơ'
        }
    },
    {
        _id: 'doc6',
        name: 'Bác sĩ Hồ Minh F',
        image: doc6,
        speciality: 'Bác sĩ tiêu hóa',
        degree: 'MBBS',
        experience: '6 năm',
        about: 'Bác sĩ Hồ Minh F cam kết mang đến dịch vụ chuyên môn cao trong điều trị nội tiết và các bệnh lý liên quan.',
        fees: 55,
        address: {
            line1: '67 Nguyễn Huệ',
            line2: 'Quận 3, TP. Hồ Chí Minh'
        }
    },
    {
        _id: 'doc7',
        name: 'Bác sĩ Đặng Thị G',
        image: doc7,
        speciality: 'Bác sĩ đa khoa',
        degree: 'MBBS',
        experience: '7 năm',
        about: 'Bác sĩ Đặng Thị G là chuyên gia trong điều trị các bệnh lý liên quan đến tai, mũi và họng.',
        fees: 45,
        address: {
            line1: '77 Võ Văn Kiệt',
            line2: 'Quận 5, TP. Hồ Chí Minh'
        }
    },
    {
        _id: 'doc8',
        name:  'Bác sĩ Lý Văn H',
        image: doc8,
        speciality: 'Bác sĩ phụ khoa',
        degree: 'MBBS',
        experience: '8 năm',
        about: 'Bác sĩ Lý Văn H chuyên điều trị các bệnh liên quan đến thần kinh và tâm lý.',
        fees: 85,
        address: {
            line1: '87 Trần Phú',
            line2: 'Quận Ngũ Hành Sơn, Đà Nẵng'
        }
    },
    {
        _id: 'doc9',
        name: 'Bác sĩ Cao Thị I',
        image: doc9,
        speciality: 'Bác sĩ da liễu',
        degree: 'MBBS',
        experience: '10 năm',
        about: 'Bác sĩ Cao Thị I có kinh nghiệm lâu năm trong điều trị ung thư và chăm sóc bệnh nhân ung bướu.',
        fees: 95,
        address: {
            line1: '97 Lê Lợi',
            line2: 'Quận Hải Châu, Đà Nẵng'
        }
    },
    {
        _id: 'doc10',
        name:  'Bác sĩ Đỗ Văn J',
        image: doc10,
        speciality: 'Bác sĩ nhi khoa',
        degree: 'MBBS',
        experience: '9 năm',
        about: 'Bác sĩ Đỗ Văn J chuyên cung cấp các liệu pháp phục hồi chức năng và vật lý trị liệu.',
        fees: 65,
        address: {
            line1: '107 Nguyễn Công Trứ',
            line2: 'Quận Sơn Trà, Đà Nẵng'
        }
    },
    {
        _id: 'doc11',
        name:  'Bác sĩ Đỗ Văn J',
        image: doc11,
        speciality: 'Bác sĩ thần kinh',
        degree: 'MBBS',
        experience: '9 năm',
        about: 'Bác sĩ Đỗ Văn J chuyên cung cấp các liệu pháp phục hồi chức năng và vật lý trị liệu.',
        fees: 65,
        address: {
            line1: '107 Nguyễn Công Trứ',
            line2: 'Quận Sơn Trà, Đà Nẵng'
        }
    },
    {
        _id: 'doc12',
        name:'Bác sĩ Nguyễn Thị L',
        image: doc12,
        speciality: 'Bác sĩ tiêu hóa',
        degree: 'MBBS',
        experience: '12 năm',
        about: 'Bác sĩ Nguyễn Thị L kết hợp y học cổ truyền và hiện đại trong điều trị bệnh.',
        fees: 90,
        address: {
            line1: '127 Bạch Đằng',
            line2: 'Quận Hoàn Kiếm, Hà Nội'
        }
    },
    {
        _id: 'doc13',
        name:'Bác sĩ Phan Văn M',
        image: doc13,
        speciality: 'Bác sĩ đa khoa',
        degree: 'MBBS',
        experience: '5 năm',
        about: 'Bác sĩ Phan Văn M chuyên điều trị các vấn đề chỉnh hình và phục hồi xương khớp.',
        fees: 80,
        address: {
            line1: '137 Lê Lợi',
            line2: 'Quận Thanh Xuân, Hà Nội'
        }
    },
    {
        _id: 'doc14',
        name: 'Bác sĩ Mai Thị N',
        image: doc14,
        speciality: 'Bác sĩ phụ khoa',
        degree: 'MBBS',
        experience: '7 năm',
        about: 'Bác sĩ Mai Thị N cung cấp các dịch vụ chăm sóc sức khỏe sản phụ tốt nhất.',
        fees: 70,
        address: {
            line1: '147 Hoàng Diệu',
            line2: 'Quận Đống Đa, Hà Nội'
        }
    },
    {
        _id: 'doc15',
        name: 'Bác sĩ Nguyễn Thị Hà',
        image: doc15,
        speciality: 'Bác sĩ da liễu',
        degree: 'MBBS',
        experience: '1 năm',
        about: 'Bác sĩ Mai Thị N cung cấp các dịch vụ chăm sóc sức khỏe sản phụ tốt nhất.',
        fees: 30,
        address: {
            line1: '147 Hoàng Diệu',
            line2: 'Quận Đống Đa, Hà Nội'
        }
    },
]