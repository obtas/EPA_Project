import { useContainerQuery } from '../hooks/container-queries';
export default function useContainerWidth(defaultValue = 0, threshold = 1) {
    const [width, ref] = useContainerQuery((rect, prev) => {
        if (prev === null) {
            return rect.width;
        }
        return Math.abs(prev - rect.width) >= threshold ? rect.width : prev;
    });
    return [width !== null && width !== void 0 ? width : defaultValue, ref];
}
//# sourceMappingURL=use-container-width.js.map