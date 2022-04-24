import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="lewandowski"
            src="https://www.vi.nl/.imaging/mte/vinl-website-theme/760x506/dam/articles/2022/02/21/copyright-proshots-15487148.jpg/jcr:content/copyright-proshots-15487148.jpg"
          />
          <Avatar
            alt="Lukkaku"
            src="https://www.vi.nl/.imaging/mte/vinl-website-theme/760x506/dam/articles/2022/04/05/copyright-proshots-15575776.jpg/jcr:content/copyright-proshots-15575776.jpg"
          />
          <Avatar
            alt="Muler"
            src="https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/fc-bayern-muenchen-v-tsg-1899-hoffenheim-bundesliga-5d9e012700a54ecab0000001.jpg"
          />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar
            alt="Salah"
            src="https://www.vi.nl/.imaging/mte/vinl-website-theme/760x506/dam/articles/2022/01/11/copyright-proshots-14877486.jpg/jcr:content/copyright-proshots-14877486.jpg"
          />
          <Avatar
            alt="Mudric"
            src="https://i.eurosport.com/2021/05/25/3139455-64344835-1600-900.jpg"
          />
          <Avatar
            alt="Hazard"
            src="https://lookcharms.com/wp-content/uploads/2022/01/eden-hazard-vers-newcastle-scaled.jpg"
          />
          <Avatar
            alt="CR7"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf4WeIRE0qsjSzkY0NQA5IcUQUYqE8H3BSF3FQlD8UxKXgZ9EXsntKd8neiOOUGgAn4pw&usqp=CAU"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://www.aerotime.aero/upload/files/best-fighter-jets-f22-aerotime-1.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/60343159132e0b0552c1b9df/0x0.jpg?fit=crop&format=jpg&crop=1088,510,x0,y59,safe"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyYYtJphDdTdvYS89DnneWKWaQZVgZKfUBXV3ByEoSSzh0YloFfFmfoCd83gw5xdSDCs&usqp=CAU"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://meragor.com/files/styles//ava_800_800_wm/avatar-208147-funny-standoff--meragor-com-(140).jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3tDHbaGFOhI_y489Vg5hA6RnjD36GfnE0ISRZfFj1QkLqPo40_kVxjUVuHQIST-YETes&usqp=CAU"
            />
          </ListItemAvatar>

          <ListItemText
            primary="hossein"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </React.Fragment>
            }
          />
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
