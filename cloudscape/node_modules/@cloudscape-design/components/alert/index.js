import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalAlert from './internal';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function Alert(_a) {
    var { type = 'info', visible = true } = _a, props = __rest(_a, ["type", "visible"]);
    const baseComponentProps = useBaseComponent('Alert');
    return React.createElement(InternalAlert, Object.assign({ type: type, visible: visible }, props, baseComponentProps));
}
applyDisplayName(Alert, 'Alert');
//# sourceMappingURL=index.js.map