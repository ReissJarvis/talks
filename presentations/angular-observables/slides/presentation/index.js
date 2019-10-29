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
  Fill
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif'),
  explosion: require('../assets/gifs/explosion.gif')
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
              <Cite margin="10px 0 0 30px">ReactJS based Presentation Library</Cite>
            </BlockQuote>
          </Appear>
          <Appear>
            <Image src={images.explosion} width={500} />
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
              Overview
          </Heading>
          <List>
            <ListItem>What is an observable</ListItem>
            <ListItem>Observables vs Promises vs Functions</ListItem>
            <ListItem>Pipes</ListItem>
            <ListItem>Subjects</ListItem>
            <ListItem>Dont forget to unsubscribe</ListItem>
            <ListItem>Common mistakes</ListItem>
            <ListItem>Some useful patterns</ListItem>
          </List>
        </Slide>

        <Slide>

        </Slide>

        <Slide fit bgColor="quartenary">
          <Heading size={6} textColor="secondary" lineHeight={1} caps>
            Observables
          </Heading>

          <Text margin="20px 0 20px 0 " textColor="tertiary" fit bold>
            Observables are lazy Push collections of multiple values
          </Text>
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
              <ListItem>Support for stream of values</ListItem>
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
          <Heading>
            Pipes & Operators
          </Heading>

          <List>
            <ListItem>Pipe is a function to chain operators together</ListItem>
            <ListItem>Operators are pure functions</ListItem>
            <ListItem>Pipeable Operators / creation operators</ListItem>
            <ListItem>operators are the most powerful part of observables</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading>
            Pipes & Operators
          </Heading>

          <List>
            <ListItem>Pipe is a function to chain operators together</ListItem>
            <ListItem>Operators are pure functions</ListItem>
            <ListItem>Pipeable Operators / creation operators</ListItem>
            <ListItem>operators are the most powerful part of observables</ListItem>
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
            { loc: [0, 4], note: "Pure function to where even numbers return true" },
            { loc: [4, 16] },
            { loc: [17, 24] },
          ]}>
        </CodeSlide>
        <Slide>
          <Heading>Who Wants to be an operator?</Heading>
        </Slide>
        <Slide>
          <Heading>
            Subjects
          </Heading>
          <CodePane margin="20px 0 0 30px" style="font-size:20px" lang="javascript"
                    source={"var subject = new Subject();\nsubject.subscribe(value => console.log(value);\nsubject.next('VALUE');"}/>
        </Slide>

        <Slide>
          <Heading>
            Unsubscribe
          </Heading>

        </Slide>

        <Slide>
          <Heading textColor="tertiary" size={5}>
            Unsubscribe - Why?
          </Heading>
          <Text>Memory leaks</Text>
          <Text>Garbage collections thinks its still in use</Text>
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
          <Heading>
            Patterns
          </Heading>

        </Slide>

        <Slide>
          <Heading>
            Pitfalls
          </Heading>

        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.formidagon} width={800} />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem bulletStyle="star">Item 1</ListItem>
            <ListItem bulletStyle="cross">Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite margin="10px 0 0 30px">Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Image src={images.goodWork} width={500} />
          <Notes>gifs work too</Notes>
        </Slide>
      </Deck>
    );
  }
}
