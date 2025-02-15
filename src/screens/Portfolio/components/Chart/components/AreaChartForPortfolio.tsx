import React, { useCallback, useMemo } from 'react';
import withMemo from 'HOC/withMemo';
import { IFormatDataChart } from 'interfaces/common';
import AreaChart from 'components/Chart/AreaChart';
import { lightColors } from 'styles';
import { formatNumber, mapV2 } from 'utils';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { Text } from 'react-native';
import { useStyles } from './ChartLegendStyles';
import { FORMAT_CONFIG } from './constants';

type IAreaChartForPortfolioProps = {
  data: IFormatDataChart[];
  onChangeEnableScroll: (enable: boolean) => void;
};

const AreaChartForPortfolio = (props: IAreaChartForPortfolioProps) => {
  const { t } = useTranslation();
  const { styles } = useStyles();
  const PortfolioScreen_areaTooltipText = useCallback(
    (value: string) => {
      return `${t('NAV Asset')}: ${value}`;
    },
    [t]
  );
  const { areaDataY, unit, maxY, minY, xLabelList, dateLabelList, yAxisFormatLabel } = useMemo(() => {
    const areaDataY = mapV2(props.data, item => item.y);
    const maxY = Math.max(...areaDataY);
    const minY = Math.min(...areaDataY);
    const maxAbsY = Math.max(Math.abs(maxY), Math.abs(minY));

    const config = (() => {
      if (maxAbsY < 1000) {
        return FORMAT_CONFIG[0];
      }
      if (maxAbsY < 1000000) {
        return FORMAT_CONFIG.K;
      }
      if (maxAbsY < 1000000000) {
        return FORMAT_CONFIG.M;
      }
      return FORMAT_CONFIG.B;
    })();
    const smallestDivision = (maxY - minY) / config.divider;

    const yAxisFormatLabel = (value: number) => {
      return `${formatNumber(value / config.divider, 4, undefined, false)}`;
    };

    return {
      areaDataY,
      maxY,
      minY: smallestDivision <= 0.01 ? maxY : minY, // If division is too small, we will set minY = maxY to prevent yLabel overflow
      xLabelList: mapV2(props.data, item => `${item.xLabel}`),
      dateLabelList: mapV2(props.data, item => `${item.date}`),
      unit: config.unit,
      yAxisFormatLabel,
    };
  }, [props.data]);

  return (
    <>
      <AreaChart
        areaData={areaDataY}
        areaLineColor={lightColors.DARK_GREEN}
        areaPointColor={lightColors.DARK_GREEN}
        areaTooltipPointSize={5}
        areaTooltipText={PortfolioScreen_areaTooltipText}
        toolTipDistanceFromTop={10}
        tooltipDataOpacity={1}
        tooltipDataFontSize={12}
        tooltipDataFontWeight={'bold'}
        tooltipDataColor={lightColors.DARK_GREEN}
        yMax={maxY}
        yMin={minY}
        onDisableScroll={props.onChangeEnableScroll}
        xLabelList={xLabelList}
        yAxisFormatLabel={yAxisFormatLabel}
        yAxisWidth={40}
        extraXAxisWidth={20}
        chartWidth={350}
        chartHeight={200}
        tooltipWidth={160}
        tooltipHeight={60}
        toolTipDateDistanceFromTop={-10}
        tooltipBorderRadius={10}
        tooltipBorderColor={lightColors.DARK_GREEN}
        tooltipBackgroundColor={lightColors.WHITE}
        tooltipPaddingLeft={5}
        tooltipDateColor={lightColors.BLACK}
        tooltipDateOpacity={1}
        tooltipDateFontSize={12}
        xAxisLabelFontSize={11}
        xAxisLabelColor={lightColors.BLACK}
        xAxisLabelDistance={0}
        yAxisLabelFontSize={11}
        yAxisLabelPaddingLeft={0}
        yAxisLabelColor={lightColors.BLACK}
        xAxisLabelContainerHeight={60}
        numberOfTicksYAxis={5}
        numberOfTicksXAxis={5}
        extraSpaceForYAxis={3}
        extraSpaceForInnerChartRight={20}
        tooltipDateFontWeight={'bold'}
        showXAxis={true}
        dateLabelList={dateLabelList}
      />
      <View style={styles.chartValueContainer}>
        <View style={styles.containerItem}>
          <View style={styles.chartValueLineNAV} />
          <Text allowFontScaling={false} style={styles.noteText}>
            {t('NAV')} {unit !== '' && `(${t(unit)})`}
          </Text>
        </View>
      </View>
    </>
  );
};

export default withMemo(AreaChartForPortfolio);
