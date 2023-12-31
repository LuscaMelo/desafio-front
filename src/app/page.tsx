import { Convert } from "@/components/Convert";
import { Hero } from "@/components/Hero";
import { Library } from "@/components/Library";

export default function Home() {
  return (
    <main className='w-[100%] relative'>
      <section className="h-full">
        <Hero />
      </section>
      <section className="h-full">
        <Library />
      </section>
      <section className="h-full">
        <Convert />
      </section>
    </main>
  )
}
