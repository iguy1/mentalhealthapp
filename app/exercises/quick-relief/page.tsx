"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function QuickReliefPage() {
  const [completedExercises, setCompletedExercises] = useState<string[]>([])

  const markExerciseComplete = (exerciseName: string) => {
    if (!completedExercises.includes(exerciseName)) {
      setCompletedExercises([...completedExercises, exerciseName])
    }
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
        <h1 className="mb-2 text-3xl font-bold">Quick Relief Exercises</h1>
        <p className="mb-8 text-muted-foreground">
          Fast techniques to help you calm down and refocus when you're feeling overwhelmed.
        </p>

        <Tabs defaultValue="54321" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="54321">5-4-3-2-1 Technique</TabsTrigger>
            <TabsTrigger value="squarebreathing">Square Breathing</TabsTrigger>
            <TabsTrigger value="bodycheck">Body Check-In</TabsTrigger>
          </TabsList>

          <TabsContent value="54321" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>5-4-3-2-1 Grounding Technique</CardTitle>
                <CardDescription>Use your senses to ground yourself in the present moment.</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="ml-6 list-decimal space-y-2">
                  <li>
                    Look around and name 5 things you can <span className="font-semibold">see</span>.
                  </li>
                  <li>
                    Focus on 4 things you can <span className="font-semibold">touch</span> or feel.
                  </li>
                  <li>
                    Listen for 3 things you can <span className="font-semibold">hear</span>.
                  </li>
                  <li>
                    Try to identify 2 things you can <span className="font-semibold">smell</span>.
                  </li>
                  <li>
                    Notice 1 thing you can <span className="font-semibold">taste</span>.
                  </li>
                </ol>
                <p className="mt-4 text-sm text-muted-foreground">
                  Take your time with each step. Focus on the sensations and try to be as specific as possible.
                </p>
                <Button
                  className="mt-6"
                  onClick={() => markExerciseComplete("5-4-3-2-1 Technique")}
                  variant={completedExercises.includes("5-4-3-2-1 Technique") ? "secondary" : "default"}
                >
                  {completedExercises.includes("5-4-3-2-1 Technique") ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Completed
                    </>
                  ) : (
                    "Mark as Complete"
                  )}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="squarebreathing" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Square Breathing</CardTitle>
                <CardDescription>A simple breathing technique to quickly calm your nervous system.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 text-center">
                  <div className="inline-block h-48 w-48 rounded-lg border-4 border-primary p-2">
                    <div className="flex h-full flex-col justify-between">
                      <div className="text-center">Inhale for 4</div>
                      <div className="flex justify-between">
                        <div className="rotate-180 transform text-center writing-mode-vertical">Hold for 4</div>
                        <div className="text-center writing-mode-vertical">Hold for 4</div>
                      </div>
                      <div className="rotate-180 transform text-center">Exhale for 4</div>
                    </div>
                  </div>
                </div>
                <ol className="ml-6 list-decimal space-y-2">
                  <li>Inhale deeply through your nose for 4 seconds.</li>
                  <li>Hold your breath for 4 seconds.</li>
                  <li>Exhale slowly through your mouth for 4 seconds.</li>
                  <li>Hold your breath for 4 seconds.</li>
                  <li>Repeat the cycle 3-5 times or until you feel calmer.</li>
                </ol>
                <Button
                  className="mt-6"
                  onClick={() => markExerciseComplete("Square Breathing")}
                  variant={completedExercises.includes("Square Breathing") ? "secondary" : "default"}
                >
                  {completedExercises.includes("Square Breathing") ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Completed
                    </>
                  ) : (
                    "Mark as Complete"
                  )}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bodycheck" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Body Check-In</CardTitle>
                <CardDescription>Quickly scan your body to release tension and ground yourself.</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="ml-6 list-decimal space-y-2">
                  <li>Find a comfortable position, sitting or standing.</li>
                  <li>Close your eyes if you feel comfortable doing so.</li>
                  <li>Take a deep breath and begin to focus on your body.</li>
                  <li>Start with your feet and notice any sensations or tension.</li>
                  <li>Slowly move your attention up through your legs, torso, arms, and head.</li>
                  <li>At each point, consciously relax any tension you notice.</li>
                  <li>Take another deep breath and open your eyes when you're ready.</li>
                </ol>
                <p className="mt-4 text-sm text-muted-foreground">
                  This exercise can be done in as little as 30 seconds or extended for several minutes.
                </p>
                <Button
                  className="mt-6"
                  onClick={() => markExerciseComplete("Body Check-In")}
                  variant={completedExercises.includes("Body Check-In") ? "secondary" : "default"}
                >
                  {completedExercises.includes("Body Check-In") ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Completed
                    </>
                  ) : (
                    "Mark as Complete"
                  )}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

