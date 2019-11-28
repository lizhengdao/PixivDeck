// @flow
import type {
  OPEN_ILLUST_VIEWER_TYPE,
  COLOSE_ILLUST_VIEWER_TYPE,
  START_IMG_LOADING_TYPE,
  FINISH_IMG_LOADING_TYPE,
} from './actionTypes'

export const OPEN_ILLUST_VIEWER: OPEN_ILLUST_VIEWER_TYPE = 'IllustPreview/open'
export const COLOSE_ILLUST_VIEWER: COLOSE_ILLUST_VIEWER_TYPE =
  'IllustPreview/close'
export const START_IMG_LOADING: START_IMG_LOADING_TYPE =
  'IllustPreview/START_IMG_LOADING'
export const FINISH_IMG_LOADING: FINISH_IMG_LOADING_TYPE =
  'IllustPreview/FINISH_IMG_LOADING'