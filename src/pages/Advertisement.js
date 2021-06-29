import React, { useEffect, useState } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import NaviEmployee from "../layouts/NaviEmployee";
import NaviEmployer from "../layouts/NaviEmployer";
import NaviMain from "../layouts/NaviMain";
import SidebarEmployee from "../layouts/SidebarEmployee";
import { Grid } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
import JobAdService from "../services/JobAdService";

export default function Advertisement() {
  const [jobAds, setJobAds] = useState([]);

  useEffect(() => {
    let jobAdService = new JobAdService();
    jobAdService.getJobAd().then((result) => setJobAds(result.data.data));
  }, []);
  let auth=localStorage.getItem("auth")

  return (
    <div>
      {(() => {
        if (auth==="employee") {
          return (
            <div><NaviEmployee /></div>
          )
        } else if (auth==="employer") {
          return (
            <div><NaviEmployer/></div>
          )
        } else if(auth==="personel"){
          return (
            <div>catch all</div>
          )
        }
        else {
          return(
            <div><NaviMain/></div>
          )
        }
      })()}
      
      <Container className="main">
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <SidebarEmployee />
            </Grid.Column>

            <Grid.Column width={12}>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Position</Table.HeaderCell>
                    <Table.HeaderCell>Company</Table.HeaderCell>
                    <Table.HeaderCell>City</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {jobAds.map((ads) => (
                    <Table.Row key={ads.id}>
                      <Table.Cell>{ads.position.positionName}</Table.Cell>
                      <Table.Cell>{ads.employer.companyName}</Table.Cell>
                      <Table.Cell>{ads.city}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>

                <Table.Footer>
                  <Table.Row>
                    <Table.HeaderCell colSpan="3">
                      <Menu floated="right" pagination>
                        <Menu.Item as="a" icon>
                          <Icon name="chevron left" />
                        </Menu.Item>
                        <Menu.Item as="a">1</Menu.Item>
                        <Menu.Item as="a">2</Menu.Item>
                        <Menu.Item as="a">3</Menu.Item>
                        <Menu.Item as="a">4</Menu.Item>
                        <Menu.Item as="a" icon>
                          <Icon name="chevron right" />
                        </Menu.Item>
                      </Menu>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
