import { Button } from '@heroui/react';
import { IconType } from 'react-icons';
import { ColorVariant } from './ColorSelector';

interface Props<T extends Record<string, IconType>> {
  icon?: keyof T;
  setIcon: (icon: keyof T) => void;
  icons: T;
  selectColor?: ColorVariant;
}

export function IconSelector<T extends Record<string, IconType>>({
  icon,
  setIcon,
  icons,
  selectColor = 'secondary',
}: Props<T>) {
  return (
    <div>
      <label
        data-slot="label"
        className="z-10 pointer-events-none origin-top-left subpixel-antialiased block text-foreground-500 cursor-text will-change-auto !duration-200 !ease-out motion-reduce:transition-none transition-[transform,color,left,opacity] group-data-[filled-within=true]:text-default-600 group-data-[filled-within=true]:pointer-events-auto group-data-[filled-within=true]:scale-85 text-small group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px_-_theme(borderWidth.medium))] pe-2 max-w-full text-ellipsis overflow-hidden"
      >
        Icon
      </label>
      <div className="flex flex-wrap gap-2">
        {Object.entries(icons).map(([title, Icon]) => (
          <Button
            size="sm"
            color={title === icon ? selectColor : 'default'}
            isIconOnly
            onPress={() => setIcon(title)}
          >
            <Icon />
          </Button>
        ))}
      </div>
    </div>
  );
}

export default IconSelector;
