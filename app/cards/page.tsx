export default function CardsPage() {
    return (
   <div className="bg-gray-400 h-screen flex flex-col-reverse items-between justify-center gap-6 p-10">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/2">
            <h2 className="text-xl font-bold mb-4">Card Title</h2>
            <p className="text-gray-600">This is a simple card component.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/2">
            <h2 className="text-xl font-bold mb-4">Another Card</h2>
            <p className="text-gray-600">This is another card component.</p>
        </div>
    </div>
    );
    
}