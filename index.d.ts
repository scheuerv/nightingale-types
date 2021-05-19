declare module 'protvista-manager' {
    export default class ProtvistaManager extends HTMLElement {
        set highlight(highlight: string);
        applyAttributes(): void;
    }
}
declare module 'protvista-sequence' {
    import ProtvistaZoomable from "protvista-zoomable";
    export default class ProtvistaSequence extends ProtvistaZoomable {
    }
}
declare module 'protvista-zoomable' {
    import { ZoomBehavior } from "d3";
    export default class ProtvistaZoomable extends HTMLElement {
        constructor();
        set height(height: number);
        get height(): number;
        get zoom(): ZoomBehavior<Element, any>
    }
}
declare module 'protvista-variation' {
    import ProtvistaTrack from "protvista-track";
    export default class ProtvistaVariation extends ProtvistaTrack {
        set colorConfig(colorConfig: any);
        static get css(): string;
    }
}
declare module 'protvista-variation-graph' {
    import ProtvistaTrack from "protvista-track";
    export default class ProtvistaVariationGraph extends ProtvistaTrack {
        _totalsArray: { total: Uint8ClampedArray, diseaseTotal: Uint8ClampedArray }
        _applyFilters(): void;
    }
}


declare module 'protvista-track' {
    import ProtvistaZoomable from "protvista-zoomable";
    import DefaultLayout from "protvista-track/src/DefaultLayout";
    import NonOverlappingLayout from "protvista-track/src/NonOverlappingLayout";
    export default class ProtvistaTrack extends ProtvistaZoomable {
        _originalData: any;
        _data: any;
        set data(data: any);
        getLayout(): DefaultLayout | NonOverlappingLayout;
        toggleFilter(name: string): void;
        _createTrack(): void;
        connectedCallback(): void;
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
        constructor(options: { layoutHeight: number, padding?: number, minHeight?: number });
        init(features: any): void;
        getFeatureYPos(): number;
        getFeatureHeight(): number;
    }
}
declare module 'protvista-track/src/NonOverlappingLayout' {
    import DefaultLayout from "protvista-track/src/DefaultLayout";
    export default class NonOverlappingLayout extends DefaultLayout {
        featuresMap: Map<any, number>;
        _rowHeight: number;
        getOffset(): number;
    }
}
declare module 'protvista-tooltip' {
    import { LitElement } from "lit-element";
    export default class ProtvistaTooltip extends LitElement {
    }
}
declare module 'protvista-navigation' {
    export default class ProtvistaNavigation extends HTMLElement {
        _displaystart: string;
        _displayend: string;
        _padding: number;
        get width(): number;
    }
}
declare module 'protvista-filter' {
    import { LitElement, CSSResultOrNative, CSSResultArray } from "lit-element";
    import { TemplateResult } from "lit-html";
    export default class ProtvistaFilter extends LitElement {
        selectedFilters: Set<string>;
        filters: any[];
        constructor();
        toggleFilter(name: string): void;
        getCheckBox(filterItem: any): TemplateResult;
        static get styles(): CSSResultOrNative | CSSResultArray;
    }
}
declare module 'protvista-feature-adapter/src/evidences' {
    export const ecoMap: {
        name: string;
        description: string;
        shortDescription: string;
        acronym: string;
        isManual?: boolean;
    }[]
    export default ecoMap;
}