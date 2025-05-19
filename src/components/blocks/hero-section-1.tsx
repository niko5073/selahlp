'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Menu, X, Apple } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

const HeroContent = () => {
  return (
    <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
      <AnimatedGroup variants={transitionVariants}>
        <Link
          href="#cta"
          className="hover:bg-white/10 bg-white/5 group mx-auto flex w-fit items-center gap-4 rounded-full border border-white/10 p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 mb-0">
          <span className="text-white text-sm">Join the new wave</span>
          <span className="block h-4 w-0.5 border-l border-white/20 bg-white/10"></span>

          <div className="bg-white/10 group-hover:bg-white/20 size-6 overflow-hidden rounded-full duration-500">
            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
              <span className="flex size-6">
                <ArrowRight className="m-auto size-3 text-white" />
              </span>
              <span className="flex size-6">
                <ArrowRight className="m-auto size-3 text-white" />
              </span>
            </div>
          </div>
        </Link>

        <h1
          className="max-w-6xl mx-auto text-balance text-8xl md:text-9xl xl:text-[7rem] text-white tracking-tighter font-bold mt-4">
          The AI Cloud Engineer
        </h1>
        <p
          className="mx-auto mt-12 max-w-5xl text-balance text-lg md:text-xl lg:text-2xl text-gray-300 tracking-tight">
          Scan your repo, blueprint best-practice infra, and deploy in minutes.
        </p>
      </AnimatedGroup>

      <AnimatedGroup
        variants={{
          container: {
            visible: {
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.75,
              },
            },
          },
          ...transitionVariants,
        }}
        className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
        <Button
          key={1}
          asChild
          size="lg"
          className="rounded-2xl px-12 py-3 text-lg h-12 min-w-[12rem] bg-white text-black hover:bg-white/90">
          <Link href="#link">
            <span className="flex items-center gap-2 text-nowrap">
              <Apple className="w-5 h-5" />
              Download for Mac
            </span>
          </Link>
        </Button>
        <Button
          key={2}
          asChild
          size="lg"
          variant="ghost"
          className="h-12 rounded-2xl px-12 py-3 text-lg min-w-[12rem] border border-white/30 text-white hover:bg-white/10 transition-colors"
        >
          <Link href="#link">
            <span className="text-nowrap">All Downloads</span>
          </Link>
        </Button>
      </AnimatedGroup>
    </div>
  )
}

