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
// import { chocolate, fruits } from '../question-home/data';

// const options = [...fruits, ...chocolate].map(i => ({ value: i, label: i }));
const isEmptyString = (value: string) => !value?.length;

export default function App() {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [level, setLevel] = useState('');
    const [question, setQuestion] = useState('');
    const [job_role, setJob_role] = useState('');
    // const [ManagerIC, setManagerIC] = useState('');
    // const [Role, setRole] = useState('')

  const onSubmit = async () => {
    const payload = {
      'level': level,
      'question': question,
      'job_role': job_role
    };
    try {
      const response = await axios.put('https://wxesfos310.execute-api.us-west-2.amazonaws.com/prod/put-question', payload);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

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
          onSubmit={event => {
            onSubmit;
            // event.preventDefault();
            setIsFormSubmitted(true);
          }}
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
              <Container header={<Header variant="h2">Level</Header>}>
                <FormField label="Level" stretch={true}>
                  <RadioGroup
                    value={level}
                    onChange={event => setLevel(event.detail.value)}
                    // onChange={({ detail }) => setLevel(detail.value)}
                    items={[
                      {
                        value: "first",
                        label: "3"
                      },
                      {
                        value: "second",
                        label:"4"
                      },
                      { value: "third", label: "5" },
                      { value: "fourth", label: "6" },
                      { value: "fifth", label: "7" },
                    ]}
                  />
                </FormField>
              </Container>
              <Container header={<Header variant="h2">Question</Header>}>
                <SpaceBetween direction="vertical" size="l">
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
                </SpaceBetween>
              </Container>
            </SpaceBetween>
            <Container header={<Header variant="h2">Role</Header>}>
                <SpaceBetween direction="vertical" size="l">
                  <FormField
                    label="job role"
                    errorText={
                      isFormSubmitted && isEmptyString(job_role) && 'A role is required.'
                    }
                    i18nStrings={{
                      errorIconAriaLabel: 'Error',
                    }}
                  >
                      <Input
                          value={job_role}
                          onChange={({ detail }) => setJob_role(detail.value)}
                          type="text"
                      />
                  </FormField>
                </SpaceBetween>
              </Container>
          </Form>
        </form>
      </ContentLayout>
    </ShellLayout>
  );
}
