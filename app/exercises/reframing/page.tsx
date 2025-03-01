"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Plus, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ThoughtReframingPage() {
  const [thoughts, setThoughts] = useState<{ negative: string; reframed: string }[]>([])
  const [newThought, setNewThought] = useState({ negative: "", reframed: "" })

  const addThought = () => {
    if (newThought.negative.trim() !== "" || newThought.reframed.trim() !== "") {
      setThoughts([...thoughts, newThought])
      setNewThought({ negative: "", reframed: "" })
    }
  }

  const removeThought = (index: number) => {
    setThoughts(thoughts.filter((_, i) => i !== index))
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
        <h1 className="mb-2 text-3xl font-bold">Thought Reframing</h1>
        <p className="mb-8 text-muted-foreground">
          Challenge and change negative thought patterns to reduce overthinking and anxiety.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Reframe Your Thoughts</CardTitle>
            <CardDescription>
              Identify negative thoughts and practice reframing them in a more balanced or positive way.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6 space-y-4">
              <div>
                <Label htmlFor="negative-thought">Negative Thought</Label>
                <Textarea
                  id="negative-thought"
                  placeholder="Enter a negative thought..."
                  value={newThought.negative}
                  onChange={(e) => setNewThought({ ...newThought, negative: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="reframed-thought">Reframed Thought</Label>
                <Textarea
                  id="reframed-thought"
                  placeholder="Reframe the thought in a more balanced way..."
                  value={newThought.reframed}
                  onChange={(e) => setNewThought({ ...newThought, reframed: e.target.value })}
                />
              </div>
              <Button onClick={addThought} className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Thought
              </Button>
            </div>

            {thoughts.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Your Reframed Thoughts</h3>
                {thoughts.map((thought, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-sm font-medium">Original Thought</CardTitle>
                      <CardDescription>{thought.negative}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="mb-2 text-sm font-medium">Reframed Thought</h4>
                      <p>{thought.reframed}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" size="sm" onClick={() => removeThought(index)}>
                        <Trash className="mr-2 h-4 w-4" />
                        Remove
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

