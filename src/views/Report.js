import { Card, Row, Col } from 'antd';

import HappinessChart from '../components/HappinessChart';
import MoodCard from '../components/MoodCard';
import MoodRadarChart from '../components/MoodRadarChart';
import DiaryChart from '../components/DiaryChart';
import { useState, useEffect } from 'react';

export default function Report() {
  const [query, setQuery] = useState(undefined);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    let res = localStorage.getItem('mindPalace');
    if (res) {
      res = JSON.parse(res);
      console.log(res);
      setQuery(res.query);
      setData(res.response);
    }
  }, []);

  return (
    <div>
      <div className="daily-stats">
        <div className="daily-stats-card">{query}</div>
        <div className="daily-stats-card">
          <MoodCard data={data} />
        </div>
      </div>
      <div className="daily-stats">
        <div className="weekly-stats-card">
          <Row>
            <h1>Your Weekly DreamCare Statistics</h1>
            <h6>(Placeholder data for the purpose of the hack)</h6>
          </Row>
          <Row justify="center">
            <Col>
              <MoodRadarChart />
              Overall Mood Radar Chart
            </Col>
            <Col>
              <HappinessChart />
              Weekly Happiness Chart
            </Col>
            <Col>
              <DiaryChart />
              Dream Journaling Frequency
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
