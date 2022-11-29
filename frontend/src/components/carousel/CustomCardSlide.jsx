import PropTypes from "prop-types";
import { Slide } from "pure-react-carousel";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Header, Image, Rating } from "semantic-ui-react";

const CustomCardSlide = ({ index, category, profile }) => {

  return (
  <Slide index={index}>
    <div style={{ padding: 10 }}>
    <Card>
      <Card.Content>

        <Card.Header textAlign="center">{profile.firstname} {profile.lastname} </Card.Header>
        <Card.Meta textAlign="center">{category}</Card.Meta>
        <Card.Description textAlign="center">
        <Rating
            size='tiny'
            disabled={profile.avgRating}
            icon='star'
            defaultRating={profile.avgRating}
            maxRating={5}
          />
          <Header style={{margin:'0', padding:'2px 0'}}>{profile.avgRating} Stars</Header>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Link to={`/user/${profile._id}`}>
            <Button  basic color='blue'>
              Profile
            </Button>
          </Link>
        </div>
      </Card.Content>
    </Card>
    </div>
  </Slide>
  );
}

export default CustomCardSlide;
