import { Link } from 'react-router-dom'

export function SiteHeader() {
  return (
    <header className="bg-[var(--gray-default)] border-b border-transparent content-stretch flex h-[92px] items-center justify-center overflow-clip pb-[16px] pt-[40px] px-[72px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px max-w-[1440px] mx-auto px-[32px] relative w-full">
        <Link
          to="/"
          className="font-bold text-[30px] text-[color:var(--gray-900)] tracking-[-0.6px] no-underline hover:opacity-80"
        >
          NN ⑈︎
        </Link>
      </div>
    </header>
  )
}
