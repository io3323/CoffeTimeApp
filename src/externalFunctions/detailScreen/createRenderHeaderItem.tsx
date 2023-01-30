import {Animated} from 'react-native';

export type ModelRenderHeader = {
  HEADER_SCROLL_DISTANCE: number;
  HEADER_MAX_HEIGHT_DEC: number;
  scrollY: Animated.Value;
};
export type RenderHeaderModel = {
  renderModel: ModelRenderHeader;
};
export const createRenderHeaderItem = (
  HEADER_SCROLL_DISTANCE: number,
  HEADER_MAX_HEIGHT_DEC: number,
  scrollY: Animated.Value,
) => {
  const renderObject: ModelRenderHeader = {
    HEADER_SCROLL_DISTANCE: HEADER_SCROLL_DISTANCE,
    HEADER_MAX_HEIGHT_DEC: HEADER_MAX_HEIGHT_DEC,
    scrollY: scrollY,
  };
  return renderObject;
};
