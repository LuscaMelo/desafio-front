import { Hero } from "@/components/Hero";
import { Library } from "@/components/Library";

export default function Home() {
  return (
    <main className='w-[100%]'>
      <section className="h-full">
        <Hero />
      </section>
      <section className="h-full">
        <Library />
      </section>
    </main>
  )
}
