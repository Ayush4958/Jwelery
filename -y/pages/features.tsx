"use client"
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"

export default function CardsGrid() {
  const cards = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "In the mountains",
      subtitle: "$1299 / night",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Beach Paradise",
      subtitle: "$899 / night",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "City Lights",
      subtitle: "$1599 / night",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Forest Retreat",
      subtitle: "$750 / night",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Alpine Adventure",
      subtitle: "$1199 / night",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Desert Escape",
      subtitle: "$650 / night",
    },
  ]

  return (
    <main className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-12 text-center">Explore Destinations</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.id} className="flex justify-center">
              <DirectionAwareHover imageUrl={card.image} className="h-80">
                <div className="space-y-2">
                  <p className="font-bold text-xl">{card.title}</p>
                  <p className="font-normal text-sm">{card.subtitle}</p>
                </div>
              </DirectionAwareHover>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
