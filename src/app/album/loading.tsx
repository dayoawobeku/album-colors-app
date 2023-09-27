export default function Loading() {
  return (
    <div className="grow mt-16 sm:mt-24 flex flex-col md:flex-row items-stretch md:items-center justify-between basis-full xl:px-6 gap-4 xl:gap-[5.42%]">
      <div className="basis-full md:basis-1/3">
        <div className="flex items-center justify-between">
          <button className="uppercase font-bold text-xs text-grey">
            previous
          </button>
          <button className="uppercase font-bold text-xs text-grey">
            next
          </button>
        </div>
        <div className="mt-6 space-y-4 lg:space-y-10">
          <div className="border border-1 border-grey-500 px-2 lg:px-12 py-4 relative flex items-center justify-between">
            <div className="h-[0.5px] w-full bg-grey-500 absolute -mx-2 lg:-mx-12" />
            <div className="flex flex-col items-center justify-between">
              <p className="uppercase font-bold text-sm text-grey pb-4">
                artist
              </p>
              <p className="text-grey-700 font-semibold text-sm pt-4">-</p>
            </div>
            <div className="flex flex-col items-center justify-between">
              <p className="uppercase font-bold text-sm text-grey pb-4">
                album title
              </p>
              <p className="text-grey-700 font-semibold text-sm pt-4">-</p>
            </div>
          </div>
          <div className="border border-1 border-grey-500 px-2 lg:px-12 py-4 relative flex items-center justify-between">
            <div className="h-[0.5px] w-full bg-grey-500 absolute -mx-12" />
            <div className="flex flex-col items-center justify-between">
              <p className="uppercase font-bold text-sm text-grey pb-4">year</p>
              <p className="text-grey-700 font-semibold text-sm pt-4">-</p>
            </div>
            <div className="flex flex-col items-center justify-between">
              <p className="uppercase font-bold text-sm text-grey pb-4">
                designer
              </p>
              <p className="text-grey-700 font-semibold text-sm pt-4">-</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[500px] h-[calc(100vw-50px)] sm:h-[500px] md:hidden bg-grey-500" />

      <div className="relative w-[calc(100vw-72.22vw)] h-[calc(100vw-72.22vw)] bg-grey-500 md:block basis-1/3" />

      <div className="basis-full md:basis-1/3">
        <div className="border border-1 border-grey-500 px-2 lg:px-10 pt-4 relative flex items-start justify-between">
          <div className="flex flex-col items-center justify-between">
            <p className="uppercase font-bold text-sm text-grey pb-4">color</p>
            {Array.from({length: 5}).map((_, index) => (
              <div key={index} className="py-4">
                <div
                  className="w-[60px] h-5"
                  style={{backgroundColor: '#000'}}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-between">
            <p className="uppercase font-bold text-sm text-grey pb-4">hex</p>
            {Array.from({length: 5}).map((_, index) => (
              <p key={index} className="text-grey-700 font-medium text-sm py-4">
                -
              </p>
            ))}
          </div>
          <div className="flex flex-col items-center justify-between">
            <p className="uppercase font-bold text-sm text-grey pb-4">rgb</p>
            {Array.from({length: 5}).map((_, index) => (
              <p key={index} className="text-grey-700 font-medium text-sm py-4">
                -
              </p>
            ))}
          </div>
          <div className="h-[0.5px] w-full bg-grey-500 absolute top-[16.6%] -mx-10" />
          <div className="h-[0.5px] w-full bg-grey-500 absolute top-[33.1%] -mx-10" />
          <div className="h-[0.5px] w-full bg-grey-500 absolute top-[49.7%] -mx-10" />
          <div className="h-[0.5px] w-full bg-grey-500 absolute top-[66.2%] -mx-10" />
          <div className="h-[0.5px] w-full bg-grey-500 absolute top-[82.8%] -mx-10" />
        </div>
      </div>
    </div>
  );
}
