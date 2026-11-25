import { Link, Outlet } from "react-router";

export function AuthLayout() {
  return (
    <>
      <div>
        <header>
          <Link to="/">
            <img
              src="/logo.png"
              alt="logo"
              className="w-40 object-contain ml-5 mt-2 cursor-pointer my-3"
            />
          </Link>
        </header>
      </div>
      <main className="flex-1 flex items-center justify-center bg-primary-auth px-4 py-6 min-h-screen">
        <Outlet />
      </main>
    </>
  );
}
