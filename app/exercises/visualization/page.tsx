"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Pause, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GuidedVisualizationPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  const visualizations = [
    {
      title: "Peaceful Beach",
      steps: [
        "Close your eyes and take a deep breath.",
        "Imagine you're standing on a beautiful, calm beach.",
        "Feel the warm sand beneath your feet.",
        "Listen to the gentle sound of waves lapping at the shore.",
        "Smell the fresh, salty air.",
        "See the clear blue sky and feel the sun warming your skin.",
        "Watch seagulls gliding peacefully overhead.",
        "Feel a sense of calm and tranquility wash over you.",
        "Take another deep breath, holding onto this peaceful feeling.",
        "When you're ready, slowly open your eyes.",
      ],
    },
    {
      title: "Forest Retreat",
      steps: [
        "Find a comfortable position and close your eyes.",
        "Imagine you're walking on a path in a lush, green forest.",
        "Feel the soft earth beneath your feet.",
        "Listen to the rustling of leaves in the gentle breeze.",
        "Smell the fresh, earthy scent of the forest.",
        "See sunlight filtering through the canopy above.",
        "Touch the rough bark of an ancient tree.",
        "Hear a nearby stream bubbling over rocks.",
        "Feel a deep sense of peace and connection with nature.",
        "Take a deep breath, and when ready, slowly open your eyes.",
      ],
    },
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prevStep) => {
          if (prevStep < visualizations[0].steps.length - 1) {
            return prevStep + 1
          } else {
            setIsPlaying(false)
            return prevStep
          }
        })
      }, 10000) // Change step every 10 seconds
    }

    return () => clearInterval(interval)
  }, [isPlaying])

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const resetVisualization = () => {
    setIsPlaying(false)
    setCurrentStep(0)
  }

  return (
    <div className="container py-10">
      <div className="mb-8 flex items-center">
        <Link href="/exercises">
          <Button variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Exercises
          </Button>
        </Link>
      </div>

      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold">Guided Visualization</h1>
        <p className="mb-8 text-muted-foreground">
          Use your imagination to create a peaceful mental space and reduce stress.
        </p>

        <Tabs defaultValue="beach" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="beach">Peaceful Beach</TabsTrigger>
            <TabsTrigger value="forest">Forest Retreat</TabsTrigger>
          </TabsList>

          {visualizations.map((visualization, index) => (
            <TabsContent key={index} value={visualization.title.toLowerCase().replace(" ", "")}>
              <Card>
                <CardHeader>
                  <CardTitle>{visualization.title}</CardTitle>
                  <CardDescription>A guided journey to a {visualization.title.toLowerCase()}.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 text-center">
                    <p className="text-xl font-medium">{visualization.steps[currentStep]}</p>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <Button onClick={togglePlayPause}>
                      {isPlaying ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
                      {isPlaying ? "Pause" : "Start"}
                    </Button>
                    <Button variant="outline" onClick={resetVisualization}>
                      Reset
                    </Button>
                  </div>
                  <div className="mt-6">
                    <p className="text-sm text-muted-foreground">
                      Progress: {currentStep + 1} / {visualization.steps.length}
                    </p>
                    <div className="mt-2 h-2 w-full rounded-full bg-secondary">
                      <div
                        className="h-2 rounded-full bg-primary transition-all"
                        style={{
                          width: `${((currentStep + 1) / visualization.steps.length) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

