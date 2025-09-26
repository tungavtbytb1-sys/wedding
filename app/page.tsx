"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, MapPin, Calendar, Clock, Mail, Phone } from "lucide-react"

export default function WeddingPage() {
  const [rsvpForm, setRsvpForm] = useState({
    name: "",
    email: "",
    guests: "1",
    attending: "",
    message: "",
  })

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle RSVP submission
    console.log("RSVP submitted:", rsvpForm)
    alert("Thank you for your RSVP! We can't wait to celebrate with you.")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-secondary/20">
        <div className="absolute inset-0 bg-[url('/romantic-wedding-venue-with-soft-lighting.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="font-serif text-6xl md:text-8xl font-light text-foreground mb-4 text-balance">
              Sarah & Michael
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px bg-primary/30 w-16"></div>
              <Heart className="w-6 h-6 text-primary fill-primary" />
              <div className="h-px bg-primary/30 w-16"></div>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8">
              Together with our families, we invite you to celebrate our love
            </p>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50">
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-serif text-2xl mb-2">Save the Date</h3>
                <p className="text-lg text-muted-foreground">June 15th, 2024</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-serif text-2xl mb-2">Location</h3>
                <p className="text-lg text-muted-foreground">
                  Rosewood Manor
                  <br />
                  Napa Valley, CA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 text-balance">Our Love Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <div>
                <h3 className="font-serif text-2xl mb-3 text-primary">How We Met</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our paths crossed on a rainy Tuesday at the local coffee shop. Michael was reading his favorite book,
                  and Sarah couldn't help but notice the worn cover of "Pride and Prejudice" in his hands. A
                  conversation about literature turned into hours of talking, and we knew something special had begun.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-3 text-primary">The Proposal</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Three years later, Michael recreated our first date at the same coffee shop. But this time, he had a
                  surprise waiting. As Sarah opened her favorite book, she found a beautiful ring tucked between the
                  pages, along with a note asking her to be his forever reading companion.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/romantic-couple-engagement.png"
                alt="Sarah and Michael engagement photo"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Details Section */}
      <section className="py-20 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-balance">Wedding Details</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Ceremony */}
            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img src="/elegant-wedding-ceremony-setup.jpg" alt="Wedding ceremony" className="rounded-lg mx-auto mb-4" />
                </div>
                <h3 className="font-serif text-3xl mb-4 text-primary">Ceremony</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>4:00 PM</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>Garden Pavilion</span>
                  </div>
                  <p className="text-sm mt-4">
                    Join us for an intimate ceremony surrounded by blooming gardens and natural beauty.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Reception */}
            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img src="/elegant-wedding-reception-dinner.jpg" alt="Wedding reception" className="rounded-lg mx-auto mb-4" />
                </div>
                <h3 className="font-serif text-3xl mb-4 text-primary">Reception</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>6:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>Grand Ballroom</span>
                  </div>
                  <p className="text-sm mt-4">
                    Celebrate with dinner, dancing, and joy as we begin our new chapter together.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-balance">Our Journey</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "romantic%20couple%20walking%20in%20park",
              "couple%20laughing%20together",
              "romantic%20dinner%20date",
              "couple%20hiking%20adventure",
              "cozy%20home%20moment",
              "couple%20at%20beach%20sunset",
              "holiday%20celebration%20together",
              "couple%20cooking%20together",
            ].map((query, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={`/.jpg?height=300&width=300&query=${query}`}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-balance">RSVP</h2>
            <p className="text-lg text-muted-foreground">
              Please let us know if you'll be joining us for our special day. We can't wait to celebrate with you!
            </p>
          </div>

          <Card className="border-border/50 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleRsvpSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <Input
                      value={rsvpForm.name}
                      onChange={(e) => setRsvpForm({ ...rsvpForm, name: e.target.value })}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      value={rsvpForm.email}
                      onChange={(e) => setRsvpForm({ ...rsvpForm, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Guests</label>
                    <select
                      value={rsvpForm.guests}
                      onChange={(e) => setRsvpForm({ ...rsvpForm, guests: e.target.value })}
                      className="w-full p-3 border border-border rounded-lg bg-background"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Will you attend?</label>
                    <select
                      value={rsvpForm.attending}
                      onChange={(e) => setRsvpForm({ ...rsvpForm, attending: e.target.value })}
                      className="w-full p-3 border border-border rounded-lg bg-background"
                      required
                    >
                      <option value="">Please select</option>
                      <option value="yes">Yes, I'll be there!</option>
                      <option value="no">Sorry, can't make it</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Special Message (Optional)</label>
                  <Textarea
                    value={rsvpForm.message}
                    onChange={(e) => setRsvpForm({ ...rsvpForm, message: e.target.value })}
                    placeholder="Share your excitement or any special requests..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg"
                >
                  Send RSVP
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact & Info Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-balance">Wedding Information</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl mb-6 text-primary">Getting There</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Venue Address</h4>
                    <p className="text-muted-foreground">
                      Rosewood Manor
                      <br />
                      1234 Vineyard Lane
                      <br />
                      Napa Valley, CA 94558
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Parking</h4>
                    <p className="text-muted-foreground">Complimentary valet parking available</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Accommodations</h4>
                    <p className="text-muted-foreground">
                      Room blocks available at nearby hotels. Contact us for recommendations and booking codes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl mb-6 text-primary">Contact Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">sarah.michael.wedding@email.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-secondary/20 rounded-lg">
                    <h4 className="font-semibold mb-2">Dress Code</h4>
                    <p className="text-muted-foreground text-sm">
                      Garden party elegant - think flowy dresses, light suits, and comfortable shoes for outdoor
                      celebration.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-primary/10 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <Heart className="w-8 h-8 text-primary fill-primary mx-auto mb-4" />
            <h3 className="font-serif text-2xl mb-2">Sarah & Michael</h3>
            <p className="text-muted-foreground">June 15th, 2024</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Thank you for being part of our love story. We can't wait to celebrate with you!
          </p>
        </div>
      </footer>
    </div>
  )
}
