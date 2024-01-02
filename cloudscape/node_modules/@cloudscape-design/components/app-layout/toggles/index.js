// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { InternalButton } from '../../button/internal';
import styles from './styles.css.js';
export const togglesConfig = {
    navigation: {
        TagName: 'nav',
        iconName: 'menu',
        getLabels: (labels = {}) => ({
            mainLabel: labels.navigation,
            openLabel: labels.navigationToggle,
            closeLabel: labels.navigationClose,
        }),
    },
    tools: {
        TagName: 'aside',
        iconName: 'status-info',
        getLabels: (labels = {}) => ({
            mainLabel: labels.tools,
            openLabel: labels.toolsToggle,
            closeLabel: labels.toolsClose,
        }),
    },
};
export const AppLayoutButton = React.forwardRef(({ className, ariaLabel, ariaExpanded, iconName, iconSvg, disabled, onClick }, ref) => {
    return (React.createElement(InternalButton, { ref: ref, className: className, ariaLabel: ariaLabel, variant: "icon", formAction: "none", onClick: onClick, iconName: iconName, iconSvg: iconSvg, disabled: disabled, ariaExpanded: ariaExpanded ? undefined : false, __nativeAttributes: { 'aria-haspopup': ariaExpanded ? undefined : true } }));
});
export const CloseButton = React.forwardRef(({ className, ariaLabel, onClick }, ref) => {
    return (React.createElement("span", { className: styles['close-button'] },
        React.createElement(AppLayoutButton, { ref: ref, className: className, ariaExpanded: true, ariaLabel: ariaLabel, iconName: "close", onClick: onClick })));
});
//# sourceMappingURL=index.js.map