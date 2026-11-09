// app/page.tsx
import React from 'react';

// 1. KOMPONEN JADWAL (Murni menggunakan <div> tanpa kata 'block')
function CardScheduleDestination() {
  return (
    <div className="flex bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden divide-x divide-gray-200 max-w-full overflow-x-auto">
      
      
      <div className="px-6 py-4 text-left min-w-200px bg-blue-50/30 relative">
       
        <div className="text-black text-15px font-normal tracking-wide mb-1">
          Kam, 21 Mei 2026
        </div>
       
        <div className="text-black font-bold text-18px tracking-tight">
          IDR 3.518.644
        </div>
       
        <div className="absolute bottom-0 left-0 right-0 h-3px bg-blue-500" />
      </div>

     
      <div className="px-6 py-4 text-left min-w-200px hover:bg-gray-50 transition-colors">
        <div className="text-black text-15px font-normal tracking-wide mb-1">
          Jum, 22 Mei 2026
        </div>
        <div className="text-black font-bold text-18px tracking-tight">
          IDR 3.510.124
        </div>
      </div>

     
      <div className="px-6 py-4 text-left min-w-200px hover:bg-gray-50 transition-colors">
        <div className="text-black text-15px font-normal tracking-wide mb-1">
          Sab, 23 Mei 2026
        </div>
        <div className="text-black font-bold text-18px tracking-tight">
          IDR 3.945.431
        </div>
      </div>

      
      <div className="px-6 py-4 text-left min-w-200px hover:bg-gray-50 transition-colors">
        <div className="text-black text-15px font-normal tracking-wide mb-1">
          Min, 24 Mei 2026
        </div>
        <div className="text-black font-bold text-18px tracking-tight">
          IDR 3.510.124
        </div>
      </div>

    </div>
  );
}


export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      
     
      <CardScheduleDestination />

    </main>
  );
}