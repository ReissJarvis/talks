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
  Notes,
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
  Fit,
  S
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  goodWork: require('../assets/good-work.gif'),
  explosion: require('../assets/gifs/explosion.gif'),
  reissMonkey: require('../assets/imgs/reiss-monkey.png'),
  robotBattery: require('../assets/gifs/robot-battery.gif'),
  unsubscribe: require('../assets/gifs/unsubscribe.gif'),
  rubbish: require('../assets/gifs/rubbish.gif'),
  questions: require('../assets/gifs/questions.gif'),
  wave: require('../assets/gifs/wave.gif'),
  order: require('../assets/gifs/order.gif'),
  delicious: require('../assets/gifs/delicious.gif'),
  getout: require('../assets/gifs/getout.gif'),
  disorder: require('../assets/gifs/disorder.gif'),
  excited: require('../assets/gifs/overexcited.gif')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
    {
      primary: "white",
      secondary: "#1F2022",
      tertiary: "#03A9FC",
      quartenary: "#CECECE"
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
              Angular: Observables
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
              Deep dive into Observables, patterns and pit falls
          </Text>
          <Appear>
            <Text textSize={24}>* With Bercow gifs</Text>
          </Appear>
          <Appear>
            <Image src={images.disorder} width={500} />
          </Appear>
        </Slide>

        <Slide bgColor="quartenary">
          <BlockQuote >
            <Quote>Ironic</Quote>
            <Cite margin="10px 0 0 30px">happening in a way contrary to what is expected, and typically causing wry amusement because of this.</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgColor="quartenary">
          <Heading size={6} textColor="secondary" caps>
            Technology
          </Heading>
          <Appear>
            <BlockQuote>
              <Quote>Built in Spectacle</Quote>
              <Cite margin="10px 0 0 30px">ReactJS based Presentation Library built by Formidable</Cite>
            </BlockQuote>
          </Appear>
          <Appear>
            <Image src={images.explosion} width={500} />
          </Appear>
        </Slide>

        <Slide>
          <Heading size={3} textColor="tertiary" caps>Etiquette</Heading>
          <List>
            <ListItem>Ask away - a challenge to challenge</ListItem>
            <ListItem>I can "try" to code some explanations if needed</ListItem>
          </List>

          <Image src={images.questions} width={500} />
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
              Overview
          </Heading>
          <List>
            <ListItem>Observables: What it is, what it looks like</ListItem>
            <ListItem>Observables vs Promises vs Functions</ListItem>
            <ListItem>Pipes</ListItem>
            <ListItem>Subjects</ListItem>
            <ListItem>Unsubscribe</ListItem>
            <ListItem>Code examples</ListItem>
            <ListItem>Common bad habits</ListItem>
          </List>
        </Slide>

        <Slide>
            <Heading size={3} textColor="tertiary" caps>Me</Heading>
            <Layout>
                <Fill width="70%">
                    <List>
                        <ListItem>US Core Lead</ListItem>
                        <ListItem>Frontend frameworks</ListItem>
                        <ListItem>Anything javascript</ListItem>
                        <ListItem>Craft Beer</ListItem>
                    </List>
                </Fill>
                <Fill>
                  <Image src={images.reissMonkey} width={300} />
                </Fill>
            </Layout>

        </Slide>

        <Slide>
          <Heading size={6} textColor="tertiary" lineHeight={1} caps>
            Observables
          </Heading>

          <Text margin="20px 0 20px 0 " fit bold>
            Observables are lazy Push collections of multiple values
          </Text>

          <Text margin="20px 0 20px 0 "  fit bold>
            Part of RxJS - Functional approach to deal with events
          </Text>
          <Image src={images.excited} width={500} />
        </Slide>

        <CodeSlide
          fill
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code-examples/observable-simple.ts")}
          ranges={[
            { loc: [0, 16]},
            { loc: [0, 1], title: "Create Observable" },
            { loc: [1, 10], title: "function callback" },
            { loc: [1, 2], title: "Subscriber Object" },
            { loc: [2, 3], title: "'Publish' a value" },
            { loc: [5, 9], title: "Simulate an async operation" },
            { loc: [11, 15], title: "Subscribe to the observable"},
            { loc: [16, 20] },
          ]}>
        </CodeSlide>

        <Slide>
          <Heading textColor="tertiary" size={5}>
            Observables vs Promises vs Functions
          </Heading>

          <Table fit margin="20px 0 0 0">
            <TableHeader>
              <TableRow>
                <TableHeaderItem/>
                <TableHeaderItem>Single</TableHeaderItem>
                <TableHeaderItem>Multiple</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableHeaderItem>Pull</TableHeaderItem>
                <TableItem padding="20px">Function</TableItem>
                <TableItem padding="20px">Iterator</TableItem>
              </TableRow>
              <TableRow>
                <TableHeaderItem>Push</TableHeaderItem>
                <TableItem padding="20px">Promise</TableItem>
                <TableItem padding="20px">Observable</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>

        <Slide bgColor="quartenary">
          <Heading size={6}>
            Some definitions for the road ahead
          </Heading>

          <BlockQuote>
            <Quote>Synchronous</Quote>
            <Cite margin="20px 0 0 30px">Statements executed in sequence</Cite>
            <CodePane margin="20px 0 0 30px" style="font-size:20px" lang="javascript" source={"console.log('1') \nconsole.log('2')"}/>
          </BlockQuote>
        </Slide>

        <Slide bgColor="quartenary">
          <BlockQuote>
            <Quote>Asynchronous</Quote>
            <Cite margin="20px 0 0 30px">Statements executed outside the sequence</Cite>
            <CodePane margin="20px 0 0 30px" style="font-size:20px" lang="javascript" source={"console.log('1')\nsetTimeout(() => console.log('3'), 5000)\nconsole.log('2')"}/>
          </BlockQuote>
        </Slide>

        <Slide bgColor="quartenary">
          <BlockQuote>
            <Quote>Lazy Evaluation</Quote>
            <Cite margin="20px 0 0 30px">Delays the evaluation of an expression until its value is needed e.g. the value is evaluated when requested.</Cite></BlockQuote>
        </Slide>

        <Slide bgColor="quartenary">
          <BlockQuote>
            <Quote>Eager Evaluation</Quote>
            <Cite margin="20px 0 0 30px">Expression is evaluated as soon as it is bound to a variable</Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading size={6}>
            Functions
          </Heading>
          <CodePane style="font-size:20px" lang="javascript" source={require("raw-loader!../assets/code-examples/simple-function.js")}/>
          <List>
            <ListItem>Lazily evaluated</ListItem>
            <ListItem>Synchronously returns single value</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={6}>
            Iterator / Generator
          </Heading>

          <CodePane style="font-size:20px" lang="javascript" source={require("raw-loader!../assets/code-examples/simple-iterator-function.js")}/>

          <List>
            <ListItem>Lazily evaluated</ListItem>
            <ListItem>Synchronously returns zero -> infinite values</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={6}>
            Promises
          </Heading>

          <CodePane style="font-size:20px" lang="javascript" source={require("raw-loader!../assets/code-examples/simple-promise.js")}/>

          <List>
            <ListItem>Eagerly evaluated</ListItem>
            <ListItem>Computation that produces a single value</ListItem>
            <ListItem>Synchronous or asynchronous</ListItem>
            <ListItem>might not produce a value</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={6}>
            Observables
          </Heading>
          <List>
            <ListItem>lazily evaluated</ListItem>
            <ListItem>Synchronous or asynchronous</ListItem>
            <ListItem>0 -> infinite from time its invoked</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading>Benefits</Heading>
          <List>
            <Appear>
              <ListItem>Supports a stream of values</ListItem>
            </Appear>
            <Appear>
              <ListItem>Cancelable</ListItem>
            </Appear>
            <Appear>
              <ListItem>Use of operators - utilities</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide>
          <Heading size={3} textColor="tertiary">
            Pipes & Operators
          </Heading>

          <Image src={images.robotBattery} width={500}/>
        </Slide>

        <Slide>
          <Heading size={3} textColor="tertiary">
            Pipes & Operators - What?
          </Heading>

          <List>
            <ListItem>.pipe() chains operators together</ListItem>
            <ListItem>Operators are pure functions</ListItem>
            <ListItem>Operators are the most powerful part of observables</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={3} textColor="tertiary">
            Operators - Types
          </Heading>

          <List>
            <ListItem>Creation</ListItem>
            <ListItem>Combination</ListItem>
            <ListItem>Conditional</ListItem>
            <ListItem>Conditional</ListItem>
            <ListItem>Error Handling</ListItem>
            <ListItem>Multicasting</ListItem>
            <ListItem>Filtering</ListItem>
            <ListItem>Transformation</ListItem>
            <ListItem>Utility</ListItem>
          </List>
        </Slide>

        <CodeSlide
          fill
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code-examples/operators.ts")}
          ranges={[
            { loc: [4, 24]},
            { loc: [4, 16], note: "Observable with pipeable filter operator" },
            { loc: [17, 24], note: "Array with filter method" },
            { loc: [0, 4], note: "Pure function where even numbers return true" },
            { loc: [4, 16] },
            { loc: [17, 24] },
          ]}>
        </CodeSlide>

        <Slide>
          <Heading size={3} textColour="tertiary">
            Creation Operators
          </Heading>

          <CodePane style="font-size:20px" lang="javascript" source={"of(1,2,3,4,5);\nfrom([1,2,3,4,5]);\nfromEvent(document, 'click');\najax('URLHERE')"}/>
        </Slide>

        <Slide>
          <Heading size={3} textColour="tertiary">
            Popular Operators
          </Heading>

          <CodePane style="font-size:20px" lang="javascript" source={"map((value) => newValue);\nswitchMap((value) => Observable);\nflatMap((value) => Observable);"}/>
        </Slide>

        <Slide>
          <Heading>Who Wants to be an operator?</Heading>
        </Slide>
        <Slide>
          <Heading>
            Subjects
          </Heading>
          <CodePane margin="20px 0 0 30px" style="font-size:20px" lang="javascript"
                    source={"var subject = new Subject();\n\nsubject.subscribe(value => console.log(value);\n//Ouput: 1\n\nsubject.next(1);"}/>
        </Slide>

        <Slide>
          <Heading size={6}>
            Subjects - Types
          </Heading>

          <List>
            <ListItem>Subject</ListItem>
            <ListItem>Behaviour Subject</ListItem>
            <ListItem>Reply Subject</ListItem>
            <ListItem>Async Subject</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading>
            Unsubscribe
          </Heading>

          <Image src={images.unsubscribe} width={500}/>
        </Slide>

        <Slide>
          <Heading textColor="tertiary" size={5}>
            Unsubscribe - Why?
          </Heading>
          <Text margin="20px">Memory leaks</Text>
          <Image src={images.rubbish} width={500}/>
        </Slide>

        <Slide>
          <Heading textColor="tertiary" size={5}>
            Unsubscribe - Simple
          </Heading>
          <CodePane style="font-size:20px" lang="javascript" source={require("raw-loader!../assets/code-examples/simple-unsubscribe.ts")}/>
        </Slide>

        <Slide>
          <Heading textColor="tertiary" size={5}>
            Unsubscribe - dont want to worry? use a pipe
          </Heading>
          <CodePane fit style="font-size:20px" lang="javascript" source={require("raw-loader!../assets/code-examples/pipe-unsubscribe.ts")}/>

          <CodePane margin="20px 0 0 0" fit style="font-size:20px" lang="html" source={require("raw-loader!../assets/code-examples/pipe-unsubscribe.html")}/>
        </Slide>

        <Slide>
          <Heading textColor="tertiary" size={5}>
            Unsubscribe - more then one? use takeUntil
          </Heading>
          <CodePane style="font-size:20px" lang="javascript" source={require("raw-loader!../assets/code-examples/subject-unsubscribe.ts")}/>
        </Slide>

        <Slide>
          <Heading textColor="tertiary" size={5}>
            Unsubscribe - takeUntil word of warning
          </Heading>
          <Text>Do it at the very end of the .pipe() chain</Text>
          <Image src={images.order} width={300} />
        </Slide>

        <Slide>
          <Heading textColor="tertiary" size={5}>
            Unsubscribe - Angular saving the day
          </Heading>
          <List>
            <ListItem>
              Async pipes
            </ListItem>
            <ListItem>
              Route params
            </ListItem>
            <ListItem>
              HttpClient
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading>
            Examples
          </Heading>
          <Image src={images.delicious} width={500} />
        </Slide>

        <Slide>
          <Heading textColor="tertiary" size={5}>
            Common bad habits
          </Heading>
          <List>
            <ListItem textSize={32}>
              "forkJoin" completion misunderstanding
            </ListItem>
            <ListItem textSize={32}>
              Misunderstanding pipes - read the documentation
            </ListItem>
            <ListItem textSize={32}>
              Subscribing in a subscribe
            </ListItem>
            <ListItem textSize={32}>
              Subscribe & assign
            </ListItem>
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
            <ListItem textSize={32}>
              <S type="bold">learn RxJS:</S> https://www.learnrxjs.io/
            </ListItem>
          </List>
          <Image src={images.wave} width={500} />
        </Slide>
      </Deck>
    );
  }
}
