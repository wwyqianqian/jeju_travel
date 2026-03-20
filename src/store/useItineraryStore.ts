import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Attraction, mockAttractions } from '../data/mockAttractions';

type ItineraryState = {
  days: Record<string, Attraction[]>;
  addAttraction: (day: string, attraction: Attraction) => void;
  removeAttraction: (day: string, attractionId: string) => void;
  availableAttractions: Attraction[];
};

export const useItineraryStore = create<ItineraryState>()(
  persist(
    (set) => ({
      days: {
        'Day 1': [],
        'Day 2': [],
        'Day 3': [],
        'Day 4': [],
        'Day 5': [],
      },
      availableAttractions: mockAttractions,
      addAttraction: (day, attraction) => set((state) => ({
        days: {
          ...state.days,
          [day]: [...state.days[day], attraction],
        }
      })),
      removeAttraction: (day, attractionId) => set((state) => ({
        days: {
          ...state.days,
          [day]: state.days[day].filter((a) => a.id !== attractionId),
        }
      })),
    }),
    {
      name: 'jeju-itinerary-storage',
    }
  )
);
