declare module 'protvista-variation-graph' {
    import ProtvistaTrack from "protvista-track";
    export default class ProtvistaVariationGraph extends ProtvistaTrack {
        _totalsArray: { total: Uint8ClampedArray, diseaseTotal: Uint8ClampedArray }
        _applyFilters(): void;
    }
}