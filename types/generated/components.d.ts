import type { Schema, Struct } from '@strapi/strapi';

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    Keywords: Schema.Attribute.Text;
    metaDiscriprion: Schema.Attribute.Text;
    MetaImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    metaTitle: Schema.Attribute.String;
  };
}

export interface TextBlock extends Struct.ComponentSchema {
  collectionName: 'components_text_blocks';
  info: {
    displayName: 'Block';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    How_to_wear: Schema.Attribute.Text;
    Summary: Schema.Attribute.Text;
    Traditional_meaning: Schema.Attribute.Text;
  };
}

export interface TextComposition extends Struct.ComponentSchema {
  collectionName: 'components_text_compositions';
  info: {
    displayName: 'Composition';
  };
  attributes: {
    Assembly: Schema.Attribute.String;
    Bead_shape: Schema.Attribute.String;
    Bead_size: Schema.Attribute.String;
    Charms: Schema.Attribute.String;
    Metail_dets: Schema.Attribute.Enumeration<
      ['Stainless steel ', 'Brass aloy']
    >;
    Stone: Schema.Attribute.String;
    stone_legal_category: Schema.Attribute.Enumeration<
      ['Natural_gemstone', 'dyed_gemstone', 'synthetic_gemstone']
    >;
    Strand_length: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'shared.seo': SharedSeo;
      'text.block': TextBlock;
      'text.composition': TextComposition;
    }
  }
}
