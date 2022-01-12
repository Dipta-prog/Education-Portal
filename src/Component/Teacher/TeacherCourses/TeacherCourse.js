import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import teacherCourseBanner from '../../../Media/img/teacherCourseBanner/teacherCourseBanner.jpg';
import './TeacherCourse.scss';
import digitalElectronicsImage from '../../../Media/img/digitalElectronicsData.jpg'
import dataMining from '../../../Media/img/dataMining.jpg'
import { useHistory } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));






const TeacherCourse = () => {
  let history = useHistory();
  function handleClick() {
    history.push('/teacher/teacherCourseDetails')
  }

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  return (
    <>
      <div className="row">
        <div className="col-md-4 p-3">
          <div className="cardBorderTeacherCourse">
            <Card className="m-6" sx={{ maxWidth: 345 }}>
              <CardHeader
                // avatar={
                //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                //     R
                //   </Avatar>
                // }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Social Engineering"
                subheader="September 14, 2021"
              />
              <CardMedia
                component="img"
                height="194"
                image={teacherCourseBanner}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  CSE Spring 2021
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                
                <button onClick={handleClick} className='btn btn-success'>See your course details</button>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              
              </CardActions>
         
            </Card>
          </div>

        </div>
        <div className="col-md-4 p-3">
          <div className="cardBorderTeacherCourse">
            <Card className="m-6" sx={{ maxWidth: 345 }}>
              <CardHeader
               
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Digital Electronics"
                subheader="November 14, 2021"
              />
              <CardMedia
                component="img"
                height="194"
                image={digitalElectronicsImage}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  CSE Fall 2021
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
              <button onClick={handleClick} className='btn btn-success'>See your course details</button>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              
              </CardActions>
       
            </Card>
          </div>

        </div>
        <div className="col-md-4 p-3">
          <div className="cardBorderTeacherCourse">
            <Card className="m-6" sx={{ maxWidth: 345 }}>
              <CardHeader
             
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Software Engineering"
                subheader="September 14, 2021"
              />
              <CardMedia
                component="img"
                height="194"
                image={dataMining}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  CSE Summer 2021
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
              <button onClick={handleClick} className='btn btn-success'>See your course details</button>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
           
              </CardActions>
             
            </Card>
          </div>

        </div>
      </div>

    </>
  );
};

export default TeacherCourse;