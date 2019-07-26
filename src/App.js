import React, {Component} from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Segment,
  Grid,
  Divider,
  Header,
  Icon,
  Button,
  Search,
  Dimmer,
  Loader,
  Image,
  Placeholder,
  List
} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <br />
        <br />

        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical>Or</Divider>

            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="search" />
                  Cari Document
                </Header>

                <Search placeholder="Search..." />
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name="pdf file outline" />
                  Tambah Document Baru
                </Header>

                <Button primary>Create Document</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment>
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>

          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>

        <Grid columns={3}>
          <Grid.Column width={5}>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>

          <Grid.Column width={7}>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>

          <Grid.Column width={2}>
            <Header as="h3">
              Website Terkait
              <List>
                <List.Item>
                  <List.Icon name="linkify" />
                  <List.Content>
                    <a href="/"><h4>Google</h4></a>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Icon name="linkify" />
                  <List.Content>
                    <a href="/"><h4>Facebook</h4></a>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Icon name="linkify" />
                  <List.Content>
                    <a href="/"><h4>Semantic UI</h4></a>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Icon name="linkify" />
                  <List.Content>
                    <a href="/"><h4>Niomic</h4></a>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Icon name="linkify" />
                  <List.Content>
                    <a href="/"><h4>React</h4></a>
                  </List.Content>
                </List.Item>
              </List>
            </Header>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
