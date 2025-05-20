
// Dashboard Guru - Bahasa Indonesia

const GuruDashboard = () => (
  <div className="min-h-screen bg-softgreen font-nunito py-10">
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8 animate-fade-in">
      <h2 className="text-xl font-bold mb-4 text-guru flex items-center gap-2">👨‍🏫 Dashboard Guru</h2>
      <p className="mb-5">Pantau rekap data kesehatan dan berikan tanggapan pada siswa kelas Anda.</p>
      <div className="bg-softyellow p-3 rounded-md mb-4 text-neutralgray text-sm">
        List rekap data siswa per hari (fungsional konek DB via Supabase)
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {/* Contoh Kartu Data Siswa */}
        <div className="bg-softpeach rounded-xl p-4 shadow">
          <div className="font-bold text-siswa text-lg">Nama Siswa: Budi</div>
          <div className="text-sm mt-1">Kelas: 6A</div>
          <div className="text-sm mt-1">Suhu: 36.8°C, Berat: 38kg, Tinggi: 138cm</div>
          <div className="text-sm mt-1">Keluhan: Batuk</div>
          <div className="text-sm mt-1 italic text-neutralgray">Catatan Guru: Sudah diberi saran konsumsi madu hangat.</div>
          <button className="mt-3 py-1.5 px-4 rounded-lg bg-guru text-white font-bold hover:scale-105 transition-all">Tulis Tanggapan</button>
        </div>
        {/* Tambahkan data siswa lain sesuai DB */}
      </div>
    </div>
  </div>
);

export default GuruDashboard;
