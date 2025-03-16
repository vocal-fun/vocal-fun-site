import type { SocialMediaItem, SocialMediaKey } from './types';

export const socialMedia = {
  github: 'https://github.com/vocal-fun',
  telegram: 'https://t.me/vocalfunofficial',
  twitter: 'https://x.com/vocal_fun',
};

export const mainAppUrl = 'https://app.vocal.fun';

export const socialMediaArray: SocialMediaItem[] = Object.entries(socialMedia).map(([type, href]) => ({ type: type as SocialMediaKey, href }));