const HeroImage = () => {
  return (
    <AnimatedGroup
      variants={{
        container: {
          visible: {
            transition: {
              staggerChildren: 0.05,
              delayChildren: 0.75,
            },
          },
        },
        ...transitionVariants,
      }}>
      <div className="relative -mr-56 mt-8 overflow-visible px-2 sm:mr-0 sm:mt-12 md:mt-20">
        <div className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 bottom-[-16rem] z-0 w-[160%] h-[44rem]" style={{filter: 'blur(90px)', opacity: 0.8}}>
          <div className="w-full h-full bg-gradient-to-b from-pink-500 via-purple-500 to-[#0a0a0a]" />
          <div className="absolute inset-0 w-full h-full opacity-40 pointer-events-none select-none bg-[url('https://www.transparenttextures.com/patterns/noise.png')] bg-repeat" />
        </div>
        <div className="inset-shadow-2xs ring-white/10 bg-white/10 backdrop-blur-md relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/10 p-4 shadow-lg shadow-black/15 ring-1 z-10">
          <img
            className="bg-transparent aspect-15/8 relative hidden rounded-2xl dark:block"
            src="https://tailark.com//_next/image?url=%2Fmail2.png&w=3840&q=75"
            alt="app screen"
            width="2700"
            height="1440"
          />
          <img
            className="z-2 border-white/10 aspect-15/8 relative rounded-2xl border dark:hidden"
            src="https://tailark.com/_next/image?url=%2Fmail2-light.png&w=3840&q=75"
            alt="app screen"
            width="2700"
            height="1440"
          />
        </div>
      </div>
    </AnimatedGroup>
  )
}

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden bg-[#0a0a0a] relative min-h-screen">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.95))]"></div>
        <div className="relative z-10">
          <section className="relative">
            <div className="relative pt-24 md:pt-36">
              <div className="mx-auto max-w-7xl px-6">
                <HeroContent />
              </div>
              <HeroImage />
            </div>
          </section>
          <section className="relative pb-16 pt-16 md:pb-32">
            <div className="group relative m-auto max-w-5xl px-6">
              <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                <Link
                  href="/"
                  className="block text-sm text-white duration-150 hover:opacity-75">
                  <span> Meet Our Customers</span>
                  <ChevronRight className="ml-1 inline-block size-3" />
                </Link>
              </div>
              <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                <div className="flex">
                  <img
                    className="mx-auto h-5 w-fit invert"
                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                    alt="Nvidia Logo"
                    height="20"
                    width="auto"
                  />
                </div>

                <div className="flex">
                  <img
                    className="mx-auto h-4 w-fit invert"
                    src="https://html.tailus.io/blocks/customers/column.svg"
                    alt="Column Logo"
                    height="16"
                    width="auto"
                  />
                </div>
                <div className="flex">
                  <img
                    className="mx-auto h-4 w-fit invert"
                    src="https://html.tailus.io/blocks/customers/github.svg"
                    alt="GitHub Logo"
                    height="16"
                    width="auto"
                  />
                </div>
                <div className="flex">
                  <img
                    className="mx-auto h-5 w-fit invert"
                    src="https://html.tailus.io/blocks/customers/nike.svg"
                    alt="Nike Logo"
                    height="20"
                    width="auto"
                  />
                </div>
                <div className="flex">
                  <img
                    className="mx-auto h-5 w-fit invert"
                    src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                    alt="Lemon Squeezy Logo"
                    height="20"
                    width="auto"
                  />
                </div>
                <div className="flex">
                  <img
                    className="mx-auto h-4 w-fit invert"
                    src="https://html.tailus.io/blocks/customers/laravel.svg"
                    alt="Laravel Logo"
                    height="16"
                    width="auto"
                  />
                </div>
                <div className="flex">
                  <img
                    className="mx-auto h-7 w-fit invert"
                    src="https://html.tailus.io/blocks/customers/lilly.svg"
                    alt="Lilly Logo"
                    height="28"
                    width="auto"
                  />
                </div>

                <div className="flex">
                  <img
                    className="mx-auto h-6 w-fit invert"
                    src="https://html.tailus.io/blocks/customers/openai.svg"
                    alt="OpenAI Logo"
                    height="24"
                    width="auto"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

const menuItems = [
  { name: 'Features', href: '/features' },
  { name: 'Manifesto', href: '#manifesto' },
  { name: 'Resources', href: '#resources' },
]

const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className="fixed z-20 w-full px-2 group">
        <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-black/50 max-w-4xl rounded-2xl border border-white/10 backdrop-blur-lg lg:px-5')}>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2">
                <Logo className="text-white" />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200 text-white" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 text-white" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-white block duration-150">
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-white/10 p-6 shadow-2xl shadow-black/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-white/70 hover:text-white block duration-150">
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  asChild
                  variant="outline"
                  className={cn(isScrolled && 'lg:hidden', 'border-white/10 text-white hover:bg-white/10 px-4 h-9 text-sm rounded-2xl min-w-[7rem]')}>
                  <Link href="#">
                    <span>Login</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  className={cn(isScrolled && 'lg:hidden', 'bg-white text-black hover:bg-white/90 px-4 h-9 text-sm rounded-2xl min-w-[7rem]')}>
                  <Link href="#">
                    <span>Sign Up</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  className={cn(isScrolled ? 'lg:inline-flex' : 'hidden', 'bg-white text-black hover:bg-white/90 px-4 h-9 text-sm rounded-2xl min-w-[7rem]')}>
                  <Link href="#cta">
                    <span>Try it free</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

const Logo = ({ className }: { className?: string }) => {
  return (
    <span className={cn('text-2xl font-bold tracking-tight flex items-center gap-0 whitespace-nowrap', className)}>
      <img src="/logo.png" alt="Selah Logo" width={48} height={48} className="inline-block object-contain m-0 p-0" />
      Selah
    </span>
  )
} 

