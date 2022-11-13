import {Button, Card, Container, Dimmer, Divider, Grid, Header, Label, Form, List, Loader, Segment} from 'semantic-ui-react'
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {getUser, addEducation, reset, updateUserAbout, addSkills} from '../../features/userProfile/userProfileSlice';
import { toast } from 'react-toastify';
import EducationListItem from '../../components/profile/EducationListItem';
import BasicInfo from '../../components/profile/BasicInfo';
import TestimonialCard from '../../components/profile/TestimonialCard';
import EducationForm from '../../components/profile/EducationForm';
import SkillsForm from '../../components/profile/SkillsForm';
import ContactButtons from '../../components/profile/ContactButtons';
import AboutForm from '../../components/profile/AboutForm';
import SkillLabel from '../../components/profile/SkillLabel';
import SkillsSection from '../../components/profile/SkillsSection';
import AboutSection from '../../components/profile/AboutSection';
import EducationSection from '../../components/profile/EducationSection';

const Profile = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state)=>state.auth);
  const {userProfile, userProfileSuccess, userProfileLoading, userProfileError, userProfileMessage} = useSelector((state)=>state.userProfile);
  const [eduType, setEduType] = useState('');
  const [aboutText, setAboutText] = useState('');
  const [currentJob, setCurrentJob] = useState(null);
  const [profileSkills, setProfileSkills] = useState([]);

  const initialEducationState= {
    name:'',
    yearAttended: '',
    yearGraduated: '',
    course: ''
  };
  const [education, setEducation] = useState(initialEducationState);

  const options = [
    { key: 'asdsadasd1', text: 'job 1', value: 1 },
    { key: 'asdasdasdasd', text: 'job 2', value: 2 },
    { key: 'asdasdasdas', text: 'job 3', value: 3 },
  ]

  const handleAboutSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserAbout({userId:id, aboutData: aboutText}))
    setAboutText('')
  }

  const handleAboutTextChange = (e)=> {
    setAboutText(e.target.value)
  }

  const onEducationChange = (e)=> {
    console.log(education)
    setEducation((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  const handleAddEducation = (e)=> {
    e.preventDefault();
    dispatch(addEducation({
      id,
      type: eduType,
      ...education
    }));
    setEducation((prevState)=>({...prevState, ...initialEducationState}))
  }

  const onSkillsChange = (e, data) => {
    setProfileSkills(data.value)
  }

  const handleSkillsSubmit = (e) => {
    e.preventDefault();
    console.log(profileSkills)
    dispatch(addSkills({id:id, skills:profileSkills}))
  }

  useEffect(()=>{
    dispatch(getUser(id));
    if(userProfileSuccess) {
      toast.success('Profile updated')
    }
    if(!user){
      navigate('/login')
    }
    if(userProfileError) {
      toast.error(userProfileMessage)
    }
    return ()=> {
      dispatch(reset());
    }
  },[dispatch, navigate, user, id, userProfileError, userProfileMessage, userProfileSuccess]);

  if(userProfileLoading){
    return (
      <>
      <Dimmer style={{minHeight:'500px'}} inverted>
        <Loader>Loading</Loader>
      </Dimmer>
      </>
    )
  }

  return (
    <>
    <Grid stackable>
      <Grid.Row >
        <Grid.Column width={4}>
          <Segment color='teal'>
            <BasicInfo />
          </Segment>
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment color='red'>
            <ContactButtons user={user} id={id} options={options} />
            <Container  style={{padding:'20px', marginTop:'30px'}} textAlign='justified'>
              <AboutSection handleAboutTextChange={handleAboutTextChange} handleAboutSubmit={handleAboutSubmit} />
              <Divider />
              <SkillsSection handleSkillsSubmit={handleSkillsSubmit} onSkillsChange={onSkillsChange}  />
            <Header as='h4' color='blue'>Education</Header>
              <List>
              <EducationSection onEducationChange={onEducationChange} eduType={eduType} handleAddEducation={handleAddEducation} setEduType={setEduType} />
              </List>
              <Divider />
              <Header as='h4' color='red'>
                Testimonials
              </Header>
              <Card.Group>
                <TestimonialCard />
              </Card.Group>
            </Container>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </>
  )
}

export default Profile