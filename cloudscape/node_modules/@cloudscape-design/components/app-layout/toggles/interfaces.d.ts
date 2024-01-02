/// <reference types="react" />
import { IconProps } from '../../icon/interfaces';
export interface AppLayoutButtonProps {
    className?: string;
    ariaLabel: string | undefined;
    ariaExpanded?: boolean;
    iconName?: IconProps.Name;
    iconSvg?: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
}
//# sourceMappingURL=interfaces.d.ts.map