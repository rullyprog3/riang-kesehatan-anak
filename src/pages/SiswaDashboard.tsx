
// Dashboard Siswa - Bahasa Indonesia

const SiswaDashboard = () => (
  <div className="min-h-screen bg-softpeach font-nunito py-10">
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-8 animate-fade-in">
      <h2 className="text-xl font-bold mb-4 text-siswa flex items-center gap-2">🙋‍♂️ Halo, Siswa!</h2>
      <p className="mb-4">Silakan mengisi data kesehatan harianmu:</p>
      <form className="space-y-3">
        <div>
          <label className="block mb-1">Suhu Tubuh (°C)</label>
          <input className="w-full border rounded-lg px-3 py-2 bg-bgcerah" type="number" step="0.1" name="suhu" />
        </div>
        <div>
          <label className="block mb-1">Berat Badan (kg)</label>
          <input className="w-full border rounded-lg px-3 py-2 bg-bgcerah" type="number" step="0.1" name="berat" />
        </div>
        <div>
          <label className="block mb-1">Tinggi Badan (cm)</label>
          <input className="w-full border rounded-lg px-3 py-2 bg-bgcerah" type="number" step="0.1" name="tinggi" />
        </div>
        <div>
          <label className="block mb-1">Keluhan Kesehatan</label>
          <input className="w-full border rounded-lg px-3 py-2 bg-bgcerah" type="text" name="keluhan" placeholder="contoh: pusing, demam, batuk..." />
        </div>
        <button type="submit" className="w-full mt-4 py-2 rounded-lg bg-siswa text-white font-bold hover:scale-105 transition-all">
          Simpan Data
        </button>
      </form>
      <hr className="my-6"/>
      <div>
        <h3 className="font-bold text-lg mb-2 text-siswa">Riwayat & Catatan Guru</h3>
        <div className="bg-softblue rounded-lg p-3 text-sm text-neutralgray">
          Catatan/riwayat kesehatan akan muncul di sini.
        </div>
      </div>
    </div>
  </div>
);

export default SiswaDashboard;
