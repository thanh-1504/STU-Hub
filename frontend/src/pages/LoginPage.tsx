import { Eye, Lock, Mail } from "lucide-react";
import { Link } from "react-router";

export function LoginPage() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-8">
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Chào mừng trở lại
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Đăng nhập tài khoản STUHub của bạn
        </p>
      </div>

      <form className="space-y-4">
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
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

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Mật khẩu
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

        {/* Forgot Password */}
        <div className="flex items-center justify-end">
          <Link
            to="/forgot-password"
            className="text-sm font-medium text-blue-400 hover:underline"
          >
            Quên mật khẩu?
          </Link>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2.5 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white font-semibold text-sm rounded-lg transition shadow-sm mt-1"
        >
          Đăng nhập
        </button>
      </form>

      {/* Register */}
      <p className="text-center text-sm text-gray-500 mt-6">
        Chưa có tài khoản?{" "}
        <Link
          to="/register"
          className="font-semibold text-blue-400 hover:underline"
        >
          Đăng ký
        </Link>
      </p>
    </div>
  );
}