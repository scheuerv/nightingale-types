

declare module 'protvista-track' {
    import ProtvistaZoomable from "protvista-zoomable";
    import DefaultLayout from "protvista-track/src/DefaultLayout";
    import NonOverlappingLayout from "protvista-track/src/NonOverlappingLayout";
   export default class ProtvistaTrack extends ProtvistaZoomable {
        _originalData:  any;
        _data:  any;
        set data(data:  any);
        getLayout(): DefaultLayout | NonOverlappingLayout;
        toggleFilter(name: string): void;
        _createTrack(): void
    }
}

declare module 'protvista-track/src/config' {
    const config: Record<string, {
        name: string;
        label: string;
        tooltip: string;
        shape: string;
        color: string;
    }>;
}
declare module 'protvista-track/src/DefaultLayout' {
   export default class DefaultLayout {
        _padding: number;
        _minHeight: number;
        _layoutHeight: number;
        constructor(options: { layoutHeight: number, padding?: number, minHeight?: number });
        init(features: any): void;
        getFeatureYPos(): number;
        getFeatureHeight(): number;
    }
}
declare module 'protvista-track/src/NonOverlappingLayout' {
    import DefaultLayout from "protvista-track/src/DefaultLayout";
    export default class NonOverlappingLayout extends DefaultLayout {
        _padding: number;
        _minHeight: number;
        _layoutHeight: number;
        featuresMap: Map<any, number>;
        _rowHeight: number;
        _rows: any[];
        getOffset(): number;
    }
}