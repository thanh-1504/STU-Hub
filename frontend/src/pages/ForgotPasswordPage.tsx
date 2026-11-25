import { Clock, Eye, Lock, ShieldCheck } from "lucide-react";

export function ForgotPasswordPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-6">
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-8">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
            <ShieldCheck className="w-7 h-7 text-blue-500" />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Đặt lại mật khẩu</h1>
        </div>

        <form className="space-y-4">
          {/* OTP Section */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-gray-500 tracking-wider uppercase">
                Mã xác nhận 6 số
              </span>
            </div>

            <div className="flex gap-2 justify-between">
              {Array.from({ length: 6 }).map((_, index) => (
                <input
                  key={index}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  aria-label={`Chữ số thứ ${index + 1}`}
                  className="w-11 h-12 text-center text-lg font-bold border border-gray-200 rounded-lg text-gray-800 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 transition"
                />
              ))}
            </div>
          </div>

          {/* Resend */}
          <div className="flex items-center justify-between mt-5 text-sm">
            <span className="text-gray-500">Chưa nhận được mã?</span>
            <span className="flex items-center gap-1 text-gray-500">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              Gửi lại sau{" "}
              <span className="font-semibold text-blue-500">56</span> giây
            </span>
          </div>
          {/* New Password */}
          <div>
            <label
              htmlFor="new-password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mật khẩu mới <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Lock className="w-4 h-4" />
              </span>
              <input
                id="new-password"
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
              htmlFor="confirm-new-password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nhập lại mật khẩu mới <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Lock className="w-4 h-4" />
              </span>
              <input
                id="confirm-new-password"
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
            className="w-full py-2.5 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white font-semibold text-sm rounded-lg transition shadow-sm flex items-center justify-center gap-2 mt-1"
          >
            Đổi mật khẩu
          </button>
        </form>
      </div>
    </div>
  );
}
