import Image from "next/image" // Import the Image component

export function DashboardPreview() {
  return (
    <div className="w-[calc(100vw-20px)] md:w-[1200px]">
      <div className="bg-primary-light/50 rounded-2xl p-2 shadow-2xl">
        <Image
          src="/images/dashboard-preview.png"
          alt="Dashboard preview"
          width={1200}
          height={750}
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  )
}