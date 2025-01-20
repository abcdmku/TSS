import { Chip } from '@heroui/react';
import { DriverRank } from '../types/types';
import { ColorVariant } from '@hoqs/core-components';

interface Props {
  rank: DriverRank;
}

export function DriverRecommendationRank({ rank }: Props) {
  return (
    <Chip
      className="capitalize"
      color={getRankColor(rank)}
      classNames={
        getRankColor(rank) !== 'secondary'
          ? undefined
          : {
              base: 'bg-gradient-to-br from-success-500 to-primary-300 shadow-lg shadow-secondary/40',
              content: 'drop-shadow shadow-black text-white',
            }
      }
      size="sm"
      variant="flat"
    >
      {rank}
    </Chip>
  );
}

function getRankColor(rank: DriverRank): ColorVariant {
  switch (rank) {
    case 'Optimal':
      return 'secondary';
    case 'Excellent':
      return 'success';
    case 'Good':
      return 'primary';
    case 'Okay':
      return 'warning';
    case 'Bad':
      return 'danger';
  }
  return 'default';
}

export default DriverRecommendationRank;
