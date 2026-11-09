export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">Halo, Selamat Datang!</h1>
      
      {/* Gabungan base style: px-4 py-2 rounded-md text-sm font-medium transition-colors */}
      
      {/* Variant: default */}
      <button className="px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors text-sm font-medium">
        Klik Saya
      </button>
      
      {/* Variant: destructive */}
      <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm font-medium">
        Hapus Data
      </button>
      
      {/* Variant: outline */}
      <button className="px-4 py-2 border border-slate-200 bg-white text-slate-900 rounded-md hover:bg-slate-100 transition-colors text-sm font-medium">
        Kembali
      </button>
    </div>
  )
}