import React, { PureComponent } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';

const data = [
  {
    subject: 'Happy',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Joyful',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Irritated',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Sad',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Anger',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Sorrow',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <RadarChart
        cx={150}
        cy={150}
        outerRadius={100}
        width={400}
        height={300}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#0099b2"
          fill="#9bd933"
          fillOpacity={0.6}
        />
      </RadarChart>
    );
  }
}
