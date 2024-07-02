export interface ProjectData {
  name: string;
  description: string;
  creation: Date | null;
  benefits: string | null;
  social?: {
    twitter?: string;
    instagram?: string;
    farcaster?: string;
  };
}
