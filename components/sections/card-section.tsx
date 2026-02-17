import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { QrCode } from "lucide-react"
import Image from "next/image"

export function DemoCardSection() {
  return (
    <section className="bg-background py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl px-6 md:px-8">
        <div className="mx-auto max-w-md">
          <Card className="overflow-hidden border-0 shadow-2xl">

            <div className="relative h-80 bg-slate-800">
              <Image
                src="/casa.png"
                alt="Imóvel de exemplo"
                fill
                className="object-cover"
                priority
              />
              
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="flex items-end gap-3">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-white p-2 shadow-lg">
                    <QrCode className="h-full w-full text-black" strokeWidth={1.5} />
                  </div>
                  
                  <div className="flex-1 pb-1">
                    <Badge className="mb-1.5 bg-yellow-300 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-black hover:bg-yellow-300">
                      Status: Ativo
                    </Badge>
                    <h3 className="mb-0.5 text-sm font-bold text-white">
                      Edifício Horizon - Apt 302
                    </h3>
                    <p className="text-xs text-zinc-300">
                      Link atual: imoveis.com/ref/8921
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
