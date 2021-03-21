declare module 'protvista-variation' {
    import ProtvistaTrack from "protvista-track";
    export default class ProtvistaVariation extends ProtvistaTrack {
        set colorConfig(colorConfig: any);
        static get css(): string;
    }
}