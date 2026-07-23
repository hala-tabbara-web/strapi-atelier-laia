import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    contactEmail: Schema.Attribute.String;
    Link: Schema.Attribute.Component<'shared.link', true>;
    SocialMedia: Schema.Attribute.Component<'social-media.link', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    AnnouncementBar: Schema.Attribute.String;
    Link: Schema.Attribute.Component<'shared.link', true>;
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ShowCart: Schema.Attribute.Boolean;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    Keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text;
    MetaImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    metaTitle: Schema.Attribute.String;
  };
}

export interface SocialMediaLink extends Struct.ComponentSchema {
  collectionName: 'components_social_media_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    Link: Schema.Attribute.Component<'shared.link', true>;
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
    Metal_details: Schema.Attribute.Enumeration<
      ['Stainless steel ', 'Brass aloy']
    >;
    Stone: Schema.Attribute.String;
    stone_legal_category: Schema.Attribute.Enumeration<
      ['Natural_gemstone', 'dyed_gemstone', 'synthetic_gemstone']
    >;
    Strand_length: Schema.Attribute.String;
  };
}

export interface TextShippingAndReturns extends Struct.ComponentSchema {
  collectionName: 'components_text_shipping_and_returns';
  info: {
    displayName: 'shipping and returns';
  };
  attributes: {
    Return_policy: Schema.Attribute.Text;
    Shipping_policy: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'shared.link': SharedLink;
      'shared.seo': SharedSeo;
      'social-media.link': SocialMediaLink;
      'text.block': TextBlock;
      'text.composition': TextComposition;
      'text.shipping-and-returns': TextShippingAndReturns;
    }
  }
}
