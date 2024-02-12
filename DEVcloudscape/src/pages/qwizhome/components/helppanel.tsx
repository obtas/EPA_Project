import * as React from "react";
import HelpPanel from "@cloudscape-design/components/help-panel";
import Icon from "@cloudscape-design/components/icon";

export default function Helppanel() {
  return (
    <HelpPanel
      footer={
        <div>
          <h3>
            Qwiz Guru <Icon name="external" />
          </h3>
          <h6>2024 Qwiz Guru - samilafo. All rights reserved.</h6>
        </div>
      }
      header={<h2>Qwiz Guru - Help (h2)</h2>}
    >
      <div>
      <ul>
            <li><a href="#how-to-use">How to Use this Site</a></li>
            <li><a href="#faq">Frequently Asked Questions</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#interview-tips">Interview Tips</a></li>
            <li><a href="#community-forum">Community Forum</a></li>
            <li><a href="#feedback">Feedback & Suggestions</a></li>
            <li><a href="#privacy">Privacy & Security</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#accessibility">Accessibility</a></li>
            <li><a href="#about-us">About Us</a></li>
        </ul>
        <h3>How to Use This Site</h3>
        <p>
          Find step-by-step instructions on navigating <i>Qwiz Guru</i> 
          and making the most of your experience.
        </p>

        <h5>Question Table</h5>
        <dl>
          <dt>Level</dt>
          <dd>This is the level the role is for.</dd>
          <dt>Role</dt>
          <dd>This is the role the question is applicable to.</dd>
          <dt>Question Type</dt>
          <dd>This is describes the type of question.</dd>
          <dt>Question and Answer</dt>
          <dd>This is the question and answer.</dd>
        </dl>
      </div>
    </HelpPanel>
  );
}