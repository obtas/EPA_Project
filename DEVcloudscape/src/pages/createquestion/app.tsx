import React, { useState } from 'react';
import Button from '@cloudscape-design/components/button';
import Form from '@cloudscape-design/components/form';
import Header from '@cloudscape-design/components/header';
import HelpPanel from '../qwizhome/components/helppanel';
import SpaceBetween from '@cloudscape-design/components/space-between';
import ContentLayout from '@cloudscape-design/components/content-layout';
import FormField from '@cloudscape-design/components/form-field';
import Container from '@cloudscape-design/components/container';
import RadioGroup from '@cloudscape-design/components/radio-group';
import Input from '@cloudscape-design/components/input';
import Flashbar from "@cloudscape-design/components/flashbar";

import Breadcrumbs from '../../components/breadcrumbs';
import Navigation from '../../components/navigation';
import ShellLayout from '../../layouts/shell';

import {
  LEVEL_OPTIONS,
  ROLE_OPTIONS,
  QUESTION_TYPE_OPTIONS,
} from './create-config'

const isEmptyString = (value: string) => !value?.length;

type MessageDefinition = {
  type?: "success" | "error" | "info" | "warning"; // Adjust based on the expected types
  content: string;
  header?: string;
  action?: React.ReactNode;
  dismissible?: boolean;
  dismissLabel?: string;
  onDismiss?: () => void;
  id?: string;
};

interface FlashItem {
  type: string;
  content: string;
  action: JSX.Element;
  dismissible: boolean;
  dismissLabel: string;
  onDismiss: () => void;
  id: string;
}

export default function App() {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [level, setLevel] = useState(LEVEL_OPTIONS[0].value);
    const [job_role, setJob_role] = useState(ROLE_OPTIONS[0].value);
    const [question_type, setQuestion_type] = useState(QUESTION_TYPE_OPTIONS[0].value);
    const [question, setQuestion] = useState('');
    const [answer, SetAnswer] = useState('');
    const [items, setItems] = React.useState<MessageDefinition[]>([]);

    const handleSubmit = async (event:  React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      // Your API Gateway URL for the PUT request
      const apiUrl = 'https://dev-samilafo-qwiz-api.samilafo.people.aws.dev/put-question';

      try {
          const response = await fetch(apiUrl, {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  level,
                  job_role,
                  question_type,
                  question,
                  answer,
              }),
          });

          if (response.ok) {
              // Handle successful response
              console.log('PUT request successful');
              setLevel(LEVEL_OPTIONS[0].value);
              setJob_role(ROLE_OPTIONS[0].value);
              setQuestion_type(QUESTION_TYPE_OPTIONS[0].value)
              setQuestion('');
              SetAnswer('');
              setItems([{
                type: "success" as const,
                content: "Success - Interview question posted.",
                action: <Button href="/index.html" variant="link">View questions</Button>,
                dismissible: true,
                dismissLabel: "Dismiss message",
                onDismiss: () => setItems([]),
                id: "message_1"
              }])

          } else {
              // Handle error response
              console.error('PUT request failed');
              setItems([{
                type: "error" as const,
                header: 'Failed to post question',
                content: "Please try again",
                dismissible: true,
                dismissLabel: "Dismiss message",
                onDismiss: () => setItems([]),
                id: "message_2"
              }])
          }

      } catch (error) {
          // Handle fetch error
          console.error('Error during PUT request:', error);
      }

      setIsFormSubmitted(true);
  };

  return (
    <ShellLayout
      contentType="form"
      breadcrumbs={<Breadcrumbs active={{ text: 'Create question', href: '/createquestion/index.html' }} />}
      navigation={<Navigation/>}
      tools={<HelpPanel/>}
    >
      <ContentLayout
        header={
          <Header
            variant="h1"
            description="Submit an interview question"
          >
            Submit question
          </Header>
        }
      >
        <form
          onSubmit={handleSubmit}
        >
          <Form
            actions={
              <SpaceBetween direction="horizontal" size="xs">
                <Button href="/index.html" variant="link">
                  Cancel
                </Button>
                <Button formAction="submit" variant="primary">
                  Submit
                </Button>
              </SpaceBetween>
            }
          >
            <SpaceBetween size="l">
              <Flashbar items={items} />
              <Container header={<Header variant="h2">Role Details</Header>}>
                <SpaceBetween direction="vertical" size="l">
                  <FormField 
                    label="Level" stretch={true}
                    description="Choose the job level appropriate for this question"
                  >
                    <RadioGroup
                      value={level}
                      onChange={event => setLevel(event.detail.value)}
                      items={LEVEL_OPTIONS}
                    />
                  </FormField>
                  <FormField 
                    label="Job Role" stretch={true}
                    description="Choose the job role appropriate for this question"
                  >
                    <RadioGroup
                      value={job_role}
                      onChange={event => setJob_role(event.detail.value)}
                      items={ROLE_OPTIONS}
                    />
                  </FormField>
                </SpaceBetween>
              </Container>
              <Container header={<Header variant="h2">Question Details</Header>}>
                <SpaceBetween direction="vertical" size="l">
                  <FormField 
                    label="Question type" stretch={true}
                    description="Choose the question type appropriate for this question"
                  >
                    <RadioGroup
                      value={question_type}
                      onChange={event => setQuestion_type(event.detail.value)}
                      items={QUESTION_TYPE_OPTIONS}
                    />
                  </FormField>
                  <FormField
                      label="Interview question"
                      errorText={
                        isFormSubmitted && isEmptyString(question) && 'A question is required.'
                      }
                      i18nStrings={{
                        errorIconAriaLabel: 'Error',
                      }}
                    >
                        <Input
                            value={question}
                            onChange={({ detail }) => setQuestion(detail.value)}
                            type="text"
                        />
                  </FormField>
                  <FormField
                      label="answer"
                      errorText={
                        isFormSubmitted && isEmptyString(answer) && 'An answer is required.'
                      }
                      i18nStrings={{
                        errorIconAriaLabel: 'Error',
                      }}
                    >
                        <Input
                            value={answer}
                            onChange={({ detail }) => SetAnswer(detail.value)}
                            type="text"
                        />
                  </FormField>
                </SpaceBetween>
              </Container>
              </SpaceBetween>
          </Form>
        </form>
      </ContentLayout>
    </ShellLayout>
  );
}