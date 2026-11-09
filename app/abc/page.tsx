export default function SidebarMenuDark() {
  return (
    // 1. KOTAK UTAMA: Background hitam pekat (#121212), teks putih, sudut melengkung halus
    <div className="bg-[#121212] text-white w-80 p-3 rounded-2xl shadow-xl flex flex-col gap-4 font-sans">
      
      {/* 2. HEADER ACCOUNT (Acme Inc) */}
      {/* Menggunakan justify-between agar Info Perusahaan di kiri, dan Panah Naik-Turun di kanan */}
      <div className="flex items-center justify-between p-2 rounded-xl hover:bg-zinc-800/50 cursor-pointer transition-colors">
        <div className="flex items-center gap-3">
          {/* Logo Biru Box Bertumpuk */}
          <div className="bg-blue-600 w-10 h-10 rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5A3.375 3.375 0 0010.125 2.25H3.75m3.75 9h.008v.008H7.5v-.008zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z" />
            </svg>
          </div>
          {/* Nama Perusahaan bertumpuk ke bawah */}
          <div>
            <div className="font-bold text-base text-zinc-100 leading-tight">Acme Inc</div>
            <div className="text-xs text-zinc-400 font-normal">Enterprise</div>
          </div>
        </div>
        {/* Icon Panah Atas-Bawah (Chevrons) */}
        <div className="text-zinc-400 mr-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
          </svg>
        </div>
      </div>

      {/* 3. LABEL KATEGORI (Platform) */}
      <div className="px-2 text-sm font-medium text-zinc-500">
        Platform
      </div>

      {/* 4. DAFTAR MENU (Playground, Models, Documentation, Settings) */}
      <div className="flex flex-col gap-1">
        
        {/* Item 1: Playground */}
        <div className="flex items-center justify-between p-2.5 rounded-xl hover:bg-zinc-800/60 cursor-pointer text-zinc-300 hover:text-white transition-colors">
          <div className="flex items-center gap-4">
            <span className="text-xl text-zinc-400">⌨️</span> {/* Menggunakan emoji/bisa diganti icon svg */}
            <span className="text-[15px] font-medium">Playground</span>
          </div>
          <span className="text-zinc-500 text-sm font-bold">❯</span>
        </div>

        {/* Item 2: Models */}
        <div className="flex items-center justify-between p-2.5 rounded-xl hover:bg-zinc-800/60 cursor-pointer text-zinc-300 hover:text-white transition-colors">
          <div className="flex items-center gap-4">
            <span className="text-xl text-zinc-400">🤖</span>
            <span className="text-[15px] font-medium">Models</span>
          </div>
          <span className="text-zinc-500 text-sm font-bold">❯</span>
        </div>

        {/* Item 3: Documentation */}
        <div className="flex items-center justify-between p-2.5 rounded-xl hover:bg-zinc-800/60 cursor-pointer text-zinc-300 hover:text-white transition-colors">
          <div className="flex items-center gap-4">
            <span className="text-xl text-zinc-400">📖</span>
            <span className="text-[15px] font-medium">Documentation</span>
          </div>
          <span className="text-zinc-500 text-sm font-bold">❯</span>
        </div>

        {/* Item 4: Settings */}
        <div className="flex items-center justify-between p-2.5 rounded-xl hover:bg-zinc-800/60 cursor-pointer text-zinc-300 hover:text-white transition-colors">
          <div className="flex items-center gap-4">
            <span className="text-xl text-zinc-400">⚙️</span>
            <span className="text-[15px] font-medium">Settings</span>
          </div>
          <span className="text-zinc-500 text-sm font-bold">❯</span>
        </div>

      </div>

    </div>
  );
}