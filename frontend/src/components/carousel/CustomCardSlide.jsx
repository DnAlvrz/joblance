import PropTypes from "prop-types";
import { Slide } from "pure-react-carousel";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";

const CustomCardSlide = ({ index, ...cardProps }) => (
  <Slide index={index}>
    <div style={{ padding: 10 }}>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    </div>
  </Slide>
);

CustomCardSlide.propTypes = {
  index: PropTypes.number.isRequired
};

export default CustomCardSlide;
