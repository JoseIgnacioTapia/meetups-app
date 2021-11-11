import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Prague_Cubim_Adria_Palace.jpg/1024px-Prague_Cubim_Adria_Palace.jpg',
    address: 'Some street 67, Some City',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Prague_Cubim_Adria_Palace.jpg/1024px-Prague_Cubim_Adria_Palace.jpg',
    address: 'Some street 67, Some City',
  },
];

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // send a http request and fetchdata
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
}

export default HomePage;
