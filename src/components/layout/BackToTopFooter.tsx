import { scrollToTop } from '../../lib/scroll'

export function BackToTopFooter() {
  return (
    <footer className="bg-[var(--gray-50)] content-stretch flex flex-col items-end justify-center px-[80px] py-[24px] relative shrink-0 w-full">
      <button
        type="button"
        onClick={scrollToTop}
        className="cursor-pointer bg-transparent border-0 p-0 font-semibold leading-[24px] text-[20px] text-[color:var(--gray-600)] underline underline-offset-2 hover:text-[color:var(--gray-900)]"
      >
        Back to top ↑
      </button>
    </footer>
  )
}
