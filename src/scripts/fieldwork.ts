/**
 * Defines the structure for a single fieldwork locality,
 * including its name and geographic coordinates.
 */
export interface FieldworkLocality {
    /** The common name of the locality. */
    localityName: string;

    /** The latitude of the locality (decimal degrees). */
    latitude: number;

    /** The longitude of the locality (decimal degrees). */
    longitude: number;

    /** A description of the locality. */
    description: string;

    /** The level of collecting effort at the locality. */
    collectingEffort: CollectingEffort;
}

/**
 * Defines the possible levels of collecting effort.
 */
export type CollectingEffort = "full" | "semi" | "none";


export const fieldworkLocalities: FieldworkLocality[] = [
    { localityName: "Mt. Patah", latitude: -4.2576, longitude: 103.3057, description: "Volcano in Sumatra.", collectingEffort: "full" },
    { localityName: "Mt. Bandahara", latitude: 3.749, longitude: 97.7818, description: "Mountain in Aceh.", collectingEffort: "semi" },
    { localityName: "Mt. Kemiri", latitude: 3.7621, longitude: 97.4824, description: "Mountain in Aceh.", collectingEffort: "none" },
    { localityName: "Mt. Gede", latitude: -6.78, longitude: 106.98, description: "Volcano in West Java.", collectingEffort: "full" },
    { localityName: "Black Gap WMA", latitude: 29.468, longitude: -102.843, description: "Wildlife Management Area in Texas.", collectingEffort: "semi" },
    { localityName: "Davis Mountains", latitude: 30.599, longitude: -103.929, description: "Mountain range in West Texas.", collectingEffort: "none" },
    { localityName: "Mt. Murud", latitude: 3.917, longitude: 115.333, description: "Sandstone mountain in Sarawak, Borneo.", collectingEffort: "full" },
    { localityName: "Mt. Galang", latitude: 1.0626, longitude: 120.9345, description: "Mountain in Sulawesi.", collectingEffort: "semi" },
    { localityName: "Mt. Talamau", latitude: 0.0789, longitude: 99.9839, description: "Volcano in West Sumatra.", collectingEffort: "none" },
    { localityName: "Mt. Torompupu", latitude: -1, longitude: 121, description: "Mountain in Central Sulawesi.", collectingEffort: "full" },
    { localityName: "Solok Selatan", latitude: -0.8, longitude: 100.8, description: "Regency in West Sumatra.", collectingEffort: "semi" },
    { localityName: "Mt. Katopasa", latitude: -1, longitude: 121, description: "Mountain in Central Sulawesi.", collectingEffort: "none" },
    { localityName: "Wilson Promontory National Park", latitude: -39.013, longitude: 146.394, description: "National park in Victoria, Australia.", collectingEffort: "full" },
    { localityName: "Grampians National Park", latitude: -37.208, longitude: 142.4, description: "National park in Victoria, Australia.", collectingEffort: "semi" },
    { localityName: "Mt. Bawakaraeng", latitude: -5.317, longitude: 119.945, description: "Mountain in South Sulawesi.", collectingEffort: "none" },
    { localityName: "Mt. Latimojong", latitude: -3.385, longitude: 120.024, description: "Mountain in South Sulawesi.", collectingEffort: "full" },
    { localityName: "Mt. Ambang", latitude: 0.757, longitude: 124.416, description: "Volcano in North Sulawesi.", collectingEffort: "semi" },
    { localityName: "Grampians National Park", latitude: -37.208, longitude: 142.4, description: "National park in Victoria, Australia.", collectingEffort: "none" },
    { localityName: "Mt. Talamau", latitude: 0.0789, longitude: 99.9839, description: "Volcano in West Sumatra.", collectingEffort: "full" },
    // Add more localities here as needed
];