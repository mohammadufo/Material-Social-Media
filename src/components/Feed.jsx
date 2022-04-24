import { Box } from '@mui/system';
import React from 'react';
import Post from './Post';

const data = [
  {
    name: 'Muhammad UFO',
    id: 1,
    profile: 'https://avatars.githubusercontent.com/u/90573543?v=4',
    desc: 'Hezbollah Special forces',
    img: 'https://pbs.twimg.com/media/FLt6UgXWUAAl63U?format=jpg&name=large',
    date: 'March 21, 2022',
  },
  {
    name: 'yuri boyka',
    id: 2,
    profile: 'https://pbs.twimg.com/media/CUnSzIdWEAA9P7-.jpg',
    desc: 'Java Script is the Best !',
    img: 'https://soject.com/wp-content/uploads/2021/02/EzgdmaCQuT84bgDL4fhXZS.jpg',
    date: 'April 9, 2022',
  },
  {
    name: 'Karim Benzema',
    id: 3,
    profile:
      'https://sportsmax.tv/media/k2/items/cache/1b303b3d00c763199d68853aa32be5b0_XL.jpg',
    desc: 'The Leader For Real Madrid',
    img: 'https://news.varzeshe3.com/pictures/2022/02/13/B/jbd5hrhq.jpeg',
    date: 'September 12, 2022',
  },
];

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      {data?.map((p) => (
        <Post
          name={p.name}
          profile={p.profile}
          title={p.desc}
          img={p.img}
          key={p.id}
          date={p.date}
        />
      ))}
    </Box>
  );
};

export default Feed;

// image="https://i0.wp.com/cms.sofrep.com/wp-content/uploads/2021/05/Afghanistan-US-troops-dusk.jpg?fit=900%2C600&ssl=1"
