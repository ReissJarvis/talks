// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Quote,
  Slide,
  Text,
  Appear,
  Table,
  TableRow,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  CodePane,
  Layout,
  Fill,
  S
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  goodWork: require('../assets/good-work.gif'),
  reissMonkey: require('../assets/imgs/reiss-monkey.png'),
  reduxGraph: require('../assets/imgs/redux_graph.png'),
  fluxGraph: require('../assets/imgs/flux_graph.png'),
  robotBattery: require('../assets/gifs/robot-battery.gif'),
  tigerKingSuit: require('../assets/gifs/tiger-king-suit.gif'),
  tigerKingWaterJet: require('../assets/gifs/tiger-king-water-jet.gif'),
  ronSwansonWth: require('../assets/gifs/ron-swanson-wth.gif'),
  unsubscribe: require('../assets/gifs/unsubscribe.gif'),
  rubbish: require('../assets/gifs/rubbish.gif'),
  questions: require('../assets/gifs/questions.gif'),
  wave: require('../assets/gifs/wave.gif'),
  order: require('../assets/gifs/order.gif'),
  powerPoint: require('../assets/gifs/office-powerpoint.gif'),
  facebookNotifications: require('../assets/imgs/facebook-notifications.jpg'),
  thatsScrum: require('../assets/gifs/thats-scrum.gif')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE'
  },
  {
    primary: 'Helvetica',
    secondary: {
      name: 'Droid Serif',
      googleFont: true,
      styles: ['400', '700i']
    }
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['slide']} transitionDuration={500} progress="bar" theme={theme}>
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            State Management
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
            Stop relying on that angular change detection
          </Text>
          <Appear>
            <Text textSize={24}>* With Bingeable show gifs</Text>
          </Appear>
          <Appear>
            <Image src={images.tigerKingSuit} width={500} />
          </Appear>
        </Slide>

        <Slide bgColor="quartenary">
          <Heading size={6} textColor="secondary" caps>
            Technology
          </Heading>
          <Appear>
            <BlockQuote>
              <Quote>Built in Spectacle</Quote>
              <Cite margin="10px 0 0 30px">ReactJS based Presentation Library built by Formidable</Cite>

              <Text margin="10px 0 0 30px" textSize={24}>* Recently updated to 6.0.1 as part of a rewrite</Text>
            </BlockQuote>
          </Appear>

          <Appear>
            <Image src={images.powerPoint} width={500} />
          </Appear>
        </Slide>

        <Slide>
          <Heading size={3} textColor="tertiary" caps>Etiquette</Heading>
          <List>
            <ListItem>Ask away - a challenge to challenge</ListItem>
            <ListItem>I can "try" to code some explanations if needed</ListItem>
            <ListItem>Not a "we're doing it wrong" talk, more of a how can we improve / start a Conversation </ListItem>
          </List>

          <Image src={images.questions} width={500} />
        </Slide>

        <Slide>
          <Heading size={3} textColor="tertiary" caps>Overview</Heading>
          <List>
            <ListItem>Change Detection</ListItem>
            <ListItem>What is state</ListItem>
            <ListItem>Input/Output example</ListItem>
            <ListItem>Service State</ListItem>
            <ListItem>What state management solves</ListItem>
            <ListItem>NGRX example</ListItem>
            <ListItem>Smaller alternative to NGRX</ListItem>
          </List>
        </Slide>


        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
              What is Angular Change Detection
          </Heading>

          <Text margin="10px 0 20px 0" textSize={24}>
            The basic task of change detection is to take the internal state of a program and make it somehow visible to the user interface
          </Text>

          <Appear>
            <div>
              <Heading size={6} textColor="tertiary">How?</Heading>
              <List textColor="secondary">
                <ListItem>Events - click, submit, …</ListItem>
                <ListItem>XHR - Fetching data from a remote server</ListItem>
                <ListItem>Timers - setTimeout(), setInterval()</ListItem>
                <ListItem>They are all asynchronous</ListItem>
              </List>

              <Text textSize={24} margin="20px 0 20px 0">
                ngZone Works all this out, no interceptors or fancy event emitters
              </Text>

              <Quote textSize={24} margin="20px 0 20px 0">
                <a href="https://blog.thoughtram.io/angular/2016/02/01/zones-in-angular-2.html">
                  thoughtram.io blog on zones
                </a>
              </Quote>

              <Quote textSize={24} margin="20px 0 20px 0">
                <a href="https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html">
                  thoughtram.io blog on change detection
                </a>
              </Quote>
            </div>

          </Appear>

        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Should we stop using change detection?
          </Heading>

          <Appear>
            <List textColor="secondary">
              <ListItem>No, its not possible.</ListItem>
              <Appear>
                <ListItem>Just stop relying on it</ListItem>
              </Appear>

              <Appear>
                <ListItem>Take control of when and how something happens</ListItem>
              </Appear>

              <Appear>
                <ListItem>Stop changing data by reference, make it immutable and use functions to update it</ListItem>
              </Appear>

            </List>
          </Appear>

        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} margin="20px 0 20px 0">
            What is state?
          </Heading>
          <Text textSize={24} margin="20px 0 20px 0">
            the outcome of all of the actions that the user* has taken since the page loaded
          </Text>

          <Appear>
            <Text textSize={24} textColor="tertiary">* could be side effects</Text>
          </Appear>
        </Slide>

        <CodeSlide
          fill
          transition={[]}
          lang="js"
          textSize={24}
          code={require('raw-loader!../assets/code-examples/state-simple.ts')}
          ranges={[
            { loc: [0, 10] },
            { loc: [3, 5] },
            { loc: [8, 9] }
          ]}
        />

        <CodeSlide
          fill
          transition={[]}
          lang="js"
          textSize={24}
          code={require('raw-loader!../assets/code-examples/state-multiple.ts')}
          ranges={[
            { loc: [0, 10] },
            { loc: [11, 22] },
            { loc: [19, 22] },
            { loc: [3, 4] },
            { loc: [8, 9] }
          ]}
        />

        <Slide bgColor="primary" textColor="tertiary">
          <Appear>
            <div>
              <Heading size={6}>
                What about large applications / features?
              </Heading>

              <Appear>
                <List>
                  <ListItem>Dont want a long chain of input / outputs</ListItem>
                  <ListItem>Prone to missing an input / output</ListItem>
                  <ListItem>Hard to test</ListItem>
                  <ListItem>business logic can be spread out at different levels, no single <b>SOURCE OF TRUTH</b></ListItem>
                  <ListItem>Prone to building mutated state within children</ListItem>
                </List>
              </Appear>

              <Appear>
                <Text textSize={32}>So where do we go from here?</Text>
              </Appear>
            </div>
          </Appear>
        </Slide>

        <CodeSlide
          fill
          transition={[]}
          lang="js"
          textSize={24}
          code={require('raw-loader!../assets/code-examples/simple-state-service.ts')}
          ranges={[
            { loc: [0, 13] },
            { loc: [14, 23] },
            { loc: [16, 18] },
            { loc: [19, 22] },
            { loc: [11, 12] },
            { loc: [3, 8] }
          ]}
        />

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} margin="20px 0 20px 0">
            Can we go from further from here?
          </Heading>

          <Appear>
            <div>

              <Appear>
                <Text>We want to see the whole state of the application</Text>
              </Appear>

              <Appear>
                <Text>We want to know what the state of a user looks like</Text>
              </Appear>

              <Appear>
                <Text>We want to manage highly complex state like wizards</Text>
              </Appear>

              <Appear>
                <Text>We want to know what our <b>SOURCE OF TRUTH</b> is</Text>
              </Appear>

            </div>
          </Appear>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={6} textColor="tertiary">
            What problems are we trying to solve?
          </Heading>

          <Appear>
            <Image src={images.facebookNotifications} width={500} />
          </Appear>
        </Slide>

        <Slide bgColor="primary">
          <Appear>
            <div>
              <Heading size={6} textColor="tertiary">
                State management
              </Heading>

              <Appear>
                <List fit>
                  <ListItem>First popular implementation was Flux/Redux for react</ListItem>
                  <ListItem>Libraries like NGRX/NGXS/AKITA/RXJS  </ListItem>
                  <ListItem>They aim to solve spaghetti event soup between components</ListItem>
                  <ListItem>Use Streams of data to waterfall changes between components</ListItem>
                </List>
              </Appear>
            </div>
          </Appear>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading fit size={6}>
            State management - What does it look like?
          </Heading>

          <Appear>
            <Image src={images.reduxGraph} width={700} />
          </Appear>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6}>
            Cons
          </Heading>

          <Appear>
            <List fit>
              <ListItem>Learning curve on observables</ListItem>
              <ListItem>Libraries like NGRX can be scary</ListItem>
              <ListItem>If you want the full potential, you need to implement throughout the application</ListItem>
              <ListItem>Easy to get in an event loop, unintended side effects</ListItem>
            </List>
          </Appear>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6}>
            Pros
          </Heading>

          <Appear>
            <List fit>
              <ListItem><b>SINGLE SOURCE OF TRUTH</b> - know where your changes go through</ListItem>
              <ListItem>drive changes off user behaviour</ListItem>
              <ListItem>You can send updates across the application</ListItem>
              <ListItem>Testable - test state between actions</ListItem>
            </List>
          </Appear>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading fit size={6}>
            What if i dont want to / cant implement a framework like NGRX?
          </Heading>

          <Appear>
            <div>
              <Text>Use RXJS, already built-in</Text>
              <Image src={images.tigerKingWaterJet} width={500} />
            </div>
          </Appear>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading fit size={6}>
            Implementing state management at a feature level.
          </Heading>

          <Appear>
            <List fit>
              <ListItem>Concept of Ephemeral-State in components - Michael Hladky</ListItem>
              <ListItem>Scope state-management into feature areas</ListItem>
              <ListItem>Nice way to strangle towards global state management</ListItem>
              <ListItem>scope to smart container components / services</ListItem>
            </List>
          </Appear>

          <Appear textSize={24}>
            <a href="https://dev.to/rxjs/research-on-reactive-ephemeral-state-in-component-oriented-frameworks-38lk" >
              Research on Reactive-Ephemeral-State in component-oriented frameworks - Michael Hladky
            </a>
          </Appear>
        </Slide>

        <Slide bgColor="primary" textColor="secondary">
          <Heading size={6}>
            Aims
          </Heading>

          <Appear>
            <List fit>
              <ListItem>dispatch <u>State Slices</u> to update state object</ListItem>
              <ListItem>handle <u>Side effects</u> like route params updating</ListItem>
              <ListItem>Use <u>Selectors</u> to query the data you need</ListItem>
              <ListItem>Ability to easily <u>Unsubscribe</u></ListItem>
              <ListItem>keep the benefits of Redux/Flux</ListItem>
            </List>
          </Appear>
        </Slide>

        <Slide>
          <Heading>
            Examples
          </Heading>
          <Image src={images.thatsScrum} width={500} />
        </Slide>

        <Slide>
          <Image src={images.ronSwansonWth} width={500} />
        </Slide>

        <Slide>
          <Heading textColor="tertiary" size={5}>
            Experiences so far
          </Heading>
          <List textSize={32}>
            <Appear>
              <ListItem>
                Better control of whats happening
              </ListItem>
            </Appear>

            <Appear>
              <ListItem>
                Easier testing, only need to test the state at the end of the actions
              </ListItem>
            </Appear>

            <Appear>
              <ListItem>
                driving off user behaviours means we think about what the user will want to see
              </ListItem>
            </Appear>

            <Appear>
              <ListItem>
                refactoring means either merging or adding new subjects
              </ListItem>
            </Appear>

            <Appear>
              <ListItem>
                Easy to find source of bugs
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide>
          <Heading textColor="tertiary" size={5}>
            Key points
          </Heading>
          <List textSize={32}>
            <Appear>
              <ListItem>
                Build for reactivity, top => down
              </ListItem>
            </Appear>

            <Appear>
              <ListItem>
                Dont mutate references, change and send updates
              </ListItem>
            </Appear>

            <Appear>
              <ListItem>
                You need state management, no matter the size of application
              </ListItem>
            </Appear>

            <Appear>
              <ListItem>
                Observables are scary, but are insanely powerful
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide>
          <Heading size={3}>Thanks!</Heading>
          <List>
            <ListItem textSize={32}>
              <S type="bold">Slides & code:</S> github.com/reissjarvis
            </ListItem>
            <ListItem textSize={32}>
              <S type="bold">Spectacle:</S> https://github.com/FormidableLabs/spectacle
            </ListItem>
          </List>
          <Image src={images.wave} width={500} />
        </Slide>
      </Deck>
    );
  }
}
