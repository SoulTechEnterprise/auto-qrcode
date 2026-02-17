import Link from "next/link"
import Image from "next/image"
import { SITE_CONFIG, CONTACT_LINKS } from "@/lib/constants"
import { Instagram, MessageCircle, FileText } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto max-w-6xl px-6 py-8 md:px-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image 
                src="/logo.webp" 
                alt="Logo Auto QRCode" 
                width={48} 
                height={48}
                className="rounded-md"
              />
              <span className="text-lg font-bold">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {SITE_CONFIG.description}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={CONTACT_LINKS.termsOfUse}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  href={CONTACT_LINKS.privacyPolicy}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={CONTACT_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}