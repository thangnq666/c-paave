import { getStylesHook } from 'hooks/useStyles';
import { lightColors } from 'styles';

export const useStyles = getStylesHook({
  tableContainer: {
    width: 130,
    borderBottomColor: lightColors.BORDER,
    borderBottomWidth: 1,
    borderRightColor: lightColors.BORDER,
    borderRightWidth: 1,
    paddingLeft: 8,
    justifyContent: 'center',
    backgroundColor: lightColors.WHITE,
    zIndex: 1,
  },
  tableHeaderFrozen: {
    width: 130,
    height: 60,
    borderBottomColor: lightColors.BORDER,
    borderBottomWidth: 1,
    borderRightColor: lightColors.BORDER,
    borderRightWidth: 1,
    borderTopColor: lightColors.BORDER,
    borderTopWidth: 1,
    paddingLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightColors.LIGHTTitleTable,
    zIndex: 1,
  },
  titleHeaderText: {
    fontSize: 12,
    color: lightColors.LIGHTTextDisable,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
  },
  textValueTable: {
    fontSize: 12,
    color: lightColors.LIGHTTextContent,
    fontWeight: '400',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    lineHeight: 16,
    textAlign: 'left',
  },
  textValueTable1: {
    fontSize: 12,
    color: lightColors.LIGHTTextContent,
    fontWeight: '400',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    lineHeight: 16,
    textAlign: 'right',
  },
  tableView: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: 12,
    width: 100,
    borderRightColor: lightColors.BORDER,
    borderRightWidth: 1,
    borderBottomColor: lightColors.BORDER,
    borderBottomWidth: 1,
    paddingVertical: 8,
  },
  tableHeader: {
    width: 100,
    borderBottomColor: lightColors.BORDER,
    borderBottomWidth: 1,
    paddingVertical: 8,
    backgroundColor: lightColors.LIGHTTitleTable,
    borderTopColor: lightColors.BORDER,
    borderTopWidth: 1,
    borderRightColor: lightColors.BORDER,
    borderRightWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
