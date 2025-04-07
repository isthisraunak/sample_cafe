import React from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select } from '@/components/ui/select';

export default function Reservations() {
  return (
    <section id="reservations" className="py-20 bg-navy text-cream">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-cream">Reservations</h2>
        <p className="section-subtitle text-lightgray">Join us for an unforgettable dining experience</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <Card className="bg-[#1c2438] border-0 p-8">
              <h3 className="text-2xl font-playfair mb-6 text-cream">Hours & Location</h3>

              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-gold uppercase text-sm tracking-wider">Dinner Service</h4>
                <p className="text-lightgray">Tuesday - Sunday: 5:30 PM - 10:00 PM</p>
                <p className="text-lightgray">Closed Mondays</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-gold uppercase text-sm tracking-wider">Location</h4>
                <p className="text-lightgray">123 Culinary Avenue</p>
                <p className="text-lightgray">Gastronomy District</p>
                <p className="text-lightgray">Fine City, FC 10001</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-gold uppercase text-sm tracking-wider">Contact</h4>
                <p className="text-lightgray">Phone: (555) 123-4567</p>
                <p className="text-lightgray">Email: reservations@elysee.com</p>
              </div>
            </Card>
          </div>

          <div>
            <Card className="bg-[#1c2438] border-0 p-8">
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-cream">Name</Label>
                  <Input id="name" className="bg-[#141a2c] border-[#2c3650] text-cream mt-2" placeholder="Your Full Name" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-cream">Email</Label>
                    <Input id="email" className="bg-[#141a2c] border-[#2c3650] text-cream mt-2" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-cream">Phone</Label>
                    <Input id="phone" className="bg-[#141a2c] border-[#2c3650] text-cream mt-2" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date" className="text-cream">Date</Label>
                    <Input id="date" className="bg-[#141a2c] border-[#2c3650] text-cream mt-2" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="time" className="text-cream">Time</Label>
                    <select id="time" className="w-full mt-2 px-3 py-2 rounded-md bg-[#141a2c] border border-[#2c3650] text-cream focus:outline-none focus:ring-2 focus:ring-gold">
                      <option value="">Select time</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="guests" className="text-cream">Guests</Label>
                  <select id="guests" className="w-full mt-2 px-3 py-2 rounded-md bg-[#141a2c] border border-[#2c3650] text-cream focus:outline-none focus:ring-2 focus:ring-gold">
                    <option value="">Select party size</option>
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                    <option value="5">5 people</option>
                    <option value="6">6 people</option>
                  </select>
                </div>

                <button type="submit" className="gold-button w-full">
                  REQUEST RESERVATION
                </button>

                <p className="text-xs text-lightgray text-center">
                  For parties larger than 6, special events, or same-day reservations,<br />
                  please call us directly at (555) 123-4567.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
