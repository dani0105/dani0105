import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {
  ContainerTime,
  Timeline,
  TimelineTitle
} from './timeline.styles';

interface TimelineMark {
  title: string,
  link?: string,
  content: string
}

interface Props {
  intercalate: boolean,
  left: boolean,
  data: TimelineMark[]
}

export class TimelineComponent extends React.Component<Props> {
  render() {
    let { left } = this.props;
    return (
      <Timeline left={left} intercalate={this.props.intercalate}>
        {this.props.data.map((data) => {
          if (this.props.intercalate) {
            left = !left;
          }
          return (
            <ScrollAnimation key={data.title} className="large-animation" initiallyVisible={false} animateOnce animateIn={left ? 'fadeInLeftBig' : 'fadeInRightBig'}>
              <ContainerTime left={left} intercalate={this.props.intercalate}>
                <TimelineTitle className="title">
                  {data.link ? (<a href={data.link}>{data.title}</a>) : data.title}
                </TimelineTitle>
                <span className="text text-justify">
                  {data.content}
                </span>
              </ContainerTime>
            </ScrollAnimation>
          );
        })}
      </Timeline>
    );
  }
}
