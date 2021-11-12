import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Prague_Cubim_Adria_Palace.jpg/1024px-Prague_Cubim_Adria_Palace.jpg"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="This is a first meetup"
    />
  );
}

export async function getStaticProps() {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Prague_Cubim_Adria_Palace.jpg/1024px-Prague_Cubim_Adria_Palace.jpg',
        id: meetupId,
        title: 'First Meetup',
        address: 'Some Street 5 Some City',
        description: 'This is a first meetup',
      },
    },
  };
}

export default MeetupDetails;
