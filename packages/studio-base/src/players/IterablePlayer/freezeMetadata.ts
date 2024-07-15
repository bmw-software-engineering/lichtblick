import { Metadata } from "@foxglove/studio";

/**
 * Freezes an array of metadata objects and all their internal properties,
 * making them completely immutable.
 *
 * @param {readonly Metadata[]} metadataObject - A readonly array of Metadata objects.
 * This function uses Object.freeze to prevent modifications to the metadata array,
 * as well as to each object and their 'name' and 'metadata' properties within the array.
 *
 * This function is useful for ensuring the immutability of critical data that should not be altered
 * during the execution of the program, helping to maintain data integrity and consistency.
 */
export const freezeMetadata = (metadataObject: readonly Metadata[]): void => {
  // Freeze the array of metadata
  Object.freeze(metadataObject);

  // Freeze each item of the array and its properties
  metadataObject.forEach((item) => {
    Object.freeze(item);
    Object.freeze(item.name);
    Object.freeze(item.metadata);
  });
};
