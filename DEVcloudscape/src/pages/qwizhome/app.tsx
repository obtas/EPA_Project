// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import HelpPanel from '../qwizhome/components/helppanel';

import Breadcrumbs from '../../components/breadcrumbs';
import Navigation from '../../components/navigation';
import ShellLayout from '../../layouts/shell';
import VariationsTable from './components/question-table';

import { variationsData } from './data';

export default function App() {
  return (
    <ShellLayout
      contentType="table"
      breadcrumbs={<Breadcrumbs active={{ text: 'Questions', href: '/qwizhome/index.html' }} />}
      navigation={<Navigation />}
      tools={<HelpPanel></HelpPanel>}
    >
      <VariationsTable />
    </ShellLayout>
  );
}
