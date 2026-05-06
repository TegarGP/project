export default function task2() {
  return (
    <div className="bg-white h-screen flex flex-col-reverse items-center justify-center gap-6 p-10 text-blue-950">
      
      <div className="flex gap-6">
  
        <div className="bg-purple-100 h-72 w-96 p-8 flex flex-col justify-between rounded-[2.5rem]">
          <div className="flex items-center gap-4">
            <img src="/palette.svg" alt="Icon Palette" className="w-6 h-6" />
            <p>Design</p>
          </div>
          <div>
            <h1 className="text-4xl font-bold">Figma</h1>
            <p className="opacity-60">8 hours ago</p>
          </div>
        </div>

        <div className="bg-orange-100 h-72 w-96 p-8 flex flex-col justify-between rounded-[2.5rem]">
          <div className="flex items-center gap-4 text-orange-900">
            <img src="/code.svg" alt="Icon Code" className="w-6 h-6" />
            <p>Codding</p>
          </div>
          <div className="text-orange-950">
            <h1 className="text-4xl font-bold">Python</h1>
            <p className="opacity-60">2 days ago</p>
          </div>
        </div>

        <div className="bg-pink-100 h-72 w-96 p-8 flex flex-col justify-between rounded-[2.5rem]">
          <div className="flex items-center gap-4 text-pink-900">
            <img src="/palette.svg" alt="Icon" className="w-6 h-6" />
            <p>Design</p>
          </div>
          <div className="text-pink-950">
            <h1 className="text-4xl font-bold">Sketch</h1>
            <p className="opacity-60">4 days ago</p>
          </div>
        </div>
      </div>

      <div className="flex gap-6">

        <div className="bg-cyan-50 h-72 w-120 p-8 flex flex-col justify-between rounded-[2.5rem] relative">
          <div className="flex items-center gap-3">
            <img src="/palette.svg" alt="Icon" className="w-5 h-5" />
            <p className="text-sm font-medium">Design</p>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-bold mb-2">Adobe Photoshop</h1>
              <p className="opacity-60 text-sm">in 3 days</p>
            </div>
            
            <div className="flex -space-x-3">
               <img src="/Chines.jpg" alt="user1" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
               <img src="/Kucing Mikir.jpg" alt="user2" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
               <img src="/Mwehehehe.jpg" alt="user3" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
               <div className="w-9 h-9 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-blue-600">+9</div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 h-72 w-180 p-8 flex flex-col justify-between rounded-[2.5rem] relative">
          <span className="absolute top-8 right-8 text-green-700 text-xl">★</span>
          <div className="flex items-center gap-3 text-green-900">
            <img src="/brand-tabler.svg" alt="Icon" className="w-5 h-5" />
            <p className="text-sm font-medium">AI</p>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-green-950">DALL·E 2, Midjourney, Stable Diffusion</h1>
              <p className="opacity-60 text-green-900 text-sm">in 5 days</p>
            </div>

            <div className="flex -space-x-3">
               <img src="/Kucing Padang.jpg" alt="user4" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
               <img src="/Nerd.jpg" alt="user5" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
               <img src="/Kucing Make.jpg" alt="user6" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
               <div className="w-9 h-9 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-green-700">+3</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}