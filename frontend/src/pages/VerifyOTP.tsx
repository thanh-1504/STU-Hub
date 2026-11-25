import { ClipboardPaste, Clock, Mail } from "lucide-react";
import { Link } from "react-router";

export function VerifyOTP() {
  return (
    <div className="w-full flex items-center justify-center px-4 py-6">
      {/* Card */}
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-8 ">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
              <Mail className="w-7 h-7 text-blue-500" />
            </div>
            <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs">
              ✓
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Xác nhận email</h1>
          <p className="text-sm text-gray-500 mt-1">
            Chúng tôi đã gửi mã 6 số đến{" "}
            <span className="font-mono font-medium text-gray-700">
              ng**@gmail.com
            </span>
          </p>
          <Link
            to="/register"
            className="text-sm text-blue-400 font-medium hover:underline mt-1 inline-block"
          >
            Đổi email
          </Link>
        </div>

        {/* OTP inputs */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500 tracking-wider uppercase">
              Mã xác nhận 6 số
            </span>
            <button
              type="button"
              className="flex items-center gap-1 text-xs font-medium text-blue-400 hover:underline hover:cursor-pointer"
            >
              <ClipboardPaste className="w-3.5 h-3.5" />
              Dán mã
            </button>
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
            Gửi lại sau <span className="font-semibold text-blue-500">
              56
            </span>{" "}
            giây
          </span>
        </div>

        {/* Submit */}
        <button
          type="button"
          className="w-full mt-5 py-2.5 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white font-semibold text-sm rounded-lg transition shadow-sm flex items-center justify-center gap-2"
        >
          Xác nhận
        </button>
      </div>
    </div>
  );
}
