import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-zinc-50 dark:to-zinc-900">
      <div className="container px-4 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-block rounded-full bg-yellow-300 px-4 py-1.5 text-sm font-medium text-black">
            Acesse Agora
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {SITE_CONFIG.tagline}
          </h1>

          <p className="mb-8 text-lg text-muted-foreground md:text-xl lg:text-2xl">
            {SITE_CONFIG.description}
          </p>

          <Button size="lg" className="bg-yellow-300 text-black hover:bg-yellow-400">
            Criar meu primeiro QRCode
          </Button>

          <p className="mt-4 text-sm text-muted-foreground">
            Sem cartão. Gere, cole e compartilhe.
          </p>
        </div>
      </div>
    </section>
  )
}
