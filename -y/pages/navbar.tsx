"use client"
import { useState } from "react"
import { motion } from "motion/react"
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu"
import { cn } from "@/lib/utils"
import { MenuIcon, X } from "lucide-react"

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className={cn("fixed text-xl font-bold top-0 inset-x-0 z-50 md:top-10", className)}>
      <div className="hidden md:flex justify-center px-12">
        <Menu setActive={setActive}>

             <MenuItem setActive={setActive} active={active} item="About">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/about">Our Story</HoveredLink>
              <HoveredLink href="/craftsmanship">Craftsmanship</HoveredLink>
              <HoveredLink href="/sustainability">Sustainability</HoveredLink>
              <HoveredLink href="/contact">Contact Us</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Collections" />

          <MenuItem setActive={setActive} active={active} item="Featured">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="💎 Necklace"
                href="/rings/solitaire"
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=150&fit=crop"
                description="Drape yourself in timeless elegance — where every curve tells a story of grace"
              />
              <ProductItem
                title="💍 Ring"
                href="/necklaces/gold"
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=150&fit=crop"
                description="A circle of perfection, crafted to shine with your every moment."
              />
              <ProductItem
                title="✨ Earrings"
                href="/earrings/pearl"
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=150&fit=crop"
                description="Turn every glance into admiration — elegance that whispers luxury."
              />
              <ProductItem
                title="🪶 Bracelet"
                href="/bracelets/luxury"
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=150&fit=crop"
                description="Wrap your wrist in sophistication — simplicity that speaks volumes"
              />
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/custom-design">Custom Design</HoveredLink>
              <HoveredLink href="/repair">Jewelry Repair</HoveredLink>
              <HoveredLink href="/appraisal">Appraisal & Certification</HoveredLink>
              <HoveredLink href="/resizing">Resizing & Adjustments</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>

      <div className="md:hidden bg-amber-50 dark:bg-amber-950 border-b border-amber-200 dark:border-amber-700">
        <div className="flex items-center justify-between px-4 py-4">
          <h1 className="text-xl font-bold text-amber-900 dark:text-amber-100">Jewelry</h1>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-amber-900 dark:text-amber-100 p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={mobileMenuOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="px-4 pb-4 space-y-2 border-t border-amber-200 dark:border-amber-700">
            <Menu setActive={setActive} isMobile>
              <MenuItem setActive={setActive} active={active} item="Collections" isMobile>
                <div className="flex flex-col space-y-2 text-sm">
                  <HoveredLink href="/rings">Engagement Rings</HoveredLink>
                  <HoveredLink href="/necklaces">Necklaces & Pendants</HoveredLink>
                  <HoveredLink href="/bracelets">Bracelets</HoveredLink>
                  <HoveredLink href="/earrings">Earrings</HoveredLink>
                  <HoveredLink href="/watches">Luxury Watches</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Featured" isMobile>
                <div className="text-sm space-y-3">
                  <ProductItem
                    title="Diamond Solitaire"
                    href="/rings/solitaire"
                    src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=150&fit=crop"
                    description="Timeless elegance with premium diamonds"
                  />
                  <ProductItem
                    title="Gold Pendant"
                    href="/necklaces/gold"
                    src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=150&fit=crop"
                    description="Exquisite 18K gold craftsmanship"
                  />
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Services" isMobile>
                <div className="flex flex-col space-y-2 text-sm">
                  <HoveredLink href="/custom-design">Custom Design</HoveredLink>
                  <HoveredLink href="/repair">Jewelry Repair</HoveredLink>
                  <HoveredLink href="/appraisal">Appraisal & Certification</HoveredLink>
                  <HoveredLink href="/resizing">Resizing & Adjustments</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="About" isMobile>
                <div className="flex flex-col space-y-2 text-sm">
                  <HoveredLink href="/about">Our Story</HoveredLink>
                  <HoveredLink href="/craftsmanship">Craftsmanship</HoveredLink>
                  <HoveredLink href="/sustainability">Sustainability</HoveredLink>
                  <HoveredLink href="/contact">Contact Us</HoveredLink>
                </div>
              </MenuItem>
            </Menu>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
