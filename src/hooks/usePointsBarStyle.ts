import {useEffect, useState} from 'react';

interface PointsBarStyle {
  width: string;
  transition: string;
}

interface Props {
  points: number;
  maxPoints: number;
}

const defaultStyle = {
  width: '0',
  transition: '0s',
};

export const usePointsBarStyle = (props: Props) => {
  const [pointsBarStyle, setPointsBarStyle] =
    useState<PointsBarStyle>(defaultStyle);
  const {points, maxPoints} = props;

  useEffect(() => {
    const loadUpdatedStyle = () => {
      const width = (points / maxPoints) * 100;
      setPointsBarStyle({
        width: `${width}%`,
        transition: '.5s',
      });
    };
    setPointsBarStyle(defaultStyle);
    setTimeout(loadUpdatedStyle, 100);
  }, [points, maxPoints]);

  return {pointsBarStyle};
};
