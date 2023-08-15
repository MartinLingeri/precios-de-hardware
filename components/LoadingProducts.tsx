export default function LoadingProducts() {
  return (
    <section className="grid justify-center">
      <h1 className="text-black text-xl">Mexx Productos</h1>
      <div
        role="status"
        className="animate-pulse grid self-center gap-4 grid-cols-1fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div className="bg-gray-200 rounded-md w-64 md:w-48 h-80 pb-4 shadow-md"></div>
        <div className="bg-gray-200 rounded-md w-64 md:w-48 h-80 pb-4 shadow-md"></div>
        <div className="bg-gray-200 rounded-md w-64 md:w-48 h-80 pb-4 shadow-md"></div>
        <div className="bg-gray-200 rounded-md w-64 md:w-48 h-80 pb-4 shadow-md visible md:hidden lg:visible xl:visible"></div>
      </div>
      <h1 className="text-black text-xl">Logg Productos</h1>
      <div
        role="status"
        className="animate-pulse grid self-center gap-4 grid-cols-1fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div className="bg-gray-200 rounded-md w-64 md:w-48 h-80 pb-4 shadow-md"></div>
        <div className="bg-gray-200 rounded-md w-64 md:w-48 h-80 pb-4 shadow-md"></div>
        <div className="bg-gray-200 rounded-md w-64 md:w-48 h-80 pb-4 shadow-md"></div>
        <div className="bg-gray-200 rounded-md w-64 md:w-48 h-80 pb-4 shadow-md visible md:hidden xl:visible"></div>
      </div>
    </section>
  )
}