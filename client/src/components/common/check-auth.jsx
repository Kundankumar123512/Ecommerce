import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();
  const { pathname } = location;

  console.log(pathname, isAuthenticated);

  // 1. Root redirect
  if (pathname === "/") {
    if (!isAuthenticated) return <Navigate to="/auth/login" />;
    return user?.role === "admin" ? (
      <Navigate to="/admin/dashboard" />
    ) : (
      <Navigate to="/shop/home" />
    );
  }

  // 2. Not authenticated, trying to access protected routes (not login/register)
  const isAuthPage = pathname.includes("/login") || pathname.includes("/register");
  if (!isAuthenticated && !isAuthPage) {
    return <Navigate to="/auth/login" />;
  }

  // 3. Authenticated user trying to access auth pages
  if (isAuthenticated && isAuthPage) {
    return user?.role === "admin" ? (
      <Navigate to="/admin/dashboard" />
    ) : (
      <Navigate to="/shop/home" />
    );
  }

  // 4. Non-admin user trying to access admin routes
  if (isAuthenticated && pathname.startsWith("/admin") && user?.role !== "admin") {
    return <Navigate to="/unauth-page" />;
  }

  // 5. Admin trying to access shopping view (optional rule)
  if (isAuthenticated && pathname.startsWith("/shop") && user?.role === "admin") {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
}

export default CheckAuth;
