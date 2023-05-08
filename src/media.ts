import { createMedia } from "@artsy/fresnel";

const appMedia = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    sm: 0,
    md: 800,
    lg: 1070,
    xl: 1192,
    xxl: 2800,
  },
});

export const mediaStyles = appMedia.createMediaStyle();

export const { Media, MediaContextProvider } = appMedia;
