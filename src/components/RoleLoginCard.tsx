
import React from "react";
import { useNavigate } from "react-router-dom";

const roles = [
  {
    label: "Siswa",
    color: "siswa",
    desc: "Isi & pantau data kesehatan harianmu.",
    path: "/login?siswa"
  },
  {
    label: "Guru",
    color: "guru",
    desc: "Pantau & tanggapi data siswa kelas Anda.",
    path: "/login?guru"
  },
  {
    label: "Admin",
    color: "admin",
    desc: "Kelola sistem & akun pengguna.",
    path: "/login?admin"
  }
];

const RoleLoginCard = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
      {roles.map((role) => (
        <button
          key={role.label}
          className={`bg-${role.color} transition-all shadow-lg rounded-xl p-6 flex flex-col items-center group border-4 border-transparent hover:border-${role.color} hover:scale-105 focus:outline-none`}
          onClick={() => navigate(role.path)}
        >
          <span className="text-5xl mb-2 select-none">
            {role.label === "Siswa" && "🙋‍♂️"}
            {role.label === "Guru" && "👨‍🏫"}
            {role.label === "Admin" && "🛡️"}
          </span>
          <span className="font-nunito font-extrabold text-xl text-white drop-shadow-sm mb-1">{role.label}</span>
          <div className="font-nunito text-base text-softpurple text-center">{role.desc}</div>
        </button>
      ))}
    </div>
  );
};

export default RoleLoginCard;
