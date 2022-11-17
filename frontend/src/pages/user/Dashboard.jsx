
import { Grid, Segment } from "semantic-ui-react";
import Carousel from "../../components/carousel/Carousel";
import DashboardSideNav from "../../components/includes/DashboardSideNav";

function Dashboard() {

  return (
  <>
  <Grid>
    <Grid.Row>
      <Grid.Column width={4}>
        <DashboardSideNav />
      </Grid.Column>
      <Grid.Column width={12}>
        <Segment >
          <Carousel text='Top Masons' category={'carpentry'}/>
        </Segment>
        <Segment >
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </>
  )
}

export default Dashboard