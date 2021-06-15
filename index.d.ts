
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
        get zoom(): ZoomBehavior<Element, any>;
        refresh(): void;
    }
}

declare module 'protvista-variation' {
    import ProtvistaTrack from "protvista-track";
    import { Variant } from "protvista-variation-adapter/src/variants";

    export default class ProtvistaVariation extends ProtvistaTrack {
        set colorConfig(colorConfig: any);
        static get css(): string;
        updateData(data: Variant): void;
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

declare module 'protvista-feature-adapter/src/BasicHelper' {
    export function formatTooltip(feature: Feature): string;
    export type Feature = {
        readonly type: string,
        readonly category?: string,
        readonly cvId?: string,
        readonly ftId?: string,
        readonly description?: string,
        readonly alternativeSequence?: string,
        readonly begin: string,
        readonly end: string,
        readonly molecule?: string,
        readonly xrefs?: DbReferenceObject[],
        readonly evidences?: Evidence[]
        readonly unique?: boolean,
        readonly matchScore?: number,
        readonly color?: string
    };
    export type DbReferenceObject = {
        readonly name: string,
        readonly id: string,
        readonly url?: string,
        readonly alternativeUrl?: string,
        readonly reviewed?: boolean,
        readonly properties?: any
    };
    export type Evidence = {
        readonly code: string,
        readonly label?: string,
        readonly source?: DbReferenceObject
    }
}

declare module 'protvista-variation-adapter/src/variants' {
    export type Variant = {
        type: string;
        alternativeSequence?: AminoAcid;
        begin: string;
        end: string;
        xrefs?: Xref[];
        consequenceType?: ConsequenceType;
        wildType: AminoAcid;
        mutatedType?: AminoAcid;
        predictions?: Prediction[];
        sourceType?: SourceType;
        association?: Association[];
        evidences?: Evidence[];
        ftId?: string;
    };

    export enum AminoAcid {
        A = "A",
        C = "C",
        D = "D",
        E = "E",
        Empty = "*",
        F = "F",
        G = "G",
        H = "H",
        I = "I",
        K = "K",
        L = "L",
        M = "M",
        N = "N",
        Nl = "NL",
        P = "P",
        Q = "Q",
        R = "R",
        S = "S",
        T = "T",
        V = "V",
        W = "W",
        Y = "Y",
    }

    export type Association = {
        name: string;
        dbReferences?: Xref[];
        evidences: Evidence[];
        disease: boolean;
        description?: string;
    };

    export type Xref = {
        name: string;
        id: string;
        url: string;
        alternativeUrl?: string;
    };

    export enum Source {
        CLINVAR = "ClinVar",
        ESP = "ESP",
        EXAC = "ExAC",
        GENOMES1K = "1000Genomes",
        BOVINE_SNP50 = "BovineSNP50",
        BOVINE_LD = "BovineLD",
        BOVINE_HD = "BovineHD",
        EQUINE_SNP50 = "EquineSNP50",
        CHICKEN_600K = "Chicken600K",
        KG_HQ = "1kg_hq",
        COSMIC = "cosmic curated",
        REVIEWED = "reviewed",
        UNIPROT = "UniProt",
        DBSNP = "dbSNP",
        ENSEMBL = "Ensembl",
        ENSEMBL_PLANTS = "EnsemblPlants",
        VECTORBASE = "VectorBase",
        REFSEQ = "RefSeq",
        DBGAP = "dbGaP",
        DDD = "DDD",
        PHARMCOGKB = "PharmGKB",
        ENSEMBL_FUNGI = "EnsemblFungi",
        ENSEMBL_METAZOA = "EnsemblMetazoa",
        GNOMAD_V2 = "gnomAD_v2.0",
        GNOMAD_V3 = "gnomAD_v3.0",
        TCGA = "NCI-TCGA",
        TCGA_COSMIC = "NCI-TCGA Cosmic",
        DECIPHER = "ddG2P",
        TOPMED = "TOPMed",
        GNOMAD = "gnomAD",
        PHARMGKB = "pharmgkb",
        SGRP = "SGRP",
        SGD = "SGD",
        JEFFARES_SNPS = "Jeffares_SNPs",
        JEFFARES_INDELS = "Jeffares_Indels",
        ENSEMBL_VIRUSES = "EnsemblViruses",
    }

    export type Evidence = {
        code: string;
        source: Xref;
    };

    export type ClinicalSignificance = {
        type: ClinicalSignificanceType;
        sources: Source[];
    };

    export enum ClinicalSignificanceType {
        Benign = "Benign",
        Disease = "Disease",
        LikelyBenign = "Likely benign",
        LikelyPathogenic = "Likely pathogenic",
        Pathogenic = "Pathogenic",
        Protective = "Protective",
        VariantOfUncertainSignificance = "Variant of uncertain significance",
    }

    export enum ConsequenceType {
        Empty = "-",
        Frameshift = "frameshift",
        InframeDeletion = "inframe deletion",
        Insertion = "insertion",
        Missense = "missense",
        StopGained = "stop gained",
    }

    export type Description = {
        value: string;
        sources: Source[];
    };

    export type Location = {
        loc: string;
        seqId: string;
        source: Source;
    };

    export type PopulationFrequency = {
        populationName: string;
        frequency: number;
        source: Source;
    };

    export type Prediction = {
        predictionValType: PredictionValType;
        predictorType: string;
        score: number;
        predAlgorithmNameType: PredAlgorithmNameType;
        sources: Source[];
        version?: string;
    };

    export enum PredAlgorithmNameType {
        PolyPhen = "PolyPhen",
        Sift = "SIFT",
    }

    export enum PredictionValType {
        Benign = "benign",
        Deleterious = "deleterious",
        DeleteriousLowConfidence = "deleterious - low confidence",
        PossiblyDamaging = "possibly damaging",
        ProbablyDamaging = "probably damaging",
        Tolerated = "tolerated",
        ToleratedLowConfidence = "tolerated - low confidence",
        Unknown = "unknown",
    }

    export enum SourceType {
        LargeScaleStudy = "large_scale_study",
        Mixed = "mixed",
        UniProt = "uniprot",
    }
}