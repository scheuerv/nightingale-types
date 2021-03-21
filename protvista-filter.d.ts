declare module 'protvista-filter' {
    import { LitElement, CSSResultOrNative, CSSResultArray } from "lit-element";
    import {TemplateResult} from "lit-html";
       export default class ProtvistaFilter extends LitElement {
        selectedFilters: Set<string>;
        filters: any[];
        constructor();
        toggleFilter(name: string): void;
        getCheckBox(filterItem:any):TemplateResult;
        static get styles(): CSSResultOrNative | CSSResultArray;
    }
}