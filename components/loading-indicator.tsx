export function LoadingIndicator() {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full">
      <div className="relative h-16 w-16">
        <div className="absolute top-0 left-0 h-full w-full rounded-full border-4 border-t-teal-500 border-b-teal-700 border-l-teal-600 border-r-teal-600 animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
          <div className="relative h-6 w-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-md"></div>
            <div className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-[3px] flex items-center justify-center">
              <span className="font-bold text-xs text-teal-600 dark:text-teal-400">IN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

