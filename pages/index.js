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

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps() {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from a API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
