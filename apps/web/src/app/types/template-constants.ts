// These enums are not exposed by the package @lp/template-gallery so are redefined here. If there package exposes these they should be adopted.
export enum TemplateKind {
    'Leadpage' = "LeadpageTemplate",
    'Site' = "SiteTemplate"
}
export enum TaxonCollection {
    categories = "categories",
    tags = "tags",
    id = "id"
}
export enum TaxonSection {
    Collections = "Collections",
    Content = "Content",
    Industries = "Industries",
    Layouts = "Layouts",
    'Page Elements' = "Page Elements",
    'Page Types' = "Page Types",
    Templates = "Templates",
    Style = "Style",
    Color = "Color",
    Promotion = "Promotion"
}
export enum FilterOperators {
    '!intersects' = "[!intersects]",
    intersects = "[intersects]",
    '!superset' = "[!superset]",
    superset = "[superset]",
    '!contains' = "[!contains]",
    contains = "[contains]",
    icontains = "[icontains]",
    in = "[in]",
    eq = "[eq]",
    ne = "[ne]",
    lt = "[lt]",
    gt = "[gt]",
    lte = "[lte]",
    gte = "[gte]",
    empty = ""
}
export enum SortFields {
    New = "-release_date",
    Conversion = "-conversion_rate",
    Popular = "-pages"
}
export type SortBy = {
    value: SortFields;
    label: string;
};
export enum FilterProps {
    limit = "limit",
    cursor = "cursor",
    id = "id",
    name = "name",
    kind = "kind",
    legacy_id = "legacy_id",
    deleted = "deleted",
    release_date = "release_date",
    conversion_rate = "conversion_rate",
    categories = "categories",
    tags = "tags",
    order_by = "order_by"
}