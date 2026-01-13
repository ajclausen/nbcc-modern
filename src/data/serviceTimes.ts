export interface ServiceTime {
  id: string;
  name: string;
  time: string;
  day: string;
  icon: string;
  note?: string;
  order: number;
}

export const serviceTimes: ServiceTime[] = [
  {
    id: 'sunday-school',
    name: 'Sunday School',
    time: '9:00 AM',
    day: 'Sundays',
    icon: 'book',
    note: 'Classes for all ages',
    order: 1,
  },
  {
    id: 'main-service',
    name: 'Main Service',
    time: '10:00 AM',
    day: 'Sundays',
    icon: 'church',
    order: 2,
  },
  {
    id: 'kids-church',
    name: 'Kids Church',
    time: '10:20 AM',
    day: 'Sundays',
    icon: 'children',
    note: 'After communion',
    order: 3,
  },
  {
    id: 'prayer-group',
    name: 'Prayer Group',
    time: '7:00 PM',
    day: 'Wednesdays',
    icon: 'pray',
    order: 4,
  },
];

export const getServiceByDay = (day: string): ServiceTime[] => {
  return serviceTimes.filter((service) => service.day.toLowerCase().includes(day.toLowerCase()));
};

export const getSundayServices = (): ServiceTime[] => getServiceByDay('sunday');
export const getWednesdayServices = (): ServiceTime[] => getServiceByDay('wednesday');
