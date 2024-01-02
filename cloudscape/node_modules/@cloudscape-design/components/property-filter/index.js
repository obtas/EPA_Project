import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useRef, useState, useImperativeHandle } from 'react';
import InternalSpaceBetween from '../space-between/internal';
import { InternalButton } from '../button/internal';
import { getBaseProps } from '../internal/base-component';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import { KeyCode } from '../internal/keycode';
import { useUniqueId } from '../internal/hooks/use-unique-id/index';
import { fireNonCancelableEvent } from '../internal/events';
import { TokenButton } from './token';
import { getQueryActions, parseText, getAutosuggestOptions, getAllowedOperators } from './controller';
import { useLoadItems } from './use-load-items';
import styles from './styles.css.js';
import useBaseComponent from '../internal/hooks/use-base-component';
import PropertyFilterAutosuggest from './property-filter-autosuggest';
import { PropertyEditor } from './property-editor';
import { matchTokenValue } from './utils';
import { useInternalI18n } from '../internal/i18n/context';
import TokenList from '../internal/components/token-list';
import { SearchResults } from '../text-filter/search-results';
const OPERATOR_I18N_MAPPING = {
    '=': 'equals',
    '!=': 'not_equals',
    '>': 'greater_than',
    '>=': 'greater_than_equal',
    '<': 'less_than',
    '<=': 'less_than_equal',
    ':': 'contains',
    '!:': 'not_contains',
};
const PropertyFilter = React.forwardRef((_a, ref) => {
    var _b;
    var { disabled, countText, query, hideOperations, onChange, filteringProperties, filteringOptions = [], customGroupsText = [], disableFreeTextFiltering = false, onLoadItems, virtualScroll, customControl, filteringEmpty, filteringLoadingText, filteringFinishedText, filteringErrorText, filteringRecoveryText, filteringStatusType, asyncProperties, tokenLimit, expandToViewport } = _a, rest = __rest(_a, ["disabled", "countText", "query", "hideOperations", "onChange", "filteringProperties", "filteringOptions", "customGroupsText", "disableFreeTextFiltering", "onLoadItems", "virtualScroll", "customControl", "filteringEmpty", "filteringLoadingText", "filteringFinishedText", "filteringErrorText", "filteringRecoveryText", "filteringStatusType", "asyncProperties", "tokenLimit", "expandToViewport"]);
    const { __internalRootRef } = useBaseComponent('PropertyFilter');
    const [removedTokenIndex, setRemovedTokenIndex] = useState(null);
    const inputRef = useRef(null);
    const baseProps = getBaseProps(rest);
    const i18n = useInternalI18n('property-filter');
    const i18nStrings = Object.assign(Object.assign({}, rest.i18nStrings), { allPropertiesLabel: i18n('i18nStrings.allPropertiesLabel', rest.i18nStrings.allPropertiesLabel), applyActionText: i18n('i18nStrings.applyActionText', rest.i18nStrings.applyActionText), cancelActionText: i18n('i18nStrings.cancelActionText', rest.i18nStrings.cancelActionText), clearFiltersText: i18n('i18nStrings.clearFiltersText', rest.i18nStrings.clearFiltersText), editTokenHeader: i18n('i18nStrings.editTokenHeader', rest.i18nStrings.editTokenHeader), groupPropertiesText: i18n('i18nStrings.groupPropertiesText', rest.i18nStrings.groupPropertiesText), groupValuesText: i18n('i18nStrings.groupValuesText', rest.i18nStrings.groupValuesText), operationAndText: i18n('i18nStrings.operationAndText', rest.i18nStrings.operationAndText), operationOrText: i18n('i18nStrings.operationOrText', rest.i18nStrings.operationOrText), operatorContainsText: i18n('i18nStrings.operatorContainsText', rest.i18nStrings.operatorContainsText), operatorDoesNotContainText: i18n('i18nStrings.operatorDoesNotContainText', rest.i18nStrings.operatorDoesNotContainText), operatorDoesNotEqualText: i18n('i18nStrings.operatorDoesNotEqualText', rest.i18nStrings.operatorDoesNotEqualText), operatorEqualsText: i18n('i18nStrings.operatorEqualsText', rest.i18nStrings.operatorEqualsText), operatorGreaterOrEqualText: i18n('i18nStrings.operatorGreaterOrEqualText', rest.i18nStrings.operatorGreaterOrEqualText), operatorGreaterText: i18n('i18nStrings.operatorGreaterText', rest.i18nStrings.operatorGreaterText), operatorLessOrEqualText: i18n('i18nStrings.operatorLessOrEqualText', rest.i18nStrings.operatorLessOrEqualText), operatorLessText: i18n('i18nStrings.operatorLessText', rest.i18nStrings.operatorLessText), operatorText: i18n('i18nStrings.operatorText', rest.i18nStrings.operatorText), operatorsText: i18n('i18nStrings.operatorsText', rest.i18nStrings.operatorsText), propertyText: i18n('i18nStrings.propertyText', rest.i18nStrings.propertyText), tokenLimitShowFewer: i18n('i18nStrings.tokenLimitShowFewer', rest.i18nStrings.tokenLimitShowFewer), tokenLimitShowMore: i18n('i18nStrings.tokenLimitShowMore', rest.i18nStrings.tokenLimitShowMore), valueText: i18n('i18nStrings.valueText', rest.i18nStrings.valueText), removeTokenButtonAriaLabel: i18n('i18nStrings.removeTokenButtonAriaLabel', rest.i18nStrings.removeTokenButtonAriaLabel, format => token => {
            var _a;
            return format({
                token__operator: OPERATOR_I18N_MAPPING[token.operator],
                token__propertyKey: (_a = token.propertyKey) !== null && _a !== void 0 ? _a : '',
                token__value: token.value,
            });
        }) });
    useImperativeHandle(ref, () => ({ focus: () => { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); } }), []);
    const { tokens, operation } = query;
    const showResults = !!(tokens === null || tokens === void 0 ? void 0 : tokens.length) && !disabled && !!countText;
    const { addToken, removeToken, setToken, setOperation, removeAllTokens } = getQueryActions(query, onChange, inputRef);
    const [filteringText, setFilteringText] = useState('');
    const internalFilteringProperties = filteringProperties.map(property => {
        var _a, _b, _c, _d, _e;
        const extendedOperators = ((_a = property.operators) !== null && _a !== void 0 ? _a : []).reduce((acc, operator) => (typeof operator === 'object' ? acc.set(operator.operator, operator) : acc), new Map());
        return {
            propertyKey: property.key,
            propertyLabel: (_b = property.propertyLabel) !== null && _b !== void 0 ? _b : '',
            groupValuesLabel: (_c = property.groupValuesLabel) !== null && _c !== void 0 ? _c : '',
            propertyGroup: property.group,
            operators: ((_d = property.operators) !== null && _d !== void 0 ? _d : []).map(op => (typeof op === 'string' ? op : op.operator)),
            defaultOperator: (_e = property.defaultOperator) !== null && _e !== void 0 ? _e : '=',
            getValueFormatter: operator => { var _a, _b; return (operator ? (_b = (_a = extendedOperators.get(operator)) === null || _a === void 0 ? void 0 : _a.format) !== null && _b !== void 0 ? _b : null : null); },
            getValueFormRenderer: operator => { var _a, _b; return (operator ? (_b = (_a = extendedOperators.get(operator)) === null || _a === void 0 ? void 0 : _a.form) !== null && _b !== void 0 ? _b : null : null); },
            externalProperty: property,
        };
    });
    const propertyByKey = new Map(internalFilteringProperties.map(p => [p.propertyKey, p]));
    const internalFilteringOptions = filteringOptions.map(option => {
        var _a, _b, _c;
        const formatter = (_a = propertyByKey.get(option.propertyKey)) === null || _a === void 0 ? void 0 : _a.getValueFormatter();
        return {
            propertyKey: option.propertyKey,
            value: option.value,
            label: formatter ? formatter(option.value) : (_c = (_b = option.label) !== null && _b !== void 0 ? _b : option.value) !== null && _c !== void 0 ? _c : '',
        };
    });
    const parsedText = parseText(filteringText, internalFilteringProperties, disableFreeTextFiltering);
    const autosuggestOptions = getAutosuggestOptions(parsedText, internalFilteringOptions, internalFilteringProperties, customGroupsText, i18nStrings);
    const createToken = (currentText) => {
        const parsedText = parseText(currentText, internalFilteringProperties, disableFreeTextFiltering);
        let newToken;
        switch (parsedText.step) {
            case 'property': {
                newToken = matchTokenValue({
                    propertyKey: parsedText.property.propertyKey,
                    operator: parsedText.operator,
                    value: parsedText.value,
                }, internalFilteringOptions);
                break;
            }
            case 'free-text': {
                newToken = {
                    operator: parsedText.operator || ':',
                    value: parsedText.value,
                };
                break;
            }
            case 'operator': {
                newToken = {
                    operator: ':',
                    value: currentText,
                };
                break;
            }
        }
        if (disableFreeTextFiltering && !('propertyKey' in newToken)) {
            return;
        }
        addToken(newToken);
        setFilteringText('');
    };
    const ignoreKeyDown = useRef(false);
    const handleKeyDown = event => {
        if (filteringText && !ignoreKeyDown.current && event.detail.keyCode === KeyCode.enter) {
            createToken(filteringText);
        }
    };
    const getLoadMoreDetail = (parsedText, filteringText) => {
        const loadMoreDetail = {
            filteringProperty: undefined,
            filteringText,
            filteringOperator: undefined,
        };
        if (parsedText.step === 'property') {
            loadMoreDetail.filteringProperty = parsedText.property.externalProperty;
            loadMoreDetail.filteringText = parsedText.value;
            loadMoreDetail.filteringOperator = parsedText.operator;
        }
        return loadMoreDetail;
    };
    const loadMoreDetail = getLoadMoreDetail(parsedText, filteringText);
    const inputLoadItemsHandlers = useLoadItems(onLoadItems, loadMoreDetail.filteringText, loadMoreDetail.filteringProperty, loadMoreDetail.filteringText, loadMoreDetail.filteringOperator);
    const asyncProps = {
        empty: filteringEmpty,
        loadingText: filteringLoadingText,
        finishedText: filteringFinishedText,
        errorText: filteringErrorText,
        recoveryText: filteringRecoveryText,
        statusType: filteringStatusType,
    };
    const asyncAutosuggestProps = !!filteringText.length || asyncProperties
        ? Object.assign(Object.assign({}, inputLoadItemsHandlers), asyncProps) : {};
    const handleSelected = event => {
        // The ignoreKeyDown flag makes sure `createToken` routine runs only once. Autosuggest's `onKeyDown` fires,
        // when an item is selected from the list using "enter" key.
        ignoreKeyDown.current = true;
        setTimeout(() => {
            ignoreKeyDown.current = false;
        }, 0);
        const { detail: option } = event;
        const value = option.value || '';
        if (!('keepOpenOnSelect' in option)) {
            createToken(value);
            return;
        }
        // stop dropdown from closing
        event.preventDefault();
        const parsedText = parseText(value, internalFilteringProperties, disableFreeTextFiltering);
        const loadMoreDetail = getLoadMoreDetail(parsedText, value);
        // Insert operator automatically if only one operator is defined for the given property.
        if (parsedText.step === 'operator') {
            const operators = getAllowedOperators(parsedText.property);
            if (value.trim() === parsedText.property.propertyLabel && operators.length === 1) {
                loadMoreDetail.filteringProperty = parsedText.property.externalProperty;
                loadMoreDetail.filteringOperator = operators[0];
                loadMoreDetail.filteringText = '';
                setFilteringText(parsedText.property.propertyLabel + ' ' + operators[0] + ' ');
            }
        }
        fireNonCancelableEvent(onLoadItems, Object.assign(Object.assign({}, loadMoreDetail), { firstPage: true, samePage: false }));
    };
    const operatorForm = parsedText.step === 'property' && parsedText.property.getValueFormRenderer(parsedText.operator);
    const searchResultsId = useUniqueId('property-filter-search-results');
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(baseProps.className, styles.root), ref: __internalRootRef }),
        React.createElement("div", { className: styles['search-field'] },
            customControl && React.createElement("div", { className: styles['custom-control'] }, customControl),
            React.createElement(PropertyFilterAutosuggest, Object.assign({ ref: inputRef, virtualScroll: virtualScroll, enteredTextLabel: (_b = i18nStrings.enteredTextLabel) !== null && _b !== void 0 ? _b : (value => value), ariaLabel: i18nStrings.filteringAriaLabel, placeholder: i18nStrings.filteringPlaceholder, ariaLabelledby: rest.ariaLabelledby, ariaDescribedby: rest.ariaDescribedby, controlId: rest.controlId, value: filteringText, disabled: disabled, onKeyDown: handleKeyDown }, autosuggestOptions, { onChange: event => setFilteringText(event.detail.value), empty: filteringEmpty }, asyncAutosuggestProps, { expandToViewport: expandToViewport, onOptionClick: handleSelected, customForm: operatorForm && (React.createElement(PropertyEditor, { property: parsedText.property, operator: parsedText.operator, filter: parsedText.value, operatorForm: operatorForm, i18nStrings: i18nStrings, onCancel: () => {
                        var _a, _b;
                        setFilteringText('');
                        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.close();
                        (_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.focus({ preventDropdown: true });
                    }, onSubmit: token => {
                        var _a, _b;
                        addToken(token);
                        setFilteringText('');
                        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus({ preventDropdown: true });
                        (_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.close();
                    } })), hideEnteredTextOption: disableFreeTextFiltering && parsedText.step !== 'property', clearAriaLabel: i18nStrings.clearAriaLabel, searchResultsId: showResults ? searchResultsId : undefined })),
            showResults ? React.createElement(SearchResults, { id: searchResultsId }, countText) : null),
        tokens && tokens.length > 0 && (React.createElement("div", { className: styles.tokens },
            React.createElement(InternalSpaceBetween, { size: "xs", direction: "horizontal" },
                React.createElement(TokenList, { alignment: "inline", limit: tokenLimit, items: tokens, renderItem: (token, tokenIndex) => (React.createElement(TokenButton, { token: token, first: tokenIndex === 0, operation: operation, removeToken: () => {
                            removeToken(tokenIndex);
                            setRemovedTokenIndex(tokenIndex);
                        }, setToken: (newToken) => setToken(tokenIndex, newToken), setOperation: setOperation, filteringOptions: internalFilteringOptions, filteringProperties: internalFilteringProperties, asyncProps: asyncProps, onLoadItems: onLoadItems, i18nStrings: i18nStrings, asyncProperties: asyncProperties, hideOperations: hideOperations, customGroupsText: customGroupsText, disableFreeTextFiltering: disableFreeTextFiltering, disabled: disabled, expandToViewport: expandToViewport })), i18nStrings: {
                        limitShowFewer: i18nStrings.tokenLimitShowFewer,
                        limitShowMore: i18nStrings.tokenLimitShowMore,
                    }, after: React.createElement(InternalButton, { onClick: removeAllTokens, className: styles['remove-all'], disabled: disabled }, i18nStrings.clearFiltersText), removedItemIndex: removedTokenIndex }))))));
});
applyDisplayName(PropertyFilter, 'PropertyFilter');
export default PropertyFilter;
//# sourceMappingURL=index.js.map