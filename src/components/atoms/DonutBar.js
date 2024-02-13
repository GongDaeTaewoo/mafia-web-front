import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import * as d3 from 'd3';
import theme from '../../styles/theme';

/** @jsxImportSource @emotion/react */

function DonutBar({ value, total, unit, className, css }) {
  const svgRef = useRef();
  const width = 100;
  const height = 100;
  const outerRadius = width / 2;
  const innerRadius = outerRadius * 0.8;
  const arcColor = [
    theme.color.MAFIA_RED,
    theme.color.MAFIA_GOLD,
    theme.color.MAFIA_BLUE,
  ][Math.floor((value / total) * 3)];
  const cssObject = emotionCss(
    { minWidth: '2rem', minHeight: '2rem', padding: '0' },
    css,
  );

  const createArc = (ratio) =>
    d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .endAngle(2 * Math.PI * ratio)
      .startAngle(0)
      .cornerRadius(50)();

  let unitText;
  switch (unit) {
    case theme.donutBarUnit.NONE:
      unitText = undefined;
      break;
    case theme.donutBarUnit.PERCENTAGE:
      unitText = (
        <text
          textAnchor="middle"
          dominantBaseline="middle"
          fill={theme.color.MAFIA_WHITE}
          fontSize={outerRadius / 2}
        >
          {(value * 100) / total}%
        </text>
      );
      break;
    case theme.donutBarUnit.FRACTION:
      unitText = (
        <text
          textAnchor="middle"
          dominantBaseline="middle"
          fill={theme.color.MAFIA_WHITE}
          fontSize={outerRadius / 3}
        >
          {value}/{total}
        </text>
      );
      break;
    default:
      unitText = undefined;
  }

  useEffect(() => {
    if (svgRef.current) {
      d3.select(svgRef.current)
        .select('.meter')
        .transition()
        .duration(1000)
        .attrTween('d', () => {
          const interpolate = d3.interpolate(0, value / total);
          return (time) => {
            const newRatio = interpolate(time);
            return createArc(newRatio);
          };
        });
    }
  }, [svgRef]);

  return (
    <svg
      viewBox="0 0 100 100"
      ref={svgRef}
      className={className}
      css={cssObject}
    >
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        <path
          d={createArc(1.0)}
          opacity="0.4"
          fill={theme.color.MAFIA_LIGHT_GRAY}
        />
        <path
          className="meter"
          d={createArc(0)}
          opacity="1.0"
          fill={arcColor}
        />
        {unitText}
      </g>
    </svg>
  );
}

DonutBar.defaultProps = {
  unit: theme.donutBarUnit.NONE,
  className: '',
  css: emotionCss({}),
};

DonutBar.propTypes = {
  value: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  unit: PropTypes.oneOf(Object.values(theme.donutBarUnit)),
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
};

export default DonutBar;
