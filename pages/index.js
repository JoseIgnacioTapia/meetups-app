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
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
