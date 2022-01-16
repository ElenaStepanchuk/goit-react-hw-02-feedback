import React, { Component } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";
export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  statisticsValue = (event) => {
    this.setState((prevState) => ({
      [event]: prevState[event] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good * 100) / (good + neutral + bad));
  };
  render() {
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.statisticsValue}
        />
        <Section />
        <Section title="Statistics" />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={total}
          positivePercentage={percentage}
        />
        <Section />
        <Notification message="There is no feedback" total={total} />
      </>
    );
  }
}
