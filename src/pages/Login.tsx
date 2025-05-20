
// Halaman Login Multi-Role, Bahasa Indonesia

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const getRoleFromQuery = (q: string) => {
  if (q.includes("siswa")) return "Siswa";
  if (q.includes("guru")) return "Guru";
  if (q.includes("admin")) return "Admin";
  return "";
};

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [role] = useState(getRoleFromQuery(location.search.toLowerCase()));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    // Simulasi login. Di produksi, integrasi ke Supabase
    if (role === "Siswa") navigate("/siswa");
    else if (role === "Guru") navigate("/guru");
    else if (role === "Admin") navigate("/admin");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-softblue font-nunito">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm animate-fade-in">
        <div className="flex justify-center mb-4 text-4xl">
          {role === "Siswa" && "🙋‍♂️"}
          {role === "Guru" && "👨‍🏫"}
          {role === "Admin" && "🛡️"}
        </div>
        <h2 className="text-2xl font-extrabold text-center mb-2 text-siswa">
          Login {role || ""}
        </h2>
        <form onSubmit={handleLogin} className="space-y-4 mt-4">
          <input
            required
            className="w-full px-4 py-2 border rounded-lg text-base bg-bgcerah focus:outline-siswa"
            placeholder="Email"
            type="email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />
          <input
            required
            className="w-full px-4 py-2 border rounded-lg text-base bg-bgcerah focus:outline-siswa"
            placeholder="Password"
            type="password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />
          <button type="submit" className={`w-full py-2 rounded-lg font-extrabold text-lg text-white transition-all bg-siswa hover:bg-blue-500`}>
            Masuk
          </button>
        </form>
        <div className="text-xs text-neutralgray mt-6 text-center opacity-50">
          Hanya simulasi login, belum terhubung database
        </div>
      </div>
      <button className="mt-8 text-siswa font-bold underline hover:text-blue-500" onClick={()=>navigate("/")}>
        Kembali ke Beranda
      </button>
    </div>
  );
};

export default Login;
