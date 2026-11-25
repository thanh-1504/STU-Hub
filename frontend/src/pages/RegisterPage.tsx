import { Eye, LayoutGrid, Lock, Mail, User } from "lucide-react";
import { Link } from "react-router";

const FACULTIES = [
  "Khoa Công nghệ Thông tin",
  "Khoa Cơ khí",
  "Khoa Điện – Điện tử",
  "Khoa Xây dựng",
  "Khoa Công nghệ Thực phẩm",
  "Khoa Kinh tế – Quản trị",
  "Khoa Design",
  "Khoa Khoa học Cơ bản",
];

export function RegisterPage() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-8">
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Đăng ký</h1>
        <p className="text-sm text-gray-500 mt-1">
          Tạo tài khoản STUHub mới của bạn
        </p>
      </div>

      <form className="space-y-4">
        {/* Fullname */}
        <div>
          <label
            htmlFor="fullname"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Họ và tên <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <User className="w-4 h-4" />
            </span>
            <input
              id="fullname"
              type="text"
              placeholder="Nguyễn Văn An"
              className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 transition"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Mail className="w-4 h-4" />
            </span>
            <input
              id="email"
              type="email"
              placeholder="nguyen@example.com"
              className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 transition"
            />
          </div>
        </div>

        {/* Faculty */}
        <div>
          <label
            htmlFor="faculty"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Khoa <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <LayoutGrid className="w-4 h-4" />
            </span>
            <select
              id="faculty"
              defaultValue=""
              className="w-full pl-9 pr-8 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white appearance-none focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 transition cursor-pointer"
            >
              <option value="" disabled>
                Chọn khoa của bạn
              </option>
              {FACULTIES.map((faculty) => (
                <option key={faculty} value={faculty}>
                  {faculty}
                </option>
              ))}
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              ▾
            </span>
          </div>
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Mật khẩu <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Lock className="w-4 h-4" />
            </span>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full pl-9 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 transition"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
              aria-label="Hiện mật khẩu"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label
            htmlFor="confirm-password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nhập lại mật khẩu <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Lock className="w-4 h-4" />
            </span>
            <input
              id="confirm-password"
              type="password"
              placeholder="••••••••"
              className="w-full pl-9 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 transition"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
              aria-label="Hiện mật khẩu"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2.5 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white font-semibold text-sm rounded-lg transition shadow-sm mt-1"
        >
          Đăng ký
        </button>
      </form>

      {/* Login link */}
      <p className="text-center text-sm text-gray-500 mt-6">
        Đã có tài khoản?{" "}
        <Link
          to="/login"
          className="font-semibold text-blue-400 hover:underline"
        >
          Đăng nhập
        </Link>
      </p>
    </div>
  );
}