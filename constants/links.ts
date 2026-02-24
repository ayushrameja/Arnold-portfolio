export const LINKS = {
  email: 'arnoldkevindesouza@gmail.com',
  linkedin: 'https://www.linkedin.com/in/arnold-desouza-13a554206/',
  github: 'https://github.com/arnolddesouza',
} as const;

export const RESUME = {
  driveId: '1UjQFUbtDp4dpzcaWvDfMlACqRC9s4tgH',
  get previewUrl() {
    return `https://drive.google.com/file/d/${this.driveId}/preview`;
  },
  get downloadUrl() {
    return `https://drive.google.com/uc?export=download&id=${this.driveId}`;
  },
} as const;

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://arnolddesouza.dev';
