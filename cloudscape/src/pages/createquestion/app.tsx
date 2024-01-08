import React, { useState } from 'react';
import Button from '@cloudscape-design/components/button';
import Form from '@cloudscape-design/components/form';
import Header from '@cloudscape-design/components/header';
import HelpPanel from '@cloudscape-design/components/help-panel';
import SpaceBetween from '@cloudscape-design/components/space-between';
import ContentLayout from '@cloudscape-design/components/content-layout';
import FormField from '@cloudscape-design/components/form-field';
import Tiles from '@cloudscape-design/components/tiles';
import Container from '@cloudscape-design/components/container';
import Multiselect, { MultiselectProps } from '@cloudscape-design/components/multiselect';
import RadioGroup from '@cloudscape-design/components/radio-group';
import Textarea from '@cloudscape-design/components/textarea';
import ColumnLayout from '@cloudscape-design/components/column-layout';
import Input from '@cloudscape-design/components/input';

import Breadcrumbs from '../../components/breadcrumbs';
import Navigation from '../../components/navigation';
import ShellLayout from '../../layouts/shell';
import axios from 'axios';

import {
  LEVEL_OPTIONS,
  ROLE_OPTIONS,
  QUESTION_TYPE_OPTIONS,
} from './create-config'

const isEmptyString = (value: string) => !value?.length;

export default function App() {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [level, setLevel] = useState(LEVEL_OPTIONS[0].value);
    const [job_role, setJob_role] = useState(ROLE_OPTIONS[0].value);
    const [question_type, setQuestion_type] = useState(QUESTION_TYPE_OPTIONS[0].value);
    const [question, setQuestion] = useState('');
    const [answer, SetAnswer] = useState('');
    // const [Role, setRole] = useState('')
    const handleSubmit = async (event:  React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      // Your API Gateway URL for the PUT request
      const apiUrl = 'https://samilafo-qwiz-api.samilafo.people.aws.dev/put-question';

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
          } else {
              // Handle error response
              console.error('PUT request failed');
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
      tools={<HelpPanel header={<h2>Help panel</h2>} />}
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