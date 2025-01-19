import {
  BadgeType,
  ColorVariant,
  ContributorRole,
} from '../types/types';
import { DriverRank } from '../types/types';
import {
  LuArchive,
  LuAudioLines,
  LuChartBar,
  LuBox,
  LuBoxes,
  LuCrown,
  LuDraftingCompass,
  LuFileSliders,
  LuFileText,
  LuFlag,
  LuHandHeart,
  LuHandHelping,
  LuHeart,
  LuIterationCcw,
  LuChartLine,
  LuMessagesSquare,
  LuMic,
  LuSearchCheck,
  LuShieldCheck,
  LuShip,
  LuSparkles,
  LuSquareKanban,
  LuThumbsUp,
  LuTrendingUp,
  LuUnplug,
  LuVolume,
  LuZap,
  LuText,
  LuThumbsDown,
} from 'react-icons/lu';

export const CABINET_TYPES = [
  'Kick',
  'Top',
  'Kick/Top',
  'Subwoofer',
  'Full-Range',
];
export const MAX_SPL_COUNT = ['1 cab', '2 cabs', '4 cabs', '8 cabs', '16 cabs'];
export const WOOD_THICKNESS = [
  '6mm',
  '9mm',
  '12mm',
  '15mm',
  '18mm',
  '21mm',
  '24mm',
];

export const DRIVER_TYPES = [
  'Subwoofer',
  'Mid bass',
  'Mid-range',
  'Low frequency',
  'Full-Range',
  'Woofer',
  'Triaxial',
  'Full-range',
];

export const DRIVER_SIZES = [
  '8"',
  '10"',
  '12"',
  '15"',
  '18"',
  '21"',
  '2x8"',
  '2x10"',
  '2x12"',
  '2x15"',
  '2x18"',
  '2x21"',
  '4x8"',
  '4x10"',
  '4x12"',
  '4x15"',
  '4x18"',
  '4x21"',
];

export const CABINET_BADGES = [
  { title: 'Popular', color: 'primary', variant: 'shadow', icon: LuZap },
  { title: 'Recommended', color: 'primary', variant: 'shadow', icon: LuThumbsUp },
  { title: 'Compact', color: 'danger', variant: 'shadow', icon: LuBox },
  { title: 'Flagship', color: 'danger', variant: 'shadow', icon: LuShip },
  { title: 'New', color: 'secondary', variant: 'shadow', icon: LuSparkles },
  {
    title: 'Updated',
    color: 'secondary',
    variant: 'shadow',
    icon: LuIterationCcw,
  },
  { title: 'Discontinued', color: 'warning', variant: 'shadow', icon: LuUnplug },
  {
    title: 'Prototype',
    color: 'warning',
    variant: 'shadow',
    icon: LuDraftingCompass,
  },
] satisfies BadgeType[];

export const DRIVER_BADGES = [
  { title: 'Popular', color: 'primary', variant: 'shadow', icon: LuZap },
  { title: 'Recommended', color: 'primary', variant: 'shadow', icon: LuThumbsUp },
  { title: 'Good Value', color: 'danger', variant: 'shadow', icon: LuBox },
  { title: 'Flagship', color: 'danger', variant: 'shadow', icon: LuShip },
  { title: 'New', color: 'secondary', variant: 'shadow', icon: LuSparkles },
  { title: 'Discontinued', color: 'warning', variant: 'shadow', icon: LuUnplug },
  {
    title: 'Not Recommended',
    color: 'warning',
    variant: 'shadow',
    icon: LuThumbsDown,
  },
] satisfies BadgeType[];

export const FILE_BADGES = [
  { title: 'Manual', color: 'primary', variant: 'shadow', icon: LuFileText },
  {
    title: 'HornResp',
    color: 'secondary',
    variant: 'shadow',
    icon: LuFileSliders,
  },
  {
    title: 'Measurements',
    color: 'secondary',
    variant: 'shadow',
    icon: LuChartLine,
  },
  { title: 'REW', color: 'secondary', variant: 'shadow', icon: LuMic },
  {
    title: 'AKABAK',
    color: 'secondary',
    variant: 'shadow',
    icon: LuSquareKanban,
  },
  {
    title: 'Illustration',
    color: 'warning',
    variant: 'shadow',
    icon: LuDraftingCompass,
  },
  {
    title: '3D-Model',
    color: 'warning',
    variant: 'shadow',
    icon: LuBox,
  },
  {
    title: 'Sketch-up',
    color: 'warning',
    variant: 'shadow',
    icon: LuDraftingCompass,
  },
  { title: 'New', color: 'danger', variant: 'shadow', icon: LuSparkles },
  { title: 'Old', color: 'default', variant: 'shadow', icon: LuShip },
] satisfies BadgeType[];

export const TIMELINE_ICONS = {
  sparkles: LuSparkles,
  shield: LuShieldCheck,
  audio: LuAudioLines,
  box: LuBox,
  boxes: LuBoxes,
  archive: LuArchive,
  chart: LuChartBar,
  trending: LuTrendingUp,
  hand: LuHandHelping,
  messages: LuMessagesSquare,
  drafting: LuDraftingCompass,
  flag: LuFlag,
  crown: LuCrown,
  heart: LuHeart,
  thumbs: LuThumbsUp,
  unplug: LuUnplug,
  zap: LuZap,
  handheart: LuHandHeart,
  volume: LuVolume,
  search: LuSearchCheck,
  mic: LuMic,
  text: LuText,
};

export const CONTRIBUTOR_ROLES = [
  'Scientist',
  'Optimizer',
  'Prototyper',
  'Lead',
  'Helpful',
  'Writer',
] satisfies ContributorRole[];

export const DRIVER_RANK = [
  'Optimal',
  'Excellent',
  'Good',
  'Okay',
  'Bad',
  'None',
] satisfies DriverRank[];

export const COLORS = [
  'primary',
  'secondary',
  'danger',
  'warning',
  'success',
  'default',
] satisfies ColorVariant[];
