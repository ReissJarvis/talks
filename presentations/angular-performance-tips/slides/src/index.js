import React from 'react';
import ReactDOM from 'react-dom';

import {
  Appear,
  Box,
  CodePane,
  CodeSpan,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  Image,
  ListItem,
  Markdown,
  Notes,
  OrderedList,
  Progress,
  Slide,
  SpectacleLogo,
  Stepper,
  Text,
  UnorderedList,
  indentNormalizer
} from 'spectacle';

// SPECTACLE_CLI_THEME_START
const theme = {
  colors: {
    primary: '#212121',
    secondary: '#03A9F4',
    tertiary: '#FFFFFF'
  },
  fonts: {
    header: '"Open Sans", Helvetica, Arial, sans-serif',
    text: '"Open Sans", Helvetica, Arial, sans-serif',
  }
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

const lazyLoadModuleCodeExample = indentNormalizer(`
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path:'feature1',
        loadChildren: () => import("./feature1/feature1.module").then(m => m.Feature1Module),
        canLoad: [AuthGuard]
    }
]
`)

const onPushChangeDetectionExample = indentNormalizer(`
@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {}
`)

const trackByExample = indentNormalizer(`
@Component({
  selector: 'my-app',
  template: \`
   <li *ngFor="let item of list; trackBy:identify">{{item.name}}</li>
  \`
})
export class App {
  list:[];

  identify(index, item){
     return item.name; 
  }
`)

const functionTemplate = `{{getFirstName(object)}}`

const pipeTemplate = `{{ object | firstname }}`

const images = {
  sloth: '/assets/images/sloth.gif'
}

const Presentation = () => (
  <Deck theme={theme} template={template} transitionEffect="fade">
    <Slide>
      <FlexBox height="40%">
        <Heading>Angular Performance</Heading>
      </FlexBox>
      <FlexBox>
        <Image src={images.sloth}></Image>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>Production Builds</Heading>

      <UnorderedList>
        <ListItem>
          AOT Compilation
        </ListItem>
        <ListItem>
          Minification
        </ListItem>
        <ListItem>
          Removes never executed code paths
        </ListItem>
        <ListItem>
          Wont run change detection twice
        </ListItem>

        <ListItem>
          <CodePane>ng build --prod</CodePane>
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>Lazy Loaded Modules</Heading>
      <UnorderedList>
        <ListItem>
          Load when its needed - saves space
        </ListItem>
        <ListItem>
          Only load when its allowed - added security
        </ListItem>
      </UnorderedList>

      <CodePane fontSize={16} autoFillHeight>
        {lazyLoadModuleCodeExample}
      </CodePane>
    </Slide>

    <Slide>
      <Heading>Templates: Functions vs Pipes</Heading>
      <UnorderedList>
        <ListItem>
          Functions in template expressions are invoked every time change detection is fired
        </ListItem>
        <ListItem>
          <CodePane>{functionTemplate}</CodePane>
        </ListItem>
        <ListItem>
          Pipes are only invoked when input changes
        </ListItem>
        <ListItem>
          <CodePane>{pipeTemplate}</CodePane>
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>OnPush Change Detection</Heading>
      <Text>Only runs change detection when inputs have referentially changed</Text>
      <CodePane fontSize={16} autoFillHeight>
        {onPushChangeDetectionExample}
      </CodePane>
    </Slide>

    <Slide>
      <Heading>Track by functions</Heading>
      <UnorderedList>
        <ListItem>
          Large DOM lists are slow
        </ListItem>

        <ListItem>
          Small changes like adding or deleting can trigger several DOM manipulations
        </ListItem>
      </UnorderedList>
      <CodePane fontSize={16} autoFillHeight>
        {trackByExample}
      </CodePane>
    </Slide>

    <Slide>
      <FlexBox height="100%">
        <Heading>The not so quick changes</Heading>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>Web Workers</Heading>
      <UnorderedList>
        <ListItem>
          Long running tasks / computations moved off the main execution thread
        </ListItem>

        <ListItem>
          Parallelism
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>PWA</Heading>
      <UnorderedList>
        <ListItem>
          Improved page speeds
        </ListItem>

        <ListItem>
          Ability to run site offline
        </ListItem>

        <ListItem>
          Cached assets help server performance
        </ListItem>

        <ListItem>
          Can actually tell users when the client has updated while browsing
        </ListItem>

      </UnorderedList>
    </Slide>

    <Slide>
      <FlexBox height="100%">
        <Heading>how can we figure out whats causing performance issues?</Heading>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>Use Performance tools</Heading>
      <UnorderedList>
        <ListItem>Difficult at first</ListItem>
        <ListItem>Even more difficult if its production</ListItem>
        <ListItem>Need to Look for patterns and translate that into code</ListItem>
      </UnorderedList>
    </Slide>

    <Slide>
      <FlexBox height="100%">
        <Heading>Example</Heading>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox height="40%">
        <Heading>Thanks</Heading>
      </FlexBox>
      <FlexBox height="20%">
        <UnorderedList>
          <ListItem>Slides built in ✨<i>Spectacle</i>✨</ListItem>
          <ListItem>can be found on github.com/reissjarvis/talks/presentations/angular-performance-tips</ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
