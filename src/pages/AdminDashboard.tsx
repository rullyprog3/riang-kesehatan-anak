
// Dashboard Admin - Bahasa Indonesia

const AdminDashboard = () => (
  <div className="min-h-screen bg-softpurple font-nunito py-10">
    <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-8 animate-fade-in">
      <h2 className="text-xl font-bold mb-4 text-admin flex items-center gap-2">🛡️ Dashboard Admin</h2>
      <p className="mb-5">Kelola semua akun, kelas, dan data kesehatan siswa-guru.</p>
      <div className="bg-softyellow p-3 rounded-md mb-4 text-neutralgray text-sm">
        Form tambah/edit/hapus akun + pilihan kelas untuk guru (fungsional via Supabase)
      </div>
      {/* Contoh Daftar Akun */}
      <div className="grid sm:grid-cols-3 gap-3">
        <div className="bg-softblue rounded-lg p-4 mb-2">
          <div className="font-bold text-siswa">Nama: Budi</div>
          <div className="text-xs text-neutralgray">Role: Siswa</div>
          <div className="text-xs">Kelas: 6A</div>
        </div>
        <div className="bg-softgreen rounded-lg p-4 mb-2">
          <div className="font-bold text-guru">Nama: Pak Ari</div>
          <div className="text-xs text-neutralgray">Role: Guru</div>
          <div className="text-xs">Kelas: 6A</div>
        </div>
        <div className="bg-softpurple rounded-lg p-4 mb-2">
          <div className="font-bold text-admin">Nama: Bu Admin</div>
          <div className="text-xs text-neutralgray">Role: Admin</div>
        </div>
      </div>
    </div>
  </div>
);

export default AdminDashboard;
