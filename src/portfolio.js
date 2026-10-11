/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const portfolioUrl =
  process.env.REACT_APP_PORTFOLIO_URL || "https://Franco3010.github.io/developerFolio";

const greeting = {
  username: "Ngo Duc Anh",
  title: "Xin chào, tôi là Đức Anh.",
  subTitle: emoji(
    "Tôi có 2,5 năm kinh nghiệm trong ngành phần mềm. Năm đầu tiên, tôi làm Backend; năm thứ hai, tôi đảm nhiệm cả Backend và Frontend. Tôi tự học tiếng Nhật và đã thi JLPT nhiều lần mà chưa từng trượt. Với sự tự tin đó, tôi nghỉ việc vào năm ngoái để tập trung học tiếng Nhật và đã đạt JLPT N2 vào tháng 12/2025. Hiện tại, tôi đang làm thực tập sinh BrSE. Trong thời gian tới, tôi muốn tiếp tục nâng cao cả năng lực kỹ thuật lẫn tiếng Nhật. Rất mong được kết nối!"
  ),
  resumeLink: `${portfolioUrl}/CV_Ngo_Duc_Anh.xlsx`,
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  gmail: "ducanhngo3010@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Kỹ năng",
  subTitle: "Năng lực kỹ thuật, tập trung vào phát triển Backend, cùng khả năng ngoại ngữ",
  skills: [
    "Ngôn ngữ và framework: Node.js, NestJS, TypeScript, Next.js, Java, Spring Boot",
    "Cơ sở dữ liệu: PostgreSQL, MongoDB",
    "Công cụ: TypeORM, Swagger, GitLab, Bull, Firebase, Git, Postman",
    "Ngoại ngữ: Tiếng Nhật (JLPT N2), tiếng Anh (Aptis B2)"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Đại học Bách khoa Hà Nội (HUST)",
      subHeader: "Ngành Kỹ thuật phần mềm",
      duration: "Tốt nghiệp năm 2022",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Nhân viên chính thức",
      company: "Hisoft Company",
      date: "09/2022 – 10/2023",
      desc: "",
      descBullets: []
    },
    {
      role: "Nhân viên chính thức",
      company: "Locamos Company",
      date: "01/2024 – 04/2025",
      desc: "",
      descBullets: []
    },
    {
      role: "Tự học tiếng Nhật và đào tạo BrSE",
      company: "Thời gian học tập",
      date: "05/2025 – 07/2026",
      desc: "",
      descBullets: [
        "05–12/2025: Tạm nghỉ việc để tự học tiếng Nhật và đạt JLPT N2.",
        "01–07/2026: Tham gia chương trình đào tạo BrSE tại VIETIS."
      ]
    },
    {
      role: "Thực tập sinh BrSE",
      company: "VIETIS Corporation",
      date: "07/2026 – Hiện tại",
      desc: "Tham gia dự án phát triển hệ thống kế toán.",
      descBullets: [
        "Soạn câu hỏi và làm rõ yêu cầu dựa trên tài liệu thiết kế cơ bản của khách hàng, sau đó nhờ đồng nghiệp rà soát.",
        "Lập báo cáo hằng tuần và phối hợp với lập trình viên xử lý các câu hỏi, vấn đề phát sinh.",
        "Dịch tài liệu thiết kế cơ bản sang tiếng Việt."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false",
  display: false
};

// Some big projects you have worked on

const bigProjects = {
  title: "Dự án tiêu biểu",
  subtitle: "Các dự án tôi từng tham gia",
  projects: [
        {
      projectName: "Hệ thống môi giới bất động sản (RECBOOK)",
      projectDesc: "Dịch vụ web hỗ trợ nghiệp vụ môi giới bất động sản. Trong nhóm 5 người, tôi phụ trách phát triển REST API, quản lý migration cơ sở dữ liệu và xây dựng tính năng thông báo cho đội ngũ nội bộ.",
      details: [
        {label: "Đối tượng sử dụng", value: "Người dùng cuối"},
        {label: "Công nghệ", value: "Node.js, NestJS, TypeScript, PostgreSQL, Firebase, Bull, GitLab"},
        {label: "Phạm vi công việc", value: "Phát triển REST API, quản lý migration cơ sở dữ liệu, tính năng thông báo nội bộ và tổng hợp báo cáo theo người dùng"},
        {label: "Vai trò", value: "Backend"},
        {label: "Thời gian", value: "09/2022 – 10/2023"}
      ],
    },
    {
      projectName: "Hệ thống quản lý coin LCG (LOCAGO)",
      projectDesc: "Dịch vụ web quản lý tiền mã hóa (coin). Trong nhóm 5 người, tôi phụ trách từ thiết kế cơ sở dữ liệu đến phát triển REST API.",
      details: [
        {label: "Đối tượng sử dụng", value: "Người dùng cuối và quản trị viên (hệ thống người dùng và hệ thống quản trị)"},
        {label: "Công nghệ", value: "Node.js, NestJS, Next.js, TypeScript, PostgreSQL, MongoDB"},
        {label: "Lý do lựa chọn công nghệ", value: "PostgreSQL phù hợp với dữ liệu nghiệp vụ có cấu trúc rõ ràng và ít thay đổi. Các ràng buộc, giao dịch và mức cô lập giúp đảm bảo tính chính xác của dữ liệu nên được dùng cho các chức năng liên quan đến tiền. MongoDB được dùng cho dữ liệu nghiệp vụ đơn giản, ít cập nhật; gộp dữ liệu liên quan trong một document giúp tránh join nhiều bảng và truy xuất hiệu quả hơn."},
        {label: "Phạm vi công việc", value: "Thiết kế cơ sở dữ liệu, phát triển REST API, tính lãi hằng ngày, xuất Excel và triển khai một phần giao diện quản trị"},
        {label: "Vai trò", value: "Backend và Frontend"},
        {label: "Thời gian", value: "01/2024 – 04/2025"}
      ],
    },
    {
      projectName: "Hệ thống quản lý eSIM",
      projectDesc: "Dịch vụ web quản lý eSIM. Trong nhóm 2 người, tôi phụ trách phát triển Backend bằng Spring Boot và MongoDB, các chức năng quản lý tài khoản quản trị/người dùng và các tính năng liên quan đến eSIM.",
      details: [
        {label: "Đối tượng sử dụng", value: "Quản trị viên"},
        {label: "Công nghệ", value: "Java, Spring Boot, Next.js, MongoDB"},
        {label: "Phạm vi công việc", value: "Phát triển Backend, quản lý quản trị viên và người dùng, tra cứu thông tin eSIM, tích hợp API nhà mạng và quản lý gói cước"},
        {label: "Vai trò", value: "Backend và Frontend"},
        {label: "Thời gian", value: "06/2024 (3 tuần)"}
      ],
    }
  ],
  resourceLinks: [
    {
      projectName: "LCGコイン管理システム（LOCAGO）",
      links: [
        {name: "ERD tính lãi hằng ngày", url: "https://dbdiagram.io/d/日利計算に関するテーブル-6abbbbbf5869425612ca5f6e"},
        {name: "ERD giới hạn chuyển tiền", url: "https://dbdiagram.io/d/6abbb9155869425612ca2f2b"}
      ]
    },
    {
      projectName: "不動産仲介システム（RECBOOK）",
      links: [
        {name: "ERD chức năng thông báo và báo cáo", url: "https://dbdiagram.io/d/6abbab815869425612c943f1"},
        {name: "Tài liệu cải tiến chức năng thông báo", url: "https://docs.google.com/presentation/d/1wKKvknaEZcUi7rgSGoDZ4POWOXm0ExbL/edit?usp=sharing&ouid=116077687996630705551&rtpof=true&sd=true"}
      ]
    },
    {
      projectName: "eSIM管理システム",
      links: [
        {name: "Giải thích thiết kế cơ sở dữ liệu", url: "https://docs.google.com/document/d/1c7ophKIyPc7soRgJ9eb0EubbJ5hbFZ4oeQly4GEh4zw/edit?usp=sharing"}
      ]
    }
  ],
  documentNote: "(ERD chỉ mang tính tham khảo để hình dung cấu trúc; tài liệu không bao gồm toàn bộ định nghĩa SQL và các trường dữ liệu thực tế.)",
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Chứng chỉ và thành tựu",
  subtitle: "Chứng chỉ",

  achievementsCards: [
    {
      title: "JLPT N2",
      subtitle: "Đạt được vào tháng 12/2025",
      footerLink: [
        {
          name: "Xem chứng chỉ",
          url: "https://photos.app.goo.gl/iidrUKkEbceUTVo86"
        }
      ]
    },
    {
      title: "Aptis tiếng Anh B2",
      subtitle: "Đạt được năm 2022",
      footerLink: [
        {
          name: "Xem chứng chỉ",
          url: "https://photos.app.goo.gl/MiPa9CSVxYKh4RPUA"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const learningGoals = {
  title: "Định hướng học tập",
  description:
    "Kinh nghiệm thực tế của tôi với Java và các dịch vụ AWS còn hạn chế, vì vậy tôi mong muốn được chủ động tìm hiểu và thực hành thêm khi có cơ hội.",
  display: true
};

// Blogs Section

const blogSection = {
  title: "Bài viết",
  subtitle:
    "Tôi thích xây dựng những sản phẩm thú vị, viết bài và chia sẻ những điều mình đã học được.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Nhận áo Google Assistant và 200 USD tín dụng Google Cloud",
      description:
        "Bạn có muốn nhận 200 USD tín dụng Google Cloud và áo Google Assistant bằng cách tạo một Action trong chưa đầy 30 phút không?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Vì sao React là lựa chọn tuyệt vời?",
      description:
        "React là thư viện JavaScript dùng để xây dựng giao diện người dùng, được duy trì bởi Meta cùng cộng đồng lập trình viên và doanh nghiệp."
    }
  ],
  display: false
};

// Talks Sections

const talkSection = {
  title: "Bài thuyết trình",
  subtitle: emoji(
    "Tôi thích chia sẻ những kiến thức mình có và học hỏi thêm từ mọi người 😅"
  ),

  talks: [
    {
      title: "Xây dựng Action cho Google Assistant",
      subtitle: "Codelab tại GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Tôi thích chia sẻ về bản thân và công nghệ",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Hồ sơ năng lực",
  subtitle: "Tải hồ sơ năng lực",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Liên hệ",
  subtitle: "Vui lòng liên hệ với tôi qua email.",
  number: "",
  email_address: "ducanhngo3010@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  learningGoals,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
