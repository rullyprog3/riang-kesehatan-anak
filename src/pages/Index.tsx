
// Landing page Peduli Kesehatan Anak SD - Bahasa Indonesia

import AnimatedMascot from "@/components/AnimatedMascot";
import RoleLoginCard from "@/components/RoleLoginCard";

const Index = () => {
  return (
    <div className="min-h-screen w-full py-10 flex flex-col items-center bg-softyellow font-nunito">
      <AnimatedMascot />
      <h1 className="font-black text-3xl sm:text-5xl text-siswa tracking-tight mt-8 mb-3 animate-fade-in">
        Peduli Kesehatan Anak SD
      </h1>
      <p className="text-lg mb-6 text-neutralgray animate-fade-in">
        Sistem monitoring kesehatan harian <b>murid SD</b> berbasis web.<br />
        Dukung tumbuh kembang & kebiasaan sehat sejak dini!
      </p>
      <RoleLoginCard />
      <div className="text-sm mt-14 text-center text-neutralgray opacity-50">© {new Date().getFullYear()} Peduli Kesehatan Anak SD</div>
    </div>
  );
};

export default Index;
