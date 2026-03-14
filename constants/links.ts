export const LINKS = {
  email: 'arnoldkevindesouza@gmail.com',
  linkedin: 'https://www.linkedin.com/in/arnold-desouza-13a554206/',
  github: 'https://github.com/arnolddesouza',
  phone: '+1 (778) 522-9460',
  phoneHref: 'tel:+17785229460',
} as const;

export const RESUME = {
  driveId: '1sQD6fezB4cF4ED_6M2qeCfjQTVcPEvws',
  get previewUrl() {
    return `https://drive.google.com/file/d/${this.driveId}/preview`;
  },
  get downloadUrl() {
    return `https://drive.google.com/uc?export=download&id=${this.driveId}`;
  },
} as const;

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://arnolddesouza.dev';
